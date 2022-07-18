<template>
  <div class="home">
    <h1>This is home page</h1>
    <!-- <p>{{this.$store.state.userInfo}}</p>
    <p>{{this.$store.state.list}}</p> -->
    <h1>{{list}}</h1>
    <button @click="add">复杂传参</button>
    <button @click="app">二次传参</button>
  </div>
</template>


// 1.vuex 可以解决复杂组件之间的传参;
// 2.是因为vuex中state的属性有数据双向绑定;

<script>
import { mapState,mapMutations,mapActions} from "vuex";
// import { getUserInfoApi } from "@/api/api";
export default{
  
  async created(){
    // let userinfo =await getUserInfoApi();
    // console.log(userinfo);

    // this.$store.commit('USER_INFO',userinfo.data);
    // console.log(this.$store.state.userinfo);
    // 异步方法：只有等待该方法执行完毕后，才可以拿到该方法的值

    // 取
    // let userinfo = this.$store.state.userInfo;
    // console.log(userinfo);

    // let list = this.$store.state.list;
    // console.log(list);
    // // 存
    // this.$store.commit('USER_INFO',{
    //   username:'xiaobai',
    //   age:20
    // })
    // console.log(this.$store.state.userInfo);
    // console.log('---------------------------');

    // this.$store.commit('dataList',[1,2,3])
    // this.$store.commit('dataList',[1,2,3])
    
  },
  methods:{
    ...mapActions(['getUserInfoApi']),
    ...mapMutations(['dataList']),
    add(){
      this.dataList([1,2,3])
    },
    app(){
      this.dataList([4,5,6])
    }
  },  
  computed:{
    ...mapState(['list'])
  }
  
}
</script>