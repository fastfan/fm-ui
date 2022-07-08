---
title: Vue.nextTick原理
date: 2022-07-08
sidebar: "auto"
categories:
  - vue
tags:
  - nextTick
---


## Vue nextTick 原理

- nextTick 的原理，用一句话总结就是『利用 Event loop 事件线程去异步操作』。本质上就是注册异步任务来对任务进行处理。不同的是，在 Vue 的不同版本对这个异步任务的优雅降级不太一样。
- 将传入的回调函数包装成异步任务，异步任务又分微任务和宏任务，为了尽快执行所以优先选择微任务； nextTick 提供了四种异步方法 **`Promise.then`**、**`MutationObserver`（原生 API 用来监视 DOM 变动，异步触发）**、**`setImmediate`**、**`setTimeOut(fn,0)`**
- `nextTick`接收一个回调函数作为参数，并将这个回调函数延迟到`DOM`更新后才执行；`nextTick` 是在下次 `DOM` 更新循环结束之后执行延迟回调，在修改数据之后使用`nextTick`，则可以在回调中获取更新后的 `DOM`
**使用场景：想要操作 基于最新数据的生成DOM 时，就将这个操作放在 `nextTick` 的回调中**

**_看下源码_**

```js
import { noop } from 'shared/util'
import { handleError } from './error'
import { isIE, isIOS, isNative } from './env'

//  上面三行与核心代码关系不大，了解即可
//  noop 表示一个无操作空函数，用作函数默认值，防止传入 undefined 导致报错
//  handleError 错误处理函数
//  isIE, isIOS, isNative 环境判断函数，
//  isNative 判断是否原生支持，如果通过第三方实现支持也会返回 false

export let isUsingMicroTask = false     // nextTick 最终是否以微任务执行

const callbacks = []     // 存放调用 nextTick 时传入的回调函数
let pending = false     // 标识当前是否有 nextTick 在执行，同一时间只能有一个执行

// 声明 nextTick 函数，接收一个回调函数和一个执行上下文作为参数
function nextTick(cb?: Function, ctx?: Object)
let _resolve;
// 将传入的回调函数存放到数组中，后面会遍历执行其中的回调
callbacks.push(function () {
  if(cb) {
    try { // 对传入的回调进行 try catch 错误捕获
      cb.call(ctx);
    } catch (e) {
      handlError(e, ctx, 'nextTick');
    }
  } else if (_resolve) {
    _resolve(ctx);
  }
})
// 如果当前没有在 pending 的回调，就执行 timeFunc 函数选择当前环境优先支持的异步方法
 if(!pending) {
  pending = true;
  timerFunc()
 }
 // $flow-disable-lineNumber
 // 如果没有传入回调，并且当前环境支持 promise，就返回一个 promise
 if(!cb && typeof Promise !== 'undefined') {
  return new Promise(function (resolve) {
    _resolve = resolve
  })
 }
```

通过数组 `callbacks` 来存储用户注册的回调。声明了变量 `pending` 来标记是否正在执行任务。这里使用一个异步锁，等待任务队列执行完毕之后，在执行下一个任务。当前任务队列正常进行时，将 `pending` 设置为 `true`，每当任务被执行完成时将 `pending` 设置为 `false`，这样就可以通过 `pending` 的值来判断当前的任务队列是否在执行，新来的任务是否需要放到下一次的任务队列中。在当前的队列中，执行函数 `flushCallbacks`。当这个函数被触发时，会将 `callbacks` 中的所有函数依次执行，然后清空 `callbacks`，并将 `pending` 设置为 `false`。即一轮事件循环中，`flushCallbacks` 只会执行一次。这里需要注意，执行 `flushCallbacks` 函数时备份回调函数队列。因为，会出现这么一种情况 `nextTick` 的回调函数中还使用 `nextTick`。如果 `flushCallbacks` 不做特殊处理，直接循环执行回调函数，会导致里面 `nextTick` 中的回调函数会直接进入回调队列。

**_来看一下 `timerFunc` 函数的定义，先只看用 `Promise` 创建一个异步执行的 `timerFunc` 函数_**

```js
// 判断当前环境优先支持的异步方法，优先选择微任务
// 优先级：Promise---> MutationObserver---> setImmediate---> setTimeout
// setTimeOut 最小延迟也要4ms，而 setImmediate 会在主线程执行完后立刻执行
// setImmediate 在 IE10 和 node 中支持

// 多次调用 nextTick 时 ,timerFunc 只会执行一次

let timerFunc;
// 判断当前环境是否支持 promise
if (typeof Promise !== "undefined" && isNative(Promise)) {
  // 支持 promise
  const p = Promise.resolve();
  timerFunc = () => {
    // 用 promise.then 把 flushCallbacks 函数包裹成一个异步微任务
    p.then(flushCallbacks);
    if (isIOS) setTimeout(noop);
  };
  // 标记当前 nextTick 使用的微任务
  isUsingMicroTask = true;

  // 如果不支持 promise，就判断是否支持 MutationObserver
  // 不是IE环境，并且原生支持 MutationObserver，那也是一个微任务
} else if (
  !isIE &&
  typeof MutationObserver !== "undefined" &&
  (isNative(MutationObserver) ||
    MutationObserver.toString() === "[object MutationObserverConstructor]")
) {
  let counter = 1;
  // new 一个 MutationObserver 类
  const observer = new MutationObserver(flushCallbacks);
  // 创建一个文本节点
  const textNode = document.createTextNode(String(counter));
  // 监听这个文本节点，当数据发生变化就执行 flushCallbacks
  observer.observe(textNode, { characterData: true });
  timerFunc = () => {
    counter = (counter + 1) % 2;
    textNode.data = String(counter); // 数据更新
  };
  isUsingMicroTask = true; // 标记当前 nextTick 使用的微任务

  // 判断当前环境是否原生支持 setImmediate
} else if (typeof setImmediate !== "undefined" && isNative(setImmediate)) {
  timerFunc = () => {
    setImmediate(flushCallbacks);
  };
} else {
  // 以上三种都不支持就选择 setTimeout
  timerFunc = () => {
    setTimeout(flushCallbacks, 0);
  };
}
```

**_来看一下 `flushCallbacks` 函数_**

```js
// 如果多次调用 nextTick，会依次执行上面的方法，将 nextTick 的回调放在 callbacks 数组中
// 最后通过 flushCallbacks 函数遍历 callbacks 数组的拷贝并执行其中的回调
function flushCallbacks(){
  pending = false
    const copies = callbacks.slice(0)    // 拷贝一份
    callbacks.length = 0    // 清空 callbacks
    for (let i = 0; i < copies.length; i++) {    // 遍历执行传入的回调
        copies[i]()
    }
}
// 为什么要拷贝一份 callbacks

// callbacks.slice(0) 将 callbacks 拷贝出来一份，
// 是因为考虑到 nextTick 回调中可能还会调用 nextTick 的情况,
// 如果 nextTick 回调中又调用了一次 nextTick，则又会向 callbacks 中添加回调，
// nextTick 回调中的 nextTick 应该放在下一轮执行，
// 如果不将 callbacks 复制一份就可能一直循环
```

执行 `pending = false` 使下个事件循环中能 `nextTick` 函数中调用 `timerFunc` 函数。
执行 `var copies = callbacks.slice(0);callbacks.length = 0;` 把要异步执行的函数集合 `callbacks`克隆到常量 `copies`，然后把 `callbacks` 清空。
然后遍历 `copies` 执行每一项函数。回到 `nextTick` 中是把通过参数 `cb` 传入的函数包装后 `push` 到 `callbacks` 集合中。来看一下怎么包装的。

```js
function() {
    if (cb) {
        try {
            cb.call(ctx);
        } catch (e) {
            handleError(e, ctx, 'nextTick');
        }
    } else if (_resolve) {
        _resolve(ctx);
    }
}
```

若参数 `cb` 有值。在 `try` 语句中执行 `cb.call(ctx)` ，参数 `ctx` 是传入函数的参数。 如果执行失败执行 `handleError(e, ctx, 'nextTick')`。
若参数 `cb` 没有值。执行 `_resolve(ctx)`，因为在 `nextTick` 函数中如何参数 `cb`没有值，会返回一个 `Promise`类实例化对象，那么执行`_resolve(ctx)`，就会执行 `then` 的逻辑中。
到这里 `nextTick` 函数的主线逻辑就很清楚了。定义一个变量 `callbacks`，把通过参数 `cb` 传入的函数用一个函数包装一下，在这个中会执行传入的函数，及处理执行失败和参数 `cb` 不存在的场景，然后 添加到 `callbacks`。
调用 `timerFunc` 函数，在其中遍历 `callbacks` 执行每个函数，因为 `timerFunc` 是一个异步执行的函数，且定义一个变量 `pending` 来保证一个事件循环中只调用一次 `timerFunc` 函数。这样就实现了 `nextTick` 函数异步执行传入的函数的作用了。
