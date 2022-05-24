---
title: '快速上手'
date: 2022-05-17
sidebar: "auto"

publish: false
---

# 快速上手

```js
// 全局注册
import FmUI from 'fm-ui';
Vue.use(VaseUI, { router });
import 'fm-ui/lib/fm-ui.css';
// 按需注册
import { FmCommonDetail, KeepAlive } from 'fm-ui';
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
