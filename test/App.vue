<!--
 * @Author: fastfan
 * @Date: 2022-05-23 19:56:21
 * @LastEditors: fastfan
 * @LastEditTime: 2022-06-28 17:21:18
 * @Description: your description
-->
<template>
  <div id="app">
   <test-common-detail />
   <test-form />
  </div>
</template>

<script>
import TestCommonDetail from './TestCommonDetail';
import TestForm from './TestForm';
export default {
  name: 'app',
  components: {
    TestForm,
    TestCommonDetail
  },
};
</script>

<style lang="scss"></style>