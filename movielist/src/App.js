import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './Search.svg';
import MovieCard from './components/MovieCard';

const apiKey = 'http://www.omdbapi.com/?apikey=f176d329'


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm , setSearchTerm] = useState('');
  const searchMovie = async (title) => {
    const response = await fetch(`${apiKey}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovie('Harry Potter');
  }, []);


  return (
    <div className="app">
      <h1>Movie List</h1>

      <div className='search'>
        <input placeholder='Search for movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <img src={SearchIcon} alt='Search Icon' onClick={() => searchMovie(searchTerm)} />
      </div>

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
