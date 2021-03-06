<template>
  <div class="current-location">
    <div class="title">当前定位</div>
    <div class="location" @click="clickHandler">
      <i class="iconfont icon-navigation"></i>
      <span class="info">{{location}}</span>
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
          default: ""
      }
  },
  methods: {
      clickHandler(){
          this.$router.push("/home")
      }
  },
};
</script>

<style lang="scss" scoped>
@import "style/mixin.scss";
.current-location {
  @include wh(100%, .9rem);
  background-color: #fff;
  
  .title {
    font-size: $font-size-small;
    padding: 0.1rem 0;
    color: $color-dark;
    padding: 0 0.2rem;
  }
  .location{
      font-size: $font-size-medium;
      overflow: hidden;
      display: flex;
      padding:  0.2rem;
      i{
          color: $color-theme;
      }
      .info {
          @include ellipsis;
      }
  }
}
</style>