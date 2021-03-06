<template>
  <div class="home">
    <!-- 子路由容器 -->
    <router-view></router-view>
    <!-- 底部导航栏 -->
    <TableBar />
  </div>
</template>

<script>
//组件
import TableBar from "common/table-bar/table-bar";

export default {
  data() {
    return {};
  },
  components: {
    TableBar,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "style/mixin.scss";
</style>