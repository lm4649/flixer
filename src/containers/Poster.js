import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AOS from "aos";

import { addMovie, removeMovie } from '../actions';
import "aos/dist/aos.css";
import '../css/Poster.css';

class PosterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    hover: false
    }
  }

  componentDidMount(){
    AOS.init();
  }

  showOverlay = () => {
    if(this.state.hover) {
      return;
    }
    this.setState({ hover: true });
  }

  hideOverlay = () => {
    this.setState({ hover: false });
  }

  add = () => this.props.addMovie(this.props.movie);

  remove = () =>this.props.removeMovie(this.props.id);


  render() {
    AOS.refresh();
    return (
      <div
        className="poster"
        onMouseEnter={this.showOverlay}
        onMouseLeave={this.hideOverlay}
        data-aos ="flip-left"
      >
        <Link to={{ pathname: `/${this.props.id}` }} >
          <img src={this.props.imgSrc} alt="poster" className="poster--img" />
        </Link>
        {this.state.hover ?
          (
            <div className="poster--overlay">
              <h3 className="poster--overlay__text">PLAY LIST</h3>
              {this.props.wished ?
                (
                  <FontAwesome onClick={this.remove} className="poster--icon" name="check-circle" size="3x" />
                ) :
                (
                  <FontAwesome onClick={this.add} className="poster--icon__not" name="plus-circle" size="3x" />
                )
              }
            </div>
            ) : null}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addMovie, removeMovie }, dispatch )
}

const Poster = connect(null, mapDispatchToProps)(PosterComponent);


export { Poster };
