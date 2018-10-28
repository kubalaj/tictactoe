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
    let rows = [];
    for(let i = 0; i < 3; i++) {
        rows.push(<div key={i} className="col">{this.createSpace(i)}</div>);
      }
    return rows;
  }
  createBoard = () => {
    let board = [];
    for(let i = 0; i < 3; i++) {
      board.push(<div key={i} className="row">{this.createRows()}</div>);
    }
    return board;
  }
  render() {
    return (
      <div className="board">
        {this.createBoard()}
      </div>
    );
  }
}

export default Board;
