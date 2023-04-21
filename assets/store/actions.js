import axios from 'axios';
/* eslint-disable no-console */

export const getRestaurants = ({ commit }) => {
    try {
        axios.get('https://comiteo-eats.victormx.com/api/restaurants')
            .then((res) => {
                commit('SET_RESTAURANTS', res.data.data);
            });
    } catch (err) {
        console.error(err);
    }
};

export const getRestaurant = ({ commit }, restaurantId) => {
    try {
        axios.get(`https://comiteo-eats.victormx.com/api/restaurants/${restaurantId}`)
            .then((res) => {
                commit('SET_RESTAURANT', res.data.data);
            });
    } catch (err) {
        console.log(err);
    }
};

// Cart dishes
export const setDishesToCart = ({ commit, state }, { dish }) => {
    // create id to delete item from cart by id
    const id = state.cart.length + 1;
    // eslint-disable-next-line no-param-reassign
    dish = { ...dish, id };
    commit('SET_DISH_TO_CART', { dish });
};

// Get Delivery Method
export const fetchDeliveryMethod = ({ commit }) => {
    try {
        axios.get('https://comiteo-eats.victormx.com/api/delivery_methods')
            .then((res) => {
                commit('SET_DELIVERY', res.data);
            });
    } catch (err) {
        console.error(err);
    }
};

// Remove dishe from cart
export const removeDishFromCart = ({ commit }, dish) => {
    commit('REMOVE_DISH_FROM_CART', dish);
};

export const pushFormOrder = ({ commit }, order) => {
    commit('PUSH_ORDER_DATA', order);
};
