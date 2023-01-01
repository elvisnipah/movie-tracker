import React, { useState } from "react";

function MovieForm() {
  const [movieDetails, setMovieDetails] = useState({
    title: "",
    rating: "",
    watchDate: "",
  });

  const handleTitleChange = (event) => {
    setMovieDetails((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  };

  const handleRatingChange = (event) => {
    setMovieDetails((prevState) => {
      return {
        ...prevState,
        rating: event.target.value,
      };
    });
  };

  const handleDateChange = (event) => {
    setMovieDetails((prevState) => {
      return {
        ...prevState,
        date: event.target.value,
      };
    });
  };

  return (
    <form>
      <div className="flex flex-wrap gap-2 mb-2 text-left justify-around">
        <div>
          <label htmlFor="title" className="font-bold mb-1 block">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="p-1 rounded-lg border-black border-2 w-[16rem] max-w-[95%]"
            onChange={handleTitleChange}
            value={movieDetails.title}
          />
        </div>
        <div>
          <label htmlFor="rating" className="font-bold mb-1 block">
            Rating/10
          </label>
          <input
            type="number"
            name="rating"
            id="rating"
            min="1"
            step="0.5"
            max="10"
            className="p-1 rounded-lg border-black border-2 w-[20rem] max-w-max"
            onChange={handleRatingChange}
            value={movieDetails.rating}
          />
        </div>
        <div>
          <label htmlFor="date" className="font-bold mb-1 block">
            Watch Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            min="2019-01-01"
            className="p-1 rounded-lg border-black border-2 w-[20rem] max-w-max"
            onChange={handleDateChange}
            value={movieDetails.date}
          />
        </div>
      </div>
      <div className="text-right">
        <button
          type="submit"
          className="cursor-pointer px-8 py-4 border-black border-2 rounded-xl mr-4 bg-teal-300 hover:bg-lime-300"
        >
          Add Movie
        </button>
      </div>
    </form>
  );
}

export default MovieForm;
