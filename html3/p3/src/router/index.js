import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home.vue'
import List from '@/page/list/List.vue'
import Cart from '@/page/cart/Cart.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
        {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
