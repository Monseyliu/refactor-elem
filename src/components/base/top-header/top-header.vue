<template>
  <div class="top-header" @click="handlerClick">
    <!-- 左侧 -->
    <div class="left" v-show="isLeft" @click.stop="back">
      <i class="iconfont icon-arrow-left-bold"></i>
    </div>
    <!-- 中间 -->
    <div class="title">
        <i v-if="mapIcon" class="iconfont icon-map"></i>
        {{title}}
    </div>
    <!-- 右侧 -->
    <div class="right" v-show="isRight" @click.stop="enterUserCenter">
      <i class="iconfont icon-user-filling"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    isLeft: {
      type: Boolean,
      default: true,
    },
    isRight: {
      type: Boolean,
      default: false,
    },
    mapIcon: {
        type:Boolean,
        default: false
    }
  },
  methods: {
      handlerClick(){
          //选择定位收获地址
          this.$emit("chooseLocation");
      },
      enterUserCenter(){
          this.$router.push("/msite");
      },
      back(){
          this.$router.back();
      }
  },
};
</script>

<style lang="scss" scoped>
@import "style/mixin.scss";
.top-header {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  height: $head-height;
  background: $color-theme;
  display: flex;
  align-items: center;
  padding: 0 0.2rem;
  color: #fff;
  font-size: $font-size-large;
  .left {
    i {
      font-size: $font-size-large-x;
    }
  }
  .title {
    flex: 1;
    text-align: center;
    @include ellipsis;
    .icon-map{
        display: inline-block;
    }
  }
  .right {
    margin-right: .1rem;
    i {
      font-size: $font-size-large-x;
    }
  }
}
</style>