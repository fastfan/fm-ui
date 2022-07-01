/* eslint-disable no-fallthrough */
/* eslint-disable no-prototype-builtins */
<!--
 * @Author: fastfan
 * @Date: 2022-06-28 15:41:33
 * @LastEditors: fastfan
 * @LastEditTime: 2022-07-01 12:09:36
 * @Description: your description
-->
<script>
import FForm from "../../lib/form/index.js";
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
} from "./render/index.js";

const components = {
  SelectTime: () => import("./select/SelectTime"),
  SelectTimeRange: () => import("./select/SelectTimeRange"),
};
const componentList = Object.keys(components);

export default {
  name: "FmForm",
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
  // components,
  mixins: [FForm],
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
    this.R.cascaderRender = function(h, item, opts) {//新增级联选择器 
    this.itemDatas = item;
    if(item.prop === 'eventType') {//事件类型option赋值
      item.props.options = this.eventTypeList
    }
    let _this = this;
     return [h("el-cascader", {
       props:{
          ...item.props
        },
       on: {
          change: function (event) {      
              _this.itemDatas.props.value = event;//显示名称
              _this.mixinEvent(
              _this.model[item.prop] = event[event.length-1],//只要最后一项
              _this.emitRelated(event[event.length-1], item.relatedFields, item.ref || item.prop)
            );
          },
        },
       },opts,this.$slots.default )]
    }
    componentList.forEach((name) => {
      this.R[`${name}Render`] = function (h, item, opts) {
        console.log(opts)
        if (!item.anchor) {
          item.anchor = {
            span: 8,
            lg: 12,
            sm: 12,
          };
        }
        console.log(name);
        opts.on["change"] = this.mixinEvent(
          opts.on["change"],
          this.handleChange.bind(this, item)
        );
      return [h(name,opts,this.$slots.default )]
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
    wrapFormItem(h, { label, prop }, children) {
      return h(
        "el-form-item",
        {
          attrs: {
            label,
            prop,
          },
          key: prop,
          class: "form-item",
        },
        children
      );
    },
    wrapCol(h, { anchor }, children) {
      const Ac = typeof anchor;
      const span = (Ac === "object" ? anchor.md : anchor) || 8;
      const lg = (Ac === "object" ? anchor.lg : anchor) || 8;
      const sm = (Ac === "object" ? anchor.sm : anchor) || 12;
      const xs = (Ac === "object" ? anchor.xs : anchor) || 12;
      const xl = (Ac === "object" ? anchor.xl : anchor) || 6;
      const attrs = {
        span,
        lg,
        xl,
        xs: Math.max(xs, 12),
        sm: Math.max(sm, 12),
      };
      return h("el-col", { attrs }, [children]);
    },
    wrapForm(h, children) {
      console.log(children)
      return h(
        "form",
        {
          staticClass: "el-form wrap-form",
          class: {
            ["el-form--label-" + this.labelPosition]: this.labelPosition,
            "el-form--inline": this.inline,
          },
        },
        children
      );
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
    renderItems(h, items = this.items) {
      console.log(items)
      items = items.filter(this.itemFilters);

      return items
        .map(this.genChild.bind(this, h))
        .map((children, i) => {
          return this.wrapFormItem(h, items[i], children);
        })
        .map((children, i) => {
          return this.inline ? this.wrapCol(h, items[i], children) : children;
        });
    },
  },
  render(h) {
    return this.wrapForm(h, [
      this.$slots.default,
      h(
        "el-row",
        { staticClass: "fields-box" },
        this.renderItems(h, this.items)
      ),
    ]);
  },
};
</script>
