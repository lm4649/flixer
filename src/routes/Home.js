import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { HeaderImg, SearchBar, PosterList, LoadButton, Categories } from '../components';
import { getMovies } from '../actions';
import "../css/Home.css";

class HomeRoute extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    const { mTitle, mDesc, image, movies, loading } = this.props;

    return (
      <div>
        <HeaderImg
          title={mTitle}
          overview={mDesc}
          imgSrc={image}
        />
        <div className="menu--container">
          <Categories onSelectBrowseCategory = {this.props.onSelectBrowseCategory}/>
            <Link to={{pathname:"/my_list"}}>
              <h3 className="menu--link">My List</h3>
            </Link>
          <SearchBar onSearchClick={this.props.onSearchClick}/>
        </div>
        <PosterList movies={movies} localMovies={this.props.localMovies} listHeader={this.props.displayedCategory}/>
        <LoadButton onButtonClick={this.props.onButtonClick} loading={loading} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { localMovies: state.movies.movies }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getMovies }, dispatch )
}

const Home = connect(mapStateToProps,mapDispatchToProps)(HomeRoute);


export { Home };
