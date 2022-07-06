<!--
 * @Author: fastfan
 * @Date: 2022-07-06 10:32:42
 * @LastEditors: fastfan
 * @LastEditTime: 2022-07-06 15:40:42
 * @Description: your description
-->
<script>
  import Pagination from '../pagination/index.js'
  import  { Table }  from 'element-ui'

  const _toString = Object.prototype.toString
  const findColumn = function(arr, label) {
    // console.log("findRootColumn:::", arr, label)
    if (arr && arr instanceof Array && arr.length) {
      for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i].label === label) {
          return arr[i]
        }
      }
    }
    return null
  }
  const createColum = function(item) {
    if (_toString.call(item) === '[object Object]') {
      return {
        ...item,
        children: []
      }
    } else {
      return {
        label: item,
        children: []
      }
    }
  }
  const wrapTable = {
    name: "FmTable",
    components: {
      Pagination,
      Table
    },
    props: {
      data: {
        type: Array,
        default: function() {
          return []
        }
      },

      size: String,

      width: [String, Number],

      height: [String, Number],

      maxHeight: [String, Number],

      fit: {
        type: Boolean,
        default: true
      },

      stripe: Boolean,

      border: Boolean,

      rowKey: [String, Function],

      context: {},

      showHeader: {
        type: Boolean,
        default: true
      },

      showSummary: Boolean,

      sumText: String,

      summaryMethod: Function,

      rowClassName: [String, Function],

      rowStyle: [Object, Function],

      cellClassName: [String, Function],

      cellStyle: [Object, Function],

      headerRowClassName: [String, Function],

      headerRowStyle: [Object, Function],

      headerCellClassName: [String, Function],

      headerCellStyle: [Object, Function],

      highlightCurrentRow: Boolean,

      currentRowKey: [String, Number],

      emptyText: String,

      expandRowKeys: Array,

      defaultExpandAll: Boolean,

      defaultSort: Object,

      tooltipEffect: String,

      spanMethod: Function,

      selectOnIndeterminate: {
        type: Boolean,
        default: true
      },

      indent: {
        type: Number,
        default: 16
      },

      lazy: Boolean,

      treeLoad: Function
    },
    data() {
      return {
        page: this.currentPage,
        limit: this.limitNum
      }
    },
    created() {
      if (this.autoLoad) {
        this.load()
      }
    },
    methods: {}
  }
  Object.assign(wrapTable.props, {
    emptyColumnText: {
      type: String,
      default: ""
    },
    paginationLayout: {
      type: String,
      default: "total, sizes, ->, prev, pager, next, jumper"
    },
    border: {
      type: Boolean,
      default: true
    },
    fields: {
      type: Array,
      defalut() {
        return []
      }
    },
    indexCol: {
      type: [Boolean, Object],
      default: true
    },
    selectionCol: {
      type: [Boolean, Object],
      default: true
    },
    pagination: {
      type: Boolean,
      default: true
    },
    total: {
      type: Number,
      default: 0
    },
    autoLoad: {
      type: Boolean,
      default: true
    },
    getData: {
      type: Function,
      default: null
    },
    limitNum: {
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 50, 100]
      }
    },
    currentPage: {
      type: Number,
      default: 1
    }
  })
  function cloneVNode(h, vnode) {
    if (!vnode) return null
    return h(vnode.tag, vnode.data, vnode.children)
  }
  Object.assign(wrapTable.methods, {
    typeIndex(index) {
      return (this.page - 1) * this.limit + index + 1
    },
    load(page, limit) {
      if (page) { this.page = page } else { page = this.page }
      if (limit) { this.limit = limit } else { limit = this.limit }
      this.$emit('load', { page, limit })
      if (Object.prototype.toString.call(this.getData) === "[object Function]") {
        this.getData({ page, limit })
      }
    },
    handleSizeChange(value) {
      this.$emit('size-change', value)
      this.limit = value
      this.load(1)
    },
    handlePageChange(value) {
      this.$emit('page-change', value)
      this.page = value
      this.load(value)
    },
    genFields(data) {
      const columns = []
      if (this.indexCol) {
        const indexCol = { label: "序号", type: "index", index: this.typeIndex, align: "center", width: "64" }
        if (_toString.call(this.indexCol) === '[object Object]') {
          columns.push(Object.assign({}, indexCol, this.indexCol))
        } else {
          columns.push(indexCol)
        }
      }
      if (this.selectionCol) {
        const selectionCol = { type: "selection", label: "全选", align: "center", width: "54" }
        if (_toString.call(this.selectionCol) === '[object Object]') {
          columns.push(Object.assign({}, selectionCol, this.selectionCol))
        } else {
          columns.push(selectionCol)
        }
      }

      data.forEach(item => {
        if (item.group && item.group instanceof Array && item.group.length) {
          const first = item.group[0]
          const firstLabel = typeof first === 'string' ? first : first.label
          let rootColumn = findColumn(columns, firstLabel)
          if (!rootColumn) {
            rootColumn = createColum(first)
            columns.push(rootColumn)
          }
          const g = item.group.slice(1)
          const lastColumn = g.reduce(function(a1, a2) {
            let column = findColumn(a1.children, a2)
            if (!column) {
              column = createColum(a2)
              a1.children.push(column)
            }
            return column
          }, rootColumn)
          lastColumn.children.push(item)
        } else {
          columns.push(item)
        }
      })
      this.$slots.default && columns.push(this.$slots.default)
      this.$slots.toolbar && columns.push(this.$slots.toolbar)

      return columns
    },
    // showTooltip render
    formatTooltip(h, item) {
      // if (item['show-overflow-tooltip']) {
      item.scopedSlots = item.scopedSlots || {
        default: ({ row, column, $index }) => {
          return h('span', [column && column.formatter ? column.formatter(row, column, row[item.prop], $index) : this._v(row[item.prop] || this.emptyColumnText)])
        }
      }
      // }
      return item
    },
    renderColumn(h, item) {
      if (!item) {
        return this._e()
      }
      if (Object.prototype.toString.call(item) === '[object Array]') {
        return item
      }
      if (item.children && item.children instanceof Array && item.children.length) {
        const { children, ...props } = item
        return h('el-table-column', { props }, this._l(children, this.renderColumn.bind(this, h)))
      } else if (item.label) {
        const { scopedSlots, ...props } = item
        return h('el-table-column', { key: item.label, props, scopedSlots })
      }
    },

    renderTable(h) {
      const { treeLoad } = this
      const columns = this.genFields(this.fields.map(this.formatTooltip.bind(this, h)))
      const children = columns.map(this.renderColumn.bind(this, h))
      return h('Table', {
        ref: 'table',
        props: treeLoad ? Object.assign(this.$options.propsData, { load: treeLoad }) : this.$options.propsData,
        on: this.$listeners
        // scopedSlots
      }, children
        .concat(this.$slots.empty ? this.$slots.empty.map(cloneVNode.bind(this, h)) : this._e())
        .concat(this.$slots.append ? this.$slots.append.map(cloneVNode.bind(this, h)) : this._e())
      )
    }
  });
   [].concat(Object.keys(Table.methods)).forEach(functionName => {
    wrapTable.methods[functionName] =
      function(...args) {
        return this.$refs.table[functionName].apply(this.$refs.table, args)
      }
    // this.$refs.table[functionName].bind(this.$refs.table)
  })
  wrapTable.render = function(h) {
    const children = []
    if (this.$slots.searchPanel) {
      children.push(this.$slots.searchPanel)
    }
    if (this.$slots.toolPanel) {
      children.push(this.$slots.toolPanel)
    }
    // 调用 this.data get 触发 diff
    children.push(this.renderTable(h, this.data))
    if (this.pagination) {
      children.push(h('Pagination', {
        staticClass: "pagination clearfix",
        attrs: {
          background: true,
          pageSize: this.limit,
          pageSizes: this.pageSizes,
          currentPage: this.page,
          total: this.total,
          layout: this.paginationLayout,
          sizePrefix: '每页显示',
          sizeSuffix: '条记录'
        },
        on: {
          "current-change": this.handlePageChange,
          "size-change": this.handleSizeChange
        }
      }))
    }
    return h('div', {
      staticClass: 'wrap-table clearfix'
    }, children)
  }

  export default wrapTable

  </script>
  <style lang="scss">
  .wrap-table{
    .el-table{
      .c-button-list{
        justify-content: center;
        .btn{
              width: 24px;
              box-sizing: border-box;
        }
      }
    }
    .el-pagination__sizes{
      .el-select {
        display: inline-block;
         .el-input,.el-input__inner{
           width: 70px;
           height: 30px;
         }
       }
       span{
         color: #606266;
         font-size: 14px;
         font-weight: normal;
         i{
           margin: 0px 5px;
           font-style: normal
         }
       }
    }
    .btn {
      cursor: pointer;
    }
    .pagination{
       margin: 22px 0;
       text-align: right;
    }
    .el-pagination__total {
      font-size: 14px!important;
    }
    .toolbar{
      .cell{
        .item{
          margin:0 5px;
        }
      }
    }
    .toolPanel{
      margin: 5px 0;
    }
  }

  </style>

