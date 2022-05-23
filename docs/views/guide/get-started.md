---
title: '快速上手'
---

# 快速上手

```js
// 全局注册
import FmUI from 'fm-ui';
Vue.use(VaseUI, { router });
import 'fm-ui/lib/fm-ui.css';
// 按需注册
import { Button, KeepAlive } from 'fm-ui';
Vue.use(Button).use(KeepAlive, { router });
```

```vue
// 全局注册
<template>
  <div id="app">
    <fm-button type="primary">点击报名</fm-button>
  </div>
</template>

<script>
export default {};
</script>
```

<ClientOnly>
  <!-- <sakura-img/> -->
</ClientOnly>
