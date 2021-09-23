import React, {useCallback} from "react";
import {Categories, SortPopup, PizzaBlock} from "../components";
import {useSelector, useDispatch} from 'react-redux';
import {setCategory} from "../redux/actions/filters";

const categoryNames = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
const sortItems = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "alphabet" },
]

export const Home = () => {

  const items = useSelector((({pizzas}) => pizzas.items))
  const dispath = useDispatch();

  const onSelectCategory = useCallback((index) => {
    dispath(setCategory(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categoryNames} onClickItem={onSelectCategory}/>
        <SortPopup items={sortItems}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((item) => (
          <PizzaBlock key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
