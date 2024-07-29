import React from 'react';
import '../components/GenreFilter.css';

const GenreFilter = ({ genres, selectedGenre, onSelectGenre }) => {
  return (
    <div className="genre-filter">
      <button
        className={`genre-tab ${selectedGenre === 'all' ? 'active' : ''}`}
        onClick={() => onSelectGenre('all')}
      >
        All
      </button>
      {genres.map(genre => (
        <button
          key={genre.id}
          className={`genre-tab ${selectedGenre === genre.id ? 'active' : ''}`}
          onClick={() => onSelectGenre(genre.id)}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;

