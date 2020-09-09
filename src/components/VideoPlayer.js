import React, { Component } from 'react';
import ReactPlayer from 'react-player';

import '../css/VideoPlayer.css';

class VideoPlayer extends Component {

  render() {
    return (
      <div className="videoPlayer">
        <ReactPlayer
          url={this.props.videoUrl}
          controls
          playing={false}
          width="100%"
          heigth="100%"
          style={{position: "absolute", top:"0", left:"0" }}
          ligth={this.props.imageUrl}
          onEnded={this.props.handleEnded}
        />
      </div>
    );
  }
}

export { VideoPlayer };
