import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-us", { month: "long" });
  /* this toLocaleString() methond is not react specific, this is js, and helps with outputting dates in human readable format */
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date"> {/* így három sorban lesz a dátum (html ugyi) */}
      <div className="expense-date__month">{day}</div>
      <div className="expense-date__year">{month}</div>
      <div className="expense-date__day">{year}</div>
    </div>
  );
}

export default ExpenseDate;
