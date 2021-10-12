import React from 'react';

export const Button = (props) => {

  console.log(props)
  const classes = props.outline ? 'button button--outline ' : 'button ' + props.className;

  return (
    <button className={classes + ' ' + props.className}>
      {props.children}
    </button>
  );
}

export default Button;
