<template>
<div class="count">
  <user-info></user-info>
  <!--已经选择的商品-->
  <selected-product></selected-product>
  <div class="flex" >
    <div class="count item">总价格：{{totalPrice}}</div>
    <div class=" btn btn-primary btn-sm"  @click='pay' >结算</div>
    <div class=" btn btn-primary btn-sm"  @click='goBack' >返回上一页</div>
  </div>
</div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  import userInfo from '@/components/shop/userInfo'
  import selectedProduct from '@/components/shop/selectedProduct'
    export default {
        name: "account",
        components: {userInfo,selectedProduct},
        data(){
            return{}
        },
        computed:{
            ...mapGetters(['userInfo','cartProducts','totalPrice'])
        },
        methods:{
            ...mapActions(['delProduct']),
            goBack(){
                history.go(-1)
            },
            pay(){
            }
        }
    }
</script>

<style scoped>
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
    margin:20px 0px
  }
  .item{
    flex: 1;
  }
  .f-right {
    float: right;

  }
</style>
