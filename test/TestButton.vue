<!--
 * @Author: fastfan
 * @Date: 2022-05-23 19:56:57
 * @LastEditors: fastfan
 * @LastEditTime: 2022-05-23 22:03:57
 * @Description: your description
-->
<template>
  <div class="app">
    <div class="row">
      <fm-button>按钮</fm-button>
      <fm-button type="primary">按钮</fm-button>
      <fm-button type="success">按钮</fm-button>
      <fm-button type="info">按钮</fm-button>
      <fm-button type="warning">按钮</fm-button>
    </div>
    <div class="row">
      <fm-button plain>按钮</fm-button>
      <fm-button plain type="primary">按钮</fm-button>
      <fm-button plain type="success">按钮</fm-button>
      <fm-button plain type="info">按钮</fm-button>
      <fm-button plain type="warning">按钮</fm-button>
    </div>
    <div class="row">
      <fm-button round plain>按钮</fm-button>
      <fm-button round plain type="primary">按钮</fm-button>
      <fm-button round plain type="success">按钮</fm-button>
      <fm-button round plain type="info">按钮</fm-button>
      <fm-button round plain type="warning">按钮</fm-button>
    </div>
    <div class="row">
      <fm-button circle>OK</fm-button>
      <fm-button circle type="primary">OK</fm-button>
      <fm-button circle type="success">OK</fm-button>
      <fm-button circle type="info">OK</fm-button>
      <fm-button circle type="warning">OK</fm-button>
    </div>
    <div class="row">
      <fm-button plain>字体</fm-button>
      <fm-button icon="fm-icon-check" circle plain type="primary"></fm-button>
      <fm-button icon="fm-icon-message" circle plain type="success"></fm-button>
      <fm-button icon="fm-icon-search" circle plain type="info"></fm-button>
      <fm-button icon="fm-icon-star-off" plain type="warning">字体图标</fm-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    jump(e) {
      console.log(e);
      alert(123);
    },
  },
};
</script>

<style lang="scss" scoped>
.app {
  width: 600px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}
.row {
  padding: 10px 0;
}
.fm-button {
  margin-left: 10px;
}
</style>