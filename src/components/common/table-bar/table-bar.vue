<template>
  <div class="table-bar">
    <router-link
      class="bar-item"
      tag="div"
      v-for="(item, index) of tableBar"
      :key="index"
      :to="item.path"
    >
      <i :class="'iconfont icon-' + item.icon" class="icon"></i>
      <span class="text">{{item.text}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableBar: [
          { text: "外卖", icon: "shouye", path: "/home"},
          { text: "搜索", icon: "faxian", path: "/search"},
          { text: "订单", icon: "dingdan", path: "/order"},
          { text: "我的", icon: "user", path: "/msite"},
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "style/mixin.scss";
.table-bar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    height: $head-height;
    display: flex;
    align-items: center;
    text-align: center;
    .bar-item {
        display: flex;
        flex-direction: column;
        width: 25%;
        color: $color-dark;
        .icon{
            font-size: $font-size-large-x;
        }
        .text{
            margin: 0.04rem 0;
            font-size: $font-size-medium;
        }
    }
    .router-link-active {
        color: $color-theme;
    }
}
</style>