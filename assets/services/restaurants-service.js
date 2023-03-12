/* eslint-disable */
import axios from 'axios';
import store from '../store';

/**
 * 
 * @return {Promise}
 */
export function getRestaurants() {
    return axios.get(store.getters.getURL + '/api/restaurants');
}

/**
 * 
 * @param {Number} id
 * @return {Promise}
 */
export function getRestaurant(id) {
    return axios.get(store.getters.getURL + '/api/restaurants/' + id);
}
