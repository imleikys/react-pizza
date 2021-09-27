import {pizzasReducer} from './reducers/pizzas';
import {filtersReducer} from './reducers/filters';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const rootReducer = combineReducers({
  pizzas: pizzasReducer,
  filters: filtersReducer,
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
window.store = store;

export default store;
