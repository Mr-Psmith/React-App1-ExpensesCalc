import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";


function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    /* and this props.items part will exchange the same props .items before the map() below */
    return (
      expense.date.getFullYear().toString() === filteredYear
    ); /* We wanna check for a given expanse if the date does basically have a year which maches our filteredYear. One is a string other is a date so we have to make it simplier */
  }); /* This above expression returns true if the year stored in the Date is the same year selected in the filter  */


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedStartingYear={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;