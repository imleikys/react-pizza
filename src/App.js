import React from 'react';
import {Header} from './components';
import {Home, Cart} from './pages';
import {Switch, Route, Redirect} from 'react-router';
import './scss/app.scss';


const App = () => {
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
