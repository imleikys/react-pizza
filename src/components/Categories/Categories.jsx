import React, {memo} from "react";


export const Categories = memo(function Categories(props) {

  return (
    <div className="categories">
      <ul>
        <li className={props.activeCategory === null ? 'active' : ''} onClick={() => props.onClickItem(null)}>Все</li>
        { 
          props.items.map((item, index) => 
            <li 
              className={props.activeCategory === index ? 'active' : ''}
              onClick={() => props.onClickItem(index)} 
              key={`${item}__${index}`}>{item}
            </li>
          ) 
        }
      </ul>
    </div>
  );

})

export default Categories;
