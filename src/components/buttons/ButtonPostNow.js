import React from 'react';
import "./ButtonPostNow.css"

function ButtonPostNow(props) {
  return (
    <button className="button-post-now">{props.text}</button>
  );
}

export default ButtonPostNow;
