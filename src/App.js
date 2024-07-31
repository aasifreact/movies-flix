import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GenreFilter from './components/GenreFilter';
import MovieList from './components/MovieList';
import YearFilter from './components/YearFilter';
import './App.css';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const INITIAL_YEAR = 2012;

function App() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [year, setYear] = useState(INITIAL_YEAR);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchMovies();
    fetchGenres();
  }, [year, selectedGenre, page]);

  const fetchMovies = async () => {
    try {
      const genreFilter = selectedGenre !== 'all' ? `&with_genres=${selectedGenre}` : '';
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&primary_release_year=${year}&page=${page}&vote_count.gte=100${genreFilter}`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const fetchGenres = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
      setGenres(response.data.genres);
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

  const handleGenreSelect = (genreId) => {
    setSelectedGenre(genreId);
    setPage(1); // Reset page to 1 whenever genre changes
  };

  const handleYearSelect = (year) => {
    setYear(year);
    setPage(1); // Reset page to 1 whenever year changes
  };

  return (
    <div className="App">
      <h1 className='logo'>MovieFlix</h1>
      <GenreFilter genres={genres} selectedGenre={selectedGenre} onSelectGenre={handleGenreSelect} />
      <YearFilter selectedYear={year} onSelectYear={handleYearSelect} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;