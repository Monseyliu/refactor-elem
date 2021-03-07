<template>
  <div class="scroll" ref="wrapper">
    <!-- 自定义滚动插件Á -->
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";

const DIRECTION_H = "horizontal";
const DIRECTION_V = "vertical";

export default {
  data() {
    return {};
  },
  props: {
    data: {
      type: Array,
      default: null,
    },
    refreshDelay: {
      type: Number,
      default: 20,
    },
    click: {
      type: Boolean,
      defaut: true,
    },
  },
  mounted() {
    setTimeout(() => {
      this._initScroll();
    }, 20);
  },
  watch: {
    data() {
      setTimeout(() => {
        this.refresh();
      }, this.refreshDelay);
    },
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) return;

      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
      });
    },
    //代理的scroll方法
    disable() {
      this.scroll && this.scroll.disable();
    },
    enable() {
      this.scroll && this.scroll.enable();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "style/mixin.scss";
</style>