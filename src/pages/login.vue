<template>
  <div class="reds-modal login-modal" role="presentation">
    <i tabindex="-1" class="reds-mask" aria-label="弹窗遮罩"></i
    ><!---->
    <div class="login-container">
      <div class="icon-btn-wrapper close-button" @click="close"><Close style="width: 1em; height: 1em" /></div>
      <div class="left">
        <img class="logo" src="@/assets/logo.png" />
        <div class="course-video" style="display: none">
          <video
            src="https://fe-video-qc.xhscdn.com/fe-platform/f3ddbc4d8062e08c8684e1fa3bea7c2e2bb77c21.mp4"
            preload="auto"
            autoplay=""
            loop=""
          ></video>
        </div>
        <div class="qrcode">
          <img
            class="qrcode-img"
            src="data:image/png;base64,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"
          />
          <div class="status" style="display: none"><!----><!----></div>
        </div>
        <div class="tip">使用 小红书 / 微信 / QQ 扫码登录</div>
        <div class="course">
          <svg class="reds-icon play" width="11" height="11">
            <use xlink:href="#play"></use>
          </svg>
          教程
        </div>
      </div>
      <div class="right">
        <div class="title">手机号登录</div>
        <!---->
        <div class="input-container">
          <form onsubmit="return false">
            <label class="phone"
              ><span class="country-code">+86</span
              ><input placeholder="输入手机号" type="text" name="blur" autofocus="" /><svg
                class="reds-icon clear"
                width="24"
                height="24"
                fill="#xhs-pc-web-phone"
                style="display: none"
              >
                <use xlink:href="#clear"></use></svg
            ></label>
            <div style="height: 16px"></div>
            <label class="auth-code"
              ><input type="number" placeholder="输入验证码" autocomplete="false" /><span class="code-button"
                >获取验证码</span
              ></label
            >
            <div class="err-msg"></div>
            <button class="submit">登录</button>
          </form>
        </div>
        <div class="agreements">
          <span class="agree-icon"></span>
          <label> 我已阅读并同意</label
          ><a class="links" target="_blank" href="https://agree.xiaohongshu.com/h5/terms/ZXXY20220331001/-1"
            >《用户协议》</a
          ><a class="links" target="_blank" href="https://agree.xiaohongshu.com/h5/terms/ZXXY20220509001/-1"
            >《隐私政策》</a
          ><br /><a
            class="links"
            target="_blank"
            href="https://oa.xiaohongshu.com/h5/terms/ZXXY20220516001/-1"
            style="margin-left: 25px"
            >《儿童/青少年个人信息保护规则》</a
          >
        </div>
        <div class="oauth-tip"><span class="oauth-tip-line">或</span></div>
        <div class="login">
          <div class="login-common wechat">
            <svg class="reds-icon" width="18" height="18" style="margin-right: 4px">
              <use xlink:href="#wechat"></use></svg
            >微信登录
          </div>
          <div class="login-common reg">新用户注册</div>
        </div>
      </div>
    </div>
    <!---->
    <div class="reds-alert">
      <div class="reds-alert-mask" style="display: none"></div>
      <div class="reds-alert-wrapper slot-content" style="width: 320px; display: none">
        <!----><!---->
        <div class="reds-alert-title">阅读并同意</div>
        <div class="reds-alert-content">
          <!----><!----><label data-v-44ecdae0-s="" class="alert-content"
            ><div data-v-44ecdae0-s="" class="alert-text">
              <a data-v-44ecdae0-s="" target="_blank" href="https://agree.xiaohongshu.com/h5/terms/ZXXY20220331001/-1"
                >《用户协议》</a
              ><a data-v-44ecdae0-s="" target="_blank" href="https://agree.xiaohongshu.com/h5/terms/ZXXY20220509001/-1"
                >《隐私政策》</a
              ><br data-v-44ecdae0-s="" /><a
                data-v-44ecdae0-s=""
                target="_blank"
                href="https://oa.xiaohongshu.com/h5/terms/ZXXY20220516001/-1"
                >《儿童/青少年个人信息保护规则》</a
              >
            </div></label
          >
        </div>
        <div class="reds-alert-footer">
          <div class="foot-btns">
            <div class="foot-btn">同意并继续</div>
            <div class="foot-btn">取消</div>
          </div>
          <!----><!---->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Close } from "@element-plus/icons-vue";
const emit = defineEmits(["clickChild"]);
const close = () => {
  //传递给父组件
  emit("clickChild", false);
};
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
  background-color: transparent;
}
.login-modal {
  z-index: 100010;
  flex-direction: column;
}

.reds-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000002;
  box-sizing: border-box;
  visibility: visible;
  opacity: 1;
  transition:
    opacity 0.2s,
    visibility 0.2s;

  .reds-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: -1;
  }

  .login-container {
    display: flex;
    position: relative;
    width: 800px;
    height: 480px;
    background: #fff;
    border-radius: 16px;
    box-shadow:
      0 4px 32px 0 rgba(0, 0, 0, 0.08),
      0 1px 4px 0 rgba(0, 0, 0, 0.04);
    transition: all 0.2s;

    .close-button {
      position: absolute;
      right: 20px;
      top: 20px;
      cursor: pointer;
      color: rgba(51, 51, 51, 0.8);
    }

    .left {
      width: 400px;
      display: flex;
      align-items: center;
      flex-direction: column;
      border-right: 1px solid rgba(0, 0, 0, 0.08);

      img {
        border-style: none;
      }
      .logo {
        margin-top: 64px;
        width: 91.08px;
        height: 48px;
        -webkit-user-select: none;
        user-select: none;
        pointer-events: none;
      }

      .course-video {
        margin-top: 20px;
        width: 160px;
        height: 240px;
        overflow: hidden;
        margin-bottom: -1px;

        video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .qrcode {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 32px;
        width: 192px;
        height: 192px;
        border: 2px solid var(--color-shadow-border);
        border-radius: 12px;
        background: var(--color-white);

        .qrcode-img {
          width: 160px;
          height: 160px;
        }

        .status {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          flex-direction: column;
          background: #fff;
          opacity: 0.95;
          -webkit-backdrop-filter: blur(2.5px);
          backdrop-filter: blur(2.5px);
          border-radius: 10px;
        }
      }

      .tip {
        color: #333;
        font-weight: 600;
        font-size: 12px;
        margin-top: 16px;
        line-height: 120%;
      }

      .course {
        width: 64px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 999px;
        margin-top: 43.5px;
        font-weight: 400;
        font-size: 14px;
        color: rgba(51, 51, 51, 0.8);
        cursor: pointer;
      }
    }

    .right {
      width: 400px;
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-top: 48px;

      .title {
        font-size: 18px;
        color: rgba(51, 51, 51, 0.8);
        font-weight: 600;
        line-height: 120%;
      }

      .input-container {
        margin-top: 24px;
        width: 304px;
        display: flex;
        flex-direction: column;

        .auth-code {
          justify-content: center;
        }

        .auth-code,
        .phone {
          display: flex;
          align-items: center;
          font-size: 16px;
          line-height: 22px;
          color: rgba(51, 51, 51, 0.8);
          height: 48px;
          background: #fff;
          border-radius: 999px;
          transition: border-color 0.2s;
          border-bottom: 0.5px solid rgba(0, 0, 0, 0.08);

          .country-code {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            width: 29px;
            height: 100%;
            font-weight: 400;
            margin-left: 16px;
            margin-right: 20px;
            color: #333;
          }

          .country-code:after {
            position: absolute;
            left: 41px;
            content: "";
            height: 24px;
            width: 1px;
            background-color: #fff;
          }
        }

        .auth-code input,
        .phone input {
          font-size: 16px;
          width: 130px;
          height: 100%;
          caret-color: #ff2442;
          color: #333;
        }

        .code-button {
          font-size: 16px;
          color: #ff2442;
          cursor: pointer;
          opacity: 0.5;
        }

        .err-msg {
          margin-top: 9.5px;
          height: 10px;
          line-height: 10px;
          color: var(--color-red);
          font-size: 14px;
          font-weight: 400;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .submit {
          margin-top: 24px;
          height: 48px;
          background: #ff2442;
          color: #fff;
          opacity: 0.5;
          border-radius: 999px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          width: 100%;
        }

        form {
          display: block;
          margin-top: 0em;
        }
      }

      .agreements {
        width: 280px;
        position: relative;
        margin-top: 16px;
        padding-left: 18px;
        font-size: 12px;
        color: var(--color-tertiary-label);
        line-height: 120%;

        .agree-icon {
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 100%;
          background-color: #fff;
          border: 1px solid rgba(0, 0, 0, 0.183);
        }

        a {
          color: #13386c;
        }

        .links {
          font-weight: 400;
        }
      }

      .oauth-tip:after,
      .oauth-tip:before {
        display: block;
        width: 133px;
        height: 1px;
        content: "";
        background-color: rgba(0, 0, 0, 0.08);
      }

      .oauth-tip-line {
        margin: 0 12px;
      }

      .oauth-tip {
        margin-top: 29px;
        display: flex;
        align-items: center;
        font-weight: 400;
        font-size: 14px;
        color: rgba(51, 51, 51, 0.6);
      }

      .login {
        display: flex;
        margin-top: 16px;

        .login-common {
          width: 144px;
          height: 40px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 999px;
          color: rgba(51, 51, 51, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          margin-right: 10px;

          .reg {
            margin-left: 16px;
          }
        }
      }
    }
  }
}
</style>
