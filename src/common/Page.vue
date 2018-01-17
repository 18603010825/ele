<template>
<div class="page" :id="pageId" ref="page">
    <div class="wrapper"> 
        <slot></slot>
    </div> 
</div>
</template>

<script>
import IScroll from 'iscroll';
console.log(IScroll);
export default {
    name: 'page',
    props: {
        pageId: String
    },
    mounted(){
        let pageScroll = new IScroll(this.$refs.page, {

        });
    }
}
</script>

<style>
.page{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 49px;
    overflow: hidden;
}
</style>
