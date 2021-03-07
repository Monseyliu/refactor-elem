<template>
  <Scroll :data="list" class="search-city">
    <ul class="item-wrapper">
      <li @click="selectCity(item)" class="item border-bottom" v-for="(item, i) of list" :key="i">
        {{ item }}
      </li>
    </ul>
  </Scroll>
</template>

<script>
import Scroll from "base/scroll/scroll";

export default {
  data() {
    return {};
  },
  props: {
    list: {
      type: Array,
      default: null,
    },
  },
  components: {
    Scroll,
  },
  methods: {
      selectCity(city){
          this.$emit("selectCity", city)
      }
  },
};
</script>

<style lang="scss" scoped>
@import "style/mixin.scss";

.search-city {
  overflow: hidden;
  height: 100%;
  position: relative;
  .item-wrapper {
    position: absolute;
    width: 100%;
    overflow: hidden;
    background-color: #fff;
    .item {
      line-height: 0.54rem;
      padding: 0 0.2rem;
      font-size: $font-size-medium-x;
      color: $color-dark;
    }
  }
}
</style>