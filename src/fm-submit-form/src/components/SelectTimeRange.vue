<script>
import SelectTime from './fp-select-time.vue'
console.log(SelectTime)
const selectTimeRender = SelectTime.render || function () {
  console.log(SelectTime)
  return this._e()
}

export default {
  mixins: [SelectTime],
  name:'SelectTimeRange',
  props: {
    dataType: {
      type: String,
      default: 'daterange'
    },
    prefix: {
      type: Boolean,
      default: false
    },
    suffix: {
      type: Boolean,
      default: false
    },
    prefixInfo: {
      type: String,
      default: ''
    },
    suffixInfo: {
      type: String,
      default: ''
    }
  },
  render(h) {
    return (
        <div>
          {
            this.prefix ? (<span class='prefix'>{this.prefixInfo}</span>) : null
          }
          {
            selectTimeRender.call(this, h)
          }
          {
            this.suffix ? (<span class='suffix'>{this.suffixInfo}</span>) : null
          }
        </div>
    )
  }
}
</script>
