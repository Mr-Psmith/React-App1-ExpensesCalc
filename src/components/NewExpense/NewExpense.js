import React from "react"; //still not needed, but for learning purposes...
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

  const SaveExpenseDataHandler = (enteredExpenseData) => { 
    const expenseData = {
      ...enteredExpenseData, /* we expect this to be the expenseData() const az Expenseformból */
      id: Math.random().toString() /* Not perfect, bec we could generate the same value twice, but "good enough for demo" */
    };
    console.log(expenseData);
    props.onAddExpense(expenseData); //Ide, mert ez a handler van hívva ha valami történik az expense formban
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />{/* its a prop, the value for this prop should be a function which will eventually be triggered when something happens inside of this comp */}
    </div>
  );
};

export default NewExpense;
