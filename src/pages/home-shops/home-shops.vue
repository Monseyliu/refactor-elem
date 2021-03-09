<template>
  <div class="home-shops">
    <!-- 头部 -->
    <TopHeader
      :title="location"
      :mapIcon="true"
      :isLeft="false"
      :isRight="true"
      @chooseLocation="chooseLocation"
    />
    <!-- 搜索商家 -->
    <div class="search-shops">
      <div class="content">
        <i class="iconfont icon-search"></i>
        <span class="text">搜索商家/店铺名称</span>
      </div>
    </div>
    <!-- 轮播 -->
    <Swipes :swipeImgs="swipeImgs"  />
    <!-- 商品分类 -->
    <Categories :list="entries" />
    <!-- 推荐商家 -->
  </div>
</template>

<script>
//组件
import TopHeader from "base/top-header/top-header";
import Swipes from "common/swipes/swipes";
import Categories from "common/categories/categories";
//js配置
import { mapGetters } from "vuex";
import { getData } from "api/homeShops";

export default {
  data() {
    return {
      title: "当前地址",
      swipeImgs: [],//轮播
      entries: [], //分类入口
    };
  },
  components: {
    TopHeader,
    Swipes,
    Categories
  },
  computed: {
    ...mapGetters(["location"]),
  },
  created(){
    this._getData();
  },
  methods: {
    chooseLocation() {
      this.$router.push("/address");
    },
    //获取数据
    _getData(){
      getData().then(res => {
        console.log(res);
        this.swipeImgs = res.swipeImgs;
        this.entries = res.entries;
      })
    }
  },
};
</script>

<style lang="scss" scoped>
@import "style/mixin.scss";

.home-shops {
  .search-shops {
    background: $color-theme;
    height: $head-height;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
    box-sizing: border-box;
    .content {
      background-color: #fff;
      @include wh(90%,70%);
      border-radius: .08rem;
      text-align: center;
      line-height: .65rem;
      color: $color-light-d;
    }
  }
}
</style>