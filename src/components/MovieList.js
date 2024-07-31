import React from 'react';
import { useState } from 'react';
import MovieItem from './MovieItem';
import '../components/MovieList.css';

const MovieList = ({ movies }) => {
  
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div key={movie.id} onClick={() => handleMovieClick(movie)} className="movie-card">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <h3>{movie.title}</h3>
          <div className="rating">
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index} className="star">
                {index < Math.round(movie.vote_average / 2) ? '★' : '☆'}
              </span>
            ))}
            <span className="rating-text">{movie.vote_average.toFixed(1)}</span>
          </div>
        </div>
      ))}
      {selectedMovie && (
        <MovieItem movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
};

export default MovieList;
