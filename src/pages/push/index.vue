<template>
  <div class="container">
    <div class="push-container">
      <div class="header"><span class="header-icon"></span><span class="header-title">发布图文</span></div>
      <div class="img-list">
        <el-upload
          v-model:file-list="fileList"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <el-icon><Plus /></el-icon>
        </el-upload>

        <el-dialog v-model="dialogVisible">
          <img w-full :src="dialogImageUrl" alt="Preview Image" />
        </el-dialog>
      </div>
      <el-divider style="margin: 12px; width: 576px" />
      <div class="push-content">
        <el-input
          v-model="title"
          maxlength="20"
          show-word-limit
          type="text"
          placeholder="Please input"
          class="input-title"
        />
        <el-input
          :rows="5"
          maxlength="200"
          show-word-limit
          type="textarea"
          placeholder="Please input"
          class="input-content"
        />
      </div>
      <div class="btns">
        <button class="css-fm44j css-osq2ks dyn">
          <span class="btn-content"># 话题</span></button
        ><button class="css-fm44j css-osq2ks dyn">
          <span class="btn-content"><span>@</span> 用户</span></button
        ><button class="css-fm44j css-osq2ks dyn">
          <span class="btn-content"
            ><div class="smile"></div>
            表情</span
          >
        </button>
      </div>
      <div class="submit">
        <button class="publishBtn" @click="pubslish()">
          <span class="btn-content">发布</span>
        </button>
        <button class="clearBtn">
          <span class="btn-content">取消</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { Plus } from "@element-plus/icons-vue";

import type { UploadProps, UploadUserFile } from "element-plus";

const fileList = ref<UploadUserFile[]>([
  {
    name: "food.jpeg",
    url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
  },
  {
    name: "plant-1.png",
    url: "/images/plant-1.png",
  },
  {
    name: "food.jpeg",
    url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
  },
  {
    name: "plant-2.png",
    url: "/images/plant-2.png",
  },
  {
    name: "food.jpeg",
    url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
  },
  {
    name: "figure-1.png",
    url: "/images/figure-1.png",
  },
  {
    name: "food.jpeg",
    url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
  },
  {
    name: "figure-2.png",
    url: "/images/figure-2.png",
  },
]);

const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const title = ref("");

const handleRemove: UploadProps["onRemove"] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles);
};

const handlePictureCardPreview: UploadProps["onPreview"] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!;
  dialogVisible.value = true;
};

const pubslish = () => {
  console.log(123);
};
</script>
<style lang="less" scoped>
/deep/ .el-upload-list--picture-card .el-upload-list__item {
  width: 80px;
  height: 80px;
}
/deep/ .el-upload-list__item.is-success .el-upload-list__item-status-label {
  display: none;
}
/deep/ .el-upload--picture-card {
  width: 80px;
  height: 80px;
}

.container {
  flex: 1;
  padding: 0 24px;
  padding-top: 72px;
  width: 67%;
  margin: 0 auto;
  .push-container {
    width: 600px;
    border-radius: 8px;
    box-sizing: border-box;
    box-shadow: var(--el-box-shadow-lighter);

    .header {
      padding: 15px 20px;
      line-height: 16px;
      font-size: 16px;
      font-weight: 400;

      .header-icon {
        position: relative;
        top: 2px;
        display: inline-block;
        width: 6px;
        height: 16px;
        background: #3a64ff;
        border-radius: 3px;
        margin-right: 2px;
      }
    }

    .img-list {
      width: 540px;
      margin: auto;
      padding: 0px 6px 0px 6px;
    }

    .push-content {
      padding: 0 12px 10px 12px;

      .input-title {
        margin-bottom: 5px;
        font-size: 12px;
      }

      .input-content {
        font-size: 12px;
      }
    }
    .btns {
      padding: 0 12px 10px 12px;
      button {
        min-width: 62px;
        width: 62px;
        margin: 0 6px 0 0;
        height: 18px;
      }

      .css-fm44j {
        -webkit-font-smoothing: antialiased;
        appearance: none;
        font-family:
          RedNum,
          RedZh,
          RedEn,
          -apple-system;
        vertical-align: middle;
        text-decoration: none;
        border: 1px solid rgb(217, 217, 217);
        outline: none;
        user-select: none;
        cursor: pointer;
        display: inline-flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        margin-right: 16px;
        border-radius: 4px;
        background-color: white;
        color: rgb(38, 38, 38);
        height: 24px;
        font-size: 12px;
      }
    }
    .submit {
      padding: 0 12px 10px 12px;
      margin-top: 10px;
      button {
        width: 80px;
        height: 32px;
        font-size: 14px;
      }
      .publishBtn {
        background-color: #ff2442;
        color: #fff;
        border-radius: 4px;
      }
      .clearBtn {
        border-radius: 4px;
        margin-left: 10px;
        border: 1px solid rgb(217, 217, 217);
      }
    }
  }
}
</style>
