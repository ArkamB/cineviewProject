import { movieapikey } from "./apikey";
import axios from "axios";

// Endpoints
const apiBaseUrl = "https://api.themoviedb.org/3";
const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${movieapikey}`;
const popularMoviesEndpoint = `${apiBaseUrl}/movie/popular?api_key=${movieapikey}`;
const upComingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?api_key=${movieapikey}`;
const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top_rated?api_key=${movieapikey}`;
const genresEndpoint = `${apiBaseUrl}/genre/movie/list?api_key=${movieapikey}`;
const searchMoviesEndpoint = `${apiBaseUrl}/search/movie?api_key=${movieapikey}`;

// Movie Details Endpoint
const movieDetailsEndpoint = (id) =>
  `${apiBaseUrl}/movie/${id}?api_key=${movieapikey}`;

const movieCreditsEndpoint = (id) =>
  `${apiBaseUrl}/movie/${id}/credits?api_key=${movieapikey}`;

const similarMoviesEndpoint = (id) =>
  `${apiBaseUrl}/movie/${id}/similar?api_key=${movieapikey}`;

// Cast Api call to get cast of movie
const personDetailsEndpoint = (id) =>
  `${apiBaseUrl}/person/${id}?api_key=${movieapikey}`;

const personMovieEndpoint = (id) =>
  `${apiBaseUrl}/person/${id}/movie_credits?api_key=${movieapikey}`;

// Api call to get movies
const movieApiCall = async (endpoints, params) => {
  const options = {
    method: "GET",
    url: endpoints,
    params: params ? params : {},
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("API call error: ", error);
    return { error: "An error occurred while fetching data" };
  }
};

// Functions to get Images of different sizes and width
export const image500 = (posterpath) =>
  posterpath ? "https://image.tmdb.org/t/p/w500" + posterpath : null;

// Home Screen Apis
export const fetchTrendingMovie = async () => {
  return await movieApiCall(trendingMoviesEndpoint);
};

export const fetchPopularMovie = async () => {
  return await movieApiCall(popularMoviesEndpoint);
};

export const fetchUpComingMovie = async () => {
  return await movieApiCall(upComingMoviesEndpoint);
};

export const fetchTopRatedMovie = async () => {
  return await movieApiCall(topRatedMoviesEndpoint);
};

export const fetchGenres = async () => {
  return await movieApiCall(genresEndpoint);
};

export const fetchMovieDetails = async (id) => {
  return await movieApiCall(movieDetailsEndpoint(id));
};

export const fetchMovieCredits = async (movieId) => {
  return await movieApiCall(movieCreditsEndpoint(movieId));
};

export const fetchSimilarMovies = async (movieId) => {
  return await movieApiCall(similarMoviesEndpoint(movieId));
};

export const searchMovies = async (params) => {
  return await movieApiCall(searchMoviesEndpoint, params);
};

// Cast functions to fetch data
export const fetchPersonDetails = async (id) => {
  return await movieApiCall(personDetailsEndpoint(id));
};

export const fetchPersonMovies = async (id) => {
  return await movieApiCall(personMovieEndpoint(id));
};
