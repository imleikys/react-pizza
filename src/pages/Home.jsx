import React, {useCallback, useEffect} from "react";
import {fetchPizzas} from '../redux/actions/pizzas';
import {Categories, SortPopup, PizzaBlock, PizzaBlockLoader} from "../components";
import {useSelector, useDispatch} from 'react-redux';
import {setCategory} from "../redux/actions/filters";


const categoryNames = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
const sortItems = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "alphabet" },
]

export const Home = () => {

  const items = useSelector((({pizzas}) => pizzas.items));
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);

  const {category, sortBy} = useSelector(({filters}) => filters);
  const dispatch = useDispatch();

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  useEffect(() => {
    dispatch(fetchPizzas())
  }, [category, sortBy]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categoryNames} onClickItem={onSelectCategory}/>
        <SortPopup items={sortItems}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          !isLoaded 
            ? Array(12).fill(0).map((_, index) => (<PizzaBlockLoader key={index} />))
            : items.map((item) => (
              <PizzaBlock key={item.id} item={item} />
            ))
        }
      </div>
    </div>
  );
};

export default Home;
