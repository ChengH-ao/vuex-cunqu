import Vue from 'vue'
import Vuex from 'vuex'
import { getUserInfoApi } from "@/api/api";
//  user 用户 也就是说应该把vuex中所有user相关信息
import user from '@/store/modules/user.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    UserInfo:{
      username:'fengle',
      age:18
    },
    userinfo:{},
    list:[],
    cate:{},
    login:{
      username:'fengle',
      age:28
    }
  },
  getters: {
    age(state){
      return state.UserInfo.age
    },
    user(state){
      return state.UserInfo
    }
  },
  mutations: {
    dataList(state,val){
      state.list = val;
    },
    Cations(state,val){
      state.cate = val;
      console.log(val);
    },
    pops(state,val){
      state.UserInfo.age = val;
    },
    userName(state,val){
      state.login.username = val;
    },
    userAge(state,val){
      state.login.age = val;
    },
    USER_INFO(state,val){
      state.userinfo= val;
    }
  },
  actions: {
    // actions中的方法和mutations方法一样
    // 而actions中的方法可以写异步
    // 在项目中，通常情况下，actions用来二次封装接口api

    // 在什么时候用acrtion
    // 答:如果你调用一个api接口后，一定会将其返回值放入vuex中时，则就要使用actions方法
    
    // 通常情况下，该方法会利用promise的 .then方法进行链式调用
    // 在链式调用中，进行vuex状态存取
    // ctx commit state gettres dispatch
    getUserInfoApi(ctx,payload){
      // ctx.commit('USER_INFO',data)
      // getUserInfoApi 接口基于promise来实现的 所有有。then()方法
       getUserInfoApi(payload).then(res=>{
        ctx.commit('USER_INFO',res.data);
        console.log(ctx.state.userinfo);
      })
    },
  
  
  },
  modules: {
    //把不同的变量,放在不同的模块中;
    // modules 模块中有 state gettres mutations actions 模块
    user
  }
})
