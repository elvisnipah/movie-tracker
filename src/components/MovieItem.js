import React from "react";

function MovieItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="flex justify-between items-center p-2 mx-2 bg-white rounded-xl w-[380px] sm:w-[480px]">
      <div className="flex gap-3 items-center">
        <div className="flex flex-col p-2 rounded-lg items-center justify-center bg-[#3C3B3B] text-white text-xs">
          <p className="">{month}</p>
          <p>{year}</p>
          <p className="">{day}</p>
        </div>
        <p className="my-2 text-2xl font-bold flex-wrap">{props.title}</p>
      </div>
      <div className="font-bold p-2 rounded-xl bg-teal-300 text-2xl">
        {props.rating}/10
      </div>
    </div>
  );
}

export default MovieItem;
