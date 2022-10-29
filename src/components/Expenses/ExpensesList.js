import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  
    if (props.items.length === 0) {
    {
      /* Conditional content: if there are no Expeses - render a message*/
    }
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {/* transforming the array of object into array of JSX elements, i.e ExpenceItems */}
      {props.items.map((expense) => (
        <ExpenseItem
          // a identificator of the item to help React
          // to understand the position of the item inside the Array
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
