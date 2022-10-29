// to tell React to rerender the element the useState function from React library schould be extracted.
// useState function provided by the React library and allows us to define values as state
// and changes in this value should reflect in the component function being called again.
// useState must be called inside of the react component function.

import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // must be callet direct inside this component function. Inside the function is the initial value of the state.
  // title is the value, setTitle is the function to change this value. useState always returns an array with two elements.
  // And we assign to this function as the value - the prop, that should be changed. For example 'useState(props.title)'.
  // it gives us an access to this vatiable. The second element is the updatedFunction.
  // The first argument is the pointer to that managed value, the second element is a funktion,
  // that we can later call to set a new title value. The first element is the state value, and the second it the functon,
  // which we will call to apdate that. To change the title (in this case) we need to call the second parameter. F.e. setTitle ('updated');
  // const [title, setTitle] = useState(props.title);
  // console.log("Expense Item evaluated by React");

  // const clickHandler = () => {
  //   setTitle("Updated");
  //   console.log(title);
  // };
  return (
    // it should be ONLY ONE root element
    // we write in html 'class' to enable css class. In react we write 'className' instead.
    <li>
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
    </li>
  );
};

export default ExpenseItem;
