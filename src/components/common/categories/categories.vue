<template>
  <div class="categories">
    <div class="wrapper">
      <mt-swipe :auto="0">
        <mt-swipe-item class="item-content" v-for="(item, i) of list" :key="i">
          <div class="good-content" v-for="good of item" :key="good.name">
            <div class="good-img">
                <img :src="good.image" />
            </div>
            <p class="name">{{ good.name }}</p>
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
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
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "style/mixin.scss";
.categories {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 42%;
  background-color: #fff;
  .wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    .item-content {
      display: flex;
      flex-wrap: wrap;
      .good-content {
        width: 20%;
        position: relative;
        height: 0;
        padding-bottom: 20%;
        .good-img{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: .3rem;
            img{
                @include wh(100%,100%);
                background-size: cover;
            }
        }
        .name{
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0.05rem;
            text-align: center;
        }
      }
    }
  }
}
</style>