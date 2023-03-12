import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/restaurants/index.vue';
import RestaurantShow from '../components/restaurants/restaurant-show.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/restaurants/:id', name: 'restaurants_show', component: RestaurantShow },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
