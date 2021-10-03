import axios from "axios";


export const setIsLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchPizzas = () => (dispatch) => {
  dispatch(setIsLoaded(false));
  axios.get('http://localhost:3001/pizzas').then((response) => {
      dispatch(setPizzas(response.data));
  });
}

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items
})