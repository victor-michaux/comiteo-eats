import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state() {
        return {
            url: 'http://localhost:9081',
        };
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    },
    getters: {
        getURL(state) {
            return state.url;
        },
    },
});
