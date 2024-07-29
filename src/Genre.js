import React from 'react';

const Genre = ({ genres, selectedGenres, handleGenreChange }) => {
  return (
    <div>
      {genres.map((genre) => (
        <label key={genre.id}>
          <input type="checkbox" value={genre.id} checked={selectedGenres.includes(genre.id)} onChange={handleGenreChange} />
          {genre.name}
        </label>
      ))}
    </div>
  );
};

export default Genre;