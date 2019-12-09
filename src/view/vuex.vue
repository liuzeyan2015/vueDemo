<template>
<div>
  <div>{{count}}</div>
  <div>{{filterNumbers}}</div>
  <button @click="add">add</button>
  <button @click="changeCount3000s">点击按钮3000s后count生效</button>
</div>
</template>

<script>
import {mapState,mapMutations } from 'vuex'
    export default {
        name: "vuex",
        data(){
            return{

            }
        },
        computed:{
            // count(){
            //     return this.$store.state.count
            // }
           ...mapState (['count']),
            filterNumbers(){
               return this.$store.getters.filterNumbers
            }
        },
        methods:{
            // add(){
            //     this.$store.commit('add')
            // },
            ...mapMutations(['add']),
            changeCount3000s(){
                this.$store.dispatch('changeCount3000s')
            }
        }
    }
</script>

<style scoped>

</style>
