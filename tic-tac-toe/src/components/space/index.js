import React, { Component } from 'react';
import './styles.scss';

class Space extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="space" onClick={() => this.props.onClick()}>
        {this.props.value}
      </div>
    );
  }
}

export default Space;
