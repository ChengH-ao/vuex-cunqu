// import axios from "axios";


// const postConfig={
//     headrs:{
//         'Content-Type':'application/json'
//     }
// }

// export const getUserInfoApi = function(payload={}){
//     return axios.post('/user/info',payload,postConfig)
// }


// 说一下se6有哪些新语法？
// 数组中新出的常用语法you
    // slice sort reverse find forEach map filter includes  

// 说一下什么是promise？
// 答：promise是解决地狱回调的一个方案，通常情况下 new一个 Promise对象
// 该对象接收一个回调函数，此回调函数接收两个入参，一个是resolve，一个是reject
// resolve代表的是成功  reject代表的是失败
// 如果执行resovle，则会走.then方法回调函数
// 如果执行reject，则会走.catch方法中的回调函数

// promise中的链式操作 可以无限.then()
// 链式应用场景？
// promise.then()
// axios.post().then()
// vuex中


// new Promise(function(resovle,reject){
//     setTimeout(function(){
//         resolve({
//             msg:'success',
//             dtatus:1,
//             data:[]
//         })
//     })
// }).then(res=>{
//     console.log(res);
// }).catch(ten=>{
//     console.log(ten);
// })



// function getUserInfoApi(){
//     new Promise((resolve, reject) => {
//         resolve({
//             msg:"success",
//             status:1,
//             data:{
//                 username:'xiaoming',
//                 age:18
//             }
//         })
//     }).then(res=>{
//         console.log(res);
//     })
// }


// 说一下对 async await 的理解？
// 答：async await 是promise().then()方法中的一个语法糖，他们是相等的，只是写法不一样
// promise 的用法  await async 写法： await 的父级必须方法命名前加 async
/***
 * @description 获取用户信息接口
 * * */
export function getUserInfoApi(){
    return new Promise((resolve) => {
       setTimeout(function(){
        resolve({
            msg:"success",
            status:1,
            data:{
                username:'xiaobai',
                age:23
            }
        })
       })
    })
}
// getUserInfoApi().then(res=>{
//     console.log(res);
// })
