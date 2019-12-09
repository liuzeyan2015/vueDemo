<template>
<div>
  <input-value v-model="message"></input-value>
  <div>输入的值:{{message}}</div>

  <div>-----------------------------</div>
  <check-box v-model="checkStatus" @inputChange="changeCheckStatus"></check-box>
</div>
</template>

<script>
  import inputValue from "@/components/vModel";
  import checkBox from "@/components/checkbox";
    export default {
        name: "com",

        
        components: {inputValue,checkBox},
        data(){
            return{
                message:'',
                checkStatus:false
            }
        },
        methods:{
            changeCheckStatus(checked){
                debugger

            }
        }
    }
</script>

<style scoped>

</style>
