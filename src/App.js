import React from "react"; /* We wouldn't need this here, but in the past we would needed this everywhere where we now using jsx */
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() { /* const App = () => */
  const expenses = [
    //így meg ez be van bakelve(egyelőre, de felteszem ez átírható késöbb), de lényegében csinálunk egy arrayt, amit utána behívunk az
    {
      //ExpenseItem custom Html componentekbe. És vélh azért itt csináljuk az arrayt, mert itt használjuk. bár ez nem teljesen világos
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New Monitor",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28), //marcius az itt 2, mert 0-nál kezdődnek a hónapok. és jap, így tudunk bele dátumot adni
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <p>This is also visible!</p>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;