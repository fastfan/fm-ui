<template>
  <div>
    <el-button type="primary" @click="dialogFormVisible = true"
      >主要按钮</el-button
    >
    <el-dialog title="收货地址" width="100%" :visible.sync="dialogFormVisible">
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
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import request from "@/utils/request";
import { cascaderData } from "@/utils/data.js";
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
          anchor: 15,
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
          anchor: 5,
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
          anchor: 4,
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
          anchor: 12,
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
          anchor: 9,
          required: true,
          disabled: true,
        },
        {
          label: "颜色选择器",
          prop: "colorPickerVal",
          placeholder: "请输入车牌号",
          anchor: 3,
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
          anchor: 6,
          xType: "SelectTime.date",
        },
        {
          label: "时间week",
          prop: "receiptTime2",
          placeholder: "请选择入库时间",
          anchor: 6,
          xType: "SelectTime.week",
          format: "yyyy 第 WW 周",
          valueFormat: "yyyy-MM-dd",
        },
        {
          label: "时间month",
          prop: "receiptTime3",
          placeholder: "请选择入库时间",
          anchor: 6,
          xType: "SelectTime.month",
          format: "yyyy-MM",
          valueFormat: "yyyy-MM",
        },
        {
          label: "时间year",
          prop: "receiptTime4",
          placeholder: "请选择入库时间",
          anchor: 6,
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
          anchor: 12,
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
          anchor: 12,
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
            accept: ".jpg,.jpeg,.png,.gif,.pdf,.JPG,.JPEG,.PDF,.doc,.docx",
            data: {},
            headers: {},
            limit: 3,
            action: "/municipal/api/file/uploadFile",
            readonly: false,
            service: request,
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
            service: request,
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
        chargeTimeInterval: '10:00-12:00', //或['10:00','12:00']
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
<style scoped lang="scss">
:deep(.el-dialog__wrapper){
  overflow:hidden;
}
:deep(.el-dialog) {
  margin-top: 0 !important;
  overflow:hidden;
}
:deep(.el-dialog__body) {
  height: calc(100vh - 156px);
  overflow-y: scroll;
}
:deep(.el-dialog__footer) {
  position: fixed;
  bottom: 0;
  text-align: right;
  padding: 0 20px;
  height: 64px;
  line-height: 64px;
  width: 100%;
  border: 1px solid #ccc;
  z-index: 999;
  background: #fff;
}
</style>
