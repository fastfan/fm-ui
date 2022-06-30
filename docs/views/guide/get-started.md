---
title: '快速上手'
date: 2022-05-17
sidebar: "auto"

publish: false
---

# 快速上手

```js
// 全局注册
import FmUI from 'fwm-ui';
Vue.use(FmUI, { router });
import 'fwm-ui/lib/index.css';

import ElementUi from 'element-ui'
Vue.use(ElementUi)
import 'element-ui/lib/theme-chalk/index.css'

import * as echarts from 'echarts'//需要用到可视化组件的话，必装
Vue.prototype.$echarts = echarts

// 按需注册
import { FmCommonDetail, KeepAlive } from 'fwm-ui';
Vue.use(FmCommonDetail).use(KeepAlive, { router });
```

```vue
// 全局注册
<template>
  <div id="app">
    <FmCommonDetail />
  </div>
</template>

<script>
export default {};
</script>
```

<ClientOnly>
  <!-- <sakura-img/> -->
</ClientOnly>
