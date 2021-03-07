<template>
  <scroll
    :refreshDelay="refreshDelay"
    :data="letters"
    class="city-list"
    v-if="citylist"
    ref="wrapper"
  >
    <!-- 城市列表 -->
    <ul>
      <!-- 热门城市 -->
      <li class="city-wrapper border-top">
        <div class="city-scroll">
          <p class="title border-bottom">热门城市</p>
          <div class="item-wrapper">
            <div
              class="item border hotcity"
              v-for="(hot, index) of citylist.hotCities"
              :key="index"
              @click="selectCity(hot.name)"
            >
              {{ hot.name }}
            </div>
          </div>
        </div>
      </li>
      <!-- 城市列表 -->
      <li class="city-wrapper border-top" v-for="(item, i) of letters" :key="i">
        <div class="wrapper city-scroll">
          <p class="title border-bottom">{{ item }}</p>
          <div
            class="city border"
            v-for="city of citylist[item]"
            :key="city.id"
            @click="selectCity(city.name)"
          >
            {{ city.name }}
          </div>
        </div>
      </li>
    </ul>
  </scroll>
</template>

<script>
// 组件
import scroll from "base/scroll/scroll";

export default {
  data() {
    return {
      refreshDelay: 100,
    };
  },
  props: {
    citylist: {
      type: Object,
      default: null,
    },
    letters: {
      type: Array,
      default() {
        return [];
      },
    },
    letterIndex: {
      type: Number,
      default: 0,
    },
  },
  watch: {
    letterIndex(newIndex) {
      // 根据类名获取到相应的DOM
      const cityScroll = this.$refs.wrapper.$el.getElementsByClassName(
        "city-scroll"
      );
      let el = cityScroll[newIndex];
      //滚动到相对于的位置
      this.$refs.wrapper.scrollToElement(el, 250);
    },
  },
  components: {
    scroll,
  },
  methods: {
    selectCity(city) {
      this.$emit("selectCity", city);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "style/mixin.scss";
.city-list {
  overflow: hidden;
  height: 100%;
  position: absolute;
  .city-wrapper {
    background-color: #fff;
    margin-top: 0.2rem;
    .title {
      line-height: 0.54rem;
      font-size: $font-size-medium;
      padding: 0 0.2rem;
      color: $color-light-d;
    }
    .item-wrapper {
      display: flex;
      flex-wrap: wrap;
      .item {
        line-height: 0.64rem;
        text-align: center;
        width: 25%;
        font-size: $font-size-medium-x;
        color: $color-dark;
        @include ellipsis;
        padding: 0 0.2rem;
        box-sizing: border-box;
      }
      .hotcity {
        color: $color-theme;
      }
    }
    //城市列表
    .wrapper {
      .city {
        line-height: 0.64rem;
        font-size: $font-size-medium-x;
        color: $color-dark;
        padding: 0 0.2rem;
      }
    }
  }
}
</style>