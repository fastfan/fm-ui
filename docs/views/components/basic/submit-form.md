---
title: 提交表单组件
date:
sidebar: "auto"

publish: false
---



## 基本用法

基于**cp-form**封装的**提交组件**，用于**表单新增、编辑**，绑定**验证功能**，**响应式栅栏布局（每行为24 分栏）**，表单内有的类型**xtype**完全兼容**cui**中对应表单组件类型，如**xtype:'input'**对应cui的**c-input**组件,所以c-input有的**attributes**,xtype也支持，目前支持的xtype有以下几种：**input,select,inputNumber,colorPicker,rate,selectTime,switch,slot,checkbox,radio,SelectTimeRange,cascader,upload,dragUpload**这几种常用的表单类型,其中**selectTime,SelectTimeRange,upload,dragUpload，inputNumber,colorPicker,rate,cascader**是在cp-form基础上**混入**的新组件,除**upload,dragUpload**，为了简化上传逻辑与处理文件而进行复杂封装外，上述都兼容cui,upload,dragUpload因为做了简单化处理，传参稍有差异，下方案例有写，请参考以下**例子**。

::: demo

```html
<template>
  <div>
    <fm-submit-form
        :items="searchFields"
        :model="searchModel"
        :rules="rules"
        ref="submitForm"
        :inline="true"
        label-position="top"
        :disabled="false"
        :fileHandle="fileHandle"
        :previewHandle="previewHandle"
        @cascaderExtraData="cascaderExtraData"
      />
  </div>
</template>

<script>
// import request from "@/utils/request";
// import { cascaderData } from "@/utils/data.js";
const cascaderData = []
const xStore = [
  { label: "美食/餐厅线上活动", value: 0 },
  { label: "地推活动", value: 1 },
  { label: "线下主题活动", value: 2 },
  { label: "单纯品牌曝光", value: 3 },
];
export default {
  components: {},
  props: {},
  data() {
    return {
      dialogFormVisible: false,
      rules: {
        licenseNo: [
          { required: true, message: "请选择审核结果", trigger: "blur" },
        ],
        operator: [
          { required: true, message: "请填写审核意见", trigger: "change" },
        ],
        uploadValue: [
          { required: true, message: "请上传图片", trigger: "change" },
        ],
        uploadValue2: [
          { required: true, message: "请上传图片", trigger: "change" },
        ],
        receiptTime: [
          { required: true, message: "请上传图片", trigger: "change" },
        ],
        receiptTime2: [
          { required: true, message: "请上传图片", trigger: "change" },
        ],
        receiptTime3: [
          { required: true, message: "请上传图片", trigger: "change" },
        ],
        receiptTime4: [
          { required: true, message: "请上传图片", trigger: "change" },
        ],
        receiptTime5: [
          { required: true, message: "请上传图片", trigger: "change" },
        ],
        receiptTime6: [
          { required: true, message: "请上传图片", trigger: "change" },
        ],
        receiptTime7: [
          { required: true, message: "请上传图片", trigger: "change" },
        ],
        receiptTime8: [
          { required: true, message: "请上传图片", trigger: "change" },
        ],
        logFlag: [{ required: true, message: "请上传图片", trigger: "change" }],
        checkOne: [
          { required: true, message: "请上传图片", trigger: "change" },
        ],
        radioOne: [
          { required: true, message: "请上传图片", trigger: "change" },
        ],
        textareaValue: [
          { required: true, message: "请上传图片", trigger: "change" },
        ],
        maintainDeptId: [
          { required: true, message: "请上传图片", trigger: "change" },
        ],
      },
      searchFields: [
        {
          label: "输入框",
          prop: "licenseNo",
          placeholder: "请输入车牌号",
          anchor: 10,
          required: true,
          // eslint-disable-next-line no-unused-vars
          prepend: (h) => {
            return <template slot="prepend">Http://</template>;
          },
          // eslint-disable-next-line no-unused-vars
          append: (h) => {
            return <template slot="append">.com</template>;
          },
          on: {
            input: function (val) {
              console.log("inputval::::::", val);
            },
          },
        },
        {
          label: "计数器",
          prop: "inputNum",
          placeholder: "请输入车牌号",
          anchor: 7,
          required: true,
          xType: "inputNumber",
          min: 1,
          max: 10,
          size: "small",
          props: {
            value: "",
          },
          on: {
            change: function (val) {
              console.log("inputNumVal::::::", val);
            },
          },
        },
        {
          label: "评分",
          prop: "rateNum",
          placeholder: "请输入车牌号",
          anchor: 7,
          required: true,
          xType: "rate",
          colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
          props: {
            value: "",
          },
          on: {
            change: (val) => {
              console.log("rateval:::::::", val);
            },
          },
        },
        {
          label: "滑块",
          prop: "sliderNum",
          placeholder: "请输入车牌号",
          anchor: 24,
          required: true,
          xType: "slider",
          "show-input": true,
          props: {
            value: "",
          },
          on: {
            change: function (val) {
              console.log("sliderNumVal::::::", val);
            },
          },
        },
        {
          label: "颜色",
          prop: "colorPickerVal",
          placeholder: "请输入车牌号",
          anchor: 12,
          required: true,
          disabled: true,
        },
        {
          label: "颜色选择器",
          prop: "colorPickerVal",
          placeholder: "请输入车牌号",
          anchor: 12,
          required: true,
          xType: "colorPicker",
          props: {
            value: "",
          },
          on: {
            change: function (val) {
              console.log("colorPickerVal::::::", val);
            },
          },
        },
        {
          label: "时间date",
          prop: "receiptTime",
          placeholder: "请选择入库时间",
          anchor: 12,
          xType: "SelectTime.date",
        },
        {
          label: "时间week",
          prop: "receiptTime2",
          placeholder: "请选择入库时间",
          anchor: 12,
          xType: "SelectTime.week",
          format: "yyyy 第 WW 周",
          valueFormat: "yyyy-MM-dd",
        },
        {
          label: "时间month",
          prop: "receiptTime3",
          placeholder: "请选择入库时间",
          anchor: 12,
          xType: "SelectTime.month",
          format: "yyyy-MM",
          valueFormat: "yyyy-MM",
        },
        {
          label: "时间year",
          prop: "receiptTime4",
          placeholder: "请选择入库时间",
          anchor: 12,
          xType: "SelectTime.year",
          format: "yyyy",
          valueFormat: "yyyy",
        },
        {
          label: "时多选dates",
          prop: "receiptTime5",
          placeholder: "请选择入库时间",
          anchor: 12,
          xType: "SelectTime.dates",
          format: "yyyy-MM-dd",
          valueFormat: "yyyy-MM-dd",
        },
        {
          label: "时间daterange",
          prop: "receiptTime6",
          placeholder: "请选择入库时间",
          anchor: 12,
          xType: "SelectTime.daterange",
          format: "yyyy-MM-dd",
          valueFormat: "yyyy-MM-dd",
        },
        {
          label: "时间monthrange",
          prop: "receiptTime7",
          placeholder: "请选择入库时间",
          anchor: 12,
          xType: "SelectTime.monthrange",
          format: "yyyy-MM",
          valueFormat: "yyyy-MM",
        },
        {
          label: "时间SelectTimeRange.datetimerange",
          prop: "receiptTime8",
          placeholder: "请选择入库时间",
          anchor: 12,
          xType: "SelectTimeRange.datetimerange",
          format: "yyyy-MM-dd HH:mm:ss",
          valueFormat: "yyyy-MM-dd HH:mm:ss",
        },
        {
          label: '时间timepicker',
          prop: 'chargeTimeInterval',
          props: {
            value: ''
          },
          anchor: 24,
          required: true,
          xType: 'time',
          isRange: true,
          arrowControl: true,
          format: 'HH:mm',
          valueFormat: 'HH:mm',
          className: 'receiptTime',
          startPlaceholder: '开始时间',
          endPlaceholder: '结束时间',
          placeholder: '选择时间范围'
        },
        {
          label: "下拉选",
          prop: "operator",
          xType: "select",
          filterable: true,
          placeholder: "请选择承办人员",
          anchor: 12,
          xStore: () => {
            return xStore;
          },
          on: {
            change: (val) => {
              console.log("selectChange:::", val);
            },
          },
        },
        {
          label: "级联cascader",
          prop: "maintainDeptId",
          xType: "cascader",
          placeholder: "请选择",
          anchor: 12,
          props: {
            name: "maintainDeptId",
            value: "",
            props: {
              value: "value",
              label: "label",
              children: "children",
            },
            showAllLevels: true,
            separator: "/",
            options: [],
            clearable: true,
          },
          xStore: () => {
            return cascaderData;
          },
          on: {
            input: (val) => {
              console.log("cascaderChange:::", val);
            },
          },
        },
        {
          label: "开关switch",
          prop: "logFlag",
          xType: "switch",
          anchor: 12,
          "active-value": 1,
          "inactive-value": 0,
          "active-color": "#13ce66",
          "inactive-color": "#ff4949",
        },
        {
          label: "自定义jsx内容",
          prop: "",
          anchor: 12,
          xType: "slot",
          on: {
            click: () => {
              alert("slot click");
              this.searchModel.slotValue = 10;
            },
          },
          template: <el-button type="success">aaaa</el-button>,
        },
        {
          label: "复选框checkbox",
          prop: "checkOne",
          xType: "checkbox",
          xStore: [
            { label: "美食/餐厅线上活动" },
            { label: "地推活动" },
            { label: "线下主题活动" },
            { label: "单纯品牌曝光" },
          ],
          anchor: 24,
          on: {
            input: (val) => {
              console.log("checkChange:::", val);
            },
          },
        },
        {
          label: "单选框radio",
          prop: "radioOne",
          xType: "radio",
          xStore: xStore,
          anchor: 24,
          on: {
            input: (val) => {
              console.log("radioChange:::", val);
            },
          },
        },
        {
          label: "上传upload",
          prop: "uploadValue",
          placeholder: "请输入车牌号",
          anchor: 12,
          xType: "upload",
          attrs: {
            data: {},
            headers: {},
            limit: 3,
            action: "/municipal/api/file/uploadFile",
            readonly: false,
            // service: request,
             accept: ".jpg,.jpeg,.png,.gif,.pdf,.JPG,.JPEG,.PDF,.doc,.docx",
            description: '经营管理单位营业执照（副本）复印件',
            "before-upload": (file) => {
              return new Promise((resolve, reject) => {
                // 判断上传格式*****************
                const isJPG = file.type === "image/jpeg" || "image/png";
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isJPG) {
                  this.$message.error("上传图片只能是 JPG、JPEG、PNG 格式!");
                  reject();
                }
                if (!isLt2M) {
                  this.$message.error("上传图片大小不能超过 2MB!");
                  reject();
                }
                resolve();
              });
            },
          },
        },
        {
          label: "拖拽上传",
          prop: "uploadValue2",
          placeholder: "请输入车牌号",
          anchor: 12,
          xType: "dragUpload",
          attrs: {
            limit: 3,
            data: {},
            headers: {},
            accept: "*/*",
            action: "/municipal/api/file/uploadFile",
            readonly: false,
            // service: request,
          },
        },
        {
          label: "文本域",
          prop: "textareaValue",
          type: "textarea",
          anchor: 24,
        },
      ],
      searchModel: {
        uploadValue: [
          {
            url: "http://10.10.77.134:9310/jz-file/sanitation/2023/04/07/397bbc2b33cc4ecdb040691046676afb.webp",
          },
          {
            url: "http://10.10.77.134:9310/jz-file/sanitation/2023/04/07/397bbc2b33cc4ecdb040691046676afb.webp",
          },
        ],
        uploadValue2: [
          {
            url: "http://10.10.77.134:9310/jz-file/sanitation/2023/04/07/397bbc2b33cc4ecdb040691046676afb.webp",
          },
          {
            url: "http://10.10.77.134:9310/jz-file/sanitation/2023/04/07/397bbc2b33cc4ecdb040691046676afb.webp",
          },
        ],
        sliderNum: 50,
        inputNum: 1,
        rateNum: 4,
        colorPickerVal: "#409EFF",
        operator: 1,
        slotValue: null,
        receiptTime: "2023-09-09 12:00:00",
        receiptTime2: "2023-09-09",
        receiptTime3: "2023-09",
        receiptTime4: "2023",
        receiptTime5: ["2023-05-13", "2023-05-14"],
        receiptTime6: ["2023-05-13", "2023-05-14"],
        receiptTime7: ["2023-05", "2023-06"],
        receiptTime8: ["2023-09-09 12:00:00", "2023-09-19 12:00:00"],
        licenseNo: 11,
        radioOne: 2,
        checkOne: ["美食/餐厅线上活动"],
        logFlag: 1,
        textareaValue: "美食/餐厅线上活动",
        maintainDeptId: ["zhinan", "shejiyuanze", "yizhi"],
      },
    };
  },
  computed: {},
  watch: {},
  methods: {
    // 获取cascader额外值
    cascaderExtraData(data) {
      console.log("cascaderExtraData:::::", data);
    },
    // 处理文件
    fileHandle(val) {
      // console.log('val:::::2222222', val)
      return val.map((x) => ({
        id: x.response.data.id,
        fileName: x.response.data.originalFileName,
        fileUrl: x.response.data.path,
      }));
    },
    // 处理预览
    previewHandle(val) {
      // console.log('previewHandle:::::', val)
      if (Array.isArray(val)) {
        return val.map((x) => {
          return {
            url: x.url,
            id: x.url,
            path: x.url,
            fileId: x.url,
            fileUrl: x.url,
            type: "image",
            fileName: x.url,
          };
        });
      }
      return [];
    },
    onSubmit() {
      this.$refs["submitForm"].validate((valid) => {
        if (valid) {
          alert("submit!");
          console.log("searchModel:::::::::", this.searchModel);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
  created() {},
  mounted() {},
};
</script>

```

:::
## SubmitForm

### Attributes

|     参数      |                        说明                        |   类型   |     可选值     | 默认值 |
| :-----------: | :------------------------------------------------: | :------: | :------------: | :----: |
|    inline     |                    是否行内表单                    | Boolean  |   true/false   |  true  |
|  labelWidth   |                     文本项宽度                     |  Number  |       -        |   --   |
| labelPosition |                      本项位置                      |  String  | top/left/right | right  |
|     items     |                     表单配置项                     |  Array   |       -        |   []   |
|     model     |                  双向绑定数据对象                  |  Object  |       -        |   {}   |
|  fileHandle   | xType 为 upload 和 dragUpload 时传入的文件处理函数 | Function |       —        |   -    |
| previewHandle | xType 为 upload 和 dragUpload 时传入的处理预览函数 | Function |       —        |   -    |
|     rules     |           表单校验规则同cui>c-form>rules           | Object - |       —        |   {}   |
|     other     |            剩余参数请参考 c-form 的参数            |    -     |       —        |   -    |

### Events

| 事件名称          |              说明               |                                 参数 |
| :---------------- | :-----------------------------: | -----------------------------------: |
| cascaderExtraData | 获取 xType 为 cascader 的额外值 | data(返回 cascader 值改变时的额外值) |

## items

#### 特殊说明

1. **anchor**属性用于响应式布局，切分栏，默认24
2. **xStore**属性是checkbox、radio、select、cascader特有属性，存放子项的数据，如下拉框的数据，select、cascader要求其为函数，checkbox、radio要求其为数组，**确认传入的类型**，否则会导致渲染出错。
3. **upload,dragUpload**为**二次封装**的上传组件（目的，开箱即用），upload是常用的上传样式（方块中间有一个加号的样式，picture-card模式），dragUpload为二次封装的可拖拽上传文件的上传组件，支持多选，其特有属性值在下方例子中均已列出（其中request参数为为axios实例），请查看，除上述例子内列举的属性外，其余cui的upload属性暂不支持，因为二次封装目的是为了方便，所以上传成功、删除等事件默认处理过，暂不支持自定义处理（**xtype:upload**只支持自定义传入before-upload），若项目需其他属性，请用**xtype:slot**自定义上传组件
4. 各表单类型的属性值请参考cui文档[elementUI组件库](https://element.eleme.cn/2.15/#/zh-CN/component/installation)，并熟悉vue渲染函数原理[Vue中 渲染函数（render）的介绍和应用](https://juejin.cn/post/7030362678199582734),**input,select,inputNumber,colorPicker,rate,selectTime,switch,slot,checkbox,radio,SelectTimeRange,cascader,upload,dragUploadz**其中所有属性在渲染时都放到了attrs中，混入的**inputNumber,colorPicker,rate,selectTime，cascader**必须在表单配置项内传入 ***props:{value:''}*** 用以完成双向绑定

### Attributes

|  参数  |                         说明                         |      类型      |                  可选值                   | 默认值 |
| :----: | :--------------------------------------------------: | :------------: | :---------------------------------------: | :----: |
| xType  |                      表单项类型                      |     string     | SelectTime.date,.datetime,.datetimerange  |   —    |
| xType  |                      表单项类型                      |     string     |    time,checkbox,radio,input,number,switch     |   —    |
| xType  |                      表单项类型                      |     string     |    rate,inputNumber,slider,colorPicker    |   —    |
| xType  |                      表单项类型                      |     string     |        upload,dragUpload,cascader         |   —    |
| anchor |                     每项所占栅格                     |     number     |                   1-24                    |   24   |
| label  |                       标签文本                       |     string     |                     -                     |   -    |
|  prop  |                     数据对象来源                     |     string     |                     -                     |   -    |
| xStore |                     绑定项子数组                     | Array/Function |            []/()=>{return []}             |   -    |
| props  |                     表单项 props                     |     Object     | {value,...others(cp-form内的props其余值)} |   -    |
| other  | 其他属性配置同 cp-form 内各表单类型对应的 Attributes |       -        |                     —                     |   —    |

### Events

| 事件名称 | 说明         | 参数 |
| -------- | ------------ | ---- |
| change   | 值改变时事件 | --   |
| input    | 值改变时事件 | --   |
