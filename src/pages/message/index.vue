<template>
  <div class="container">
    <div class style="height: 72px">
      <div class="reds-sticky">
        <div class="reds-tabs-list">
          <div class="reds-tab-item active tab-item">
            <div class="badge-container">
              <span>我的消息</span>
            </div>
          </div>
          <div class="reds-tab-item tab-item">
            <div class="badge-container" @click="toComment()">
              <span>评论和@</span>
            </div>
          </div>
          <div class="reds-tab-item tab-item">
            <div class="badge-container" @click="toAgree()">
              <span>赞和收藏</span>
            </div>
          </div>
          <div class="reds-tab-item tab-item">
            <div class="badge-container" @click="toFollower()">
              <span>新增关注</span>
            </div>
          </div>
        </div>
        <div class="divider" style="margin: 16px 32px 0px"></div>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();

const toComment = () => {
  router.push({ path: "/comment" });
};

const toAgree = () => {
  router.push({ path: "/agreeCollection" });
};
const toFollower = () => {
  router.push({ path: "/follower" });
};
</script>
<style lang="less" scoped>
.container {
  flex: 1;
  padding: 0 24px;
  padding-top: 72px;
  width: 67%;
  margin: 0 auto;
  .reds-sticky {
    top: 72px;
    position: fixed;
    z-index: 10010;
    width: 40rem;
    box-sizing: border-box;
    height: 72px;
    padding-top: 16px;
    justify-content: center;
    flex-direction: column;
    background: #fff;
    .reds-tabs-list {
      justify-content: flex-start;
      display: flex;
      flex-wrap: nowrap;
      position: relative;
      font-size: 16px;
      padding: 0 32px;

      .active {
        font-weight: 600;
        color: #333;
        background-color: rgba(0, 0, 0, 0.03);
        border-radius: 20px;
      }

      .reds-tab-item {
        padding: 0px 16px;
        margin-right: 0px;
        font-size: 16px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        height: 40px;
        cursor: pointer;
        color: rgba(51, 51, 51, 0.8);
        white-space: nowrap;
        transition: transform 0.3s cubic-bezier(0.2, 0, 0.25, 1);
        z-index: 1;

        .badge-container {
          position: relative;
        }
      }
    }
    .divider {
      margin: 4px 8px;
      list-style: none;
      height: 0;
      border: solid rgba(0, 0, 0, 0.08);
      border-width: 1px 0 0;
    }
  }
}
</style>
