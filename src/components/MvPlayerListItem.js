import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/MvPlayerListItem.css';

class MvPlayerListItem extends Component {
  render() {
    const activeClass = this.props.active ? "mvPLayerListItem active" : "mvPLayerListItem ";
    return (
      <Link
        to={{pathname:`/player/${this.props.id}`}}
        style={{textDecoration: "none", color:"white"}}
      >
        <div className={activeClass}>
          <div className="mvPlayerListItem--number">{this.props.number}</div>
          <div className="mvPlayerListItem--title">{this.props.title}</div>
          <div className="mvPlayerListItem--time">{this.props.duration}</div>
        </div>
        <div className="mvPlayerListItem--divider" />
      </Link>
    );
  }
}

export { MvPlayerListItem };
