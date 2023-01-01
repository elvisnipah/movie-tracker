import React from "react";

function MovieDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="flex flex-col p-2 rounded-lg items-center justify-center bg-[#3C3B3B] text-white text-xs">
      <p>{month}</p>
      <p>{year}</p>
      <p>{day}</p>
    </div>
  );
}

export default MovieDate;
