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
  createSpace = (i) => {
    return(
      <Space value={this.state.spaces[i]}></Space>
    )
  }
  createRows = () => {
    let board = [];
    for(let i = 0; i < 3; i++) {
        board.push(<div key={i} className="col">{this.createSpace(i)}</div>);
      }
    return board;
  }
  render() {
    return (
      <div className="board">
        <div className="row">
          {this.createRows()}
        </div>
        <div className="row">
            {this.createRows()}
        </div>
        <div className="row">
            {this.createRows()}
        </div>
      </div>
    );
  }
}

export default Board;
