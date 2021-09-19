import {Header} from './components';
import {Home, Cart} from './pages';
import {Switch, Route, Redirect} from 'react-router';
import {connect} from 'react-redux';
import {setPizzas} from './redux/actions/pizzas';
import React from 'react';
import axios from 'axios';
import "./App.scss";


class App extends React.Component {

  componentDidMount() {
    axios.get('https://react-pizza-de682-default-rtdb.europe-west1.firebasedatabase.app/pizzas.json').then((response) => {
      this.props.setPizzas(response.data);
    });
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Header />
          <div className="content">
            <Switch>
              <Route path="/" exact>
                <Home items={this.props.items} />
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
}

const mapStateToProps = (store) => {
  return {
    items: store.pizzas.items,
    filters: store.filters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
