<template>
    <div>
      <router-link :to="'/base'"><div>base/基本渲染class style</div></router-link>
      <router-link :to="'/com'"><div>组件</div></router-link>
      <router-link :to="'/vuex'"><div>状态管理：vuex</div></router-link>
      <router-link :to="'/search'"><div>搜索管理：search</div></router-link>
      <router-link :to="'/tab'"><div>tab页面：tab</div></router-link>
      <router-link :to="'/style'"><div>style页面：style</div></router-link>
      <router-link :to="'/product'">购物车产品：vuex</router-link>
      <router-link :to="'/seleted-product'">购物车已选产品：vuex</router-link>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>

</style>
