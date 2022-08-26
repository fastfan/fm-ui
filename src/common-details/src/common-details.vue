<!--
 * @Author: fastfan
 * @Date: 2022-08-05 17:05:36
 * @LastEditors: fastfan
 * @LastEditTime: 2022-08-26 11:51:28
 * @Description: your description
-->
<script>
import { Row, Col } from 'element-ui'
export default {
  name: 'FmCommonDetails',
  components: {
    ElCol: Col,
    ElRow: Row
  },
  props: {
    list: {
      type: Object,
      default() {
        return {}
      }
    },
    detailData: {
      type: Object,
      default() {
        return {}
      }
    },
    headTitle: {
      type: String,
      default() {
        return ''
      }
    }
  },
  computed: {
    listData() {
      // 数据
      return this.list.data || []
    }
  },

  methods: {
    clickLink(e, info) {
      this.$emit('linkValue', info)
    }
  },
  mounted() {
    // console.log(this.detailData)
  },
  render() {
    return (
      <div class="c-common-infos">
        {this.headTitle !== '' ? (
          <div class="c-common-infos-header">
            <div class="title">{this.headTitle}</div>
          </div>
        ) : null}
        {this._l(this.listData, (item) => {
          return (
            <el-row class={`${item.rowClassName ? item.rowClassName : ''}`}>
              {this._l(item.rowData, (items) => {
                return (
                  <el-col span={items.col || 24}>
                    <div style={`color: ${items.labelColor};`}>
                      {items.label}
                    </div>
                    {items.xType === 'Slot' ? (
                      this.$slots[items.slotName]
                    ) : (
                      <div
                        style={items.valueStyle}
                        on-click={(e) => this.clickLink(e, items)}
                      >
                        {this.detailData[items.prop]}
                      </div>
                    )}
                  </el-col>
                )
              })}
            </el-row>
          )
        })}
      </div>
    )
  }
}
</script>

<style lang="scss">
$--detail-borde-color: #e6e6e6;
$--detail-background-color: #f7f7f7;
$--detail-font-color-light: #666;
$--detail-font-color-heavy: #333;
$--detail-font-weight: 400;
$--detail-font-size: 14px;
.c-common-infos {
  border-bottom: 1px solid $--detail-borde-color;
  &-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
    color: rgba(51, 51, 51, 1);
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
  .el-row {
    display: flex;
    border: 1px solid $--detail-borde-color;
    border-left: none;
    border-bottom: none;
    .el-col {
      display: flex;
      font-weight: 400;
      font-size: 14px;
      align-content: space-around;
      flex-wrap: wrap;
      line-height: initial;
      & > div:nth-child(1) {
        text-align: right;
        margin: 16px 0 0 0;
        width: 106px;
       //  height: 100%;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        background: $--detail-background-color;
        font-size: $--detail-font-size;
        font-weight: $--detail-font-weight;
        color: $--detail-font-color-light;
        border-left: 1px solid $--detail-borde-color;
        border-right: 1px solid $--detail-borde-color;
        padding: 10px 12px 10px 0;
      }
      & > div:nth-child(2) {
        display: flex;
        flex: 1;
        padding: 10px 0px 10px 14px;
        align-items: center;
        margin: 0 !important;
        color: $--detail-font-color-heavy;
        word-break: break-all;
      }
    }
  }
}
</style>
