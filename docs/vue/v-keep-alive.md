---
title: Vue keep-alive原理
date: 2022-07-08
sidebar: "auto"
categories:
  - vue
tags:
  - keep-alive
---

## keep-alive 原理

**`keep-alive`** 中运用了 **`LRU(Least Recently Used)`** 算法。

- 获取 **`keep-alive`** 包裹着的第一个子组件对象及其组件名； 如果 **`keep-alive`** 存在多个子元素，**`keep-alive`** 要求同时只有一个子元素被渲染。所以在开头会获取插槽内的子元素，调用 **`getFirstComponentChild`** 获取到第一个子元素的 **`VNode`**。
- 根据设定的黑白名单（如果有）进行条件匹配，决定是否缓存。不匹配，直接返回组件实例（**`VNode`**），否则开启缓存策略。
- 根据组件 **`ID`** 和 **`tag`** 生成缓存 **`Key`**，并在缓存对象中查找是否已缓存过该组件实例。如果存在，直接取出缓存值并更新该 **`key`** 在 **`this.keys`** 中的位置（更新 **`key`** 的位置是实现 **`LRU`** 置换策略的关键）。
- 如果不存在，则在 **`this.cache`** 对象中存储该组件实例并保存 **`key`** 值，之后检查缓存的实例数量是否超过 **`max`** 设置值，超过则根据 **`LRU`** 置换策略删除最近最久未使用的实例（即是下标为 0 的那个 key）。最后将该组件实例的 **`keepAlive`** 属性值设置为 **`true`**。

**_看下源码_**

```js
var KeepAlive = {
  name: "keep-alive",
  // 抽象组件
  abstract: true, // 判断此组件是否需要在渲染成真实DOM

  // 接收的参数
  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number],
  },

  // 创建缓存表
  created: function created() {
    this.cache = Object.create(null); // 创建对象来存储  缓存虚拟dom
    this.keys = []; // 创建数组来存储  缓存key
  },

  destroyed: function destroyed() { // 删除所有的缓存
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted() {
    var this$1 = this;
    // 实时监听include、exclude的变动
    this.$watch("include", function (val) {
      pruneCache(this$1, function (name) {
        return matches(val, name);
      });
    });
    this.$watch("exclude", function (val) {
      pruneCache(this$1, function (name) {
        return !matches(val, name);
      });
    });
  },

  render: function render() {
    var slot = this.$slots.default;
    // 获取 `keep-alive` 包裹着的第一个子组件对象及其组件名；
    // 如果 keep-alive 存在多个子元素，`keep-alive` 要求同时只有一个子元素被渲染。
    // 所以在开头会获取插槽内的子元素，
    // 调用 `getFirstComponentChild` 获取到第一个子元素的 `VNode`。
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      // 根据设定的黑白名单（如果有）进行条件匹配，决定是否缓存。
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        // 不匹配，直接返回组件实例（`VNode`），否则开启缓存策略。
        return vnode;
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      // 根据组件ID和tag生成缓存Key
      var key =
        vnode.key == null
          ? componentOptions.Ctor.cid +
            (componentOptions.tag ? "::" + componentOptions.tag : "")
          : vnode.key;
      if (cache[key]) {
        // 并在缓存对象中查找是否已缓存过该组件实例。如果存在，直接取出缓存值
        vnode.componentInstance = cache[key].componentInstance;
        // 并更新该key在this.keys中的位置（更新key的位置是实现LRU置换策略的关键）。
        remove(keys, key);
        keys.push(key);
      } else {
        // 如果不存在，则在this.cache对象中存储该组件实例并保存key值，
        cache[key] = vnode;
        keys.push(key);
        // 之后检查缓存的实例数量是否超过max设置值，超过则根据LRU置换策略删除最近最久未使用的实例
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }
      // 最后将该组件实例的keepAlive属性值设置为true。
      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0]);
  },
};
```

**`pruneCacheEntry`函数**

```js
// src/core/components/keep-alive.js

function pruneCacheEntry (
  cache: VNodeCache,
  key: string,
  keys: Array<string>,
  current?: VNode
) {
  const cached = cache[key]
  if (cached && (!current || cached.tag !== current.tag)) {
    cached.componentInstance.$destroy() // 执行组件的destory钩子函数
  }
  cache[key] = null  // 设为null
  remove(keys, key) // 删除对应的元素
}
```

总结一下就是做了三件事：

1. 遍历集合，执行所有缓存组件的`$destroy`方法
2. 将`cache`对应key的内容设置为`null`
3. 删除`keys`中对应的元素

**`render`函数**
> 以下称`include`为白名单，`exclude`为黑名单
`render`函数里主要做了这些事：

- 第一步：获取到keep-alive包裹的第一个组件以及它的组件名称
- 第二步：判断此组件名称是否能被白名单、黑名单匹配，如果不能被白名单匹配 || 能被黑名单匹配，则直接返回VNode，不往下执行，如果不符合，则往下执行第三步
- 第三步：根据组件ID、tag生成缓存key，并在缓存集合中查找是否已缓存过此组件。如果已缓存过，直接取出缓存组件，并更新缓存key在keys中的位置（这是LRU算法的关键），如果没缓存过，则继续第四步
- 第四步：分别在cache、keys中保存此组件以及他的缓存key，并检查数量是否超过max，超过则根据LRU算法进行删除
- 第五步：将此组件实例的keepAlive属性设置为true，这很重要哦
