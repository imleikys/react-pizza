import {ADD_PIZZA_TO_CART, CLEAR_CART, SET_TOTAL_COUNT} from "../constants";


const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
}

const getTotalPrice = (item) => {
  return item.reduce((sum, obj) => obj.price + sum, 0);
}

export const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PIZZA_TO_CART: {
      
      const currentPizzaItems = !state.items[action.payload.id] 
        ? [action.payload] 
        : [...state.items[action.payload.id].items, action.payload];

      const actualItems = {
          ...state.items,
          [action.payload.id]: {
            items: currentPizzaItems,
            totalPrice: getTotalPrice(currentPizzaItems),
          }
      }

      const items = Object.values(actualItems).map((obj) => obj.items);
      const allPizzas = [].concat.apply([], items);

      return {
        ...state, 
        items: actualItems,
        totalCount: allPizzas.length,
        totalPrice: getTotalPrice(allPizzas),
      }
    }

    case CLEAR_CART:
      return {items: {}, totalPrice: 0, totalCount: 0}
      
    case SET_TOTAL_COUNT:
      return {...state, totalItems: action.payload}
    default: 
      return state;
  }
}
