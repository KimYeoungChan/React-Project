import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
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
    </Card>
  );
}

export default ExpenseItem;
