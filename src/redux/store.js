import {pizzasReducer as pizzas} from './reducers/pizzas';
import {filtersReducer as filters} from './reducers/filters';
import {cartReducer as cart} from './reducers/cart'
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const rootReducer = combineReducers({pizzas, filters, cart,})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
window.store = store;

export default store;
