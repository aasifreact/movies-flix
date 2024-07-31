import React from 'react';
import '../components/MovieList.css';

const MovieList = ({ movies }) => {
  const uniqueMovies = movies.reduce((acc, current) => {
    if (!acc.find(movie => movie.id === current.id)) {
      acc.push(current);
    }
    return acc;
  }, []);

  return (
    <div className="movie-list">
      {uniqueMovies.map((movie, index) => (
        <div key={`${movie.id}-${index}`} className="movie-card">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <h3>{movie.title}</h3>
          <div className="rating">
            <p>Rating: {movie.vote_average}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;