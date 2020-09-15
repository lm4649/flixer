import React, { Component } from 'react';

class Category extends Component {
  render() {
  const { id, name } = this.props;
    return (
      <option value={id} className="category">{name}</option>
    );
  }
}

export { Category }
