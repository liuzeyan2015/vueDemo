<template>

   <div>
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
         <tr v-for='(item,index) in productList' class="shoplist">
           <td>{{item.id}}</td>
           <td>{{item.productName}}</td>
           <td>
             <span v-on:click="minius(index)">-</span>
             <input type="number" v-model.number="item.count" />
             <span v-on:click="add(index)">+</span>
           </td>
           <td>{{item.price}}</td>
           <td>{{item.allCount}}</td>
           <td>
             <el-button @click='addToCart(item)' class="btn btn-info">添加</el-button>
           </td>
         </tr>
         </tbody>
       </table>
     </div>
     <div>
       <h4>已选商品11</h4>
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
             <!--          <div @click='delProduct(item)' class="btn btn-danger btn-sm">删除</div>-->
           </td>
         </tr>
         <!--      <tr v-if="!cartProducts.length">-->
         <!--        <td colspan="5" class="text-center">购物车暂无商品...</td>-->
         <!--      </tr>-->
         </tbody>
       </table>

     </div>
   </div>
</template>

<script>
    export default {
        name: "product-1",
        data(){
            return {
                productList: [
                    {
                        id:1,
                        productName: '鸡',
                        count: '12',
                        price: '18',
                        allCount: '100',
                    }, {
                        id:2,
                        productName: '鸭',
                        count: '15',
                        price: '20',
                        allCount: '130',
                    }, {
                        id:3,
                        productName: '牛肉',
                        count: '18',
                        price: '38',
                        allCount: '98',
                    }, {
                        id:4,
                        productName: '瘦肉',
                        count: '2',
                        price: '18',
                        allCount: '13',
                    }, {
                        id:5,
                        productName: '鹅肉',
                        count: '2',
                        price: '15',
                        allCount: '67',
                    }, {
                        id:6,
                        productName: '羊肉',
                        count: '3',
                        price: '25',
                        allCount: '34',
                    }, {
                        id:7,
                        productName: '鱼',
                        count: '67',
                        price: '13',
                        allCount: '186',
                    }],
                cartProducts:[]
            }
        },
        methods:{
            //当前页面加减数量。
            minius(index){
               if( this.productList[index].count>1){
                   this.productList[index].count--
                   this.productList[index].allCount++
               }
            },
            add(index){
                this.productList[index].count++
                this.productList[index].allCount--
            },
            addToCart(goods){
                var hasCartProducts = this.cartProducts.findIndex(function (item, index) {
                    return item.id === goods.id;
                });
                // 如果不存在则添加
                if (hasCartProducts === -1) {
                    this.cartProducts.push(goods)
                }
            }
        }
    }
</script>

<style scoped>
.shoplist span{
  width: 26px;
  height: 26px;
  line-height: 26px;
  color: #333333;
  font-size: 14px;
  border: 1px solid #d6d7dc;
  display: inline-block;
  text-align: center;
}
  .shoplist input{
    border: none;
    width: 48px;
    height: 26px;
    border-top: 1px solid #d6d7dc;
    border-bottom: 1px solid #d6d7dc;
    line-height: 25px;
    color: #333333;
    font-size: 14px;
    display: inline-block;
    padding: 0 5px;
    margin: 0;
    text-align: center;
    padding-top: 1px;
  }
</style>
