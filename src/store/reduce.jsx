// import DataProduct from "../assets/data-product/dataProduct"
import {
  SET_CART_PRODUCT,
  SET_COUNT_CART,
  SET_CART_PRODUCT_ID,
  DELETE_PRODUCT_CART,
  HANDLE_CHECKOUT,
} from "./constants";
const InitState = {
  cartProduct: [],
  countProduct: 0,
  setStateCount: 0,
  dataCheckout: [],
};
function Reducer(state, action) {
  switch (action.type) {
    case SET_CART_PRODUCT:
      const products = state.cartProduct;
      const product = products.filter((x) => x.id === action.payload.id) || [];
      if (product.length === 0) {
        return {
          ...state,
          cartProduct: [...products, action.payload],
        };
      }
    case SET_CART_PRODUCT_ID:
      var Products = state.cartProduct;
      var setCount = 0;
      Products.forEach((element, index) => {
        if (element.id === action.payload.id) {
          Products.splice(index, 1, action.payload);
          setCount = Products[index].count;
        }
      });
      console.log(setCount);
      return {
        ...state,
        cartProduct: Products,
        setStateCount: setCount,
      };
    case SET_COUNT_CART:
      var a = 0;
      state.cartProduct.forEach((element) => {
        state.countProduct = element.count + a;
        a = state.countProduct;
      });
      return {
        ...state,
      };
    case DELETE_PRODUCT_CART:
      var deleteProduct = state.cartProduct;
      const remainingProducts = deleteProduct.filter(
        (x) => x.id !== action.payload.id
      );
      if (remainingProducts.length === 0) {
        var remaining = 0;
      }
      return {
        ...state,
        cartProduct: remainingProducts,
        countProduct: remaining,
      };
    case HANDLE_CHECKOUT:
      const datacheckout = state.cartProduct.filter(
        (x) => x.checkBuyNow === true
      );
      return {
        ...state,
        dataCheckout: datacheckout,
      };
    default:
      throw new Error("Invalid action.");
  }
}
export { InitState };
export default Reducer;
