import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

console.log('TMDb API Key:', API_KEY);

export const fetchTopMoviesByYear = (year, page = 1, genres = '') => {
  return axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      sort_by: 'popularity.desc',
      primary_release_year: year,
      page: page,
      vote_count_gte: 100,
      with_genres: genres
    },
  });
};

export const fetchGenres = () => {
  return axios.get(`${BASE_URL}/genre/movie/list`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const fetchMovieDetails = (movieId) => {
  return axios.get(`${BASE_URL}/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
      append_to_response: 'credits',
    },
  });
};