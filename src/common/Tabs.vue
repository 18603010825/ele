<template>
  <nav class="tabs one-top-px" id="tabs">
      <router-link class="tab" v-for="(tabItem, index) in tabsData" 
        :key="index" :to="tabItem.path">
          {{tabItem.title}}
      </router-link>
  </nav>
</template>

<script>
export default {
    name: 'tabs',
    data(){
        return {
            tabsData: [
                {title: '首页', path: '/home'},
                {title: '发现', path: '/discover'},
                {title: '订单', path: '/order'},
                {title: '我的', path: '/mine'},
            ]
        }
    }
}
</script>

<style scoped>
.tabs#tabs{
    width: 100%;
    height: 49px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #fff;
    display: flex;
}
.tabs .tab{
	flex:1;
	text-align: center;
	line-height: 49px;
}
.tabs .tab.router-link-active{
    color: #0089dc;
}
</style>
