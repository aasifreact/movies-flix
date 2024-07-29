import React, { useRef } from 'react';
import '../components/GenreFilter.css';

const GenreFilter = ({ genres, selectedGenre, onSelectGenre }) => {
  const genreFilterRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    genreFilterRef.current.classList.add('active');
    startX = e.pageX - genreFilterRef.current.offsetLeft;
    scrollLeft = genreFilterRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    genreFilterRef.current.classList.remove('active');
  };

  const handleMouseUp = () => {
    isDown = false;
    genreFilterRef.current.classList.remove('active');
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - genreFilterRef.current.offsetLeft;
    const walk = (x - startX) * 3; // The scroll speed multiplier
    genreFilterRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className="genre-filter"
      ref={genreFilterRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
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
