import React, { Component } from 'react';
import { Spinner } from './index';
import '../css/LoadButton.css';

class LoadButton extends Component {
  render() {
    return (
      <div>
        {this.props.loading ?
          (
            <Spinner />
            ) : (
            <div onClick={this.props.onButtonClick} className="loadButton">
              <h3 className="loadButton--text"> WATCH MORE</h3>
            </div>
            )}
      </div>
    );
  }
}

export { LoadButton };
