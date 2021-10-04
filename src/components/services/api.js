import axios from 'axios'
import qs from 'qs'
import { APP_KEY, BASE_URL } from '../config/api_config'

let params = {
    api_key: APP_KEY
}

// Start ---------------- Movies APIS
export const getTopRatedMovies = async () => {
  
  const url = BASE_URL + '/movie/top_rated'
  const movies = getDataset(url);
  return movies;
}

export const getNowPlayingMovies = async () => {
  
  const url = BASE_URL + '/movie/now_playing'
  const movies = getDataset(url);
  return movies;
}

export const getPopularMovies = async () => {
  
  const url = BASE_URL + '/movie/popular'
  const movies = getDataset(url);
  return movies;
}

export const getUpcomingMovies = async () => {
  
  const url = BASE_URL + '/movie/upcoming'
  const movies = getDataset(url);
  return movies;
}

// End ---------------- Movies APIS

// Start ---------------- TV APIS

export const getAiringTodayTVShows = async () => {
  
  const url = BASE_URL + '/tv/airing_today'
  const tvShows = getDataset(url);
  return tvShows;
}

export const getOntheAirTVShows = async () => {
  
  const url = BASE_URL + '/tv/on_the_air'
  const tvShows = getDataset(url);
  return tvShows;
}

export const getPopularTVShows = async () => {
  
  const url = BASE_URL + '/tv/popular'
  const tvShows = getDataset(url);
  return tvShows;
}

export const getTopRatedTVShows = async () => {
  
  const url = BASE_URL + '/tv/top_rated'
  const tvShows = getDataset(url);
  return tvShows;
}

const getDataset = async (url) => {
  
  try {
    const movieAxios = axios.create({
      paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
    })
    const response = await movieAxios.get(url, { params })
    const movies = response.data.results
    return movies;
  
  } catch (error) {
    throw error
  }
}

// End ---------------- TV APIS

// Start ---------------- Search APIS

export const searchMovies = async (query) => {
  
  const url = BASE_URL + '/search/movie'
  const movies = searchDataset(url, query);
  return movies;
}

export const searchTVShows = async (query) => {
  
  const url = BASE_URL + '/search/tv'
  const tvShows = searchDataset(url, query);
  return tvShows;
}

export const searchMulti = async (query) => {
  
  const url = BASE_URL + '/search/multi'
  const movies = searchDataset(url, query);
  return movies;
}

export const searchDataset = async (url, query) => {

  params = {
    api_key: APP_KEY,
    query: query
  }

  try {
    const searchAxios = axios.create({
      paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
    })

    console.log('params : ' + params)

    const response = await searchAxios.get(url, { params })
    const multi = response.data.results
    return multi;
  
  } catch (error) {
    throw error
  }
}

// End ---------------- Search APIS

// Start ------------ Single movie or tv show get APIS

export const getMovieById = async (movieId) => {
  
  const url = BASE_URL + '/movie/' + movieId
  const movie = getData(url);
  return movie;
}

export const getTVShowById = async (tvShowId) => {
  
  const url = BASE_URL + '/tv/' + tvShowId
  const tvShow = getData(url);
  return tvShow;
}

const getData = async (url) => {
  
  try {
    const movieAxios = axios.create({
      paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
    })
    const response = await movieAxios.get(url, { params })
    const data = response.data
    return data;
  
  } catch (error) {
    throw error
  }
}

// End ------------ Single movie or tv show get APIS