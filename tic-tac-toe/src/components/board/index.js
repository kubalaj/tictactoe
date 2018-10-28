import React, { Component } from 'react';
import './styles.scss';

import Space from '../space';


class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spaces: Array(9).fill(null)
    };
  }
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
