import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//引入需要的文件
import Home from '../pages/home/Home.vue';
import Mine from '../pages/mine/Mine.vue';
import Discover from '../pages/discover/Discover.vue';
import Order from '../pages/order/Order.vue';
import Detail from '../pages/home/Detail.vue'  // 详情页
import Search from '../pages/home/Search.vue'
export default new Router({
  routes: [
    {
    	path:"/",
	//  	alias: '/',
    	component:Home,
    	children: [
        {
          path: 'detail',
          component: Detail
        },
        {
        	path: 'search',
          component: Search
        }
      ]
    },
    {
    	path:"/mine",
    	component:Mine
    },
    {
    	path:"/discover",
    	component:Discover
    },
    {
    	path:"/order",
    	component:Order
    },
    { // 如果更改不是路由文件路径,就重定向到主页  (放到最后)
    	path:"**",
    	component:Home
    }
  ]
})
