import {createRouter, createWebHistory} from 'vue-router'
import Home from '../view/Home.vue'
import Search from "../view/Search.vue";
import List from "../view/List.vue";
import Detail from '../view/Detail.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/home', component: Home},
    {path: '/search', component: Search},
    {path: '/list/:newType', component: List},
    {path: '/detail/:newType/:id', component: Detail},
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
