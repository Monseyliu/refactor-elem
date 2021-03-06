<template>
  <div class="login">
    <div class="logo-img"></div>
    <!-- 手机号码 -->
    <Input
      type="number"
      @input="validPhoneCode"
      label="手机号"
      :phoneCode="phoneCode"
      @sendCode="sendCode"
      :disabled="disabled"
      :error="errors.phone"
      v-model="phoneNumber"
    />
    <!-- 验证码 -->
    <Input
      type="number"
      @input="inputCode"
      label="验证码"
      placeholder="请输入验证码"
      :error="errors.code"
      v-model="verifyCode"
    />
    <!-- copy -->
    <div class="copy-right">
      新用户登录即自动注册，表示已同意<span class="argreement"
        >《用户服务协议》</span
      >
    </div>
    <!-- 登录按钮 -->
    <button
      :class="{ disabled: loginBtnDisabled }"
      @click="login"
      :disabled="loginBtnDisabled"
      class="login-btn"
    >
      登录
    </button>
  </div>
</template>

<script>
//组件
import Input from "base/input/input";

export default {
  data() {
    return {
      errors: {
        phone: "",
        code: "",
      },
      phoneCode: "获取验证码",
      disabled: false, //获取验证码控制
      timer: null, //验证码计时器
      phoneNumber: "17610351502",
      verifyCode: "337200",
    };
  },
  components: {
    Input,
  },
  computed: {
    loginBtnDisabled() {
      return this.phoneNumber && this.verifyCode ? false : true;
    },
  },
  methods: {
    //手机验证码
    sendCode() {
      if (this.validPhoneCode()) {
        this.disabled = true;
        if (this.timer) {
          clearInterval(this.timer);
        }
        let count = 45;
        this.timer = setInterval(() => {
          this.phoneCode = `${count}秒后重试`;
          count--;
          if (count <= 0) {
            this.disabled = false;
            this.phoneCode = "获取验证码";
            clearInterval(this.timer);
          }
        }, 1000);
      }
    },
    validPhoneCode(value) {
      const phoneReg = /^[1]([3-9])[0-9]{9}$/;
      if (!this.phoneNumber) {
        this.errors.phone = "手机号不能为空";
        this.disabled = true;
        return false;
      } else if (!phoneReg.test(this.phoneNumber)) {
        this.errors.phone = "请输入正确的手机号码";
        this.disabled = true;
        return false;
      } else {
        this.errors.phone = "";
        this.disabled = false;
      }
      return true;
    },
    inputCode() {},
    //登录
    login() {
      // 取消错误消息
      this.errors = {};
      //发起请求
      const userid = "6012953931e1f7682112b8fc";
      // 发起请求
      localStorage.setItem("ele_login", userid);
      this.$router.push('/home')
    },
  },
};
</script>

<style lang="scss" scoped>
@import "style/mixin.scss";
.login {
  @include fixed-full-screen;
  background-color: #fff;
  padding: 0 0.5rem;
  .logo-img {
    @include wh(3.5rem, 1.2rem);
    margin: 0.5rem auto;
    @include back-img("~@/assets/images/logo.jpg");
  }
  .copy-right {
    color: $color-light-d;
    .argreement {
      color: $color-theme;
    }
  }
  .login-btn {
    width: 100%;
    line-height: 0.8rem;
    background-color: $color-green;
    color: #fff;
    text-align: center;
    margin: 0.6rem 0;
    border-radius: 0.1rem;
  }
  .disabled {
    background: #8bda81;
  }
}
</style>