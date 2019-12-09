


<template>
  <input type="text" :value="value"  @input="updateValue" placeholder="Edit me"/>
</template>

<script>
    export default {
        name: "vModel",
        props:['value'],
        methods:{
            updateValue(e){
                this.$emit('input',e.target.value)
            }

        }
    }
</script>

<style scoped>

</style>
