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
            <MovieForm
                onSaveMovie={handleSaveMovie}
                closeMovieForm={props.closeMovieForm}
            />
        </div>
    );
}

export default NewMovie;
