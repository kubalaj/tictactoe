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
    this.baseState = {
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

  hasGameEnded() {
    axios.get(`http://127.0.0.1:5000/api/win`).then(res => {
      console.log(res.data);
      if(res.data !== false) {
        alert(res.data)
      }
      return res.data;
    });
  }

  async resetBoard() {
    await this.setStateAsync(this.baseState);
    this.createBoard();
    axios.get(`http://127.0.0.1:5000/api/reset`).then(res => {
    });
  }

  async computerMove(move) {
    this.hasGameEnded();
    const spaces = this.state.spaces.slice();
     axios.get(`http://127.0.0.1:5000/api/${move}`)
     .then(res => {
       spaces[res.data] = 'O';
       this.setStateAsync({spaces: spaces});
       if(typeof res.data === 'string') {
         console.log('werks');
       }
     });

     this.hasGameEnded()
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
        <button onClick={() => this.resetBoard()}>RESET</button>
      </div>
    );
  }
}

export default Board;
