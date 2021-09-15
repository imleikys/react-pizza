import React, { useState } from "react";


export const Categories = (props) => {

  const [activeItem, setActiveItem] = useState(0);

  const onSelectItem = (index) => {
    setActiveItem(index)
  }

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => setActiveItem(null)}>Все</li>
        { 
          props.items.map((item, index) => 
            <li 
              className={activeItem === index ? 'active' : ''}
              onClick={() => onSelectItem(index)} 
              key={`${item}__${index}`}>{item}
            </li>
          ) 
        }
      </ul>
    </div>
  );

};

export default Categories;