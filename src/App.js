import {Header} from './components';
import {Home, Cart} from './pages';
import {Switch, Route, Redirect} from 'react-router';
import {setPizzas} from './redux/actions/pizzas';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import "./App.scss";


const App = () => {
  
  const dispatch = useDispatch();
  const appStore = useSelector(({pizzas}) => {
    return {
      items: pizzas.items
    }
  });

  useEffect(() => {
    axios.get('https://react-pizza-de682-default-rtdb.europe-west1.firebasedatabase.app/pizzas.json').then((response) => {
      dispatch(setPizzas(response.data));
    });
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home items={appStore.items} />
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
// class App extends React.Component {

//   componentDidMount() {
//     
//   }

//   render() {
//     return 
//   }
// }

// const mapStateToProps = (store) => {
//   return {
//     items: store.pizzas.items,
//     filters: store.filters
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzas(items))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
