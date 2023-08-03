import "./Expenseitem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React from "react";
import { useState } from "react";

let Expenseitem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate Date={props.Date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default Expenseitem;
