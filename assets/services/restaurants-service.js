/* eslint-disable */
import axios from 'axios';
import store from '../store';

/**
 * 
 * @return {Promise}
 */
export function getRestaurants() {
    console.log(store.getters.getURL);

    axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

    return axios.get(store.getters.getURL + '/api/restaurants');
}
