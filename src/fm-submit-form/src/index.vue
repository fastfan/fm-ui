<script>
/* eslint-disable */
import { Form } from "element-ui";
import FilePreview from "./components/filePreview/index.js";
import FileUploadMulti from "./components/fileUploadMulti/index.js";
import {
  inputRender,
  numberRender,
  textRender,
  customRender,
  slotRender,
  switchRender,
  checkboxRender,
  radioRender,
  selectRender
} from "./components/render/index.js";
// console.log(Form)
const components = {
  SelectTime: () => import("./components/SelectTime"),
  SelectTimeRange: () => import("./components/SelectTimeRange"),
};
const componentList = Object.keys(components);

export default {
  name: "FmSubmitForm",
  mixins: [Form],
  directives: {
    focus: {
      inserted: function (el, binding, vnode) {
        if (vnode.componentInstance && vnode.componentInstance.elForm) {
          vnode.componentInstance.elForm.focusItem = vnode.componentInstance;
        }
        setTimeout(function () {
          vnode.componentInstance &&
            vnode.componentInstance.focus &&
            vnode.componentInstance.focus();
        }, 300);
      },
    },
  },
  provide() {
    return {
      Form: this,
    };
  },
  props: {
    inline: {
      type: Boolean,
      default: true,
    },
    labelWidth: String,
    labelPosition: {
      type: String,
      default: "right",
    },
    model: {
      type: Object,
      default() {
        return {};
      },
    },
    rules: Object,
    items: {
      type: Array,
      default() {
        return [];
      },
    },
     // 回填文件处理 需要return 图片地址
     previewHandle: {
      type: [Function, Boolean],
      default: false,
    },
    // 文件处理
    fileHandle: {
      type: [Function, Boolean],
      default: false,
    },
  },
  data() {
    return {
      focusItem: null,
    };
  },
  computed: {
    fieldsLength() {
      return this.items && this.items.length;
    },
  },
  components: { ...components, FilePreview, FileUploadMulti },
  beforeCreate() {
    this.R = this.R || {};
    this.R.inputRender = inputRender;
    this.R.textRender = textRender;
    this.R.customRender = customRender;
    this.R.slotRender = slotRender;
    this.R.switchRender = switchRender;
    this.R.checkboxRender = checkboxRender;
    this.R.radioRender = radioRender;
    this.R.selectRender = selectRender;
    this.R.numberRender = numberRender;
    this.R.inputNumberRender = function (h, item, opts) {
      // 计数器
      return this.handleRender("el-input-number", h, item, opts);
    };
    this.R.sliderRender = function (h, item, opts) {
      // 滑块
      return this.handleRender("el-slider", h, item, opts);
    };
    this.R.rateRender = function (h, item, opts) {
      // 评分
      return this.handleRender("el-rate", h, item, opts);
    };
    this.R.colorPickerRender = function (h, item, opts) {
      // 颜色选择器
      return this.handleRender("el-color-picker", h, item, opts);
    };
    // 级联选择器
    this.R.cascaderRender = function (h, item, opts) {
      //新增级联选择器
      item.props.options = item.xStore();
      item.props.value = opts.attrs.value;
      const _this = this;
      return [
        h(
          "el-cascader",
          {
            attrs: {
              ...item?.attrs,
            },
            props: {
              ...item?.props,
            },
            ref: item.prop,
            on: {
              ...item?.on,
              change: function (event) {
                _this.model[item.prop] = event;
                _this.$emit("cascaderExtraData", {
                  value:
                    _this.$refs[`${item.prop}`].getCheckedNodes()[0]?.value,
                  path: _this.$refs[`${item.prop}`].getCheckedNodes()[0]?.path,
                  pathLabels:
                    _this.$refs[`${item.prop}`].getCheckedNodes()[0]
                      ?.pathLabels,
                });
                _this.mixinEvent(
                  _this.model[item.prop],
                  _this.emitRelated(
                    event,
                    item.relatedFields,
                    item.ref || item.prop
                  )
                );
              },
            },
          },
          opts,
          this.$slots.default
        ),
      ];
    };
    // 图片上传常规
    this.R.uploadRender = function (h, item, opts) {
      //新增文件上传
      const _this = this;
      return [
        h(
          "FilePreview",
          {
            attrs: {
              ...item?.attrs,
            },
            props: {
              ...item?.props,
            },
            ref: item.prop,
            on: {
              change: function (event) {
                // console.log('event:::::', event)
                if (_this.fileHandle) {
                  const result = _this.fileHandle(event);
                  _this.model[item.prop] = result;
                } else {
                  _this.model[item.prop] = event
                    .map((x) => x.response.data.id)
                    .join(",");
                }
                // console.log(_this.model[item.prop])
                _this.mixinEvent(
                  _this.model[item.prop],
                  _this.emitRelated(
                    event,
                    item.relatedFields,
                    item.ref || item.prop
                  )
                );
              },
              _getUrl: function () {
                // console.log('_this.$refs:::::::::::', _this.$refs)
                _this.$refs[item.prop].$parent.clearValidate();
              },
            },
          },
          opts,
          this.$slots.default
        ),
      ];
    };
    // 文件上传，支持多选与拖拽
    this.R.dragUploadRender = function (h, item, opts) {
      //新增文件上传
      const _this = this;
      return [
        h(
          "FileUploadMulti",
          {
            attrs: {
              ...item?.attrs,
            },
            props: {
              ...item?.props,
            },
            ref: item.prop,
            on: {
              change: function (event) {
                // console.log('event:::::', event)
                if (_this.fileHandle) {
                  const result = _this.fileHandle(event);
                  _this.model[item.prop] = result;
                } else {
                  _this.model[item.prop] = event
                    .map((x) => x.response.data.id)
                    .join(",");
                }
                // console.log(_this.model[item.prop])
                _this.mixinEvent(
                  _this.model[item.prop],
                  _this.emitRelated(
                    event,
                    item.relatedFields,
                    item.ref || item.prop
                  )
                );
              },
              _getUrl: function () {
                console.log("_this.$refs:::::::::::", _this.$refs);
                _this.$refs[item.prop].$parent.clearValidate();
              },
            },
          },
          opts,
          this.$slots.default
        ),
      ];
    };
    componentList.forEach((name) => {
      this.R[`${name}Render`] = function (h, item, opts) {
        if (!item.anchor) {
          item.anchor = 24;
        }
        // console.log(item.anchor);
        opts.on["change"] = this.mixinEvent(
          opts.on["change"],
          this.handleChange.bind(this, item)
        );
        return [h(name, opts)];
      };
    });
  },
  mounted() {
    this.$on("visible", () => {
      let componentInstance = this.focusItem;
      if (!componentInstance) {
        return;
      }
      setTimeout(function () {
        componentInstance.focus && componentInstance.focus();
        componentInstance = null;
      }, 300);
    });
    console.log("this.items:::::", this.items);
    this.items.map(async (_tt) => {
      if (_tt.xType === "upload" || _tt.xType === "dragUpload") {
        await this.handleEdit(_tt);
      }
    });
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    itemFilters(_item, _$index) {
      return true;
    },
    baseOptions(item, dataType) {
      const opts = {
        on: {},
        attrs: {
          ...item,
          value: this.model[item.prop],
          dataType,
        },
      };
      if (item.ref || item.prop) {
        opts.ref = item.ref || item.prop;
      }
      if (item.focus) {
        opts.directives = [
          {
            name: "focus",
            rawName: "v-focus",
          },
        ];
      }
      // 支持传入自定义class
      // eslint-disable-next-line no-prototype-builtins
      if (item.hasOwnProperty("class")) {
        opts.class = item.class || [];
      }
      // eslint-disable-next-line no-prototype-builtins
      if (
        // eslint-disable-next-line no-prototype-builtins
        item.hasOwnProperty("on") &&
        Object.prototype.toString.call(item.on) === "[object Object]"
      ) {
        for (const key in item.on) {
          opts.on[key] = item.on[key];
        }
      }
      return opts;
    },
    emitRelated(val, relatedFields, source) {
      this.$emit("el.form.update", val, this.$refs[source]);
      this.$refs[source] &&
        this.$refs[source].$emit("update", val, this.$refs[source], this);
      if (!relatedFields) {
        return false;
      }
      [].concat(relatedFields).forEach((ref) => {
        // eslint-disable-next-line no-prototype-builtins
        if (this.$refs.hasOwnProperty(ref)) {
          this.$refs[ref].$emit(
            "el.form.update",
            val,
            this.$refs[ref],
            this.$refs[source],
            this
          );
        } else {
          this.fields
            .filter((f) => f.prop === ref)
            .forEach((formItem) => {
              const custom = formItem.$children[0];
              custom.$emit(
                "el.form.update",
                val,
                custom,
                this.$refs[source],
                this
              );
            });
        }
      });
    },
    handleChange(item, e) {
      // element 表单验证空格输入也会通过，因此针对输入字符串去除首尾空格
      e = typeof e === "string" ? e.trim() : e;
      this.model[item.prop] = e;
      this.emitRelated(e, item.relatedFields, item.ref || item.prop);
    },
    mixinEvent(originFn, fn) {
      if (!originFn) {
        return fn;
      } else if (originFn instanceof Array) {
        return originFn.concat(fn);
      } else {
        return [originFn, fn];
      }
    },
    /**
     * 获取ItemRender
     */
    // eslint-disable-next-line no-unused-vars
    getItemRender(R, xType, _dataType) {
      return xType ? R[`${xType}Render`] : null;
    },
    /**
     * 生成Item
     */
    genChild(h, item) {
      const x = item.xType && item.xType.split(".");
      let xType = x && x[0];
      const dataType = (x && x[1]) || "";
      const opts = this.baseOptions(item, dataType);
      let fn = this.getItemRender(this.R, xType, dataType);
      if (!xType || !fn) {
        xType = "input";
        fn = this.R["inputRender"];
      }
      switch (xType) {
        case "checkbox":
        case "radio":
        case "input":
          opts.on["input"] = this.mixinEvent(
            opts.on["input"],
            this.handleChange.bind(this, item)
          );
          break;
        case "number":
        case "switch":
        case "select":
          opts.on["change"] = this.mixinEvent(
            opts.on["change"],
            this.handleChange.bind(this, item)
          );
        // eslint-disable-next-line no-fallthrough
        case "SelectTime":
          opts.on["change"] = this.mixinEvent(
            opts.on["change"],
            this.handleChange.bind(this, item)
          );
        // eslint-disable-next-line no-fallthrough
        case "SelectTimeRange":
          opts.on["change"] = this.mixinEvent(
            opts.on["change"],
            this.handleChange.bind(this, item)
          );
          break;
      }
      return fn.call(this, h, item, opts);
    },
    handleRender(name, h, item, opts) {
      const _this = this;
      item.props.value = opts.attrs.value;
      return [
        h(
          name,
          {
            attrs: {
              ...item,
            },
            props: {
              ...item.props,
            },
            ref: item.prop,
            on: {
              ...item?.on,
              input: function (event) {
                _this.model[item.prop] = event;
                _this.mixinEvent(
                  _this.model[item.prop],
                  _this.emitRelated(
                    event,
                    item.relatedFields,
                    item.ref || item.prop
                  )
                );
              },
            },
          },
          opts,
          this.$slots.default
        ),
      ];
    },
    async handleEdit(item) {
      const _this = this;
      // console.log('this.$refs:::::::,', _this.$refs)
      const ref = _this.$refs[item.prop];
      // console.log('refrefrefrefref:::::::,', ref)
      // console.log('_this.model:::::::,', _this.model)
      let fileList;
      if (this.previewHandle) {
        fileList = _this.previewHandle(_this.model[item.prop]);
        // console.log('fileList::::::', fileList)
        ref.sourceFile = fileList.map((x) => ({
          raw: {
            type: x.type,
          },
          response: {
            data: {
              ...x,
              id: x.id,
              url: x.url,
              fileUrl: x.url,
              fileName: x.fileName,
              fileId: x.fileId,
            },
          },
          name: x.fileName,
          status: "success",
          url: x.url,
        }));
        ref.handleSourceFile();
      }
    },
    wrapCol(h, { anchor }, children) {
      const Ac = typeof anchor;
      const span = (Ac === "object" ? anchor.span : anchor) || 24;
      const attrs = {
        span,
      };
      return h("el-col", { attrs, staticClass: "fields-box-item" }, [children]);
    },
    wrapFormItem(h, { label, prop, className = "" }, children) {
      // console.log(children)
      return h(
        "el-form-item",
        {
          attrs: {
            label,
            prop,
          },
          key: prop,
          class: `form-item ${className}`,
        },
        children
      );
    },
    wrapForm(h, children) {
      return h(
        "form",
        {
          staticClass: "el-form wrap-form",
          class: {
            ["el-form--label-" + this.labelPosition]: this.labelPosition,
            "el-form--inline": this.inline,
            "el-form--label-left": this.inline,
          },
        },
        children
      );
    },
    handleChange(item, e) {
      this.model[item.prop] = e;
      this.emitRelated(e, item.relatedFields, item.ref || item.prop);
    },
    renderItems(h, items = this.items) {
      items = items.filter(this.itemFilters);
      return items
        .map(this.genChild.bind(this, h))
        .map((children, i) => {
          return this.wrapFormItem(h, items[i], children);
        })
        .map((children, i) => {
          items[i].anchor = items[i].anchor ? items[i].anchor : 24;
          return this.inline ? this.wrapCol(h, items[i], children) : children;
        });
    },
  },
  render(h, children) {
    this.$nextTick(() => {
      this.items.forEach((_t) => {
        _t.anchor = _t?.anchor || 24;
      });
    });
    return this.wrapForm(h, [
      this.$slots.default,
      h(
        "el-row",
        { staticClass: "submit-fields-box" },
        this.renderItems(h, this.items)
      ),
    ]);
  },
};
</script>
