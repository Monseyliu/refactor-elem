<template>
  <div class="result-list">
    <ul>
      <li
        class="list-item border-bottom"
        v-for="(item, index) of resultList"
        :key="index"
        @click="select(item)"
      >
        <div class="title">{{ item.name }}</div>
        <div class="desc">
          {{ item.district }}{{ item.address.length ? item.address : "" }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    resultList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    select(item) {
      this.$emit("selectLocation", item);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "style/mixin.scss";

.result-list {
  margin-top: 0.2rem;
  background-color: #fff;
  @include wh(100%, 100%);
  .list-item {
    line-height: 0.4rem;
    padding: 0.1rem 0;
    .title {
      font-size: $font-size-medium-x;
      padding: 0 0.2rem;
    }
    .desc {
      font-size: $font-size-medium;
      color: $color-dark;
      @include ellipsis;
      padding: 0 0.2rem;
    }
  }
}
</style>