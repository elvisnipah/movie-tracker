import React from "react";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const initialValue = 0;
  const totalMaximum = dataPointValues.reduce(
    (acc, current) => acc + current,
    initialValue
  );

  const barCollection = props.dataPoints.map((dataPoint) => {
    return (
      <ChartBar
        value={dataPoint.value}
        maxValue={totalMaximum}
        label={dataPoint.label}
        key={dataPoint.id}
      />
    );
  });
  return (
    <div className="p-4 rounded-xl bg-white text-center flex justify-around h-[10rem] w-[380px] sm:w-[480px]">
      {barCollection}
    </div>
  );
};

export default Chart;
