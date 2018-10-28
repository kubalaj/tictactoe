import React, { Component } from 'react';
import './styles.scss';

class Space extends Component {

  handleClick() {
    console.log('click yo');
  }
  render() {
    return (
      <div className="space" onClick={this.handleClick}>X</div>
    );
  }
}


export default Space;
