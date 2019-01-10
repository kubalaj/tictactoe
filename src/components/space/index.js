import React, { Component } from 'react';
import './styles.scss';

class Space extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="space" onClick={() => this.props.onClick()}>
        <p>{this.props.value === "X" || this.props.value === "O" ? this.props.value : ""}</p>
      </div>
    );
  }
}

export default Space;
