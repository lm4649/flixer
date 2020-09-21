import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import '../css/SpeechRecognition.css';

let recognition;
const isChrome = /chrom(e|ium)/.test(navigator.userAgent.toLowerCase())

if(isChrome){
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new window.SpeechRecognition();
}

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
    const chosenClass = isChrome ? "microphone" : "no-microphone";
    return (
      <div
        className={chosenClass}
        onClick={this.toggleListen}
      >
        <FontAwesome className="microphoneIcon" name={this.state.listening ? "microphone" : "microphone-slash"} />
      </div>
    );
  }
}

export { SpeechRecognition };
