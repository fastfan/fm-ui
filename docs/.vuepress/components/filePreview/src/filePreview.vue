<template>
  <div class="file-preview">
    <el-upload
      list-type="picture-card"
      :class="[readonly ? 'noAdd' : '', hideUpload ? 'hideUpload' : '']"
      :disabled="readonly"
      :accept="accept"
      :data="extraData"
      :headers="headers"
      :auto-upload="true"
      :on-success="onSuccess"
      :on-error="onError"
      :on-progress="onProgress"
      :before-upload="onBeforeupload"
      :http-request="httpRequest"
      :file-list="fileList"
      :on-change="onChange"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <i slot="default" class="el-icon-plus" />
      <div slot="file" slot-scope="{ file }" class="box">
        <!-- 上传成功 -->
        <div v-if="file.status === 'success'" class="success">
          <i class="el-icon-check" />
        </div>
        <div v-if="file.status === 'ready'" class="loading">
          <i class="el-icon-loading" />
        </div>
        <!-- 文件列表 -->
        <div class="list" style="width: 100%">
          <!-- 图片 -->
          <div v-if="file.raw.type.startsWith('image')" style="height: 80px">
            <el-image
              :src="file.url"
              style="
                width: 100%;
                display: flex;
                align-items: center;
                height: 100%;
              "
              fit="contain"
            />
          </div>

          <!-- pdf application/pdf-->
          <div v-else-if="file.raw.type === FILETYPE.pdf" class="img">
            <img src="../icons/pdf.png" style="width: 36px; height: 36px" />
            <span
              style="
                width: 90%;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              "
              >{{ file.name }}</span
            >
          </div>

          <!-- audio -->
          <div v-else-if="file.raw.type.startsWith('audio')" class="img">
            <img src="../icons/audio.png" style="width: 36px; height: 36px" />
            <span
              style="
                width: 90%;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              "
              >{{ file.name }}</span
            >
          </div>

          <!-- doc：application/msword , docx：application/vnd.openxmlformats-officedocument.wordprocessingml.document -->
          <div
            v-else-if="
              file.raw.type === FILETYPE.doc || file.raw.type === FILETYPE.docx
            "
            class="img"
          >
            <img src="../icons/doc.png" style="width: 36px; height: 36px" />
            <span
              style="
                width: 90%;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              "
              >{{ file.name }}</span
            >
          </div>

          <!-- xlsx: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet    xls: application/vnd.ms-excel -->
          <div
            v-else-if="
              file.raw.type === FILETYPE.xls || file.raw.type === FILETYPE.xlsx
            "
            class="img"
          >
            <img src="../icons/excel.png" style="width: 36px; height: 36px" />
            <span
              style="
                width: 90%;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              "
              >{{ file.name }}</span
            >
          </div>

          <!-- pptx : application/vnd.openxmlformats-officedocument.presentationml.presentation  ppt: application/vnd.ms-powerpoint-->
          <div
            v-else-if="
              file.raw.type === FILETYPE.ppt || file.raw.type === FILETYPE.pptx
            "
            class="img"
          >
            <img src="../icons/PPT.png" style="width: 36px; height: 36px" />
            <span
              style="
                width: 90%;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              "
              >{{ file.name }}</span
            >
          </div>

          <!-- txt : text/plain -->
          <div v-else-if="file.raw.type === FILETYPE.txt" class="img">
            <img src="../icons/txt.png" style="width: 36px; height: 36px" />
            <span
              style="
                width: 90%;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              "
              >{{ file.name }}</span
            >
          </div>

          <!-- 视频 -->
          <div v-else-if="file.raw.type.startsWith('video')">
            <video :src="file.url" />
          </div>

          <!-- 没有预览 -->
          <div v-else class="img">
            <img src="../icons/other.png" class="preview" />
            <span
              style="
                width: 90%;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              "
              >{{ file.name }}</span
            >
          </div>
        </div>
        <!-- 操作按钮 -->
        <span
          v-if="file.status === 'success'"
          class="el-upload-list__item-actions"
        >
          <span
            v-if="
              file.raw.type.startsWith('image') ||
              file.raw.type.startsWith('video') ||
              file.raw.type.startsWith('audio') ||
              file.raw.type === FILETYPE.pdf ||
              file.raw.type === FILETYPE.docx ||
              file.raw.type === FILETYPE.xls ||
              file.raw.type === FILETYPE.xlsx ||
              file.raw.type === FILETYPE.ppt ||
              file.raw.type === FILETYPE.pptx ||
              file.raw.type === FILETYPE.txt
            "
            class="el-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
          >
            <i class="el-icon-zoom-in" />
          </span>
          <span
            v-if="!readonly"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
          >
            <i class="el-icon-delete" />
          </span>
        </span>
      </div>
    </el-upload>
    <el-dialog
      v-if="dialogVisible"
      :visible.sync="dialogVisible"
      :title="dialog.name"
      width="1000px"
      top="10vh"
      class="previrwDialog"
    >
      <!-- image -->
      <el-image
        v-if="dialog.raw.type.startsWith('image')"
        :src="dialog.url"
        class="imageBox"
        style="max-height: 70vh; max-width: 1000px"
        fit="cover"
      />

      <embed
        v-else-if="
          dialog.raw.type.startsWith('video') ||
          dialog.raw.type.startsWith('audio') ||
          dialog.raw.type === 'application/pdf' ||
          dialog.raw.type === 'text/plain'
        "
        style="width: 100%; height: 70vh"
        :src="dialog.url"
        :type="dialog.raw.type"
      />

      <div
        v-if="
          dialog.raw.type === FILETYPE.docx ||
          dialog.raw.type === FILETYPE.xls ||
          dialog.raw.type === FILETYPE.xlsx
        "
        class="docClass"
        style="width: 100%; height: 70vh; overflow: auto"
        ref="docRef"
        v-html="docHtml"
      ></div>
    </el-dialog>
  </div>
</template>

<script>

const FILETYPE = {
  image: [
    'gif',
    'jpeg',
    'jpg',
    'png',
    'svg+xml',
    'tiff',
    'jfif',
    'vnd.wap.wbmp',
    'webp'
  ],
  video: ['m4v', 'mov', 'mp4', 'ogv'],
  audio: ['oga', 'ogg', 'uvva', 'mp3'],
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  xls: 'application/vnd.ms-excel',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  pdf: 'application/pdf',
  ppt: 'application/vnd.ms-powerpoint',
  pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  txt: 'text/plain'
}
export default {
  name: 'FilePreview',
  props: {
    readonly: {
      type: Boolean,
      default: () => false
    },
    service: {
      type: Function,
      default: () => () => {}
    },
    beforeUpload: {
      type: Function,
      default: () => () => {}
    },
    sourceList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      docHtml: '',
      sourceFile: [],
      dialog: {},
      dialogVisible: false,
      fileList: []
    }
  },
  computed: {
    FILETYPE() {
      return FILETYPE
    },
    hideUpload() {
      const limit = this.$attrs.limit || 5 // 默认5个
      return this.fileList.length >= limit
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
    }
  },
  mounted() {},
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
      const index = this.fileList.findIndex((x) => x.uid === file.uid)
      if (index !== -1) {
        this.fileList.splice(index, 1)
      }
      // this.hideUpload = this.fileList.length >= this.limit
    },
    onChange(val, fileList) {
      console.log(fileList)
      //   this.hideUpload = fileList.length >= this.limit
    },
    onProgress() {
      this.onProgressStatus = true
    },
    onBeforeupload(file) {
      return this.beforeUpload(file)
    },
    // 预览
    handlePictureCardPreview(file) {
      const type = file.raw.type || this.handleFileType(file.url)
      // docx
      if (type === FILETYPE.docx) {
        if (file.raw instanceof File) {
          const fileReader = new FileReader()
          fileReader.readAsArrayBuffer(file.raw)
          fileReader.addEventListener(
            'loadend',
            (e) => {
              const buf = e.target.result
              $mammoth
                .convertToHtml({ arrayBuffer: buf })
                .then((res) => {
                  this.docHtml = res.value
                })
                .catch((err) => {
                  console.log(err, '=====---')
                })
            },
            false
          )
        } else {
          const xhr = new XMLHttpRequest()
          xhr.open('get', file.url, true)
          xhr.responseType = 'arraybuffer'
          xhr.onload = () => {
            if (xhr.status === 200) {
              $mammoth
                .convertToHtml({ arrayBuffer: new Uint8Array(xhr.response) })
                .then((res) => {
                  this.$nextTick(() => {
                    this.docHtml = res.value
                  })
                })
            }
          }
          xhr.send()
        }
      }

      if (type === FILETYPE.xls || type === FILETYPE.xlsx) {
        if (file.raw instanceof File) {
          const fileReader = new FileReader()
          fileReader.readAsArrayBuffer(file.raw)
          fileReader.addEventListener(
            'loadend',
            (e) => {
              const buf = e.target.result
              const workbook = $XLSX.read(buf, { type: 'array' })
              const worksheet = workbook.Sheets[workbook.SheetNames[0]]
              this.docHtml = $XLSX.utils.sheet_to_html(worksheet)
            },
            false
          )
        } else {
          const xhr = new XMLHttpRequest()
          xhr.open('get', file.url, true)
          xhr.responseType = 'arraybuffer'
          xhr.onload = () => {
            if (xhr.status === 200) {
              const buf = new Uint8Array(xhr.response)
              const workbook = $XLSX.read(buf, { type: 'array' })
              const worksheet = workbook.Sheets[workbook.SheetNames[0]]
              this.docHtml = $XLSX.utils.sheet_to_html(worksheet)
            }
          }
          xhr.send()
        }
      }

      if (type === FILETYPE.ppt || type === FILETYPE.pptx) {
        window.open(file.url)
        return
      }

      this.dialog = file

      this.$nextTick(() => {
        this.dialogVisible = true
      })
    },
    // 上传成功
    onSuccess(response, file, fileList) {
      // console.log(response, 'response')
      // console.log(file, 'file')
      this.fileList = fileList
      this.$emit('_getUrl', fileList)
    },
    // 上传失败
    onError(error, file, fileList) {
      if (file.size / 1024 / 1024 > 50) {
        this.$message.error('文件上传失败，文件大小超出最大限制50MB')
      }
      console.log(error, 'error')
      console.log(file, 'file')
      console.log(fileList, 'fileList')
    },
    // 处理传过来的图片
    handleSourceFile() {
      this.fileList = this.sourceFile.map((item) => ({
        name: item.name || item.url,
        raw: {
          type: item.type || this.handleFileType(item.url)
        },
        response: {
          data: {
            ...item.response.data,
            url: item.url
          }
        },
        status: 'success',
        url: item.url
      }))
    },
    handleFileType(url) {
      const arr = url.split('.')
      const type = arr[arr.length - 1] // 文件后缀
      let fileType = type
      if (FILETYPE[type]) {
        fileType = FILETYPE[type]
      } else {
        Object.keys(FILETYPE).forEach((key) => {
          if (Array.isArray(FILETYPE[key])) {
            if (FILETYPE[key].includes(type)) {
              fileType = key
            }
          }
        })
      }
      return fileType
    }
  }
}
</script>
