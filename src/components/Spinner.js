import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'

import '../css/Spinner.css';
library.add(faSpinner);

export class Spinner extends Component {
  render() {
    return (
        <div className="spinner--container">
          <FontAwesomeIcon
              icon="spinner"
              pulse
              size="7x"
              className="fa-faSpinner"
            />
        </div>
    );
  }
}
