import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import '../css/SpeechRecognition.css';

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new window.SpeechRecognition();


class SpeechRecognition extends Component {
  constructor(props) {
    super(props);
    this.state = { listening: false }
  }

  toggleListen = () => {
    this.setState({
      listening: !this.state.listening
    }, this.handleListen)
  }

  handleListen = () => {
    if (this.state.listening) recognition.start();
    else recognition.abort();

    recognition.onresult = e => {
      this.props.onSearchClick(e.results[0][0].transcript)
    }
  }

  render() {
    return (
      <div
        className="microphone"
        onClick={this.toggleListen}
      >
        <FontAwesome className="microphoneIcon" name={this.state.listening ? "microphone" : "microphone-slash"} />
      </div>
    );
  }
}

export { SpeechRecognition };
