<template>
  <div class="file-upload-multi">
    <el-upload
      :class="[readonly ? 'noAdd' : '']"
      class="file-upload-container"
      :disabled="readonly"
      :auto-upload="true"
      :on-success="onSuccess"
      :on-error="onError"
      :before-upload="beforeUpload"
      :on-remove="handleRemove"
      :file-list="fileList"
      :action="action"
      :accept="accept"
      :data="extraData"
      :headers="headers"
      :http-request="httpRequest"
      drag
      multiple
    >
      <div class="upload-tips">
        <img src="../icons/upload.png" class="upload-img" alt="" />
        <div class="el-upload__text">点击或将文件拖拽到这里，支持批量上传</div>
      </div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: 'fileUploadMulti',
  props: {
    readonly: {
      type: Boolean,
      default: () => false
    },
    service: {
      type: Function,
      default: () => () => {}
    },
    limit: {
      type: Number,
      default: 1
    }
  },
  computed: {
    action() {
      const action = this.$attrs.action
      return action
    },
    accept() {
      const accept = this.$attrs.accept 
      return accept
    },
    headers() {
      const headers = this.$attrs.headers || {}
      return headers
    },
    extraData() {
      const data = this.$attrs.data || {}
      return data
    }
  },
  watch: {
    fileList(val) {
      this.$emit('change', val)
    },
    sourceFile() {
      this.handleSourceFile()
    }
  },
  mounted() {
    this.sourceFile.length && this.handleSourceFile()
  },
  data() {
    return {
      fileList: [],
      sourceFile: []
    }
  },
  methods: {
    // 自定义上传
    httpRequest(content) {
      const formData = new FormData()
      formData.append('file', content.file)
      this.service({
        method: 'post',
        url: content.action,
        data: formData,
        processData: false, // 告诉axios不要去处理发送的数据(重要参数)
        contentType: false // 告诉axios不要去设置Content-Type请求头
      })
        .then((res) => {
          if (res.success) {
            content.onSuccess(res)
          } else {
            content.onError()
          }
        })
        .catch((err) => {
          content.onError(err)
        })
    },
    // 删除
    handleRemove(file) {
      console.log(file)
      const index = this.fileList.findIndex((x) => x.uid === file.uid)
      if (index !== -1) {
        this.fileList.splice(index, 1)
      }
    },
    // 上传成功
    onSuccess(response, file, fileList) {
      console.log(response, 'response')
      console.log(file, 'file')
      this.fileList = fileList
      this.$emit('_getUrl', fileList)
    },
    // 上传失败
    onError(error, file, fileList) {
      console.log(error, 'error')
      console.log(file, 'file')
      console.log(fileList, 'fileList')
    },
    // 处理传过来的图片
    handleSourceFile() {
      this.fileList = this.sourceFile.map((item) => ({
        name: item.name || item.url,
        raw: {
          type: item.type === 'pdf' ? 'application/pdf' : `${item.type}/`
        },
        response: {
          data: {
            ...item.response.data,
            url: item.url
          }
        },
        status: 'success',
        ...item,
        url: item.url
      }))
      // console.log('this.fileList:::::::', this.fileList)
    },
    // 上传文件之前
    beforeUpload(file) {
      console.log(this.fileList.length)
      if (this.fileList.length + 1 > this.limit) {
        this.$message.error(`最多上传${this.limit}份`)
        return false
      }
      if (file.length > this.limit) {
        this.$message.error(`最多上传${this.limit}份`)
        return false
      }
    }
  }
}
</script>

