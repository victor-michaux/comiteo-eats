import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import router from './router';
import store from './store';

import App from './App.vue';
import Header from './components/Layout/Header.vue';

import './css/main.css';

Vue.component('Header', Header);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);
library.add(fas);

Vue.config.productionTip = false;

new Vue({
    library,
    FontAwesomeIcon,
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
