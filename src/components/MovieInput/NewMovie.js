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
    <div>
      <MovieForm onSaveMovie={handleSaveMovie} closeTab={props.closeTab} />
    </div>
  );
}

export default NewMovie;
