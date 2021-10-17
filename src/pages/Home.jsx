import React, {useCallback, useEffect} from "react";
import {fetchPizzas} from '../redux/actions/pizzas';
import {Categories, SortPopup, PizzaBlock, PizzaBlockLoader} from "../components";
import {useSelector, useDispatch} from 'react-redux';
import {setCategory, setSortBy} from "../redux/actions/filters";
import {addPizzaToCart} from '../redux/actions/cart';


const categoryNames = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
const sortItems = [
  { name: "популярности", type: "popular", order: 'desc' },
  { name: "цене", type: "price", order: 'desc' },
  { name: "алфавиту", type: "name", order: 'asc' },
]

export const Home = () => {

  const items = useSelector((({pizzas}) => pizzas.items));
  const cartItems = useSelector((({cart}) => cart.items));
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);

  const {category, sortBy} = useSelector(({filters}) => filters);
  const dispatch = useDispatch();

  const onAddPizzaHandler = (pizza) => {
    dispatch(addPizzaToCart(pizza));
  }

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, [dispatch]);

  const onSelectSortType = useCallback((obj) => {
    dispatch(setSortBy(obj));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, dispatch, sortBy]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={category} items={categoryNames} onClickItem={onSelectCategory}/>
        <SortPopup activeSortType={sortBy} onClickSort={onSelectSortType} items={sortItems}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          !isLoaded 
            ? Array(12).fill(0).map((_, index) => (<PizzaBlockLoader key={index} />))
            : items.map((item) => (
              <PizzaBlock addedItems={cartItems[item.id] && cartItems[item.id].items.length} onAddToCart={onAddPizzaHandler} key={item.id} {...item} />
            ))
        }
      </div>
    </div>
  );
};

export default Home;
