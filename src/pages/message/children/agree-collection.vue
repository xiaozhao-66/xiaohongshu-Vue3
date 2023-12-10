<template>
  <div>
    <ul class="agree-container">
      <li class="agree-item">
        <a class="user-avatar">
          <!-- https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png -->
          <img class="avatar-item" src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" />
        </a>
        <div class="main">
          <div class="info">
            <div class="user-info">
              <a class>这是名词</a>
            </div>
            <div class="interaction-hint"><span>赞了您的笔记&nbsp;</span><span>2021-10-9</span></div>
            <div class="interaction-content">
              <span>这是具体内容</span>
            </div>
          </div>
          <div class="extra">
            <img class="extra-image" src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" />
          </div>
        </div>
      </li>
      <li class="agree-item">
        <a class="user-avatar">
          <!-- https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png -->
          <img class="avatar-item" src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" />
        </a>
        <div class="main">
          <div class="info">
            <div class="user-info">
              <a class>这是名词</a>
            </div>
            <div class="interaction-hint"><span>赞了您的评论&nbsp;</span><span>2021-10-9</span></div>
            <div class="interaction-content">
              <span>这是具体内容</span>
            </div>
            <div class="quote-info">确实是不行</div>
          </div>
          <div class="extra">
            <img class="extra-image" src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="less" scoped>
textarea {
  overflow: auto;
}
.agree-container {
  width: 40rem;
  .agree-item {
    display: flex;
    flex-direction: row;
    padding-top: 24px;

    .user-avatar {
      margin-right: 24px;
      flex-shrink: 0;

      .avatar-item {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 100%;
        border: 1px solid rgba(0, 0, 0, 0.08);
        object-fit: cover;
      }
    }

    .main {
      flex-grow: 1;
      flex-shrink: 1;
      display: flex;
      flex-direction: row;
      padding-bottom: 12px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);

      .info {
        flex-grow: 1;
        flex-shrink: 1;

        .user-info {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4px;
          a {
            color: #333;
            font-size: 16px;
            font-weight: 600;
          }
        }
        .interaction-hint {
          font-size: 14px;
          color: rgba(51, 51, 51, 0.6);
          margin-bottom: 8px;
        }

        .interaction-content {
          display: flex;
          font-size: 14px;
          color: #333;
          line-height: 140%;
          cursor: pointer;
          margin-bottom: 12px;
          .msg-count {
            width: 20px;
            height: 20px;
            line-height: 20px;
            font-size: 13px;
            color: #fff;
            background-color: red;
            text-align: center;
            border-radius: 100%;
          }
        }

        .quote-info {
          font-size: 12px;
          display: flex;
          align-items: center;
          color: rgba(51, 51, 51, 0.6);
          margin-bottom: 12px;
          cursor: pointer;
        }

        .quote-info::before {
          content: "";
          display: inline-block;
          border-radius: 8px;
          margin-right: 6px;
          width: 4px;
          height: 17px;
          background: rgba(0, 0, 0, 0.08);
        }
      }

      .extra {
        min-width: 48px;
        flex-shrink: 0;
        margin-left: 24px;

        .extra-image {
          cursor: pointer;
          width: 48px;
          height: 48px;
          border: 1px solid rgba(0, 0, 0, 0.02);
          border-radius: 6px;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
