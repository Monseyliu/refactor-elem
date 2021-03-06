<template>
  <div class="address">
    <!-- 头部 -->
    <TopHeader title="选择收获地址" />
    <!-- 搜索 -->
    <SearchAddress :searchList="searchList" :currentCity="currentCity" @searchValue="searchValue" />
    <!-- 当前定位 -->
    <CurrenLocation :location="location" />
    <!-- 列表 -->
    <ResultList v-show="searchList.length" @selectLocation="selectLocation" :resultList="searchList" />
   
  </div>
</template>

<script>
//组件
import TopHeader from "base/top-header/top-header";
import SearchAddress from "base/search-address/search-address";
import CurrenLocation from "base/current-location/current-location";
import ResultList from "base/result-list/result-list";

//js配置
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      timer: null,
      searchList: [],
    };
  },
  components: {
    TopHeader,
    SearchAddress,
    CurrenLocation,
    ResultList,
  },
  computed: {
    ...mapGetters(["currentCity", "location"]),
  },
  methods: {
    ...mapActions(["SetLocation"]),
    searchValue(value) {
      const self = this;
      AMap.plugin("AMap.Autocomplete", function () {
        // 实例化Autocomplete
        var autoOptions = {
          //city 限定城市，默认全国
          city: "全国",
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
      let location = item.district + item.address;
      this.SetLocation(location);
      this.$router.push("/home")
    },
  },
};
</script>

<style lang="scss" scoped>
@import "style/mixin.scss";

</style>