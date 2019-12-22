<template>
    <div class="userInfo">
      <div class="flex">
        <span class="item">用户名字：{{userInfo.userName}}</span>
        <span  class="item">地址：{{userInfo.address}}</span>
        <span  class="item">电话：{{userInfo.tel}}</span>
      </div>
    </div>
</template>

<script>
  import {mapGetters} from  'vuex'
    export default {
        name: "userInfo",
        data(){
            return {}
        },
        computed:{
            ...mapGetters(['userInfo'])
        }
    }
</script>

<style scoped>


</style>
