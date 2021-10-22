import {SET_TOTAL_COUNT, ADD_PIZZA_TO_CART, CLEAR_CART, REMOVE_CART_ITEM, PLUS_CART_ITEM, MINUS_CART_ITEN} from "../constants";


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

export const removeCartItem = (itemID) => ({
  type: REMOVE_CART_ITEM,
  payload: itemID,
})

export const plusItem = (itemID) => ({
  type: PLUS_CART_ITEM,
  payload: itemID,
})

export const minusItem = (itemID) => ({
  type: MINUS_CART_ITEN,
  payload: itemID,
})
