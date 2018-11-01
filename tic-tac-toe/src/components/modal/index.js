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
          <div class="row">
            {this.props.value}
          </div>
          <div class="row">
            <button onClick={() => this.props.onClick()}>Okay</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
