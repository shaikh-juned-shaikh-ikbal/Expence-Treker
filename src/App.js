import Expense from "./components/Expensess/Expense";
// import Expenseitem from "./components/Expenseitem";
import './App.css'
import React from "react";
import NewExpense from "./components/New Expense/NewExpense";
import { useState,useEffect } from "react";
import ExpenseDate from "./components/Expensess/ExpenseDate";

let DummyExpense = [];

let App = () => {
  const [expenses, setExpenses] = useState(DummyExpense);
  useEffect(()=>{
    setExpenses(DummyExpense)
  },[])
  const addExpenseHandler = (expense) => {
    const upDatedExpense = [expense, ...expenses];
    setExpenses(upDatedExpense);
    console.log(upDatedExpense);
  };
  return (
    <div>
      <h3 className="titleHedding">Expe<span>nse</span> Treckar</h3>
      <NewExpense onAddexpens={addExpenseHandler} />
      <Expense item={expenses} />
    </div>
  );
};

export default App;
