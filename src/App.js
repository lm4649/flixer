import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import { Header, Spinner } from './components';
import { Home, Details, NotFound, MoviePlayer } from './routes';
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE } from './config';
import './App.css';

class App extends Component {
  state = {
    loading: true,
    badge: 0,
    image: null,
    mTitle: "",
    mDesc: "",
    activePage: 0,
    totalPages: 0,
    searchText: "",
    movies: [],
    category: "popular"
  }

  async componentDidMount() {
    try{
      const { data: {results, page, total_pages }} =  await this.loadMovies();
      // console.log('load Movies successful', results);
      this.setState({
        movies: results,
        loading: false,
        activePage: page,
        totalPages: total_pages,
        image: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
        mTitle: results[0].title,
        mDesc: results[0].overview
      })
    } catch(e) {
      console.log('load Movies failed', e);
    }
  }

  loadMovies = () => {
    const page = this.state.activePage + 1;
    let url;
    if(this.state.searchText) {
      url = `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${this.state.searchText}&page=${page}`
    } else {
      url = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
    }
    return axios.get(url);
  }

  searchMovie = () => {
    const page = 1;
    let url;
    if(this.state.searchText) {
      url = `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${this.state.searchText}`
    } else if (this.state.category !=="popular") {
       url = `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${this.state.category}&language=en-US&page=${page}`
    }else {
      url = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
    }
    return axios.get(url);
  }


  loadMore = async () => {
    try{
      this.setState({ loading: true });
      const { data: {results, page, total_pages }} =  await this.loadMovies();
      // console.log('load Movies successful', results);
      this.setState({
        movies: [...this.state.movies, ...results],
        loading: false,
        activePage: page,
        totalPages: total_pages,
        image: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
        mTitle: results[0].title,
        mDesc: results[0].overview
      })
    } catch(e) {
      console.log('load more failed', e);
    }
  }


  handleSearch = value => {
    try{
      this.setState({loading: true, searchText: value, image: null }, async () => {
        const { data: {results, page, total_pages }} =  await this.searchMovie();
        // console.log('load Movies successful', results);
        this.setState({
          movies: results,
          loading: false,
          activePage: page,
          totalPages: total_pages,
          image: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
          mTitle: results[0].title,
          mDesc: results[0].overview
        })
      })
    } catch(e) {
      console.log('handle search failed', e);
    }
  }


  handleCategory = value => {
    try{
      this.setState({loading: true, category: value, image: null }, async () => {
        const { data: {results, page, total_pages }} =  await this.searchMovie();
        console.log('load Movies successful', results);
        this.setState({
          movies: results,
          loading: false,
          activePage: page,
          totalPages: total_pages,
          image: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
          mTitle: results[0].title,
          mDesc: results[0].overview
        })
      })
    } catch(e) {
      console.log('handle category failed', e);
    }
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header badge={this.state.badge} />
            {!this.state.image?
              (<Spinner />) : (
                <Switch>
                  <Route path="/" exact render={() => (
                      <Home
                        {...this.state}
                        onSearchClick={this.handleSearch}
                        onButtonClick={this.loadMore}
                        onSelectBrowseCategory ={this.handleCategory}
                      />
                    )} />
                  <Route path="/player" exact component={MoviePlayer} />
                  <Route path="/player/:id" exact component={MoviePlayer} />
                  <Route path="/:id" exact component={Details} />
                  <Route component={NotFound} />
                </Switch>
              )
            }
          </div>
        </BrowserRouter>
      </Provider>
      );
  }
}

export default App;
