import {ADD_PIZZA_TO_CART, SET_TOTAL_COUNT} from "../constants";


const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
}

export const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PIZZA_TO_CART: {
      
      const actualItems = {
          ...state.items,
          [action.payload.id]: !state.items[action.payload.id] 
            ? [action.payload] 
            : [...state.items[action.payload.id], action.payload]
      }

      const allItems = [].concat(...Object.values(actualItems));

      return {
        ...state, 
        items: actualItems,
        totalCount: allItems.length,
        totalPrice: allItems.reduce((sum, obj) => obj.price + sum, 0),
      }
    }
      
    case SET_TOTAL_COUNT:
      return {...state, totalItems: action.payload}
    default: 
      return state;
  }
}
