import React, { Component } from 'react';
import axios from 'axios';
import './styles.scss';

import Space from '../space';
import Modal from '../modal';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spaces: Array.from(Array(9).keys()),
      isEndGame: false,
      message: ''
    };
    this.baseState = {
        spaces: Array.from(Array(9).keys()),
        isEndGame: false,
        message: ''
    };
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  async handleClick(i) {
    const spaces = this.state.spaces.slice();
      if(spaces[i] !== 'O' && spaces[i] !== 'X' && this.state.isEndGame == false){
        spaces[i] = 'X';
        await this.setStateAsync({spaces: spaces});
        this.computerMove(i);
      }
  }

  hasGameEnded() {
    const spaces = this.state.spaces.slice()
    axios.get(`http://127.0.0.1:5000/api/win/${spaces}`).then(res => {
      if(res.data !== false) {
        (this.setState({
          spaces: this.state.spaces,
          isEndGame: true,
          message: res.data
        }))
      }
    });
  }

  async resetBoard() {
    await this.setStateAsync(this.baseState);
    axios.get(`http://127.0.0.1:5000/api/reset`);
  }

  async computerMove() {
    this.hasGameEnded();
    const spaces = this.state.spaces.slice();
     axios.get(`http://127.0.0.1:5000/api/${spaces}`)
     .then(res => {
       this.setStateAsync({spaces: res.data});
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
      <div className="container__main-content">
        <div className="board">
          {this.createBoard()}
        </div>
        {this.state.isEndGame ? <Modal value={this.state.message} onClick={() => this.resetBoard()}>Modal</Modal> : null}
      </div>
    );
  }
}

export default Board;
