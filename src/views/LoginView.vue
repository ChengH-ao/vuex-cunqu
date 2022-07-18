<template>
    <div>
        <p>我是登录页</p>
        <p>{{login.username}}</p> <p>{{login.age}}</p>
        <button @click="name">存名字</button>  <button @click="age">存年龄</button>
    </div>
</template>

<script>
import { mapState,mapMutations } from "vuex";
export default{
    created(){
        console.log( this.$store.state.UserInfo);
        console.log( this.$store.state.login);
    },
    computed:{
           ...mapState(['login']),
    },
    methods:{
        ...mapMutations(['userName','userAge']),
        name(){
            this.userName ('别了吧')
        },
        age(){
              this.userAge (60)
        }
       
    }
}

</script>