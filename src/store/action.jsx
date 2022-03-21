import {
    SET_CART_PRODUCT,
    SET_COUNT_CART,
    SET_CART_PRODUCT_ID
}from './constants'

export const SetCartProduct = payload => ({
    type: SET_CART_PRODUCT,
    payload: payload
});
export const SetCountCart = payload => ({
    type: SET_COUNT_CART,
    payload: payload
});

export const SetCartProductId = payload => ({
    type: SET_CART_PRODUCT_ID,
    payload: payload
});
