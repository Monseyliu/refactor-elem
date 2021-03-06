<template>
    <div class="laoding">
       <img width="24" height="24" src="./loading.gif" alt="">
       <p class="title">{{title}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{}
    },
    props:{
        title: {
            type: String,
            default: "正在载入..."
        }
    },
    methods:{}
}
</script>

<style lang="scss" scoped>
@import "style/mixin.scss";

.laoding {
    width: 100%;
    text-align: center;
    .title{
        line-height: .4rem;
        font-size: $font-size-small;
        color: $color-dark;
    }
}
</style>