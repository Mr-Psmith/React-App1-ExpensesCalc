import React, {useState} from "react"; //still not needed, but for learning purposes...
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

  const SaveExpenseDataHandler = (enteredExpenseData) => { 
    const expenseData = {
      ...enteredExpenseData, /* we expect this to be the expenseData() const az Expenseformból */
      id: Math.random().toString() /* Not perfect, bec we could generate the same value twice, but "good enough for demo" */
    };
    props.onAddExpense(expenseData); //Ide, mert ez a handler van hívva ha valami történik az expense formban
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);


  const addExpenseButtonHandler = () => {
    setIsEditing(true);
  }
  const takeExpenseButtonHandler = () => {
    setIsEditing(false);
  }

  /* This is my "classic" solution to the button stuff, but I liked Max's better.
  let editingCommence;
  if (isEditing === false) {
    editingCommence = (<div>
                          <button onClick={addExpenseButtonHandler}>Add New Expense</button>
                      </div>) /* its a prop, the value for this prop should be a function which will eventually be triggered when something happens inside of this comp 
  } else if (isEditing === true) {
    editingCommence = (<div>
                          <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler}/>
                        </div>) /* its a prop, the value for this prop should be a function which will eventually be triggered when something happens inside of this comp 
  } */
  


  return (
    <div className="new-expense">
      {/* {editingCommence} */}
      {!isEditing && <button onClick={addExpenseButtonHandler}>Add New Expense</button>}{/* The && is a "trick" we learned before but I think it means basically that: "Then"*/}
      {isEditing && <ExpenseForm takeExpenseButtonHandlerPointer={takeExpenseButtonHandler} onSaveExpenseData={SaveExpenseDataHandler}/>}
    </div>
  );
};

export default NewExpense;
