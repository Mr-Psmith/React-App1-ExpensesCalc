import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  const barFillHeight = "0%"; /* as a text bec this will be a css style.? */

  if (props.max > 0) {
    /* we could have 0 if we filter for a month without expenses */
    barFillHeight =
      Math.round((props.value / props.maxValue) * 100) +
      "%"; /* This gives us the percentages by which the bar should be filled an then converts it a string with the % at the end */
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div> {/* Most of the properties are pre-defined in css. Except the value - the height the bar is filled- as this has to be dinamically set in relation to the maxValue */}
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
