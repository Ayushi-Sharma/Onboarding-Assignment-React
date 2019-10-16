import React from 'react';
import './Card.scss';

function Card (props) {
  return (
    <div className="Card__Wrapper">
      <div className="Card__Title">{props.res.name}</div>
      <div>{props.res.vicinity}</div>
    </div>
  )

}

export default Card;