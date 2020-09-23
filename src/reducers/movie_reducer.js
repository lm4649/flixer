import { ADD_MOVIE, REMOVE_MOVIE, GET_MOVIES, GET_NUMBER } from '../actions';

export const movieReducer = (state ={movies:[], number: 0}, action) => {
   switch(action.type) {
    case ADD_MOVIE:
      // console.log("add movie", action.payload);
      return { movies: action.payload, number: action.payload.length };
    case REMOVE_MOVIE:
      // console.log("remove movie", action.payload);
      return { movies: action.payload, number: state.number - 1 };
    case GET_MOVIES:
      // console.log("get movies", action.payload);
      return { ...state, movies: action.payload };
    case GET_NUMBER:
      // console.log("get number", action.payload);
      return { ...state, number: action.payload };
    default:
      return state;
   }
}
