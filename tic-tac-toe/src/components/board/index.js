import React, { Component } from 'react';
import './styles.scss';

class Board extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <div className="content">X</div>
          </div>
          <div className="col">
            <div className="content">X</div>
          </div>
          <div className="col">
            <div className="content">X</div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="content">X</div>
          </div>
          <div className="col">
            <div className="content">X</div>
          </div>
          <div className="col">
            <div className="content">X</div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="content">X</div>
          </div>
          <div className="col">
            <div className="content">X</div>
          </div>
          <div className="col">
            <div className="content">X</div>
          </div>
        </div>
      </div>

    );
  }
}

export default Board;
