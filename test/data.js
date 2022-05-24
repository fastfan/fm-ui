/*
 * @Author: fastfan
 * @Date: 2022-05-24 15:21:08
 * @LastEditors: fastfan
 * @LastEditTime: 2022-05-24 15:23:06
 * @Description: your description
 */
export const infoArr = [
    {
      label: "报警类型：",
      value: "11",
      col: 24,
      labelColor: "",
      valueColor: "",
      prop: "bigType",
    },
    {
      label: "报警时间：",
      value: "22",
      col: 12,
      labelColor: "",
      valueColor: "",
      prop: "alarmTime",
    },
    {
      label: "报警地点：",
      value: "33",
      col: 12,
      labelColor: "",
      valueColor: "",
      prop: "alarmTime2",
    },
    {
      label: "报警照片：",
      value: "",
      col: 12,
      labelColor: "",
      valueColor: "",
      prop: "alarmTime3",
      xType: "Slot",
      slotName:'ImgViwer',
      extraData: [
          require("./demo.png")
      ]
    },
    {
      label: "报警链接：",
      value: "",
      col: 12,
      labelColor: "",
      valueColor: "#5faee3",
      prop: "alarmTime4",
      xType: "Slot",
      slotName:'Link'
    },
    {
      label: "报警按钮：",
      value: "",
      col: 24,
      labelColor: "",
      valueColor: "",
      prop: "alarmTime5",
      xType: "Slot",
      slotName:'Button'
    }
  ]