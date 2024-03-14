import { createRouter, createWebHashHistory } from "vue-router"; 

const routes = [
    {
        path: '/',
        name: 'home',
        alias: '/home',
        component: () => import('../pages/MainHome.vue'),
    },
    {
        path: '/keel',
        name: 'keel',
        alias: '/keel',
        component: () => import('../pages/Keel.vue'),
    },
    {
        path: '/keel_mini',
        name: 'keel_mini',
        alias: '/keel_mini',
        component: () => import('../pages/KeelMini.vue'),
    },
    {
        path: '/nagax4',
        name: 'nagax4',
        alias: '/nagax4',
        component: () => import('../pages/NagaX4.vue'),
    },
    {
        path: '/nagax8',
        name: 'nagax8',
        alias: '/nagax8',
        component: () => import('../pages/NagaX8.vue'),
    },
    {
        path: '/sh06',
        name: 'sh06',
        alias: '/sh06',
        component: () => import('../pages/SH06.vue'),
    },
    {
        path: '/zh10',
        name: 'zh10',
        alias: '/zh10',
        component: () => import('../pages/GimZH10.vue'),
    },
    {
        path: '/zh20',
        name: 'zh20',
        alias: '/zh20',
        component: () => import('../pages/GimZ8RC.vue'),
    },
    {
        path: '/circuit',
        name: 'circuit',
        alias: '/circuit',
        component: () => import('../pages/Circuit.vue'),
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router