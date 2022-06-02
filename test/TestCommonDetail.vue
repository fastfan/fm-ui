<!--
 * @Author: fastfan
 * @Date: 2022-05-24 15:11:15
 * @LastEditors: fastfan
 * @LastEditTime: 2022-06-02 14:03:10
 * @Description: your description
-->
<template>
  <div>
    <fm-common-detail :list="baseInfo">
      <template v-for="slot in slotList" v-slot:[slot.slotName]>
        <div :key="slot.slotName">
          <el-button
            v-if="slot.slotName === 'Button'"
            class="slot-button"
            type="primary"
            >111</el-button
          >
          <span
            v-for="(item, index) in slot.extraData"
            v-else-if="slot.slotName === 'ImgViwer'"
            :key="index"
          >
            <img class="slot-img" :src="item" />
          </span>
          <span
            v-else-if="slot.slotName === 'Link'"
            :style="{ color: slot.valueColor }"
            >文字链接</span
          >
        </div>
      </template>
    </fm-common-detail>
    <fm-chart :option="optionArr" style="height:500px;"/>
  </div>
</template>

<script>
import { infoArr,optionArr } from "./data.js";
console.log(optionArr)
export default {
  components: {},
  props: {},
  data() {
    return {
      baseInfo: {
        data: infoArr,
      },
      optionArr:optionArr
    };
  },
  computed: {
    slotList() {
      return this.baseInfo.data.filter((x) => x.slotName);
    },
  },
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
</style>