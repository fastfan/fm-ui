<!--
 * @Author: fastfan
 * @Date: 2022-05-24 15:11:15
 * @LastEditors: fastfan
 * @LastEditTime: 2022-08-26 12:33:58
 * @Description: your description
-->
<template>
  <div>
    <h1>DETAILS（新）</h1>
    <fm-common-details :list="baseInfo2" :detailData="detailData">
      <template v-for="slot in slotList2" v-slot:[slot.slotName]>
            <div :key="slot.slotName">
              <div
                class="slot-viwer"
                v-show="slot.slotName === 'ImgViwer'"
              >
                <img
                  v-for="(item, index) in detailData[slot.prop]"
                  :key="index"
                  class="slot-img"
                  :src="item"
                />
              </div>
              <div
                class="slot-viwer slot-viwer2"
                v-show="slot.slotName === 'ImgViwer2'"
              >
                <img
                  v-for="(item, index) in detailData[slot.prop]"
                  :key="index"
                  class="slot-img"
                  :src="item"
                />
              </div>
            </div>
          </template>
    </fm-common-details>
    <h1>DETAILS（旧）</h1>
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
    <h1>echarts</h1>
    <fm-chart :option="optionArr" style="height:500px;"/>
  </div>
</template>

<script>
import { infoArr,optionArr,infoArr2 } from "@/utils/data.js";
console.log(optionArr)
export default {
  components: {},
  props: {},
  data() {
    return {
      baseInfo: {
        data: infoArr,
      },
      baseInfo2: {
        data: infoArr2
      },
      optionArr:optionArr,
      detailData: {
        lableNo:11111
      },
    };
  },
  computed: {
    slotList() {
      return this.baseInfo.data.filter((x) => x.slotName);
    },
    slotList2() {
      const arr = this.baseInfo2.data.map((x) =>
        x.rowData.filter((y) => y.slotName)
      )
      const arr2 = arr.filter((x) => x.length > 0).flat()
      return arr2
    }
  },
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
</style>