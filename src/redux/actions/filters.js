import {SET_CATEGORY, SET_SORT_BY} from "../constants";


export const setSortBy = ({type, order}) => ({
  type: SET_SORT_BY,
  payload: {type, order}
});

export const setCategory = (categoryIndex) => ({
  type: SET_CATEGORY,
  payload: categoryIndex
});
