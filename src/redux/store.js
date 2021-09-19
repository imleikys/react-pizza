import {pizzasReducer} from './reducers/pizzas';
import {filtersReducer} from './reducers/filters';
import {createStore, combineReducers} from 'redux';


const rootReducer = combineReducers({
  pizzas: pizzasReducer,
  filters: filtersReducer,
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store = store;

export default store;
