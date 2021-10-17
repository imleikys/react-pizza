import React from 'react';

export const Button = (props) => {

  const classes = props.outline ? 'button button--outline ' : 'button ' + props.className;

  return (
    <button onClick={props.onClick} className={classes + ' ' + props.className}>
      {props.children}
    </button>
  );
}

export default Button;
