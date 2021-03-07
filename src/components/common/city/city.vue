<template>
  <div class="city">
    <!-- 头部 -->
    <TopHeader title="选择城市" :isRight="true" />
    <!-- 搜索城市 -->
    <SearchAddress
      @searchValue="searchValue"
      :showLeft="false"
      placeholder="输入城市名"
    />
    <!-- 当前定位 -->
    <CurrentLocation title="当前城市" :location="currentCity" />
    <!-- 搜索结果 -->
    <SearchCity
      @selectCity="selectCity"
      :list="searchList"
      v-show="searchList.length"
    />
    <!-- 城市列表 -->
    <CityList
      @selectCity="selectCity"
      :letterIndex="letterIndex"
      :citylist="citylist"
      :letters="letters"
      v-show="!searchList.length"
    />
    <!-- 快速入口-a-z字母表 -->
    <Alphabet
      @selectLetter="selectLetter"
      :letters="letters"
      v-show="!searchList.length"
    />
    <!-- loading组件 -->
    <div class="laoding-content" v-show="!citylist">
      <Loading />
    </div>
  </div>
</template>

<script>
//组件
import TopHeader from "base/top-header/top-header";
import SearchAddress from "base/search-address/search-address";
import CurrentLocation from "base/current-location/current-location";
import CityList from "base/city-list/city-list";
import Alphabet from "base/alphabet/alphabet";
import Loading from "base/loading/loading";
import SearchCity from "base/search-city/search-city";
//js配置
import { mapGetters, mapActions } from "vuex";
import { getCitylist } from "api/citylist";

export default {
  data() {
    return {
      letters: [],
      citylist: null,
      letterIndex: 0,
      allCitys: [], //所有城市
      searchList: [], //搜索城市数据
    };
  },
  components: {
    TopHeader,
    SearchAddress,
    CurrentLocation,
    CityList,
    Alphabet,
    Loading,
    SearchCity,
  },
  computed: {
    ...mapGetters(["currentCity"]),
  },
  created() {
    this._getCitylist();
  },
  methods: {
    ...mapActions(["SetCurrentCity"]),
    _getCitylist() {
      getCitylist().then((res) => {
        // 城市列表
        this.citylist = res;
        console.log(this.citylist);
        // 字母表
        let keys = Object.keys(res);
        keys.pop();
        keys.sort();
        this.letters = keys;
        //存储所有城市用来过滤
        this.letters.forEach((key) => {
          this.citylist[key].forEach((city) => {
            this.allCitys.push(city.name);
          });
        });
      });
    },
    //选择相应的字母表索引
    selectLetter(index) {
      this.letterIndex = index;
    },
    //点击选择城市
    selectCity(city) {
      this.SetCurrentCity(city);
      this.$router.push("/address");
    },
    //监听搜索事件
    searchValue(value) {
      if (!this.searchList) {
        this.searchList = [];
      }
      this.searchList = this.allCitys.filter((item) => {
        return item.indexOf(value) !== -1;
      });
      //清空数据
      if (!value) {
        this.searchList = [];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "style/mixin.scss";
.city {
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  .laoding-content {
    @include loading-center;
  }
}
</style>