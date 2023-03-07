import React, { useState } from "react"; //React is still not needed to be imported, but for learning purposes...
import "./ExpenseForm.css";

const ExpenseForm = (props) => { //props bec. of the UPWARD DATA PASSING

  //We use useState here to store the value from the eventlisteners, to nopt loose they as they change. And then we can change that vlaues too with it ofc
  const [enteredTitle, setEnteredTitle] = useState(""); //initially its empty, as first nothing is in the form
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState(""); // default is always a string even if it is a number
  /* const [userInput, setUserInput] = useState({ //we can group them together, but as an OBJECT. but here if we update one we have to update all
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
    }); */

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); //so what the user entered in the form will be stored
    /* setUserInput({
            ...userInput, //spread operator -al megoldhatjuk hogy ne veszítse el az értékeit a többi
                                //this grabs an object, pulls out all key value pairs, and adds here. and then we overwrite the one below
            enteredTitle: event.target.value, //if we would only set this, than we would dump the others
        })          Ugyanakkor nem megfelelő ez a megoldás, mert mivel react spashotokat készít lényegében, ezért ha rosszul csúsznak össze a dolgok akkor elavult infót kaphatok.*/
    /* setUserInput((prevState) => { //a prevState-t a previous state állapothoz kapja, "so we get the previous state snapshot"
            return { ...prevState, enteredTitle: event.target.value};                                            //and here we should get the NEW state snapshot
        }); */
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    /* setUserInput({
            ...userInput,
            enteredAmount: event.target.value,
        }) */
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    /* setUserInput({
            ...userInput,
            enteredDate: event.target.value,
        }) */
  };

  const submitHandler = (event) => { //"event" is a default event object here
    event.preventDefault(); //this turns off the default reset "function"

    const expenseData = { //we create this obj to combine all the entered data
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate), //this parses the date string and converts it to a date object
    };
                                  // We can pass the expense data which are generated here as our argument and that's the value which we'll receive as a parameter in new expense
    props.onSaveExpenseData(expenseData); //THIS IS THE POINT WHERE WE execute the function that allows TRANSPORTing DATA UPWARDS 
                                    //And we can execute the function even though it's not defined inside of expense form because we are passing a pointer edit through the onSave expense data prop.
    setEnteredTitle("");  //These resets the form values after they have been read
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}> {/* button event listener (submit event). Which has a default reset "function", which kicks in when the button is pressed*/}
      {" "}
      {/* default browser behaviour, but also it is that when we click the submit button the browser reloads */}
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle} //These are two way bindings, here we read the form values, and passes back a new value (we reset)
            onChange={titleChangeHandler} //could use onInput, but this we can use for all input types, f.e.: dropdowns as well. And ofc we could define the function her inline, burt better upfront
          />                                  {/* and we shouldnt execute here the function, but just put it here, bec, than it will execute on event */}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button> {/* listening to this we could use a onClick={}-event listenert, but we have a default one already */}
      </div>                                          {/* according which if a button is pressed in a form event, the overall form event will emit an event which we can listen, this called the "submit event" */}
    </form>                                                                                   /* so we tune it on the from itself abowe */
  );
};

export default ExpenseForm;


/* Logika:
1.: event listenereket építünk be
2.: azoknak az "event" property-jei ugye automatikusak, és ezeket tudjuk olvasni az event.targe.value-val
3.: ezeket a value-kat useState-ban rögzítjük
4.: a setEnteredValue(event.target.value)-val tároljuk a beírt adatokat a useState-ban

2.1.: A buttonhoz nem kell event listener, mert van default event listener. Ezt a formba kötjük bele felül (a vart hogy manipuláljuk) onSubmit-al.
2.2.: És ennek a Default event propját olvassuk le, és a preventDefault metódussal kiiktatjuk a default behaviour-ját
  event.preventDefault();
2.3.: Ebbe csinálunk egy obj-t ami kombinálja az összes entered data-t
    const expenseData = {...};

3.0: Reseting the input: 
  3.1: We put a value="" attribute-t in the input, and we set it to the "enteredTitle" which is the relevant value in the entered data obj
      This gives us a two way binding.
  3.2 And we can call setEnteredTitle at the end of the submitHandler (or the relevant one) and set the value back to empty string.
      But ofc leaves the entered data saved in thee useState






*/