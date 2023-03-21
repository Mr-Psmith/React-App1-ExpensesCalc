import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [ /* If I understand it well, than as the array below (espenseMonth) and this starts at zero and ends at 11 which is exactly the case for the index of these data points, so we can use that as an index. */
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Okt", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 }
];
/* We expect to get the FilteredExpenses from Expenses through props as we are using it there */
for ( const expense of props.expenses) { /* We loop through every expenses taht we get via props, then we wanna have a look at every expense, get the month of that expense and updates the value of the appropriate data point by the expense amount. */
    const expenseMonth = expense.date.getMonth(); /* built in getMonth method, where January is 0 */
    chartDataPoints[expenseMonth].value += expense.amount; /* we icrease the value of the given month by the expense amount */
} /* And we go through every month um up the values, and assign tehm to the given months-to the appropiate dataPoints */

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
