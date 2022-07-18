<template>
  <div>
    <p>this is about</p>
   
  </div>
</template>

<script>
// import { getUserInfoApi } from "@/api/api";
// 在computed中 用 。。。mapGetters(['age'])
import {  mapActions,mapState } from "vuex";
  // this.$store.dispatch('getUserInfoApi')
  // 为了解决这个问题，出现了辅助函数叫 mapActions
  // 但是因为他是方法，所有应该挂载在methods方法中
  export default{
    computeds:{
      // mapstate  两种入参
      // array 则接收每一项字符串，该字符串指向的是 vuex中state对应的key
      // object 则接收一个回调函数，该回调函数有一个入参，该入参是state
      // 通常情况下,如果使用vuex模块化就会使用object作为入参
      ...mapState({
        userInfo:(state)=> state.user.userinfo
      })
    },  
     async created(){

       await this.getUserInfoApi();
     
      // this.$store.commit('USER_INFO',{
      //   username:'newaname',
      //   age:255
      // });
      // console.log(this.$store.state.user.userinfo);
      // this.$store.commit('USER_INFO',userinfo.data);
      // console.log(this.$store.state.userinfo);


      // 被模块化，state 被放在了模块化中,调用模块化state中的值是，要加上模块化名，比如
      // console.log(this.$store.state.user.UserInfo);
      // let str =  await this.getUserInfoApi();
      // console.log(str);
      // console.log(this.$store.getters.age);


      // console.log(this.$store.state.UserInfo);
      // console.log(this.$store.state.cate);
      // console.log(this.username);

     
     
      // 如果把vuex、中store.state 赋值给一个变量中的数据数据双向绑定就会消失
      // let username = this.$store.state.UserInfo.username;
      // console.log(username);
    },
    // 问：computed计算属性的应用场景
    // 如果你想获取vuex某个值，就可以利用computed计算属性，监听改=该属性变化
    computed:{
      // username(){
      //   return this.$store.state.UserInfo.username;
      // },  

    },
    methods:{
      ...mapActions(['getUserInfoApi']),


    }
  }
</script>