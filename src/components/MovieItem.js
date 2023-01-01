import React from "react";
import MovieDate from "./MovieDate";

function MovieItem(props) {
  return (
    <div className="flex justify-between items-center p-2 mx-2 bg-white rounded-xl w-[380px] sm:w-[480px]">
      <div className="flex gap-3 items-center">
        <MovieDate date={props.date} />
        <p className="my-2 text-2xl font-bold flex-wrap">{props.title}</p>
      </div>
      <div className="font-bold p-2 rounded-xl bg-teal-300 text-2xl">
        {props.rating}/10
      </div>
    </div>
  );
}

export default MovieItem;
