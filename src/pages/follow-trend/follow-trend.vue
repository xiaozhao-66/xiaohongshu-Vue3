<template>
  <div class="container">
    <ul class="trend-container">
      <li class="trend-item">
        <a class="user-avatar">
          <!-- https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png -->
          <img class="avatar-item" src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" />
        </a>
        <div class="main">
          <div class="info">
            <div class="user-info">
              <a class>这是名词</a>
            </div>
            <div class="interaction-hint"><span>1天前</span></div>
            <div class="interaction-content">这是具体内容</div>
            <div class="interaction-imgs">
              <div class="details-box">
                <img src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" />
              </div>
              <div class="details-box">
                <img src="https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg" />
              </div>
              <div class="details-box">
                <img src="https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg" />
              </div>
              <div class="details-box">
                <img src="https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg" />
              </div>
            </div>
            <div class="interaction-footer">
              <div class="icon-item"><Star style="width: 1em; height: 1em" /><span class="count">123</span></div>
              <div class="icon-item"><ChatRound style="width: 1em; height: 1em" /><span class="count">123</span></div>
              <div class="icon-item"><More style="width: 1em; height: 1em" /></div>
            </div>
          </div>
        </div>
      </li>
      <li class="trend-item">
        <a class="user-avatar">
          <!-- https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png -->
          <img class="avatar-item" src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" />
        </a>
        <div class="main">
          <div class="info">
            <div class="user-info">
              <a class>这是名词</a>
            </div>
            <div class="interaction-hint"><span>1天前</span></div>
            <div class="interaction-content">这是具体内容</div>
            <div class="interaction-imgs">
              <div class="details-box">
                <img src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" />
              </div>
              <div class="details-box">
                <img src="https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg" />
              </div>
              <div class="details-box">
                <img src="https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg" />
              </div>
              <div class="details-box">
                <img src="https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg" />
              </div>
            </div>
            <div class="interaction-footer">
              <div class="icon-item"><Star style="width: 1em; height: 1em" /><span class="count">123</span></div>
              <div class="icon-item"><ChatRound style="width: 1em; height: 1em" /><span class="count">123</span></div>
              <div class="icon-item"><More style="width: 1em; height: 1em" /></div>
            </div>
          </div>
        </div>
      </li>
      <li class="trend-item">
        <a class="user-avatar">
          <!-- https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png -->
          <img class="avatar-item" src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" />
        </a>
        <div class="main">
          <div class="info">
            <div class="user-info">
              <a class>这是名词</a>
            </div>
            <div class="interaction-hint"><span>1天前</span></div>
            <div class="interaction-content">这是具体内容</div>
            <div class="interaction-imgs">
              <div class="details-box">
                <img src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" />
              </div>
              <div class="details-box">
                <img src="https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg" />
              </div>
              <div class="details-box">
                <img src="https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg" />
              </div>
              <div class="details-box">
                <img src="https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg" />
              </div>
            </div>
            <div class="interaction-footer">
              <div class="icon-item"><Star style="width: 1em; height: 1em" /><span class="count">123</span></div>
              <div class="icon-item"><ChatRound style="width: 1em; height: 1em" /><span class="count">123</span></div>
              <div class="icon-item"><More style="width: 1em; height: 1em" /></div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { Star, ChatRound, More } from "@element-plus/icons-vue";
</script>

<style lang="less" scoped>
.container {
  flex: 1;
  padding: 0 24px;
  padding-top: 72px;
  width: 67%;
  margin: 0 auto;

  .trend-container {
    .trend-item {
      display: flex;
      flex-direction: row;
      padding-top: 24px;
      max-width: 100vw;

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
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 4px;

            a {
              color: #333;
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
            margin-bottom: 12px;
            line-height: 140%;
            cursor: pointer;
          }

          .interaction-imgs {
            display: flex;
            .details-box {
              width: 25%;
              border-radius: 4px;
              margin: 8px 12px 0 0;
              cursor: pointer;

              img {
                width: 100%;
                height: 230px;
                display: flex;
                border-radius: 4px;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                border: 1px solid rgba(0, 0, 0, 0.08);
                object-fit: cover;
              }
            }
          }

          .interaction-footer {
            margin: 8px 12px 0 0;
            padding: 0 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .icon-item {
              display: flex;
              justify-content: left;
              align-items: center;
              color: rgba(51, 51, 51, 0.929);
              .count {
                margin-left: 3px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
