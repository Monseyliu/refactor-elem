<template>
  <div class="alphabet" v-if="newletters.length > 2">
    <div
      :class="{ active: currentIndex === i }"
      class="item"
      v-for="(item, i) of newletters"
      :key="i"
      @click="select(i)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    letters: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    newletters() {
      let value = this.letters.slice();
      value.unshift("#");
      return value;
    },
  },
  methods: {
    select(i) {
      this.$emit("selectLetter", i);
      this.currentIndex = i;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "style/mixin.scss";
.alphabet {
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  .item {
    text-align: center;
    padding: 0.06rem;
    line-height: 0.25rem;
  }
  .active {
    color: #fff;
    background-color: $color-theme;
    border-radius: 50%;
  }
}
</style>