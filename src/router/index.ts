import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw
} from 'vue-router'

import Home from '@/views/home/Home.vue'
import Homedetial from '@/views/home/Homedetial.vue'


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/detial',
        name: 'Homedetial',
        component: Homedetial
    },
    // {
    //   path: '/hello',
    //   name: 'hello',
    //   component: () => import('@/components/HelloWorld.vue') // 懒加载组件
    // },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
