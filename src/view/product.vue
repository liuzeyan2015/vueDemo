<template>
<div class="product">
  <user-info></user-info>
  <product-list></product-list>
  <selected-product></selected-product>
  <shop-stactic></shop-stactic>
</div>
</template>

<script>
  import userInfo from '@/components/shop/userInfo'
  import selectedProduct from '@/components/shop/selectedProduct'
  import productList from '@/components/shop/productList'
  import shopStactic from "@/components/shop/shopStactic";
    export default {
        name: "shop-product",
        components:{userInfo,productList,selectedProduct,shopStactic}
    }
</script>

<style scoped>


</style>
