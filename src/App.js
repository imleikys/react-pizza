import {Header} from './components';
import {Home, Cart} from './pages';
import {Switch, Route, Redirect} from 'react-router';
import {fetchPizzas} from './redux/actions/pizzas';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import "./App.scss";


const App = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPizzas())
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path='/cart' exact>
              <Cart />
            </Route>
            <Redirect to="/"/>
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default App;
