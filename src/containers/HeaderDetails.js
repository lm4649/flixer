import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container, Stars } from '../components';
import { addMovie, removeMovie } from '../actions';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import { calcTime, convertMoney, calcVote } from '../utils/helpers';
import '../css/HeaderDetails.css';

class HeaderDetailsComponent extends Component {
  add = () => this.props.addMovie(this.props.movie);
  remove = () =>this.props.removeMovie(this.props.movie.id);

  render() {
    this.fakeArray1 = [];
    this.fakeArray2 = [];
    calcVote(this.props.vote,this.fakeArray1,this.fakeArray2);
    const imgSrc = this.props.imgSrc ? `${IMAGE_BASE_URL}/${POSTER_SIZE}/${this.props.imgSrc}` : "./images/no_image.jpg";

    return (
      <div className="headerDetails">
        <div className="badge-decoration">
          {this.props.status}
        </div>
        <div className="headerDetails--poster">
          <img src={imgSrc} alt="movie poster" className="headerDetails--poster__img" />
        </div>
        <div className="headerDetails--container">
          <div className="headerDetails--wrapper__titleAndIcon">
            <h3 className="headerDetails--container__title">
              {this.props.mTitle}
            </h3>
            {this.props.wished ?
                  (
                    <FontAwesome onClick={this.remove} className="poster--icon" name="check-circle" size="3x" />
                  ) :
                  (
                    <FontAwesome onClick={this.add} className="poster--icon__not" name="plus-circle" size="3x" />
                  )
            }
          </div>
          <p className="headerDetails--container__desc">
            {this.props.mDesc}
          </p>
          <div className="headerDetails--info">
            <Container iconName="hourglass-half" content={calcTime(this.props.runtime)} />
            <Stars fakeArray1={this.fakeArray1} fakeArray2={this.fakeArray2 } />
            <Container iconName="money" content={convertMoney(this.props.revenue)} />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addMovie, removeMovie }, dispatch )
}

const HeaderDetails = connect(null, mapDispatchToProps)(HeaderDetailsComponent);


export { HeaderDetails };
