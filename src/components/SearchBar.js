import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import { SpeechRecognition } from './index';
import '../css/SearchBar.css';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state={
      value: ""
    }
  }

  handleChange = e => this.setState({ value: e.target.value });
  // launch search when enter key is pressed
  handleKeyDown = (e, value) => {
    if (e.keyCode === 13) {
      this.props.onSearchClick(value);
    }
  };

  render() {
    const { value } = this.state
    return (
      <div className="searchBar--container">
        <div className="searchBar">
          <input
            type="text"
            className="searchBar--input"
            placeholder="search for a movie"
            value={value}
            onChange={this.handleChange}
            onKeyDown = {e => this.handleKeyDown(e, value)}
          />
          <SpeechRecognition onSearchClick={this.props.onSearchClick} />
          <div
            className="searchBar--submit"
            onClick={() => this.props.onSearchClick(value)}
          >
            <FontAwesome className="searchIcon" name="search" />
          </div>
        </div>
      </div>
    );
  }
}

export { SearchBar };
