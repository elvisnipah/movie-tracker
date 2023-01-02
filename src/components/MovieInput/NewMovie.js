import React from "react";
import MovieForm from "./MovieForm";
import { nanoid } from "nanoid";

function NewMovie(props) {
  const handleSaveMovie = (submittedMovie) => {
    const movieData = {
      ...submittedMovie,
      id: nanoid(),
    };

    props.onAddMovie(movieData);
  };
  return (
    <div className="p-2 my-8 w-[50rem] max-w-[95%] rounded-xl text-center bg-white">
      <MovieForm onSaveMovie={handleSaveMovie} />
    </div>
  );
}

export default NewMovie;
