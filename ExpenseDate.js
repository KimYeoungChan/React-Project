import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" }); // 월의 전체
  const day = props.date.toLocaleString("en-US", { day: "2-digit" }); // 데이
  const year = props.date.getFullYear(); // 년도

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
