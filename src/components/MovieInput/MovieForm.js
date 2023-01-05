import React, { useState } from "react";

function MovieForm(props) {
  const [movieDetails, setMovieDetails] = useState({
    title: "",
    rating: "",
    watchDate: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const submittedData = {
      ...movieDetails,
      watchDate: new Date(movieDetails.watchDate),
    };

    props.onSaveMovie(submittedData);

    setMovieDetails({
      title: "",
      rating: "",
      watchDate: "",
    });

    props.closeTab();
  };

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
        watchDate: event.target.value,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="flex flex-col sm:flex-row flex-wrap gap-2 mb-2 text-left justify-around">
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
            max="2023-12-31"
            className="p-1 rounded-lg border-black border-2 w-[20rem] max-w-max"
            onChange={handleDateChange}
            value={movieDetails.watchDate}
          />
        </div>
      </div>
      <div className="sm:self-center">
        <button
          className="cursor-pointer px-4 py-2 rounded-xl mr-4 bg-[#3C3B3B] hover:bg-lime-300 text-white hover:text-black"
          onClick={props.closeTab}
          type="button"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="cursor-pointer px-4 py-2 rounded-xl mr-4 bg-[#3C3B3B] hover:bg-lime-300 text-white hover:text-black"
        >
          Add Movie
        </button>
      </div>
    </form>
  );
}

export default MovieForm;
