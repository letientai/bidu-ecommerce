import {
    CHECK_ADD_TO_CART,
    CHECK_CHANGE_COUNT_IN_CART
}from './constants'

export const CheckAddToCart = payload => ({
    type: CHECK_ADD_TO_CART,
    payload: payload
});
export const CheckChangeCountInCart = payload => ({
    type: CHECK_CHANGE_COUNT_IN_CART,
    payload: payload
});


