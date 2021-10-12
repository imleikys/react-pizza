import {ADD_PIZZA_TO_CART, SET_TOTAL_COUNT} from "../constants";


const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
}

export const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PIZZA_TO_CART: 
      return {
        ...state, 
        items: {
          [action.payload.id]: [
            ...state.items[action.payload.id], 
            action.payload
          ]
        }
      }
    case SET_TOTAL_COUNT:
      return {...state, totalItems: action.payload}
    default: 
      return state;
  }
}
