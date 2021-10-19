import {SET_TOTAL_COUNT, ADD_PIZZA_TO_CART, CLEAR_CART} from "../constants";


export const addPizzaToCart = (pizza) => ({
  type: ADD_PIZZA_TO_CART,
  payload: pizza,
})

export const setTotalItems = (payload) => ({
  type: SET_TOTAL_COUNT,
  payload: payload,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
