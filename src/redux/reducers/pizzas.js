const initialState = {
  items: [],
  isLoaded: false
}

export const pizzasReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_PIZZAS': 
      return {...state, items: action.payload, isLoaded: true}
    default: 
      return state;
  }
}