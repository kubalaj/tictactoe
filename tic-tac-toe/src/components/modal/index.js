import React, { Component } from 'react';
import './styles.scss';

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="modal">
        <div className="container__modal-content">
          <div className="row">
            <p>{this.props.value}</p>
          </div>
          <div className="row">
            <button onClick={() => this.props.onClick()}>Yes!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
