import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitel] = useState("");
  const [enteredamount, setEnteredamount] = useState("");
  const [entereddate, setEntereddate] = useState("");

  const titleChengeHandler = (event) => {
    setEnteredTitel(event.target.value);
  };
  const amountChengeHandler = (event) => {
    setEnteredamount(event.target.value);
  };
  const dateChengeHandler = (event) => {
    setEntereddate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const ExpenseData = {
      title: enteredTitle,
      amount: enteredamount,
      Date: new Date(entereddate),
    };
    props.onSaveExpenseDate(ExpenseData)
    console.log("ExpenseDate...", ExpenseData);
    setEnteredTitel('');
    setEnteredamount('');
    setEntereddate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChengeHandler}
            placeholder="Enter your Expense"
          />
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input
            type="number"
            min={0.01}
            step={0.01}
            onChange={amountChengeHandler}
            value={enteredamount}
            placeholder="Enter your amount"
          />
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input type="date" value={entereddate} onChange={dateChengeHandler} placeholder="Enter your Date" />
        </div>
      </div>
      <div className="new-expense_actions">
        <button type=" submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
