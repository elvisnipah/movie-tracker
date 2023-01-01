import React from "react";
import MovieForm from "./MovieForm";

function NewMovie() {
  return (
    <div className="p-2 my-8 w-[50rem] max-w-[95%] rounded-xl text-center bg-white">
      <MovieForm />
    </div>
  );
}

export default NewMovie;
