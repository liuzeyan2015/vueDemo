<template>
<div>
  <input type="text" placeholder="请输入您需要查询的内容" v-model="search">
  <button v-on:click="searchCont">Search</button>
  <ul>
    <li v-for="item in listSearch">{{item}}</li>
  </ul>
</div>
</template>

<script>
    export default {
        name: "search",
        data(){
            return{
                search:'',
                list:[
                    "上路巩州遇虎熊",
                    "五百年前一场疯",
                    "腾宵又是孙悟空",
                    "失马鹰愁涧飞白龙",
                    "沙河阻断路难通",
                    "福陵山中收天蓬",
                    "岭上前行逆黄风",
                    "七星不照波月洞",
                    "千年白骨化阴风",
                    "鱼篮网通天一尾红",
                    "紫金葫芦二道童",
                    "九尾老狐敢压龙",
                    "白虹坠雪浪击石碎",
                    "思归",
                    "难归",
                    "堕回",
                    "轮回",
                    "月满一江水",
                    "前世莫追",
                    "福泽聚宝象",
                    "春风度不让洛阳",
                    "玉面狐折兰香",
                    "七绝崖上暗伏赤色大蟒",
                    "过西梁女儿国",
                    "鸳鸯罗帐",
                    "与三道斗法相火云扬",
                    "明枪易挡暗箭难防"
                ],
                listSearch: [
                    "上路巩州遇虎熊",
                    "五百年前一场疯",
                    "腾宵又是孙悟空",
                    "失马鹰愁涧飞白龙",
                    "沙河阻断路难通",
                    "福陵山中收天蓬",
                    "岭上前行逆黄风",
                    "七星不照波月洞",
                    "千年白骨化阴风",
                    "鱼篮网通天一尾红",
                    "紫金葫芦二道童",
                    "九尾老狐敢压龙",
                    "白虹坠雪浪击石碎",
                    "思归",
                    "难归",
                    "堕回",
                    "轮回",
                    "月满一江水",
                    "前世莫追",
                    "福泽聚宝象",
                    "春风度不让洛阳",
                    "玉面狐折兰香",
                    "七绝崖上暗伏赤色大蟒",
                    "过西梁女儿国",
                    "鸳鸯罗帐",
                    "与三道斗法相火云扬",
                    "明枪易挡暗箭难防"
                ],
                matchText:'你好 世界'
            }
        },
        created(){
          this.matchFun()
            this.getRandom(12)
        },
        methods:{
            searchCont(){
                this.listSearch=this.list.filter((text)=>{
                    return text.match(this.search)
                })
            },
            matchFun(){
                console.log(this.matchText.match('世'))//["世", index: 3, input: "你好 世界"]
                console.log(this.matchText.match('我'))//null
            },
            getRandom: function (x) {
                var random = (Math.random() * x).toFixed();
                console.log(random)
                return random;
            }
        }
        // computed:{
        //     searchList(){
        //         return this.list.filter((text)=>{
        //          return  text.match(this.search)
        //         })
        //     }
        // }
    }
</script>

<style scoped>

</style>
