<template>
<div class="subpage" :id="pageId">
<slot></slot>
</div>
</template>

<script>
export default {
    name: 'sub-page',
    props: {
        pageId: String
    }
}
</script>

<style>
.subpage{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0px;
    z-index: 5;
}
</style>
