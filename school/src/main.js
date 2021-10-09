import router from './router'
import store from './store'
import  app from "./elment";
import 'element-plus/lib/theme-chalk/base.css'
import Axios from 'axios'

const instance = Axios.create({
    baseURL: 'http://localhost:1337/users/',
    timeout: 5000
})
instance.interceptors.response.use(res => { //响应拦截
    // console.log(res);
    return res.data;
});
app.config.globalProperties.$axios = instance

app.use(store).use(router).mount('#app')
