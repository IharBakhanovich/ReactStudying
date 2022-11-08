import React from "react";

import "./Card.css";
// extends style, that is duplicated in more than one component. In our case in 'Expenses' and in 'ExpenceItem'. They both have surrounded 'div'
const Card = (props) => {
  const classes = "card " + props.className;
  
  // here 'props.children' is a special componen, that builds in in the react and that receives all the components.
  // we do not set a children prop in our custom 'Card' component. Value of this children prop will always be the content between the opening and the closing tag
  return <div className={classes}>{props.children}</div>;
};

export default Card;
