<template>
<div>style class:
<div>
  <span :style="{color:redColor,pink:pinkColor}">我是红色和粉色</span>
</div>
  <div>
    <span :class="{blueColor:isBlueColor}">我是蓝色</span>
    <br />
    <a :class="[activeClass,errClass]">active,text-danger</a>
  </div>
</div>

</template>

<script>
    export default {
        name: "base",
        data(){
            return {
                redColor:'red',
                pinkColor:'pink',
                isBlueColor:true,
                activeClass:'active',
                errClass:'text-danger'
            }
        }
    }
</script>

<style scoped>
  .blueColor {
    color: blue;
  }
  a:active {
    color: greenyellow;
  }
  .text-danger {
    color: #2c3e50;
  }
</style>
