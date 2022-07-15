---
title: Webpack Tree-Shaking 实现原理
date: 2021-07-14
sidebar: "auto"
categories:
  - plugins
tags:
  - Webpack
---

## 什么是 Tree Shaking

**`Tree-Shaking`** 是一种基于 `ES Module` 规范的 Dead Code Elimination 技术，它会在运行过程中静态分析模块之间的导入导出，确定 ESM 模块中哪些导出值未曾其它模块使用，并将其删除，以此实现打包产物的优化

## 实现原理

Webpack 中，**`Tree-shaking`** 的实现一是先标记出模块导出值中哪些没有被用过，二是使用 **`Terser`** 删掉这些没被用到的导出语句。标记过程大致可划分为三个步骤：

- `Make 阶段`，收集模块导出变量并记录到模块依赖关系图 `ModuleGraph` 变量中:

1. 将模块的所有 `ESM` 导出语句转换为 `Dependency` 对象，并记录到 `module` 对象的 `dependencies`集合，具名导出转换为 `HarmonyExportSpecifierDependency` 对象，`default` 导出转换为 `HarmonyExportExpressionDependency` 对象
2. 所有模块都编译完毕后，触发 `compilation.hooks.finishModules` 钩子，开始执行 `FlagDependencyExportsPlugin` 插件回调
3. `FlagDependencyExportsPlugin` 插件从 `entry` 开始读取 `ModuleGraph` 中存储的模块信息，遍历所有 module 对象
4. 遍历 `module`对象的 `dependencies` 数组，找到所有 `HarmonyExportXXXDependency` 类型的依赖对象，将其转换为 `ExportInfo` 对象并记录到 `ModuleGraph` 体系中）

经过 `FlagDependencyExportsPlugin` 插件处理后，所有 ESM 风格的 export 语句都会记录在 `ModuleGraph` 体系内，后续操作就可以从 `ModuleGraph` 中直接读取出模块的导出值,也就是说，标记的效果就是删除没有被其它模块使用的导出语句

- `Seal 阶段`，遍历 `ModuleGraph` 标记模块导出变量有没有被使用:

1. 触发 `compilation.hooks.optimizeDependencies` 钩子，开始执行 `FlagDependencyUsagePlugi`n 插件逻辑
2. 在 `FlagDependencyUsagePlugin` 插件中，从 `entry` 开始逐步遍历 `ModuleGraph` 存储的所有 `module` 对象
3. 遍历 `module` 对象对应的 `exportInfo` 数组
4. 为每一个 `exportInfo` 对象执行 `compilation.getDependencyReferencedExports` 方法，确定其对应的 `dependency` 对象有否被其它模块使用
5. 被任意模块使用到的导出值，调用 `exportInfo.setUsedConditionally` 方法将其标记为已被使用。
6. `exportInfo.setUsedConditionally` 内部修改 `exportInfo._usedInRuntime` 属性，记录该导出被如何使用
7. 结束

标记模块导出这一操作集中在 `FlagDependencyUsagePlugin` 插件中，执行结果最终会记录在模块导出语句对应的 `exportInfo._usedInRuntime` 字典中

- 生成产物时，若变量没有被其它模块使用则删除对应的导出语句：

1. 打包阶段，调用 `HarmonyExportXXXDependency.Template.apply` 方法生成代码
2. 在 `apply` 方法内，读取 `ModuleGraph` 中存储的 `exportsInfo` 信息，判断哪些导出值被使用，哪些未被使用
3. 对已经被使用及未被使用的导出值，分别创建对应的 `HarmonyExportInitFragment` 对象，保存到 `initFragments` 数组
4. 遍历 `initFragments` 数组，生成最终结果

基本上，这一步的逻辑就是用前面收集好的 `exportsInfo` 对象未模块的导出值分别生成导出语句。

- 经过前面几步操作之后，模块导出列表中未被使用的值都不会定义在 **webpack_exports** 对象中，形成一段不可能被执行的 Dead Code 效果,在此之后，将由 Terser、UglifyJS 等 DCE 工具“摇”掉这部分无效代码，构成完整的 Tree Shaking 操作。

> 标记功能需要配置 `optimization.usedExports = true` 开启

## 总结

综上所述，`Webpack` 中 `Tree Shaking` 的实现分为如下步骤：

- 在 `FlagDependencyExportsPlugin` 插件中根据模块的 `dependencies` 列表收集模块导出值，并记录到 `ModuleGraph` 体系的 `exportsInfo` 中
- 在 `FlagDependencyUsagePlugin` 插件中收集模块的导出值的使用情况，并记录到 `exportInfo._usedInRuntime` 集合中
- 在 `HarmonyExportXXXDependency.Template.apply` 方法中根据导出值的使用情况生成不同的导出语句
- 使用 DCE 工具删除 Dead Code，实现完整的树摇效果
