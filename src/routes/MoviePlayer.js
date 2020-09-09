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
    movies: [
    {
      id: 429617,
      position: 1,
      title: "Spider-Man: Far from home",
      duration: "2h 9m",
      imageUrl: "http://image.tmdb.org/t/p/w1200//5myQbDzw318k9yofUXRJ4UTVgam.jpg",
      videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
      id: 429618,
      position: 2,
      title: "Spider-Man: Far from home",
      duration: "2h 9m",
      imageUrl: "http://image.tmdb.org/t/p/w1200//5myQbDzw318k9yofUXRJ4UTVgam.jpg",
      videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
      id: 429619,
      position: 3,
      title: "Spider-Man: Far from home",
      duration: "2h 9m",
      imageUrl: "http://image.tmdb.org/t/p/w1200//5myQbDzw318k9yofUXRJ4UTVgam.jpg",
      videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
      id: 429620,
      position: 4,
      title: "Spider-Man: Far from home",
      duration: "2h 9m",
      imageUrl: "http://image.tmdb.org/t/p/w1200//5myQbDzw318k9yofUXRJ4UTVgam.jpg",
      videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
      id: 429621,
      position: 5,
      title: "Spider-Man: Far from home",
      duration: "2h 9m",
      imageUrl: "http://image.tmdb.org/t/p/w1200//5myQbDzw318k9yofUXRJ4UTVgam.jpg",
      videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    }
  ],
  selectedMovie: {
    id: 429617,
    position: 1,
    title: "Spider-Man: Far from home",
    duration: "2h 9m",
    imageUrl: "http://image.tmdb.org/t/p/w1200//5myQbDzw318k9yofUXRJ4UTVgam.jpg",
    videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    }
  }

  async componentDidMount() {
    const oldMovies = JSON.parse(localStorage.getItem('movies'));
    const results = await this.getNewMovies(oldMovies);
    newMovies = oldMovies.map((oldMovie, index) => {
      return {
        id: oldMovie.id,
        position: index + 1,
        title: oldMovie.title,
        duration: results[index],
        imageUrl: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${oldMovie.backdrop_path}`,
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      }
    })

    const id = this.props.match.params.id;

    if (id) {
      const selectedMovie = this.getSelectedMovie(newMovies, id);
      this.setState({
        loading: false,
        movies: [...newMovies],
        selectedMovie: selectedMovie
      })
    } else {
      const selectedMovie = newMovies[0]
      this.setState({
        loading: false,
        movies: [...newMovies],
        selectedMovie: selectedMovie
    })
      this.props.history.push({ pathname: `/player/${selectedMovie.id}`})
    }
  }

  getSelectedMovie = (movies, movieId) => {
        const selectedMovie = _.find(movies, { id : parseInt(movieId, 10) });
        return selectedMovie;
    }

  handleEnded = () => {
    console.log("video ended");
  }

  getTime = movieId => {
        return new Promise((resolve, reject) => {
            const url = `${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=fr`;
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
