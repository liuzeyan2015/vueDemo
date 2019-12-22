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
  <div @click="toggleClick()">toggle</div>
  <span v-if="toggleText">切换显示隐藏</span>
  <span>{{messageType}}</span>


</div>

</template>

<script>
  import Unit from "@/unit/unit.js"
    export default {
        name: "base1",
        data(){
            return {
                redColor:'red',
                pinkColor:'pink',
                isBlueColor:true,
                activeClass:'active',
                errClass:'text-danger',
                toggleText:false,
                messageType:''
            }
        },
        created(){
            this.getUnit()
        },
        methods:{
            toggleClick(){
                this.toggleText=!this.toggleText
            },
            getUnit(){
                this.messageType=Unit.messageType('1')
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
