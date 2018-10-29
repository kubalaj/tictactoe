import React, { Component } from 'react';
import axios from 'axios';
import './styles.scss';

import Space from '../space';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spaces: Array(9).fill(null)
    };
  }
  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }
  async handleClick(i) {
    const spaces = this.state.spaces.slice();
      spaces[i] = 'X';
      await this.setStateAsync({spaces: spaces});
      this.computerMove(i);
  }

  async computerMove(move) {
    console.log('is called');
    const spaces = this.state.spaces.slice();
     axios.get(`http://127.0.0.1:5000/api/${move}`)
     .then(res => {
       spaces[res.data] = 'O';
       this.setStateAsync({spaces: spaces});
     });
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
