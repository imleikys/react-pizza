import {Header} from './components';
import {Home, Cart} from './pages';
import {Switch, Route, Redirect} from 'react-router';
import {useEffect, useState} from 'react';
import axios from 'axios';
import "./App.scss";


function App() {

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('https://react-pizza-de682-default-rtdb.europe-west1.firebasedatabase.app/pizzas.json').then((response) => setPizzas(response.data));
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home items={pizzas} />
            </Route>
            <Route path='/cart' exact>
              <Cart />
            </Route>
            <Redirect to="/"/>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
