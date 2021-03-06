<template>
  <div class="input">
    <div class="label">{{ label }}</div>
    <input
      :type="type"
      :placeholder="placeholder"
      class="input-value"
      @input="$emit('input', $event.target.value)"
      :value="value"
    />
    <!-- 手机验证码 -->
    <button :disabled="disabled" class="valid-code" 
    @click="$emit('sendCode')">{{ phoneCode }}</button>
    <!-- 错误提示 -->
    <span class="error-text" v-show="error">{{error}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: {
    label: {
      type: String,
      default: "手机号",
    },
    value: {
        type: String,
        default: ""
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "请输入手机号码",
    },
    phoneCode: {
      type: String,
      default: "",
    },
    disabled: {
        type: Boolean,
        default: false
    },
    error: {
        type: String,
        default: ""
    }
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "style/mixin.scss";
.input {
    position: relative;
  display: flex;
  align-items: center;
  font-size: $font-size-medium;
  border: 1px solid $color-light;
  line-height: 0.7rem;
  padding: 0 0.1rem;
  color: $color-dark;
  border-radius: 0.1rem;
  margin-bottom: .6rem;
  .input-value {
    flex: 1;
    text-indent: 0.1rem;
  }
  .valid-code {
    min-width: 0.01rem;
    @include clearBtn;
    @include ellipsis;
  }
  .error-text{
      position: absolute;
      top: .55rem;
      color: red;
      font-size: $font-size-medium;
  }
}
</style>