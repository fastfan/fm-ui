export const inputRender = function(h, item, opts) {
  return [h("el-input", opts)]
}
export const numberRender = function(h, item, opts) {
  return [h("el-input-number", opts)]
}

export const textRender = function(h, item, opts) {
  return [h('span', { staticClass: 'el-form-text' }, [this._v(opts.attrs.value)])]
}

export const customRender = function(h, item, opts) {
  return [item.render(opts)]
}

export const slotRender = function(h, item, opts) {
  return [h("div", opts, [typeof item.template === "function" ? item.template(h, opts) : item.template])]
}
export const switchRender = function(h, item, opts) {
  return [h("el-switch", opts)]
}
export const checkboxRender = function(h, item, opts) {
  return [h("el-checkbox-group", opts, [
    this._l(item.xStore, store => {
      return h('el-checkbox', { "props": { "label": store.label, "name": item.prop }})
    })
  ])]
}
export const radioRender = function(h, item, opts) {
  return [h("el-radio-group", opts, [
    item.xStore.map(store => {
      return h('el-radio', { "props": { label: store.value }}, [this._v(store.label)])
    })
  ])]
}
export const selectRender = function(h, item, opts) {
  return [h("el-select", opts, [
    this._l(typeof item.xStore === 'function' ? item.xStore() : item.xStore, store => {
      return h('el-option', { props: { label: store.label, value: store.value }})
    })
  ])]
}
