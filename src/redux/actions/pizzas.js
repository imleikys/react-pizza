import axios from "axios";
import {SET_LOADED, SET_PIZZAS} from "../constants";


export const setIsLoaded = (payload) => ({
  type: SET_LOADED,
  payload,
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setIsLoaded(false));
  axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`).then((response) => {
      dispatch(setPizzas(response.data));
  });
}

export const setPizzas = (items) => ({
  type: SET_PIZZAS,
  payload: items
})