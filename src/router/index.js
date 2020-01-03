import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'home',
      component:()=>import("@/view/home.vue")
    },
    {
      path: '/base',
      name: 'base',
      component:()=>import("@/view/base.vue")
    },
    {
      path: '/com',
      name: 'com',
      component:()=>import("@/view/com.vue")
    },
    {
      path: '/vuex',
      name: 'vuex',
      component:()=>import("@/view/vuex.vue")
    },
    {
      path: '/search',
      name: 'search',
      component:()=>import("@/view/search.vue")
    },
    {
      path: '/tab',
      name: 'tab',
      component:()=>import("@/view/tab.vue")
    },
    {
      path: '/style',
      name: 'style',
      component:()=>import("@/view/style.vue")
    },
    {
      path: '/product',
      name: 'product',
      component:()=>import("@/view/product.vue")
    },
    {
      path: '/account',
      name: 'account',
      component: () => import("@/view/account.vue")
    },{
      path: '/echart',
      name: 'echart',
      component: () => import("@/view/echart.vue")
    }
    // {
    //   path:'/componentPage',
    //   name: 'componentPage',
    //   component:()=>import("@/view/componentPage.vue")
    // }
  ]
})
