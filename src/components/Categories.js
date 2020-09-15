import React, { Component } from 'react';

import { Category } from './index';
import '../css/Categories.css';

class Categories extends Component {
  constructor(props){
    super(props);

    this.state = {
      genres: [
                {"id":28,"name":"Action"},
                {"id":12,"name":"Adventure"},
                {"id":16,"name":"Animation"},
                {"id":35,"name":"Comedy"},
                {"id":80,"name":"Crime"},
                {"id":99,"name":"Documentary"},
                {"id":18,"name":"Drama"},
                {"id":10751,"name":"Family"},
                {"id":14,"name":"Fantasy"},
                {"id":36,"name":"History"},
                {"id":27,"name":"Horror"},
                {"id":10402,"name":"Music"},
                {"id":9648,"name":"Mystery"},
                {"id":10749,"name":"Romance"},
                {"id":878,"name":"Science Fiction"},
                {"id":10770,"name":"TV Movie"},
                {"id":53,"name":"Thriller"},
                {"id":10752,"name":"War"},
                {"id":37,"name":"Western"}
              ]
    }
  }

  renderCategories = genres => {
    return genres.map( genre => {
      return <Category id={genre.id} key={genre.id} name={genre.name}/>
    });
  }

  handleChange = e => console.log(e.target.value);

  render() {
    return (
      <div className="categories--container">
      <label htmlFor="categories"> Categories </label>
      <select className="categories" name="categories" id="categories" onChange={this.handleChange}>
        <Category id="popular" key="popular" name="popular" />
        {this.renderCategories(this.state.genres)}
      </select>
      </div>
    );
  }
}


export { Categories };
