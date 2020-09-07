import React, { Component } from 'react';
import { Header } from './components';
import { Home } from './routes';
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


  render() {
    return (
      <div className="App">
        <Header badge={this.state.badge} />
        <Home
          {...this.state}
        />
      </div>
      );
  }
}

export default App;
