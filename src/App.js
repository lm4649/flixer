import React, { Component } from 'react';
import axios from 'axios';
import { Header } from './components';
import { Home } from './routes';
import { API_URL, API_KEY } from './config';
import './App.css';

class App extends Component {
  state = {
    loading: false,
    badge: 0,
    image: './images/Fast_large.jpg',
    mTitle: 'Fast and Furious',
    mDesc: 'Lorem ipsum Lorem ipsum Lorem ipsum',
    activePage: 0,
    totalPages: 0,
    searchText: "",
    movies: [
      {
        backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
        id: 475557,
        overview:
          "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
        poster_path: "/tWjJ3ILjsbTwKgXxEv48QAbYZ19.jpg",
        title: "Joker"
      },
      {
        backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
        id: 475558,
        overview:
          "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
        poster_path: "/tWjJ3ILjsbTwKgXxEv48QAbYZ19.jpg",
        title: "Joker"
      },
      {
        backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
        id: 475559,
        overview:
          "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
        poster_path: "/tWjJ3ILjsbTwKgXxEv48QAbYZ19.jpg",
        title: "Joker"
      },
      {
        backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
        id: 475560,
        overview:
          "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
        poster_path: "/tWjJ3ILjsbTwKgXxEv48QAbYZ19.jpg",
        title: "Joker"
      },
      {
        backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
        id: 475561,
        overview:
          "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
        poster_path: "/tWjJ3ILjsbTwKgXxEv48QAbYZ19.jpg",
        title: "Joker"
      }
    ]
  }

  async componentDidMount() {
    try{
      this.loadMovies();
    } catch(e) {
      console.log('load Movies failed', e);
    }
  }

  loadMovies = () => {
    const page = this.state.activePage + 1;
    const url = `${API_URL}/movie/popular?api_key${API_KEY}&page=${page}&language=en-US`;
    return axios.get(url);
  }

  handleSearch = value => console.log('handleSearch', value);
  loadMore = () => console.log('load more');

  render() {
    return (
      <div className="App">
        <Header badge={this.state.badge} />
        <Home
          {...this.state}
          onSearchClick={this.handleSearch}
          onButtonClick={this.loadMore}
        />
      </div>
      );
  }
}

export default App;
