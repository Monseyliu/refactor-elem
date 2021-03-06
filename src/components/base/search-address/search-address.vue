<template>
  <div class="search-address">
    <div class="search-wrapper">
      <div class="city">
        <span class="text">{{ currentCity }}</span>
        <i class="iconfont icon-arrow-down-bold"></i>
      </div>
      <div class="search">
        <i class="icon icon-search"></i>
        <input
          v-model="searchValue"
          type="text"
          placeholder="小区/写字楼/学校"
        />
      </div>
    </div>
    <!-- lading组件 -->
    <div class="loading-content" v-show="searchValue && !searchList.length ">
      <Loading />
    </div>
  </div>
</template>

<script>
import Loading from "base/loading/loading";
export default {
  data() {
    return {
      searchValue: "",
      timer: null,
    };
  },
  components: {
    Loading,
  },
  props: {
    currentCity: {
      type: String,
      default: "北京市",
    },
    searchList: {
        type: Array
    }
  },
  watch: {
    searchValue(newValue) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.$emit("searchValue", newValue);
      }, 200);
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "style/mixin.scss";

.search-address {
  @include wh(100%, 0.9rem);
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  .search-wrapper {
    @include wh(90%, 75%);
    background-color: $color-background;
    display: flex;
    align-items: center;
    border-radius: 0.15rem;
    color: $color-dark;
    .city {
      border-right: 1px solid;
      margin-right: 0.1rem;
      .text {
        margin-left: 0.1rem;
      }
      i {
        font-size: $font-size-small;
        margin-right: 0.1rem;
      }
    }
    .search {
      flex: 1;
      i {
        text-align: center;
        font-size: $font-size-small;
        font-weight: 600;
      }
      input {
        @include clearBtn;
        text-indent: 0.1rem;
        width: 80%;
      }
    }
  }
  .loading-content {
    @include loading-center;
  }
}
</style>