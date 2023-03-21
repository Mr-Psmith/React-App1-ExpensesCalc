import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); /* transforms the dataPoint objects to numbers */
  const totalMaximum = Math.max(...dataPointValues) /* it finds the maximum value. And as it wants numbers, and dataPointValues is still an array, with the rest operator we can pull out all the array elements, and add them as standalone arguments */

  return(
  <div className="chart">
    {props.dataPoints.map((dataPoint) => ( /* So as we recieve the datas(as an array) we map them into other arrays. A many Chartbar components as we have DataPoints */
      <ChartBar
        key={dataPoint.label} /* We can use label here too, as if they are uniq, than its okay */
        value={dataPoint.value}
        maxValue={totalMaximum}
        label={dataPoint.label}
      />
    ))}
    
  </div>);
};

export default Chart;
