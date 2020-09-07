import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import '../css/Poster.css';

class Poster extends Component {
  state = {
    hover: false
  }

  render() {
    return (
      <div className="poster">
        <img src={this.props.imgSrc} alt="poster" className="poster--img" />
        {this.state.hover ?
          (
            <div className="poster--overlay">
              <h3 className="poster--overlay__text">Wish List</h3>
              {this.props.wished ? (
                <FontAwesome className="poster--icon" name="heart" size="3x" />
                ) : (
                <FontAwesome className="poster--icon__not" name="heart-o" size="3x" />
                  )
            }
            </div>
            ) : null }
      </div>
    );
  }
}

export { Poster };
