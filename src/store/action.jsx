import {
    SET_CART_PRODUCT,
    SET_COUNT_CART,
    SET_CART_PRODUCT_ID,
    DELETE_PRODUCT_CART,
    HANDLE_CHECKOUT
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

export const DeleteProductToCart = payload => ({
    type: DELETE_PRODUCT_CART,
    payload: payload
});

export const HandleCheckout = payload => ({
    type: HANDLE_CHECKOUT,
    payload: payload
});


