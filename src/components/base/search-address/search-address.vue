<template>
  <div class="search-address">
    <div class="search-wrapper">
      <div class="city" v-show="showLeft" @click="selectCity">
        <span class="text">{{ currentCity }}</span>
        <i class="iconfont icon-arrow-down-bold"></i>
      </div>
      <div class="search">
        <i class="icon icon-search"></i>
        <input v-model="searchValue" type="text" :placeholder="placeholder" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: "",
      timer: null,
    };
  },
  props: {
    currentCity: {
      type: String,
      default: "北京市",
    },
    showLeft: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
      default: "小区/写字楼/学校",
    },
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
  methods: {
    selectCity() {
      this.$router.push("/city");
    },
  },
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
        font-size: $font-size-small;
        font-weight: 600;
        margin-left: 0.1rem;
        line-height: 0.9rem;
      }
      input {
        @include clearBtn;
        text-indent: 0.1rem;
        width: 80%;
      }
    }
  }
}
</style>