<!--
 * @Author: fastfan
 * @Date: 2022-06-30 17:19:21
 * @LastEditors: fastfan
 * @LastEditTime: 2022-07-06 15:19:05
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
   <test-common-detail />
   <test-form />
   <test-table />
  </div>
</template>

<script>
import TestCommonDetail from './TestCommonDetail';
import TestForm from './TestForm';
import TestTable from './TestTable';
export default {
  name: 'app',
  components: {
    TestForm,
    TestTable,
    TestCommonDetail
  },
};
</script>

<style lang="scss"></style>