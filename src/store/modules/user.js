import { getUserInfoApi } from "@/api/api";
export default{
    state:{
        userinfo:{},
    },
    getters:{
      
    },
    mutations:{
        USER_INFO(state,val){
            state.userinfo= val;
          }
    },
    actions:{
        getUserInfoApi(ctx,payload){
            // ctx.commit('USER_INFO',data)
            // getUserInfoApi 接口基于promise来实现的 所有有。then()方法
             getUserInfoApi(payload).then(res=>{
              ctx.commit('USER_INFO',res.data);
              console.log(ctx.state.userinfo);
            })
          },
    }
}
//  1．获取用户信息;
// 2．把用户信息userInfo,放在 vuex中的userInfo上;
// 3．根据用户信息中的身份标识(identify),来获取到该角色对应的权限列表;
// 4．根据权限列表和dynamic-route.js来获取到对应的路由列表;
// 5．通过addRoute方法将第4步获取的值放动态添加在路由中;
