import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // for multi-state approach
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // for the second and third approaches
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // we get such 'event' object automatically, when a change event occurs.
  // We can see this object in browser when we use f12 and see at the 'console' part
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // second approach -> through the object
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    // });

    // react garantees that we will have the latest updated state snapshot. Use it when the state update depends on the prev state
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // second approach -> through the object
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

    // react garantees that we will have the latest updated state snapshot. Use it when the state update depends on the prev state
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // second approach -> through the object
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });

    // react garantees that we will have the latest updated state snapshot. Use it when the state update depends on the prev state
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    // prevents of sending the request, when 'submit' button is clicked. this is built into JS, nothing spesial behavior.
    // So the page will no reload, because we want to stay on the currently loaded page without sending any request anywhere
    // and we can continue handling this with JS.
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    //to set all the form fields to empty field after the form was submitted (form clearing).
    //And for that reason the value property is added to the each 'div' element
    //it is the 'two way binding' consept.
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form className="" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* sets the value into the form (value) */}
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            // sets the value into the form
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            step="0.01"
            // sets the value into the form
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
