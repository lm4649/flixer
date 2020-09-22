import React, { Component } from 'react';
import AOS from "aos";

import "aos/dist/aos.css";
import '../css/Actor.css';

class Actor extends Component {
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

  render() {
    AOS.refresh();
    const name = this.props.name.split(" ");
    return (
      <div className="actor"
        onMouseEnter={this.showOverlay}
        onMouseLeave={this.hideOverlay}
        data-aos="zoom-in-up"
      >
      <img src={this.props.imgSrc} alt="actor" className="actor--img"/>
      {this.state.hover?
        (
          <div className="actor--overlay">
            <div className="actor--name">{name[0]}</div>
            <div className="actor--name">{name[1]}</div>
          </div>
        ) : null}
      </div>
    );
  }
}

export { Actor };
