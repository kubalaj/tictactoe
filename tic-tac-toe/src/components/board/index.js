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
  createBoard = (i) => {
    return(
      <Space value={this.state.spaces[i]}></Space>
    )
  }
  test = () => {
    let board = [];
    for(let i = 0; i< 3; i++) {
      board.push(<div key={i} className="col"><Space value={this.state.spaces[i]}></Space></div>);
    }
    return board;
  }
  render() {
    return (
      <div className="board">
        <div className="row">
          {this.test()}
        </div>
        <div className="row">
          <div className="col">
            {this.createBoard(3)}
          </div>
          <div className="col">
            {this.createBoard(4)}
          </div>
          <div className="col">
            {this.createBoard(5)}
          </div>
        </div>
        <div className="row">
          <div className="col">
            {this.createBoard(6)}
          </div>
          <div className="col">
            {this.createBoard(7)}
          </div>
          <div className="col">
            {this.createBoard(8)}
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
