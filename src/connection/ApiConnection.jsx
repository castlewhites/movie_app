/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const getMovies = () => {
  const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=04d46c0f24dc8320c418e7b2b80a3337&language=en-US&page=1';
  return axios({
    method: 'GET',
    url,
  });
};
