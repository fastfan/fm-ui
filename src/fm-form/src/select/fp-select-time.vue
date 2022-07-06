<!--
 * @Author: fastfan
 * @Date: 2022-06-30 18:51:30
 * @LastEditors: fastfan
 * @LastEditTime: 2022-07-06 15:14:29
 * @Description: your description
-->
<script>
  import  DatePicker  from '../../../lib/date-picker/index.js'

  const wrapDatePicker = {
    name: 'FpSelectTime',
    components: {
      DatePicker
    },
    // 自定义 v-model
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {},
    computed: {
      val: {
        set: function(newVal) {
          this.$emit('change', newVal)
        },
        get: function() {
          return this.value
        }
      }
    }
  }

  Object.assign(wrapDatePicker.props, DatePicker.props || {}, {
    dataType: {
      type: String,
      default: 'date' // 对应 element 组件 type 属性，日期 date 日期时间 datetime 日期范围 daterange 日期时间范围 datetimerange
    },
    value: String | Date | Array,
    format: {
      type: String,
      default() {
        if (this.dataType === 'date' || this.dataType === 'daterange') {
          return 'yyyy-MM-dd'
        } else {
          return 'yyyy-MM-dd HH:mm:ss'
        }
      }
    },
    valueFormat: {
      type: String,
      default() {
        if (this.dataType === 'date' || this.dataType === 'daterange') {
          return 'yyyy-MM-dd'
        } else {
          return 'yyyy-MM-dd HH:mm:ss'
        }
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default() {
        if (this.dataType === 'date') {
          return '选择日期'
        } else {
          return '选择日期时间'
        }
      }
    },
    startPlaceholder: {
      type: String,
      default: '开始时间'
    },
    endPlaceholder: {
      type: String,
      default: '结束时间'
    },
    rangeSeparator: {
      type: String,
      default: '-'
    },
    defaultTime: {
      type: Array
    }
  })

  wrapDatePicker.render = function(h) {
    // 做 v-model，兼容 外部传入 input 事件回调
    const fn = val => { this.val = val }
    const inputFnArr = !this.$listeners.input
      ? fn
      : Array.isArray(this.$listeners.input)
        ? this.$listeners.input.concat(fn)
        : [this.$listeners.input, fn]

    return h('DatePicker', {
      props: {
        ...this.$props,
        ...this.$options.propsData,
        value: this.val,
        type: this.dataType
      },
      on: {
        ...this.$listeners,
        'input': inputFnArr
      }
    }, [])
  }

  export default wrapDatePicker
</script>
