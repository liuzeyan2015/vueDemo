<template>
    <div>
      <router-link :to="'/base'">
          <div>基本渲染class style</div>
      </router-link>
      <router-link :to="'/com'"><div>组件</div></router-link>
      <router-link :to="'/vuex'"><div>状态管理：vuex</div></router-link>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>

</style>
