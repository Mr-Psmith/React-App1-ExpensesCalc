import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2000");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    /* and this props.items part will exchange the same props .items before the map() below */
    return (
      expense.date.getFullYear().toString() === filteredYear
    ); /* We wanna check for a given expanse if the date does basically have a year which maches our filteredYear. One is a string other is a date so we have to make it simplier */
  }); /* This above expression returns true if the year stored in the Date is the same year selected in the filter  */

  let expensesContent = <p className="expenses-filter-none">No expenses found.</p>; /* We can store jsx in variables */
  if (filteredExpenses.length > 0) { /* Dont really feel like this has to be explained, ifg there is no content hten whats abowe, if there is than the rest */
      expensesContent = filteredExpenses.map((expense) => ( 
      <ExpenseItem 
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedStartingYear={filteredYear}
          onChangeFilter={filterChangeHandler}
        /> 
        {expensesContent}
      </Card>
    </div>
  );
}
