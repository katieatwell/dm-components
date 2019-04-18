import React from 'react';
import classes from './Button.scss';

const Button = (props) => {
  return (
    <button onClick={props.clicked} className={classes.Button}>{props.text}</button>
  )
}

export default Button;
