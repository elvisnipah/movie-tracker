import MovieItem from "./components/MovieItem";
import NewMovie from "./components/MovieInput/NewMovie";
import MovieFilter from "./components/MovieFilter";
import MovieChart from "./components/MovieChart";
import { useEffect, useState } from "react";

function App() {
    const localStorageMoviesData =
        JSON.parse(localStorage.getItem("movieData")) || [];

    const [movies, setMovies] = useState(localStorageMoviesData);

    const [filterStatus, setFilterStatus] = useState(false);

    const [filteredMovies, setFilteredMovies] = useState([]);

    const [filteredYear, setFilteredYear] = useState("All");

    const [movieFormVisible, setMovieFormVisible] = useState(false);

    const handleAddMovie = (movie) => {
        setMovies((prevMovies) => {
            return [movie, ...prevMovies];
        });
    };

    const lastOfYear = (id) => {
        const movie = movies.filter((movie) => movie.id === id);
        const movieYear = new Date(movie[0].watchDate).getFullYear();
        const remainingMovies = movies.filter((movie) => movie.id !== id);
        for (let i = 0; i < remainingMovies.length; i++) {
            if (
                new Date(remainingMovies[i].watchDate).getFullYear() ===
                movieYear
            ) {
                return false;
            }
        }
        return true;
    };

    const handleDeleteMovie = (id) => {
        if (lastOfYear(id)) {
            handleFilterChange("All");
        }
        const restOfMovies = movies.filter((movie) => movie.id !== id);
        setMovies(restOfMovies);
    };

    // store movie data in localstorage
    useEffect(() => {
        localStorage.setItem("movieData", JSON.stringify(movies));
    }, [movies]);

    // create the filtered movies array
    useEffect(() => {
        const displayFilteredMovies = () => {
            const filterCollection = movies.filter(
                (movie) =>
                    new Date(movie.watchDate).getFullYear().toString() ===
                    filteredYear
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
                id={movie.id}
                deleteMovie={handleDeleteMovie}
            />
        );
    });

    const getFilterOptions = () => {
        const movieYears = movies.map((movie) => {
            return [new Date(movie.watchDate).getFullYear()];
        });
        const options = [];
        for (let i = 0; i < movieYears.length; i++) {
            if (!options.includes(movieYears[i].toString())) {
                options.push(movieYears[i].toString());
            }
        }
        options.sort();
        return options;
    };

    const checkFilteredMovies = () => {
        if (filteredMovies.length === 0) {
            return null;
        }
        return filteredMovies.map((movie) => {
            return (
                <MovieItem
                    title={movie.title}
                    rating={movie.rating}
                    date={movie.watchDate}
                    key={movie.id}
                    id={movie.id}
                    deleteMovie={handleDeleteMovie}
                />
            );
        });
    };

    const handleFilterChange = (selectedYear) => {
        if (selectedYear === "All") {
            setFilteredYear("All");
            setFilterStatus(false);
        } else {
            setFilteredYear(selectedYear);
            setFilterStatus(true);
        }
    };

    let filteredMoviesCollection = checkFilteredMovies();

    const closeMovieForm = () => {
        setMovieFormVisible(false);
    };

    const openMovieForm = () => {
        setMovieFormVisible(true);
    };

    return (
        <div className="bg-[#CECECE] grow flex flex-col gap-5 items-center font-inter justify-center p-4">
            <div>
                {movieFormVisible && (
                    <NewMovie
                        onAddMovie={handleAddMovie}
                        closeMovieForm={closeMovieForm}
                    />
                )}
                {!movieFormVisible && (
                    <button
                        className="bg-[#3C3B3B] border-[#3C3B3B] text-white p-3 rounded-lg hover:bg-gray-300 hover:text-gray-700 border-2 hover:border-gray-900 font-bold"
                        onClick={openMovieForm}
                    >
                        Add New Movie
                    </button>
                )}
            </div>
            <MovieFilter
                onChangeFilter={handleFilterChange}
                selected={filteredYear}
                options={getFilterOptions}
            />
            {filterStatus && <MovieChart movies={filteredMovies} />}
            {filterStatus ? filteredMoviesCollection : allMoviesCollection}
        </div>
    );
}

export default App;
