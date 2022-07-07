<!--
 * @Author: fastfan
 * @Date: 2022-06-30 17:19:21
 * @LastEditors: fastfan
 * @LastEditTime: 2022-07-07 13:48:02
 * @Description: your description
-->
<!--
 * @Author: fastfan
 * @Date: 2022-05-23 19:56:21
 * @LastEditors: fastfan
 * @LastEditTime: 2022-06-30 10:40:50
 * @Description: your description
-->
<template>
  <div id="app">
    <h1>详情</h1>
    <test-common-detail />
    <h1>表单</h1>
    <test-form />
    <h1>表格</h1>
    <test-table />
  </div>
</template>

<script>
import TestCommonDetail from "./TestCommonDetail";
import TestForm from "./TestForm";
import TestTable from "./TestTable";
export default {
  name: "app",
  components: {
    TestForm,
    TestTable,
    TestCommonDetail,
  },
};
</script>

<style lang="scss"></style>