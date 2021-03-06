<template>
  <div class="home-shops">
    <!-- 头部 -->
    <TopHeader :title="location" :mapIcon="true" :isLeft="false" :isRight="true" @chooseLocation="chooseLocation" />
  </div>
</template>

<script>
//组件
import TopHeader from "base/top-header/top-header";
//js配置
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      title: "当前地址",
    };
  },
  components: {
    TopHeader,
  },
  computed: {
      ...mapGetters(["location"]),
  },
  methods: {
    chooseLocation(){
        this.$router.push("/address")
    }
  }
};
</script>

<style lang="scss" scoped>
@import "style/mixin.scss";
</style>