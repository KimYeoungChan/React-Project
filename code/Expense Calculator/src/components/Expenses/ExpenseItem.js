import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // function clickHandler() {}
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluete by React");

  const clickHandler = () => {
    setTitle("Update!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      {/* date 값은 props.date라고 받음 */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        {/* title 값은 props.title라고 받음 */}
        <h2>{title}</h2>
        {/* amount 값은 props.amount라고 받음 */}
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
