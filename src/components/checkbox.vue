


<template>
<div>
  <input type="checkbox" :checked="checked"  @change="inputChange"/>
</div>
</template>

<script>
    export default {
        name: "checkbox",
        props:['checked'],
        methods:{
            inputChange(e){
                this.$emit('inputChange',e.target.checked)
            }
        }
    }
</script>

<style scoped>

</style>
