import MovieItem from "./components/MovieItem";
import data from "./components/data";
import NewMovie from "./components/MovieInput/NewMovie";
import MovieFilter from "./components/MovieFilter";
import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState(data);

  const [filterStatus, setFilterStatus] = useState(false);

  const [filteredMovies, setFilteredMovies] = useState([]);

  const [filteredYear, setFilteredYear] = useState("All");

  const [tabClicked, setTabClicked] = useState(false);

  const handleAddMovie = (movie) => {
    setMovies((prevMovies) => {
      return [movie, ...prevMovies];
    });
  };

  useEffect(() => {
    const displayFilteredMovies = () => {
      const filterCollection = movies.filter(
        (movie) => movie.watchDate.getFullYear().toString() === filteredYear
      );
      setFilteredMovies(filterCollection);
    };

    displayFilteredMovies();
  }, [filteredYear, movies]);

  const allMoviesCollection = movies.map((movie) => {
    return (
      <MovieItem
        title={movie.title}
        rating={movie.rating}
        date={movie.watchDate}
        key={movie.id}
      />
    );
  });

  const checkFilteredMovies = () => {
    if (filteredMovies.length === 0) {
      return (
        <p className="text-3xl text-gray-600 font-bold">
          No Movies Watched This Year
        </p>
      );
    }
    return filteredMovies.map((movie) => {
      return (
        <MovieItem
          title={movie.title}
          rating={movie.rating}
          date={movie.watchDate}
          key={movie.id}
        />
      );
    });
  };

  const filteredMoviesCollection = checkFilteredMovies();

  const handleFilterChange = (selectedYear) => {
    if (selectedYear === "All") {
      setFilteredYear("All");
      setFilterStatus(false);
    } else {
      setFilteredYear(selectedYear);
      setFilterStatus(true);
    }
  };

  const closeTab = () => {
    setTabClicked(false);
  };

  const openTab = () => {
    setTabClicked(true);
  };

  return (
    <div className="bg-teal-300 grow flex flex-col gap-5 items-center font-inter justify-center">
      <div>
        {tabClicked && (
          <NewMovie onAddMovie={handleAddMovie} closeTab={closeTab} />
        )}
        {!tabClicked && (
          <button
            className="bg-white p-4 border-black border-2 rounded-lg hover:bg-lime-300"
            onClick={openTab}
          >
            Add New Movie
          </button>
        )}
      </div>
      <MovieFilter
        onChangeFilter={handleFilterChange}
        selected={filteredYear}
      />
      {filterStatus ? filteredMoviesCollection : allMoviesCollection}
    </div>
  );
}

export default App;
