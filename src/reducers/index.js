import { combineReducers } from 'redux';
import { movieReducer } from './movie_reducer';

const rootReducer = combineReducers({
  movies: movieReducer
})

export default rootReducer;
