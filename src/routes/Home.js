import React, { Component } from 'react';
import { HeaderImg, SearchBar, PosterList, LoadButton } from '../components';

const movies = [
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
];

class Home extends Component {
  render() {
    return (
      <div>
        <HeaderImg
          title="Fast and Furious"
          overview="Lorem ipsum"
          imgSrc={'./images/Fast_large.jpg'}
        />
        <SearchBar />
        <PosterList movies={movies} />
        <LoadButton loading={false} />
      </div>
    );
  }
}

export { Home };
