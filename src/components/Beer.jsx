import React, { useState } from "react";
import Heart from "react-animated-heart";


const Beer = (props) => {
  const [isClick, setClick] = useState(false);
  return (
    <li className="item" key={props.id}>

      <Heart className="heart" isClick={isClick} onClick={() => setClick(!isClick)}/>

      <h2>{props.name}</h2>

    
      
      <img className="item_image" src={props.image} alt={props.name} />

    </li>
  );
};




export default Beer;
