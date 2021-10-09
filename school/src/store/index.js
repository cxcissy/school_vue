import { createStore } from 'vuex'
import Axios from "axios";
const screenW=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;

export default createStore({
  state: {
    // pageW:screenW*0.8,
    Url:'http://localhost:1337/',
    extraData:[]
  },
  mutations: {
    extraData(state){
      Axios.get('http://localhost:1337/users/getMsgObj').then(rs=>{
        const arr=rs.data;
        arr[0]=arr[0].map(el=>{
          const d=new Date(el.updatedAt);
          el.day=d.getDate();
          el.my=d.getMonth()+'-'+d.getFullYear();
          el.times=800;
          return el
        })
        arr[1]=arr[1].map(el=>{
          const d=new Date(el.updatedAt);
          el.day=d.getDate();
          el.my=d.getMonth()+'-'+d.getFullYear();
          el.times=700;
          return el
        })
        state.extraData=arr;
      })
    },
    // getArr(state,arr){
    //   state.extraData=arr
    // }
  },
  actions: {//处理异步，需用这种方式
    // extraData(context){
    //   return new Promise((resolve,reject) => {
    //     Axios.get('http://localhost:1337/users/getMsgObj').then(rs=>{
    //       const arr=rs.data;
    //       console.log(arr)
    //       context.commit('getArr',arr);
    //       resolve('数据请求已完成');
    //     })
    //   })
    // }
  },
  modules: {
  }
})
