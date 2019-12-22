<template>
  <div>
    <table class="table table-hover table-bordered">
      <thead>
      <tr>
        <th>id</th>
        <th>产品名称</th>
        <th>数量</th>
        <th>价格</th>
        <th>总数量</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for='(item,index) in shopList'>
        <td>{{item.id}}</td>
        <td>{{item.productName}}</td>
        <td>{{item.count}}</td>
        <td>{{item.price}}</td>
        <td>{{item.allCount}}</td>
        <td>
          <el-button @click='addToCart(item)' class="btn btn-info">添加</el-button>
        </td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
    import {mapGetters,mapActions} from 'vuex'
    export default {
            name: "productList",
            data(){
                return{}
            },
            computed:{
                ...mapGetters(['shopList'])
            },
            methods:{
                ...mapActions(['addToCart'])
            }
    }
</script>

<style scoped>

</style>
