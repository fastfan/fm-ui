---
title: 浏览器判断
date: 2018-05-09
sidebar: 'auto'
categories:
 - other
tags:
 - 浏览器判断

---

在移动端常做的一件事就是一套代码兼容微信、支付宝等，但涉及到支付，分享等，这些代码又有一些不同，所以我们需要一个盒子来处理这些不同。
个人常用的办法，是加一个中间件，涉及到不同的代码，都调用中间件，再通过中间件来进行不同的处理。


判断当前环境的代码

```
var ua = window.navigator.userAgent.toLowerCase()
if (ua.match(/MicroMessenger/i) == 'micromessenger') {
  // 大部分手机可采用此判断，是否是小程序，但有小部分华为等手机因为加载慢，这里会出现误判
  if (window.__wxjs_environment === 'miniprogram' || ua.match(/miniprogram/i) == 'miniprogram') {
    // 小程序

  } else {
    // 微信
  }
} 
else if (/AlipayClient/.test(window.navigator.userAgent)) {
  // 此处用ua和miniprogram判断，先查看兼容性，使用my.getEnv为异步，不适合此处
  if (ua.match(/miniprogram/i) == 'miniprogram' || ua.match(/webview/i) == 'webview') {
    // 支付宝小程序
   
  } else {
    // 支付宝

  }
} else {
  // 其他处理（web和第三方渠道进入）
 
}
```
