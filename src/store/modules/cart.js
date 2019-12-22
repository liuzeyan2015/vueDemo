import de from "element-ui/src/locale/lang/de";
//源数据 用户信息 商品列表
const state = {
  user_info:{
    id:1,
    userName:'slucky',
    address:'深圳南山',
    tel:'1234567689'
  },
  productList: [
    {
    id:1,
    productName: '鸡',
    count: '12',
    price: '18',
    allCount: '100',
  }, {
    id:2,
    productName: '鸭',
    count: '15',
    price: '20',
    allCount: '130',
  }, {
    id:3,
    productName: '牛肉',
    count: '18',
    price: '38',
    allCount: '98',
  }, {
    id:4,
    productName: '瘦肉',
    count: '2',
    price: '18',
    allCount: '13',
  }, {
    id:5,
    productName: '鹅肉',
    count: '2',
    price: '15',
    allCount: '67',
  }, {
    id:6,
    productName: '羊肉',
    count: '3',
    price: '25',
    allCount: '34',
  }, {
    id:7,
    productName: '鱼',
    count: '67',
    price: '13',
    allCount: '186',
  }],
  //已选商品
  addedShop:[]
};
const getters = {
  shopList(state){
    return state.productList
  },
  userInfo(state){
    return state.user_info
  },
  //已经选择的商品
  cartProducts:(state)=>{
    return state.addedShop.map(({id,num})=>{
      let product =state.productList.find(i=>i.id==id)
      return {
        ...product,//解构赋值
        num
      }
    })
  },
  totalNum:(state,getters)=>{
      let total =0
      getters.cartProducts.forEach(item=>{
        total +=item.num
      })
      return total
    },
    totalPrice:(state,getters)=>{
      let total =0
      getters.cartProducts.forEach(item=>{
        total +=item.count*item.price
      })
      return total
    }
};

const actions = {
  //点击 添加。
  addToCart({commit},product){
    commit('add',{
      id:product.id
    })
  },
  //删除某个商品
  delProduct({commit},product){
    commit('del',product)
  },
  //清除购物车
  clearProduct({commit}){
    commit('clearAllProduct')
  },
};
const mutations = {
  //添加到购物车
  add(state, {id}) {
    //获取当前商品id
    let currentShopId=state.addedShop.find(i=>i.id==id)
    var currentShop =true;
    if(!currentShopId){
      state.addedShop.push({
        id,
        num:1,
      })
    }else {
      currentShopId.num++
    }
  },
  //删除指定的商品
  del(state,product){
    state.addedShop.forEach((item,index)=>{
      if(item.id==product.id){
        state.addedShop.splice(index,1)
      }
    })
  },
  //清空购物车
  clearAllProduct(state){
    state.addedShop=[]
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
};
