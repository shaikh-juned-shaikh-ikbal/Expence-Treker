import "./ExpenseDate.css";
import React from "react";
let ExpenseDate = (props) => {
  // let { Date } = props;
  let month = props.Date.toLocaleString("en-us", { month: "long" });
  let year = props.Date.getFullYear();
  let day = props.Date.toLocaleString("en-us", { day: "2-digit" });

  return (
    <div className="Date">
      <div className="Day">{day}</div>
      <div>{month}</div>
      <div>{year}</div>
    </div>
  );
};

export default ExpenseDate;
