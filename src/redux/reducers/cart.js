import {ADD_PIZZA_TO_CART, CLEAR_CART, MINUS_CART_ITEN, PLUS_CART_ITEM, REMOVE_CART_ITEM, SET_TOTAL_COUNT} from "../constants";


const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
}

const getTotalPrice = (item) => {
  return item.reduce((sum, obj) => obj.price + sum, 0);
}

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

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

      const totalCount = getTotalSum(actualItems, 'items.length');
      const totalPrice = getTotalSum(actualItems, 'totalPrice');

      return {
        ...state, 
        items: actualItems,
        totalCount: totalCount,
        totalPrice: totalPrice,
      }
    }

    case CLEAR_CART:
      return {items: {}, totalPrice: 0, totalCount: 0}
    
    case REMOVE_CART_ITEM: {
      const newItems = {...state.items};
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;

      delete newItems[action.payload];
      
      return {...state, items: newItems, totalPrice: state.totalPrice - currentTotalPrice, totalCount: state.totalCount - currentTotalCount};
    }
      
    case PLUS_CART_ITEM: {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }
      
    case MINUS_CART_ITEN: {
      const oldItems = state.items[action.payload].items;
      const newObjItems =
        oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }
      

    case SET_TOTAL_COUNT:
      return {...state, totalItems: action.payload}
    default: 
      return state;
  }
}
