import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // must be callet direct inside this component function. Inside the function is the initial value of the state.
  // title is the value, setTitle is the function to change this value. useState always returns an array with two elements.
  
  // const [title, setTitle] = useState(props.title);
  // console.log("Expense Item evaluated by React");

  // const clickHandler = () => {
  //   setTitle("Updated");
  //   console.log(title);
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        {/* <h2>{title}</h2> */}
        {/* back to the stateless component */}
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;
