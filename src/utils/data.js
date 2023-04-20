/*
 * @Author: fastfan
 * @Date: 2022-05-24 15:21:08
 * @LastEditors: fastfan
 * @LastEditTime: 2023-04-20 14:47:45
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

export const cascaderData = [
  {
    value: 'zhinan',
    label: '指南',
    children: [{
      value: 'shejiyuanze',
      label: '设计原则',
      children: [{
        value: 'yizhi',
        label: '一致'
      }, {
        value: 'fankui',
        label: '反馈'
      }, {
        value: 'xiaolv',
        label: '效率'
      }, {
        value: 'kekong',
        label: '可控'
      }]
    }, {
      value: 'daohang',
      label: '导航',
      children: [{
        value: 'cexiangdaohang',
        label: '侧向导航'
      }, {
        value: 'dingbudaohang',
        label: '顶部导航'
      }]
    }]
  }, {
    value: 'zujian',
    label: '组件',
    children: [{
      value: 'basic',
      label: 'Basic',
      children: [{
        value: 'layout',
        label: 'Layout 布局'
      }, {
        value: 'color',
        label: 'Color 色彩'
      }, {
        value: 'typography',
        label: 'Typography 字体'
      }, {
        value: 'icon',
        label: 'Icon 图标'
      }, {
        value: 'button',
        label: 'Button 按钮'
      }]
    }, {
      value: 'form',
      label: 'Form',
      children: [{
        value: 'radio',
        label: 'Radio 单选框'
      }, {
        value: 'checkbox',
        label: 'Checkbox 多选框'
      }, {
        value: 'input',
        label: 'Input 输入框'
      }, {
        value: 'input-number',
        label: 'InputNumber 计数器'
      }, {
        value: 'select',
        label: 'Select 选择器'
      }, {
        value: 'cascader',
        label: 'Cascader 级联选择器'
      }, {
        value: 'switch',
        label: 'Switch 开关'
      }, {
        value: 'slider',
        label: 'Slider 滑块'
      }, {
        value: 'time-picker',
        label: 'TimePicker 时间选择器'
      }, {
        value: 'date-picker',
        label: 'DatePicker 日期选择器'
      }, {
        value: 'datetime-picker',
        label: 'DateTimePicker 日期时间选择器'
      }, {
        value: 'upload',
        label: 'Upload 上传'
      }, {
        value: 'rate',
        label: 'Rate 评分'
      }, {
        value: 'form',
        label: 'Form 表单'
      }]
    }, {
      value: 'data',
      label: 'Data',
      children: [{
        value: 'table',
        label: 'Table 表格'
      }, {
        value: 'tag',
        label: 'Tag 标签'
      }, {
        value: 'progress',
        label: 'Progress 进度条'
      }, {
        value: 'tree',
        label: 'Tree 树形控件'
      }, {
        value: 'pagination',
        label: 'Pagination 分页'
      }, {
        value: 'badge',
        label: 'Badge 标记'
      }]
    }, {
      value: 'notice',
      label: 'Notice',
      children: [{
        value: 'alert',
        label: 'Alert 警告'
      }, {
        value: 'loading',
        label: 'Loading 加载'
      }, {
        value: 'message',
        label: 'Message 消息提示'
      }, {
        value: 'message-box',
        label: 'MessageBox 弹框'
      }, {
        value: 'notification',
        label: 'Notification 通知'
      }]
    }, {
      value: 'navigation',
      label: 'Navigation',
      children: [{
        value: 'menu',
        label: 'NavMenu 导航菜单'
      }, {
        value: 'tabs',
        label: 'Tabs 标签页'
      }, {
        value: 'breadcrumb',
        label: 'Breadcrumb 面包屑'
      }, {
        value: 'dropdown',
        label: 'Dropdown 下拉菜单'
      }, {
        value: 'steps',
        label: 'Steps 步骤条'
      }]
    }, {
      value: 'others',
      label: 'Others',
      children: [{
        value: 'dialog',
        label: 'Dialog 对话框'
      }, {
        value: 'tooltip',
        label: 'Tooltip 文字提示'
      }, {
        value: 'popover',
        label: 'Popover 弹出框'
      }, {
        value: 'card',
        label: 'Card 卡片'
      }, {
        value: 'carousel',
        label: 'Carousel 走马灯'
      }, {
        value: 'collapse',
        label: 'Collapse 折叠面板'
      }]
    }]
  }, {
    value: 'ziyuan',
    label: '资源',
    children: [{
      value: 'axure',
      label: 'Axure Components'
    }, {
      value: 'sketch',
      label: 'Sketch Templates'
    }, {
      value: 'jiaohu',
      label: '组件交互文档'
    }]
  }
]