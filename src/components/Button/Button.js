import React from 'react';
import classes from './Button.scss';

const button = (props) => {
  const primary = props.isSecondary ? 'secondary' : 'primary';
  const buttonClasses = [classes.button,
                        classes[props.type],
                        classes[primary]].join(' ');

  return (
    <button onClick={props.clicked}
            className={buttonClasses}>
            {props.text}
            {props.children}</button>
  )
}

export default button;
