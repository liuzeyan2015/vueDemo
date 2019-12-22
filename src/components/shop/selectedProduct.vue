<template>
  <!--已经选择的商品-->
  <div>
    <h4>已选商品</h4>
    <table class="table table-hover table-bordered">
      <thead>
      <tr>

        <th>id</th>
        <th>产品名称</th>
        <th>数量</th>
        <th>价格</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for = '(item,index) in cartProducts'>
        <td>{{item.id}}</td>
        <td>{{item.productName}}</td>
        <td>{{item.count}}</td>
        <td>{{item.price}}</td>
        <td>
          <div @click='delProduct(item)' class="btn btn-danger btn-sm">删除</div>
        </td>
      </tr>
      <tr v-if="!cartProducts.length">
        <td colspan="5" class="text-center">购物车暂无商品...</td>
      </tr>
      </tbody>
    </table>

  </div>

</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
    export default {
        name: "selectedProduct",
        data(){
            return {

            }
        },
        computed:{
            ...mapGetters(['cartProducts'])
        },
        methods:{
            ...mapActions(['delProduct','clearProduct'])
        }
    }
</script>

<style scoped>

</style>
