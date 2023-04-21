import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';
import Restaurant from '../pages/Restaurant.vue';
import Cart from '../pages/Cart.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/restaurant/:id',
        name: 'restaurant',
        component: Restaurant,
        props: true,
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart,
        props: true,
    },
    {
        path: '*',
        name: 'not-found',
        component: () => import('../pages/404.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
