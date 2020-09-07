import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import '../css/Poster.css';

class Poster extends Component {
  state = {
    hover: false
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

  add = () => console.log('add with redux');

  remove = () => console.log('remove with redux');


  render() {
    return (
      <div
        className="poster"
        onMouseEnter={this.showOverlay}
        onMouseLeave={this.hideOverlay}
      >
        <img src={this.props.imgSrc} alt="poster" className="poster--img" />
        {this.state.hover ?
          (
            <div className="poster--overlay">
              <h3 className="poster--overlay__text">WISH LIST</h3>
              {this.props.wished ?
                (
                  <FontAwesome onClick={this.remove} className="poster--icon" name="heart" size="3x" />
                ) :
                (
                  <FontAwesome onClick={this.add} className="poster--icon__not" name="heart-o" size="3x" />
                )
              }
            </div>
            ) : null}
      </div>
    );
  }
}

export { Poster };
