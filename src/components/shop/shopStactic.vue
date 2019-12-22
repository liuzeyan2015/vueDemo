<template>
 <div>
   <div class="flex" >
     <div class="count item">结算：{{totalPrice}}</div>
     <div class="count item">总数:{{totalNum}}</div>
     <div class=" btn btn-danger btn-sm"  @click='clearProduct' >清空购物车</div>
   </div>
   <router-link :to="'./account'">
     <div class=" btn btn-primary btn-sm f-right"   >
       去结算
     </div>
   </router-link>
 </div>
</template>

<script>
  import {mapActions,mapGetters} from 'vuex'
    export default {
        name: "shopStactic",
        data(){
            return{

            }
        },
        computed:{
            ...mapGetters(['totalPrice','totalNum'])
        },
        methods:{
            ...mapActions(['clearProduct'])
        }
    }
</script>

<style scoped>

</style>
