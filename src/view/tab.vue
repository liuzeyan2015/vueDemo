<template>
  <div>
<!--    <el-tabs v-model="activeName" @tab-click="handleClick">-->
<!--      <el-tab-pane v-for="item in messageTitle" :label="item.lable" :name="item.key">-->
<!--        <div v-for="data in messageTitle.lists"><span>{{data.text}}</span></div>-->
<!--      </el-tab-pane>-->
<!--    </el-tabs>-->

  </div>
</template>

<script>
    export default {
        name: "tab",
        data(){
            return{
                activeName:'first',
                list:[{id:1,text:'用户管理内容'},{id:2,text:'配置管理内容'},{id:3,text:'角色管理内容'},{id:4,text:'定时任务补偿内容'}]
                ,
                messageTitle:[{lable:'用户管理',key:'1',lists:[]},
                              {lable:'配置管理',key:'2',lists:[]},
                              {lable:'角色管理',key:'3',lists:[]},
                              {lable:'定时任务补偿',key:'4',lists:[]}
                              ]
            }
        },
        created(){
          //this.getMessage()
        },
        methods:{
            handleClick(tab, event){
                console.log(tab,event)
            },
            getMessage(){
                // this.list=
                // messageTitle.forEach(item=>{item.lists=this.list})
            }
        }
    }
</script>

<style scoped>

</style>
