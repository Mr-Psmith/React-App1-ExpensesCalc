import React from "react";
import chartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  return;
  <div className="chart">
    {props.dataPoints.map((dataPoint) => ( /* So as we recieve the datas(as an array) we map them into other arrays. A many Chartbar components as we have DataPoints */
      <ChartBar
        key={dataPoint.label} /* We can use label here too, as if they are uniq, than its okay */
        value={dataPoint.value}
        maxValue={null}
        label={dataPoint.label}
      />
    ))}
    
  </div>;
};

export default Chart;
