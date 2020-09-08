export const ADD_MOVIE = "ADD_MOVIE";
export const REMOVE_MOVIE = "REMOVE_MOVIE";
export const GET_MOVIES = "GET_MOVIES";
export const GET_NUMBER = "GET_NUMBER";


export function addMovie(movie) {
  let movies = JSON.parse(localStorage.getItem("movies"));
  if(movies) {
    movies = [...movies, movie];
  } else {
    movies = [];
    movies.push(movie)
  }
  localStorage.setItem("movies", JSON.stringify(movies));
  return {
    type: ADD_MOVIE,
    payload: movies,
  }
}

export function removeMovie(movieId) {
  const oldMovies = JSON.parse(localStorage.getItem("movies"));
  const movies = oldMovies.filter(movie => movie.id !== movieId);
  localStorage.setItem("movies", JSON.stringify(movies));
  return{
    type: REMOVE_MOVIE,
    payload: movies
  }
}

export function getMovies() {
  const movies = JSON.parse(localStorage.getItem("movies"));
  return {
    type: GET_MOVIES,
    payload: movies
  }
}


export function getNumber() {
  const movies = JSON.parse(localStorage.getItem("movies"));
  let number;
  if(movies) {
    number = movies.length;
  } else {
    number = 0;
  }
  return {
    type: GET_NUMBER,
    payload: number
  }
}
