<template>
  <div class="feeds-page">
    <div class="channel-container">
      <div class="scroll-container channel-scroll-container">
        <div class="content-container">
          <div class="channel active">推荐</div>
          <div class="channel">穿搭</div>
          <div class="channel">美食</div>
          <div class="channel">彩妆</div>
          <div class="channel">影视</div>
          <div class="channel">职场</div>
          <div class="channel">情感</div>
          <div class="channel">家居</div>
          <div class="channel">游戏</div>
          <div class="channel">旅行</div>
          <div class="channel">动漫</div>
          <div class="channel">健身</div>
        </div>
      </div>
    </div>
    <div class="loading-container"></div>
    <div class="feeds-container">
      <Waterfall :list="list" :width="240" :hasAroundGutter="false" style="max-width: 1260px">
        <template #item="{ item, url, index }">
          <div class="card">
            <LazyImg :url="url" style="border-radius: 8px" @click="toMain" />
            <div class="footer">
              <a class="title"><span>这是具体内容</span></a>
              <div class="author-wrapper">
                <a class="author">
                  <img class="author-avatar" :src="url" />
                  <span class="name">这是名字</span>
                </a>
                <span class="like-wrapper like-active">
                  <Search style="width: 1em; height: 1em" />
                  <span class="count">12</span>
                </span>
              </div>
            </div>
          </div>
        </template>
      </Waterfall>
    </div>
    <div class="feeds-loading"></div>
  </div>
</template>
<script lang="ts" setup>
import { Search } from "@element-plus/icons-vue";
import { LazyImg, Waterfall } from "vue-waterfall-plugin-next";
import "vue-waterfall-plugin-next/dist/style.css";
import { useRouter } from "vue-router";

import { ref } from "vue";

const router = useRouter();

const list = ref([
  { src: "https://tse1-mm.cn.bing.net/th/id/OIP-C.Zte3ljd4g6kqrWWyg-8fhAHaEo?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { src: "https://tse1-mm.cn.bing.net/th/id/OIP-C.cGc4c8dVlqnfV3uwcS1IogHaE8?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { src: "https://tse1-mm.cn.bing.net/th/id/OIP-C.Zte3ljd4g6kqrWWyg-8fhAHaEo?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { src: "https://tse4-mm.cn.bing.net/th/id/OIP-C.N0USLldg_iKDGVKT12vB4AHaEK?w=292&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { src: "https://tse1-mm.cn.bing.net/th/id/OIP-C.jzcWzXf_uts2sgE2WChuCQHaEo?w=263&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { src: "https://tse1-mm.cn.bing.net/th/id/OIP-C.Zte3ljd4g6kqrWWyg-8fhAHaEo?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { src: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" },
  { src: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg" },
  { src: "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg" },
  { src: "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg" },
  { src: "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg" },
  { src: "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg" },
  { src: "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg" },
  { src: "https://tse4-mm.cn.bing.net/th/id/OIP-C.N0USLldg_iKDGVKT12vB4AHaEK?w=292&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { src: "https://tse1-mm.cn.bing.net/th/id/OIP-C.jzcWzXf_uts2sgE2WChuCQHaEo?w=263&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.YzEeJqgWky6RQMatrMd6-gHaHa?w=170&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.YzEeJqgWky6RQMatrMd6-gHaHa?w=170&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { src: "https://tse1-mm.cn.bing.net/th/id/OIP-C.Zte3ljd4g6kqrWWyg-8fhAHaEo?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { src: "https://tse4-mm.cn.bing.net/th/id/OIP-C.N0USLldg_iKDGVKT12vB4AHaEK?w=292&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { src: "https://tse1-mm.cn.bing.net/th/id/OIP-C.jzcWzXf_uts2sgE2WChuCQHaEo?w=263&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { src: "https://tse1-mm.cn.bing.net/th/id/OIP-C.Zte3ljd4g6kqrWWyg-8fhAHaEo?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { src: "https://tse1-mm.cn.bing.net/th/id/OIP-C.cGc4c8dVlqnfV3uwcS1IogHaE8?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
]);

const toMain = () => {
  router.push({ path: "/main" });
};
</script>
<style lang="less" scoped>
.feeds-page {
  flex: 1;
  padding: 0 24px;
  padding-top: 72px;

  .channel-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    -webkit-user-select: none;

    .channel-scroll-container {
      backdrop-filter: blur(20px);
      background-color: transparent;
      width: calc(100vw - 24px);

      position: relative;
      overflow: hidden;
      display: flex;
      user-select: none;
      -webkit-user-select: none;
      align-items: center;
      font-size: 16px;
      color: rgba(51, 51, 51, 0.8);
      height: 40px;
      white-space: nowrap;
      height: 72px;

      .content-container::-webkit-scrollbar {
        display: none;
      }

      .content-container {
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
        color: rgba(51, 51, 51, 0.8);

        .active {
          font-weight: 600;
          background: rgba(0, 0, 0, 0.03);
          border-radius: 999px;
          color: #333;
        }

        .channel {
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 16px;
          cursor: pointer;
          -webkit-user-select: none;
          user-select: none;
        }
      }
    }
  }

  .feeds-container {
    position: relative;
    transition: width 0.5s;
    margin: 0 auto;

    .footer {
      padding: 12px;
      .title {
        margin-bottom: 8px;
        word-break: break-all;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        font-weight: 500;
        font-size: 14px;
        line-height: 140%;
        color: #333;
      }

      .author-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 20px;
        color: rgba(51, 51, 51, 0.8);
        font-size: 12px;
        transition: color 1s;

        .author {
          display: flex;
          align-items: center;
          color: inherit;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-right: 12px;

          .author-avatar {
            margin-right: 6px;
            width: 20px;
            height: 20px;
            border-radius: 20px;
            border: 1px solid rgba(0, 0, 0, 0.08);
            flex-shrink: 0;
          }

          .name {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }

        .like-wrapper {
          position: relative;
          cursor: pointer;
          display: flex;
          align-items: center;

          .count {
            margin-left: 2px;
          }
        }
      }
    }
  }
}
</style>
