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

  handleClick = (i) => {
    const spaces = this.state.spaces.slice();
    if(!spaces[i]) {
      spaces[i] = 'X';
      this.setState({spaces: spaces});
      this.computerMove(spaces);
    }
  }

  computerMove = (spaces) => {
    console.log('space', spaces);
  }

  createSpace = (i) => {
    return(
      <Space value={this.state.spaces[i]} onClick={() => this.handleClick(i)}></Space>
    )
  }

  createRows = (rowNumber) => {
    let rows = [];
    rowNumber = (rowNumber*3);
    for(let i = 0; i < 3; i++) {
        rows.push(<div key={i+rowNumber} className="col">{this.createSpace(i+rowNumber)}</div>);
      }
    return rows;
  }

  createBoard = () => {
    let board = [];
    for(let i = 0; i < 3; i++) {
      board.push(<div key={i} className="row">{this.createRows(i)}</div>);
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
