import React, { Component } from 'react';
import './styles.scss';

import Space from '../space';


class Board extends Component {
  render() {
    return (
      <div className="board">
        <div className="row">
          <div className="col">
            <Space></Space>
          </div>
          <div className="col">
            <Space></Space>
          </div>
          <div className="col">
            <Space></Space>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Space></Space>
          </div>
          <div className="col">
            <Space></Space>
          </div>
          <div className="col">
            <Space></Space>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Space></Space>
          </div>
          <div className="col">
            <Space></Space>
          </div>
          <div className="col">
            <Space></Space>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
