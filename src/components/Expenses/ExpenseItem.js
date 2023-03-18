import React/* , { useState }  */ from "react"; 
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

//we could name it whatever we want, but props is making it clear, that THIS IS THE OBJECT HOLDING THE VALUES WE GET ON OUR CUSTOM ELEMENT in app.js
function ExpenseItem(props) {
  //és jap ez sima js(volt), nem react
  //this is an object, which holds all the recieved properties as attributes, hence this name: PROPS

  /* we are not defining the data inside this component, bu inside the app.js, 
  (which I dont know wherteher I like or not, bec. it max more chaothic everything, but max should know bette than me) */

  /* const [title, setTitle] = useState(props.title); //reacthook 

  const clickHandler = () => {
    setTitle("Új Title"); //
    console.log(title);
  } */

  return (
    <li>{/* For semantic reasons said Max */}
      <Card className="expense-item">
        <ExpenseDate date={props.date} />     {/* = <ExpenseDate></ExpenseDate> Szal ugyanazt jelenti a kettő*/}
            {/* És így spliteltünk. BTW */}
        <div className="expense-item__description">
          <h2>{props.title}</h2>                                                                              {/* edited from title to props.title */}
          {/* this has to match to the name we set in app.js */}
          <div className="expense-item__price">{props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;

