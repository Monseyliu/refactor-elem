<template>
  <div class="home-shops">
    <!-- 头部 -->
    <TopHeader :title="title" :mapIcon="true" :isLeft="false" :isRight="true" @chooseLocation="chooseLocation" />
  </div>
</template>

<script>
//组件
import TopHeader from "base/top-header/top-header";

export default {
  data() {
    return {
      title: "当前地址",
    };
  },
  components: {
    TopHeader,
  },
  methods: {
    chooseLocation(){
      console.log(11)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "style/mixin.scss";
</style>