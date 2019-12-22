<template>
<div class="body">
<!--  <div class="overThreeClip">-->
<!--这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏-->
<!--  </div>-->
<!--  <div class="wrapper">-->
<!--    <div class="conmmon div1">12</div>-->
<!--    <div class="conmmon div2">12</div>-->
<!--    <div class="conmmon div3">12</div>-->
<!--  </div>-->
  123
  <div style="display: none;width: 100px;height: 100px">none</div>
  <div style="visibility: hidden;width: 100px;height: 100px">visibility</div>
</div>
</template>

<script>
    export default {
        name: "styleAndclass"
    }
</script>

<style scoped>
  .body {
    /*background-color: pink;*/
  }
  @media screen and (max-width: 960px){
    .body{
      /*background-color: #2c3e50;*/
    }
  }
  @media screen and (max-width: 500px){
    .body{
      /*background-color: #42b983;*/
    }
  }
  .overThreeClip{
    width:200px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    border:1px solid red;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    line-height: 30px;
    height: 60px;

    /*width:400px;*/
    /*overflow : hidden;*/
    /*border:1px solid #ccc;*/
    /*text-overflow: ellipsis;*/
    /*padding:0 10px;*/
    /*display: -webkit-box;*/
    /*-webkit-line-clamp: 2;!*（高度=行高*行数（webkit-line-clamp））*!*/
    /*-webkit-box-orient: vertical;*/
    /*line-height:30px;*/
    /*height:60px;*/
  }
  .wrapper{
    margin: 0 auto;
    width: 420px;
    height: 500px;
  }
  .div1 {
    margin:0 auto;
  }
  .div2{
    float: left;
    margin-top:20px;
  }
  .div3{
    float: right;
    margin-top:20px;
  }
  .conmmon{
    width: 200px;
    height: 200px;
    background-color: #42b983;
  }
</style>
