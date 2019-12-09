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
    // {
    //   path:'/componentPage',
    //   name: 'componentPage',
    //   component:()=>import("@/view/componentPage.vue")
    // }
  ]
})
