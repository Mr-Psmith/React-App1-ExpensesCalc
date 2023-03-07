import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  return (
    <div>      
      <Card className="expenses">
        <ExpensesFilter
        /*  selected={filteredYear}
            onChangeFilter={filterChangeHandler} */
        />
        {props.items.map((expense) => ( /* map("I want to map every expense in my expenses array into an expense item JSX element.) So I want to transform the expense object to this special kind of object, to this JSX element*/
            <ExpenseItem                        /* And after this we can configure like we did before, but expense has passed as a parameter into this function automatically, because that's how map works, this expense is used to extract title. This is why we call expense.title only */
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
        ))}
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
