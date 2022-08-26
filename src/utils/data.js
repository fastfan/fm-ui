/*
 * @Author: fastfan
 * @Date: 2022-05-24 15:21:08
 * @LastEditors: fastfan
 * @LastEditTime: 2022-08-26 11:20:47
 * @Description: your description
 */
export const infoArr = [{
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
    slotName: 'ImgViwer',
    extraData: [
      require("@/assets/imgs/demo.png")
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
    slotName: 'Link'
  },
  {
    label: "报警按钮：",
    value: "",
    col: 24,
    labelColor: "",
    valueColor: "",
    prop: "alarmTime5",
    xType: "Slot",
    slotName: 'Button'
  }
]

export const optionArr = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [120, 200, 150, 80, 70, 110, 130],
    type: 'bar',
    showBackground: true,
    backgroundStyle: {
      color: 'rgba(180, 180, 180, 0.2)'
    }
  }]
}


export const infoArr2 = [
  {
    rowData: [
      {
        label: '气瓶标签号',
        col: 12,
        labelColor: '',
        valueColor: '',
        prop: 'lableNo'
      },
      {
        label: '权属企业',
        col: 12,
        labelColor: '',
        valueColor: '',
        prop: 'enterpriseName'
      }
    ]
  },
  {
    rowData: [
      {
        label: '标签安装时间',
        col: 12,
        labelColor: '',
        valueColor: '',
        prop: 'signInstallTime'
      },
      {
        label: '气瓶钢码编号',
        col: 12,
        labelColor: '',
        valueColor: '',
        prop: 'steelNo'
      }
    ]
  },
  {
    rowData: [
      {
        label: '出厂编号',
        col: 12,
        labelColor: '',
        valueColor: '',
        prop: 'makeNo'
      },
      {
        label: '生产厂家',
        col: 12,
        labelColor: '',
        valueColor: '',
        prop: 'manufacturer'
      }
    ]
  },
  {
    rowData: [
      {
        label: '出厂日期',
        col: 12,
        labelColor: '',
        valueColor: '',
        prop: 'productionDate'
      },
      {
        label: '瓶体自重(kg)',
        col: 12,
        labelColor: '',
        valueColor: '',
        prop: 'weight'
      }
    ]
  },
  {
    rowData: [
      {
        label: '气瓶型号',
        col: 12,
        labelColor: '',
        valueColor: '',
        prop: 'bottleModel'
      },
      {
        label: '气瓶规格(kg)',
        col: 12,
        labelColor: '',
        valueColor: '',
        prop: 'specification'
      }
    ]
  },
  {
    rowData: [
      {
        label: '气瓶图片',
        col: 24,
        labelColor: '',
        valueColor: '',
        prop: 'coverPicture',
        xType: 'Slot',
        slotName: 'ImgViwer'
      }
    ]
  }
]