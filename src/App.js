import MovieItem from "./components/MovieItem";
import data from "./components/data";

function App() {
  const moviesCollection = data.map((movie) => {
    return (
      <MovieItem
        title={movie.title}
        rating={movie.rating}
        date={movie.date}
        key={movie.id}
      />
    );
  });

  return (
    <div className="bg-teal-300 grow p-3 flex flex-col gap-5 items-center font-inter justify-center">
      {moviesCollection}
    </div>
  );
}

export default App;
