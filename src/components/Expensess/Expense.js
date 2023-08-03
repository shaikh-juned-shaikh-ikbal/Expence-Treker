import "./Expense.css";

import Expenseitem from "./Expenseitem";
import React from "react";
import Card from "../UI/Card";

let Expense = (props) => {
  let { item } = props;
  return (
    <Card className="expense">
      {props.item.map((expense) => (
        <Expenseitem
          Date={expense.Date}
          title={expense.title}
          amount={expense.amount}
        />
        ))}
    </Card>
  );
};

export default Expense;
