import React, { Component } from 'react';
import './styles.scss';

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="space" >
        {this.props.value}
        <button onClick={() => this.props.onClick()}>Okay</button>
      </div>
    );
  }
}

export default Modal;
