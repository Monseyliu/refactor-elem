<template>
  <div class="swipes">
    <div class="wrapper">
      <mt-swipe :auto="4000" >
        <mt-swipe-item v-for="(item, i) of swipeImgs" :key="i"> 
          <img class="item-img" :src="item" alt="" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    swipeImgs: {
      type: Array,
      default: null,
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "style/mixin.scss";
.swipes {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 33.3%;
  background-color: #fff;
  .wrapper {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    .item-img{
      @include wh(100%,100%);
      background-size: cover;
    }
  }
}
</style>