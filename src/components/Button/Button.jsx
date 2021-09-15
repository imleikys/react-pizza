import React from 'react';

export const Button = (props) => {

  const classes = props.outline ? 'button button--outline ' : 'button ' + props.className;

  return (
    <button className={classes}>
      {props.children}
    </button>
  );
}

export default Button;
