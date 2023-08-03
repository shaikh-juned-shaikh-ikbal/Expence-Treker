import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDateHandler = (enteredExpenseDate) => {
    const ExpenseDate = {
      ...enteredExpenseDate,
      id:Math.random().toString(),
    };
    props.onAddexpens(ExpenseDate)
    console.log(ExpenseDate);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDate={saveExpenseDateHandler} />
    </div>
  );
};

export default NewExpense;
