import React, { Component } from 'react';
import axios from 'axios';
import { Spinner, HeaderDetails, ActorList } from '../components';
import { API_URL, API_KEY } from '../config';

class Details extends Component {
  state = {
    loading: true,
    mTitle: "",
    mDesc: "",
    imgSrc: null,
    runtime: "",
    revenue: "",
    status: "",
    vote: "",
    actors : []
  }

  loadInfos = url => axios.get(url);

  async componentDidMount () {
    try{
      const movieId = this.props.match.params.id;
      const url = `${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
      const { data : {
          revenue,
          runtime,
          title,
          overview,
          status,
          vote_average,
          poster_path
        }
      } = await this.loadInfos(url);
      this.setState({
          revenue : revenue,
          runtime: runtime,
          mTitle : title,
          mDesc : overview,
          status : status,
          vote : vote_average,
          imgSrc : poster_path
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

  render() {
    return (
      <div className="app">
      {this.state.loading ?
        (<Spinner />) :
        (
          <div>
            <HeaderDetails
              mTitle={this.state.mTitle}
              mDesc={this.state.mDesc}
              imgSrc={this.state.imgSrc}
              runtime={this.state.runtime}
              revenue={this.state.revenue}
              status={this.state.status}
              vote={this.state.vote}
            />
            <ActorList actors={this.state.actors}/>
          </div>
        )
      }
      </div>
    );
  }
}

export { Details };
