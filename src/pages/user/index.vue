<template>
  <div class="user-page">
    <div class="user">
      <div class="user-info">
        <div class="avatar">
          <div class="avatar-wrapper">
            <img
              src="https://sns-avatar-qc.xhscdn.com/avatar/5fb295387373d50001ddf25f.jpg?imageView2/2/w/540/format/webp|imageMogr2/strip2"
              class="user-image"
              style="border: 1px solid rgba(0, 0, 0, 0.08)"
            />
          </div>
        </div>
        <div class="info-part">
          <div class="info">
            <div class="basic-info">
              <div class="user-basic">
                <div class="user-nickname">
                  <div class="user-name">三块给你买麻吉<!----></div>
                </div>
                <div class="user-content">
                  <span class="user-redId">小红书号：275592512</span><span class="user-IP"> IP属地：广东</span>
                </div>
              </div>
            </div>
            <div class="user-desc">
              永远爱蜡笔小新，哆啦A梦（只是哆啦A梦），柯南，银魂（后悔没有早点入坑），火影，小埋！。
            </div>
            <div class="user-tags">
              <div class="tag-item">
                <div>射手座</div>
              </div>
              <div class="tag-item"><div>广东广州</div></div>
              <div class="tag-item"><div>程序员</div></div>
            </div>
            <div class="data-info">
              <div class="user-interactions">
                <div><span class="count">8</span><span class="shows">关注</span></div>
                <div><span class="count">575</span><span class="shows">粉丝</span></div>
                <div><span class="count">2445</span><span class="shows">获赞与收藏</span></div>
              </div>
            </div>
            <!---->
          </div>
          <div class="follow"><!----></div>
        </div>
      </div>
    </div>
    <div class="reds-sticky-box user-page-sticky" style="--1ee3a37c: all 0.4s cubic-bezier(0.2, 0, 0.25, 1) 0s">
      <div class="reds-sticky" style="">
        <div class="tertiary center reds-tabs-list" style="padding: 0px 12px">
          <div class="reds-tab-item active" style="padding: 0px 16px; margin-right: 0px; font-size: 16px">
            <!----><!----><span>笔记</span>
          </div>
          <div class="reds-tab-item" style="padding: 0px 16px; margin-right: 0px; font-size: 16px">
            <!----><!----><span>收藏</span>
          </div>
          <div class="reds-tab-item" style="padding: 0px 16px; margin-right: 0px; font-size: 16px">
            <!----><!----><span @click="toAgree">点赞</span>
          </div>
          <!---->
          <div class="active-tag" style="width: 64px; left: 627px"></div>
        </div>
      </div>
    </div>
    <div class="feeds-tab-container" style="--1ee3a37c: all 0.4s cubic-bezier(0.2, 0, 0.25, 1) 0s">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts" setup>
// import { Star } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
const router = useRouter();

const toAgree = () => {
  router.push({ path: "/agree" });
};
</script>
<style lang="less" scoped>
.user-page {
  background: #fff;
  overflow-y: scroll;
  overflow-x: hidden;

  .user {
    padding-top: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    .user-info {
      display: flex;
      justify-content: center;
      padding: 48px 0;

      .avatar {
        .avatar-wrapper {
          text-align: center;
          width: 250.66667px;
          height: 175.46667px;
          .user-image {
            border-radius: 50%;
            margin: 0 auto;
            width: 70%;
            height: 100%;
            object-fit: cover;
          }
        }
      }

      .info-part {
        position: relative;
        width: 100%;

        .info {
          @media screen and (min-width: 1728px) {
            width: 533.33333px;
          }
          margin-left: 32px;
          .basic-info {
            display: flex;
            align-items: center;
            .user-basic {
              width: 100%;
              .user-nickname {
                width: 100%;
                display: flex;
                align-items: center;
                max-width: calc(100% - 96px);
                .user-name {
                  font-weight: 600;
                  font-size: 24px;
                  line-height: 120%;
                  color: #333;
                }
              }
              .user-content {
                width: 100%;
                font-size: 12px;
                line-height: 120%;
                color: rgba(51, 51, 51, 0.6);
                display: flex;
                margin-top: 8px;
                .user-redId {
                  padding-right: 12px;
                }
              }
            }
          }
          .user-desc {
            width: 100%;
            font-size: 14px;
            line-height: 140%;
            color: #333;
            margin-top: 16px;
            white-space: pre-line;
          }
          .user-tags {
            height: 24px;
            margin-top: 16px;
            display: flex;
            align-items: center;
            font-size: 12px;
            color: #333;
            text-align: center;
            font-weight: 400;
            line-height: 120%;
            .tag-item :first-child {
              padding: 3px 6px;
            }
            .tag-item {
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 4px 8px;
              grid-gap: 4px;
              gap: 4px;
              height: 18px;
              border-radius: 41px;
              background: rgba(0, 0, 0, 0.03);
              height: 24px;
              line-height: 24px;
              margin-right: 6px;
              color: rgba(51, 51, 51, 0.6);
            }
          }
          .data-info {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 20px;
            .user-interactions {
              width: 100%;
              display: flex;
              align-items: center;
              .count {
                font-weight: 500;
                font-size: 14px;
                margin-right: 4px;
              }
              .shows {
                color: rgba(51, 51, 51, 0.6);
                font-size: 14px;
                line-height: 120%;
              }
            }
            .user-interactions > div {
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              text-align: center;
              margin-right: 16px;
            }
          }
        }

        .follow {
          position: absolute;
          margin-left: auto;
          display: block;
          right: 0;
          top: 0;
        }
      }
    }
  }

  .reds-sticky {
    padding: 16px 0;
    z-index: 5 !important;
    background: hsla(0, 0%, 100%, 0.98);

    .reds-tabs-list {
      screen and (min-width: 1728px) {
        width: 1445.33333px;
      }
      display: flex;
      flex-wrap: nowrap;
      position: relative;
      font-size: 16px;
      justify-content: center;

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
      }
      .reds-tab-item.active {
        background-color: rgba(0, 0, 0, 0.03);
        border-radius: 20px;
        font-weight: 600;
        color: rgba(51, 51, 51, 0.8);
      }
    }
  }

  .feeds-tab-container {
    padding-left: 2rem;
  }
}
</style>
