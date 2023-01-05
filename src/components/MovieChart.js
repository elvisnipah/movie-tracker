import React from "react";
import Chart from "./Chart/Chart";
import { nanoid } from "nanoid";

function MovieChart(props) {
  const chartDataPoints = [
    {
      label: "Jan",
      value: 0,
      id: nanoid(),
    },
    {
      label: "Feb",
      value: 0,
      id: nanoid(),
    },
    {
      label: "Mar",
      value: 0,
      id: nanoid(),
    },
    {
      label: "Apr",
      value: 0,
      id: nanoid(),
    },
    {
      label: "May",
      value: 0,
      id: nanoid(),
    },
    {
      label: "Jun",
      value: 0,
      id: nanoid(),
    },
    {
      label: "Jul",
      value: 0,
      id: nanoid(),
    },
    {
      label: "Aug",
      value: 0,
      id: nanoid(),
    },
    {
      label: "Sep",
      value: 0,
      id: nanoid(),
    },
    {
      label: "Oct",
      value: 0,
      id: nanoid(),
    },
    {
      label: "Nov",
      value: 0,
      id: nanoid(),
    },
    {
      label: "Dec",
      value: 0,
      id: nanoid(),
    },
  ];

  for (const movie of props.movies) {
    const movieMonth = movie.watchDate.getMonth();
    chartDataPoints[movieMonth].value += 1;
  }
  return <Chart dataPoints={chartDataPoints} />;
}

export default MovieChart;
