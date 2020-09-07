import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import '../css/LoadButton.css';

library.add(faSpinner);

class LoadButton extends Component {
  render() {
    return (
      <div>
        {this.props.loading ?
          (
            <FontAwesomeIcon
              icon="spinner"
              pulse
              size="7x"
              className="fa-faSpinner"
            />
            ) : (
            <div className="loadButton">
              <h3 className="loadButton--text"> WATCH MORE</h3>
            </div>
            )}
      </div>
    );
  }
}

export { LoadButton };
