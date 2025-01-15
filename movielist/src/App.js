
import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import MovieCard from './components/MovieCard/MovieCard';
import { OrbitProgress } from 'react-loading-indicators';

const apiKey = 'http://www.omdbapi.com/?apikey=f176d329'
const apiKeySecret = process.env.MOVIE_API


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const searchMovie = async (title) => {
    const response = await fetch(`${apiKey}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    setIsLoading(false);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  }

  useEffect(() => {
    searchMovie('Harry Potter')
  }, []);

  if (isLoading) {
    return (
      <div className='loading'>
        <OrbitProgress color="#ccac31" size="medium" text="loading.." textColor="#e3b72b" />
      </div>
    )
  }


  return (
    <div className="app">
      <h1>Movie List</h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchMovie={searchMovie} handleClearSearch={handleClearSearch} />

      {
        movies?.length > 0 ?
          (
            <div className='container'>
              {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movies={movie} />
              ))}
            </div>
          ) : (
            <div className='empty'>
              <h2>No movies found ! </h2>
            </div>
          )
      }


    </div>
  );
}

export default App;
