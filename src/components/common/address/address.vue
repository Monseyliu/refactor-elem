<template>
  <div class="address">
    <!-- 头部 -->
    <TopHeader title="选择定位" />
    <!-- 搜索 -->
    <SearchAddress :currentCity="currentCity" @searchValue="searchValue" />
    <!-- 当前定位 -->
    <CurrenLocation @back="back" title="当前定位" :location="location" />
    <!-- 列表 -->
    <ResultList
      v-show="searchList.length"
      @selectLocation="selectLocation"
      :resultList="searchList"
    />
    <!-- lading组件 -->
    <div class="loading-content" v-show="showLoading">
      <Loading />
    </div>
  </div>
</template>

<script>
//组件
import TopHeader from "base/top-header/top-header";
import SearchAddress from "base/search-address/search-address";
import CurrenLocation from "base/current-location/current-location";
import ResultList from "base/result-list/result-list";
import Loading from "base/loading/loading";

//js配置
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      timer: null,
      searchList: [],
      keyword: "",
    };
  },
  components: {
    TopHeader,
    SearchAddress,
    CurrenLocation,
    ResultList,
    Loading,
  },
  computed: {
    ...mapGetters(["currentCity", "location"]),
    showLoading() {
      return !this.searchList.length && this.keyword;
    },
  },
  methods: {
    ...mapActions(["SetLocation"]),
    searchValue(value) {
      const self = this;
      this.keyword = value;
      AMap.plugin("AMap.Autocomplete", function () {
        // 实例化Autocomplete
        var autoOptions = {
          //city 限定城市，默认全国
          city: self.currentCity,
        };
        var autoComplete = new AMap.Autocomplete(autoOptions);
        autoComplete.search(value, function (status, result) {
          // 搜索成功时，result即是对应的匹配数据
          self.searchList = result.tips;
        });
      });
      if (value === "") {
        this.searchList = [];
      }
    },
    selectLocation(item) {
      let location = item.name + "·" + item.district + item.address;
      this.SetLocation(location);
      this.$router.push("/home");
    },
    back(){
      this.$router.push("/home")
    }
  },
};
</script>

<style lang="scss" scoped>
@import "style/mixin.scss";
.loading-content {
  @include loading-center;
}
</style>