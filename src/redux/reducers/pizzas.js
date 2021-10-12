import {SET_LOADED, SET_PIZZAS} from "../constants";


const initialState = {
  items: [],
  isLoaded: false
}

export const pizzasReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_PIZZAS: 
      return {...state, items: action.payload, isLoaded: true}
    case SET_LOADED:
      return {...state, isLoaded: action.payload}
    default: 
      return state;
  }
}
