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
        {/*>_< it was props.item.map() instead filteredExpenses.map() but the filter exchanged */}
        {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>} */} {/* This is the same as below only we are abusing a js "trick"(said Max)which is: if the first condition is met, than with && js returns the part after the and operator 
        {/* {filteredExpenses.length === 0 ? (<p>No expenses found.</p>) : ( /* This is a turnary expression for the conditional expression 
          filteredExpenses.map((expense) => ( /* map("I want to map every expense in my expenses array into an expense item JSX element.) So I want to transform the expense object to this special kind of object, to this JSX element
              <ExpenseItem /* And after this we can configure like we did before, but expense has passed as a parameter into this function automatically, because that's how map works, this expense is used to extract title. This is why we call expense.title only 
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date} /> )))} */}
         {/* I did copy the below part from abow bec max rewrote it. this is the second the third is what we use  */}
       {/*  {filteredExpenses.length > 0 &&  
          filteredExpenses.map((expense) => ( 
              <ExpenseItem 
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            ))} */}
        {/* DELETED when the above .map()solution was made */}
        {/* <ExpenseItem
          title={props.items[0].title} //we could hardcode too like: title="Toilet Paper"
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </div>
  );
}

export default Expenses;
