// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/styles/common.css'
// import myCharts from './comm/js/myCharts.js'
// import ECharts from 'vue-echarts'
// import 'echarts/lib/chart/line'
// Vue.component('chart', ECharts)
import echarts from 'echarts'
Vue.prototype.$echarts = echarts //将echarts注册成Vue的全局属性
Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(myCharts)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
