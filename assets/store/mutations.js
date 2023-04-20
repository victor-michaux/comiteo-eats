/* eslint-disable no-console */

export const SET_RESTAURANTS = (state, restaurants) => {
    state.restaurants = restaurants;
};

export const SET_RESTAURANT = (state, restaurant) => {
    state.restaurant = restaurant;
};

export const SET_DISH_TO_CART = (state, { dish }) => {
    state.cart.push({ dish });
};

export const ADD_CART_TO_ORDER = (state, item) => {
    console.log(item);
};

export const SET_DELIVERY = (state, deliveryMethods) => {
    state.delivery = deliveryMethods;
};

export const DELIVERY_FEE = (state, fee) => {
    state.deliveryFee = fee;
};

export const REMOVE_DISH_FROM_CART = (state, dish) => {
    state.cart = state.cart.filter((item) => item.dish.id !== dish.id);
};

export const PUSH_ORDER_DELIVERY = (state, { value }) => {
    state.order.deliveryOption = value;
};

export const PUSH_ORDER_DATA = (state, formData) => {
    state.order = formData;
};
