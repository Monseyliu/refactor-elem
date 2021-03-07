<template>
  <div class="current-location">
    <div class="title">{{ title }}</div>
    <div class="location" @click="clickHandler">
      <i class="iconfont icon-navigation"></i>
      <span class="info">{{ location }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    location: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
  methods: {
    clickHandler() {
      this.$emit("back")
    },
  },
};
</script>

<style lang="scss" scoped>
@import "style/mixin.scss";
.current-location {
  @include wh(100%, 0.9rem);
  background-color: #fff;
  .title {
    font-size: $font-size-small;
    padding: 0.1rem 0;
    color: $color-dark;
    padding: 0 0.2rem;
  }
  .location {
    font-size: $font-size-medium;
    overflow: hidden;
    display: flex;
    padding: 0.2rem;
    i {
      color: $color-theme;
    }
    .info {
      @include ellipsis;
      color: $color-dark;
    }
  }
}
</style>