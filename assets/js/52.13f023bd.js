(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{1179:function(e,_,v){"use strict";v.r(_);var o=v(11),d=Object(o.a)({},(function(){var e=this,_=e._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h2",{attrs:{id:"什么是-tree-shaking"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是-tree-shaking"}},[e._v("#")]),e._v(" 什么是 Tree Shaking")]),e._v(" "),_("p",[_("strong",[_("code",[e._v("Tree-Shaking")])]),e._v(" 是一种基于 "),_("code",[e._v("ES Module")]),e._v(" 规范的 Dead Code Elimination 技术，它会在运行过程中静态分析模块之间的导入导出，确定 ESM 模块中哪些导出值未曾其它模块使用，并将其删除，以此实现打包产物的优化")]),e._v(" "),_("h2",{attrs:{id:"实现原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#实现原理"}},[e._v("#")]),e._v(" 实现原理")]),e._v(" "),_("p",[e._v("Webpack 中，"),_("strong",[_("code",[e._v("Tree-shaking")])]),e._v(" 的实现一是先标记出模块导出值中哪些没有被用过，二是使用 "),_("strong",[_("code",[e._v("Terser")])]),e._v(" 删掉这些没被用到的导出语句。标记过程大致可划分为三个步骤：")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("Make 阶段")]),e._v("，收集模块导出变量并记录到模块依赖关系图 "),_("code",[e._v("ModuleGraph")]),e._v(" 变量中:")])]),e._v(" "),_("ol",[_("li",[e._v("将模块的所有 "),_("code",[e._v("ESM")]),e._v(" 导出语句转换为 "),_("code",[e._v("Dependency")]),e._v(" 对象，并记录到 "),_("code",[e._v("module")]),e._v(" 对象的 "),_("code",[e._v("dependencies")]),e._v("集合，具名导出转换为 "),_("code",[e._v("HarmonyExportSpecifierDependency")]),e._v(" 对象，"),_("code",[e._v("default")]),e._v(" 导出转换为 "),_("code",[e._v("HarmonyExportExpressionDependency")]),e._v(" 对象")]),e._v(" "),_("li",[e._v("所有模块都编译完毕后，触发 "),_("code",[e._v("compilation.hooks.finishModules")]),e._v(" 钩子，开始执行 "),_("code",[e._v("FlagDependencyExportsPlugin")]),e._v(" 插件回调")]),e._v(" "),_("li",[_("code",[e._v("FlagDependencyExportsPlugin")]),e._v(" 插件从 "),_("code",[e._v("entry")]),e._v(" 开始读取 "),_("code",[e._v("ModuleGraph")]),e._v(" 中存储的模块信息，遍历所有 module 对象")]),e._v(" "),_("li",[e._v("遍历 "),_("code",[e._v("module")]),e._v("对象的 "),_("code",[e._v("dependencies")]),e._v(" 数组，找到所有 "),_("code",[e._v("HarmonyExportXXXDependency")]),e._v(" 类型的依赖对象，将其转换为 "),_("code",[e._v("ExportInfo")]),e._v(" 对象并记录到 "),_("code",[e._v("ModuleGraph")]),e._v(" 体系中）")])]),e._v(" "),_("p",[e._v("经过 "),_("code",[e._v("FlagDependencyExportsPlugin")]),e._v(" 插件处理后，所有 ESM 风格的 export 语句都会记录在 "),_("code",[e._v("ModuleGraph")]),e._v(" 体系内，后续操作就可以从 "),_("code",[e._v("ModuleGraph")]),e._v(" 中直接读取出模块的导出值,也就是说，标记的效果就是删除没有被其它模块使用的导出语句")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("Seal 阶段")]),e._v("，遍历 "),_("code",[e._v("ModuleGraph")]),e._v(" 标记模块导出变量有没有被使用:")])]),e._v(" "),_("ol",[_("li",[e._v("触发 "),_("code",[e._v("compilation.hooks.optimizeDependencies")]),e._v(" 钩子，开始执行 "),_("code",[e._v("FlagDependencyUsagePlugi")]),e._v("n 插件逻辑")]),e._v(" "),_("li",[e._v("在 "),_("code",[e._v("FlagDependencyUsagePlugin")]),e._v(" 插件中，从 "),_("code",[e._v("entry")]),e._v(" 开始逐步遍历 "),_("code",[e._v("ModuleGraph")]),e._v(" 存储的所有 "),_("code",[e._v("module")]),e._v(" 对象")]),e._v(" "),_("li",[e._v("遍历 "),_("code",[e._v("module")]),e._v(" 对象对应的 "),_("code",[e._v("exportInfo")]),e._v(" 数组")]),e._v(" "),_("li",[e._v("为每一个 "),_("code",[e._v("exportInfo")]),e._v(" 对象执行 "),_("code",[e._v("compilation.getDependencyReferencedExports")]),e._v(" 方法，确定其对应的 "),_("code",[e._v("dependency")]),e._v(" 对象有否被其它模块使用")]),e._v(" "),_("li",[e._v("被任意模块使用到的导出值，调用 "),_("code",[e._v("exportInfo.setUsedConditionally")]),e._v(" 方法将其标记为已被使用。")]),e._v(" "),_("li",[_("code",[e._v("exportInfo.setUsedConditionally")]),e._v(" 内部修改 "),_("code",[e._v("exportInfo._usedInRuntime")]),e._v(" 属性，记录该导出被如何使用")]),e._v(" "),_("li",[e._v("结束")])]),e._v(" "),_("p",[e._v("标记模块导出这一操作集中在 "),_("code",[e._v("FlagDependencyUsagePlugin")]),e._v(" 插件中，执行结果最终会记录在模块导出语句对应的 "),_("code",[e._v("exportInfo._usedInRuntime")]),e._v(" 字典中")]),e._v(" "),_("ul",[_("li",[e._v("生成产物时，若变量没有被其它模块使用则删除对应的导出语句：")])]),e._v(" "),_("ol",[_("li",[e._v("打包阶段，调用 "),_("code",[e._v("HarmonyExportXXXDependency.Template.apply")]),e._v(" 方法生成代码")]),e._v(" "),_("li",[e._v("在 "),_("code",[e._v("apply")]),e._v(" 方法内，读取 "),_("code",[e._v("ModuleGraph")]),e._v(" 中存储的 "),_("code",[e._v("exportsInfo")]),e._v(" 信息，判断哪些导出值被使用，哪些未被使用")]),e._v(" "),_("li",[e._v("对已经被使用及未被使用的导出值，分别创建对应的 "),_("code",[e._v("HarmonyExportInitFragment")]),e._v(" 对象，保存到 "),_("code",[e._v("initFragments")]),e._v(" 数组")]),e._v(" "),_("li",[e._v("遍历 "),_("code",[e._v("initFragments")]),e._v(" 数组，生成最终结果")])]),e._v(" "),_("p",[e._v("基本上，这一步的逻辑就是用前面收集好的 "),_("code",[e._v("exportsInfo")]),e._v(" 对象未模块的导出值分别生成导出语句。")]),e._v(" "),_("ul",[_("li",[e._v("经过前面几步操作之后，模块导出列表中未被使用的值都不会定义在 "),_("strong",[e._v("webpack_exports")]),e._v(" 对象中，形成一段不可能被执行的 Dead Code 效果,在此之后，将由 Terser、UglifyJS 等 DCE 工具“摇”掉这部分无效代码，构成完整的 Tree Shaking 操作。")])]),e._v(" "),_("blockquote",[_("p",[e._v("标记功能需要配置 "),_("code",[e._v("optimization.usedExports = true")]),e._v(" 开启")])]),e._v(" "),_("h2",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),_("p",[e._v("综上所述，"),_("code",[e._v("Webpack")]),e._v(" 中 "),_("code",[e._v("Tree Shaking")]),e._v(" 的实现分为如下步骤：")]),e._v(" "),_("ul",[_("li",[e._v("在 "),_("code",[e._v("FlagDependencyExportsPlugin")]),e._v(" 插件中根据模块的 "),_("code",[e._v("dependencies")]),e._v(" 列表收集模块导出值，并记录到 "),_("code",[e._v("ModuleGraph")]),e._v(" 体系的 "),_("code",[e._v("exportsInfo")]),e._v(" 中")]),e._v(" "),_("li",[e._v("在 "),_("code",[e._v("FlagDependencyUsagePlugin")]),e._v(" 插件中收集模块的导出值的使用情况，并记录到 "),_("code",[e._v("exportInfo._usedInRuntime")]),e._v(" 集合中")]),e._v(" "),_("li",[e._v("在 "),_("code",[e._v("HarmonyExportXXXDependency.Template.apply")]),e._v(" 方法中根据导出值的使用情况生成不同的导出语句")]),e._v(" "),_("li",[e._v("使用 DCE 工具删除 Dead Code，实现完整的树摇效果")])])])}),[],!1,null,null,null);_.default=d.exports}}]);