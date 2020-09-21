import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { getMovies } from '../actions';
import { Spinner, HeaderDetails, ActorList } from '../components';
import { API_URL, API_KEY } from '../config';

class DetailsRoute extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      mTitle: "",
      mDesc: "",
      imgSrc: null,
      runtime: "",
      revenue: "",
      status: "",
      vote: "",
      actors : [],
      movie: {},
      wished: false
    }
    this.props.getMovies();
  }

  loadInfos = url => axios.get(url);

   async componentDidMount () {
    try{
      const movieId = this.props.match.params.id;
      const url = `${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
      const movie = await this.loadInfos(url);
      const { data : {
          revenue,
          runtime,
          title,
          overview,
          status,
          vote_average,
          poster_path
        }
      } = movie;
      this.setState({
          movie: movie.data,
          revenue : revenue,
          runtime: runtime,
          mTitle : title,
          mDesc : overview,
          status : status,
          vote : vote_average,
          imgSrc : poster_path,
          wished: this.checkWished()
      }, async () => {
        // get the actors
        const url = `${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
        const { data: { cast }} = await this.loadInfos(url);
        this.setState({ actors: [...cast], loading: false });
      })
      // console.log('res', res);
    } catch(e) {
      console.log("loadInfos failed", e);
    }
  }

   checkWished = () => {
      if(this.props.localMovies){
        this.props.localMovies.forEach(localMovie => {
          if(this.state.movie.id === localMovie.id) { return true };
        })
        return false;
      }
  }

    render() {
    return (
      <div className="app">

      {this.state.loading ?
        (<Spinner />) :
        (
          <div>
            <HeaderDetails
              movie = {this.state.movie}
              mTitle={this.state.mTitle}
              mDesc={this.state.mDesc}
              imgSrc={this.state.imgSrc}
              runtime={this.state.runtime}
              revenue={this.state.revenue}
              status={this.state.status}
              vote={this.state.vote}
              wished = { this.state.wished }
            />
            <ActorList actors={this.state.actors}/>
          </div>
        )
      }
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

const Details = connect(mapStateToProps,mapDispatchToProps)(DetailsRoute);


export { Details };
