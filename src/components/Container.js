import React from 'react';
import FontAwesome from 'react-fontawesome';

const Container = props => {
  return(
    <div className="container">
      <FontAwesome name={props.iconName} size="5x" />
      <h3 className="container--title">{props.content}</h3>
    </div>
    );
}

export { Container };
