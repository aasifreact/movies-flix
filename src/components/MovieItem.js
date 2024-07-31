import React, { useState, useEffect } from 'react';
import { fetchMovieDetails } from '../api';
import '../components/MovieItem.css';

const MovieItem = ({ movie, onClose }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movie.id).then(response => {
      setDetails(response.data);
    });
  }, [movie.id]);

  if (!details) {
    return <div>Loading...</div>;
  }

  const { title, overview, poster_path } = movie;
  const { genres, credits } = details;
  const director = credits.crew.find(member => member.job === 'Director');
  const cast = credits.cast.slice(0, 3).map(member => member.name).join(', ');

  return (
    <div className="movie-item-overlay">
      <div className="movie-item">
        <button onClick={onClose} className="close-button">✖</button>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
        <div className="movie-item-details">
          <h3>{title}</h3>
          <p>{overview}</p>
          <p>Genres: {genres.map(genre => genre.name).join(', ')}</p>
          <p>Director: {director.name}</p>
          <p>Cast: {cast}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
