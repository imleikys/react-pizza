import React from 'react';
import {Categories, SortPopup, PizzaBlock} from '../components';


export const Home = (props) => {

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}/>
        <SortPopup items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          props.items.map((item) => <PizzaBlock key={item.id} item={item} />)
        }
      </div>
    </div>
  );
}

export default Home;


