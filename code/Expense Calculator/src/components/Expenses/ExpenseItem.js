import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      {/* date 값은 props.date라고 받음 */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        {/* title 값은 props.title라고 받음 */}
        <h2>{props.title}</h2>
        {/* amount 값은 props.amount라고 받음 */}
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
