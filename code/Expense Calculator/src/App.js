import Expenses from "./components/Expenses/Expenses";
import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  // 데이터
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // 가장 먼저 렌더링 되는 컴포넌트에 잘 들어왔는지 확인
  const addExpenseHandler = (expenses) => {
    console.log("In App.js");
    console.log(expenses);
  };

  // return React.createElement(
  // "diV",
  // {},
  // React.createElement("h2", {}, "Let's get started!!"),
  // React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* expenses 컴포넌트 items 안에 expenses데이터 넣음 */}
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
