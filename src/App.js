import MovieItem from "./components/MovieItem";
import data from "./components/data";
import NewMovie from "./components/MovieInput/NewMovie";
import MovieFilter from "./components/MovieFilter";
import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState(data);

  const [filterStatus, setFilterStatus] = useState(false);

  const handleAddMovie = (movie) => {
    setMovies((prevMovies) => {
      return [movie, ...prevMovies];
    });
  };

  const [filteredMovies, setFilteredMovies] = useState([]);

  const [filteredYear, setFilteredYear] = useState("All");

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

  return (
    <div className="bg-teal-300 grow p-3 flex flex-col gap-5 items-center font-inter justify-center">
      <NewMovie onAddMovie={handleAddMovie} />
      <MovieFilter
        onChangeFilter={handleFilterChange}
        selected={filteredYear}
      />
      {filterStatus ? filteredMoviesCollection : allMoviesCollection}
    </div>
  );
}

export default App;
