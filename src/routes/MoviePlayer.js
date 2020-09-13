import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

import { VideoPlayer, MvPlayerList, Spinner } from '../components/';
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE } from '../config';
import { calcTime } from '../utils/helpers'
import '../css/MoviePlayer.css';

let newMovies = [];

class MoviePlayer extends Component {
  state = {
    loading: true,
    movies: [],
    selectedMovie: {}
  }

  async componentDidMount() {
    const oldMovies = JSON.parse(localStorage.getItem('movies'));
    const results = await this.getNewMovies(oldMovies);
    const trailers = await this.getTrailers(oldMovies);
    newMovies = oldMovies.map((oldMovie, index) => {
      return {
        id: oldMovie.id,
        position: index + 1,
        title: oldMovie.title,
        duration: results[index],
        imageUrl: oldMovie.backdrop_path ? `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${oldMovie.backdrop_path}` : "./images/Fast_large.jpg",
        videoUrl: `https://www.youtube.com/embed/${trailers[index]}`
      }
    })

    const id = this.props.match.params.id;

    if (id) {
      const selectedMovie = this.getSelectedMovie(newMovies, id);
      this.setState({
        loading: false,
        movies: [...newMovies],
        selectedMovie
      })
    } else {
      const selectedMovie = newMovies[0];
      this.setState({
        loading: false,
        movies: [...newMovies],
        selectedMovie
    })
      this.props.history.push({ pathname: `/player/${selectedMovie.id}`})
    }
  };

  componentDidUpdate(prevProps) {
    console.log('mv pl comp did update');
    if(prevProps.match.params.id !== this.props.match.params.id) {
      const id = this.props.match.params.id;
      const selectedMovie = this.getSelectedMovie(newMovies, id);
      this.setState({ selectedMovie });
    }
  }

  getSelectedMovie = (movies, movieId) => {
        const selectedMovie = _.find(movies, { id : parseInt(movieId, 10) });
        return selectedMovie;
    }

  handleEnded = () => {
    console.log("video ended");
    const { movies, selectedMovie } = this.state;
    const movieIndex = movies.findIndex( movie => selectedMovie.id === movie.id );
    const nextMovieIndex = movieIndex === movies.length - 1 ? 0 : movieIndex + 1;
    const NewSelectedMovie = movies[nextMovieIndex];
    this.props.history.push({ pathname: `/player/${NewSelectedMovie.id}`});
    this.setState({ selectedMovie: NewSelectedMovie });
  }

  getTime = movieId => {
        return new Promise((resolve, reject) => {
            const url = `${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
            axios.get(url)
                .then(data => {
                    const duration = data.data.runtime;
                    resolve(duration)
                })
                .catch(e => {
                    console.log('e',e);
                    reject('error ', e);
                })
        })
    }

  getNewMovies = async oldMovies => {
    let promises = [];
    for (let i = 0; i < oldMovies.length; i++) {
      const element = oldMovies[i];
      const id = element.id;
      const time = await this.getTime(id);
      promises.push(calcTime(time));
    }
    return Promise.all(promises);
  }


  getTrailer = id => {
    return new Promise((resolve, reject) => {
            const url = `${API_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
            axios.get(url)
                .then(data => {
                    console.log(data);
                    const trailerKey = data.data.results.length > 0 ? data.data.results[0].key : "Zw_FKq10S8M";
                    resolve(trailerKey)
                })
                .catch(e => {
                    console.log('e',e);
                    reject('error ', e);
                })
        })
  }

  getTrailers = async oldMovies => {
    let promises = [];
    for (let i = 0; i < oldMovies.length; i++) {
      const element = oldMovies[i];
      const id = element.id;
      const trailer = await this.getTrailer(id);
      promises.push(trailer);
    }
    return Promise.all(promises);
  }

  render() {
    return (
      <div className="moviePlayer">
        {this.state.loading ?
          (<Spinner />) :
          (
            <>
            <VideoPlayer
              videoUrl = {this.state.selectedMovie.videoUrl}
              imageUrl = {this.state.selectedMovie.imageUrl}
              handleEnded = {this.handleEnded}
            />
            <MvPlayerList
              movies = {this.state.movies}
              selectedMovie = {this.state.selectedMovie}
            />
            </>
          )
        }
      </div>
    );
  }
}


export { MoviePlayer };
