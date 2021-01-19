import Vue from 'vue';
import InstantSearch from 'vue-instantsearch';
import App from './App.vue';
import router from './router';
import store from './store';

import './styles.css';

Vue.use(InstantSearch);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
