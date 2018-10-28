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
    spaces[i] = 'X';
    this.setState({spaces: spaces});
  }
  createSpace = (i) => {
    return(
      <Space value={this.state.spaces[i]} onClick={this.handleClick(i)}></Space>
    )
  }
  createRows = () => {
    let rows = [];
    for(let i = 0; i < 9; i++) {
        rows.push(<div key={i} className="col">{this.createSpace(i)}</div>);
      }
    return rows;
  }
  // createBoard = () => {
  //   let board = [];
  //   for(let i = 0; i < 3; i++) {
  //     board.push(<div key={i} className="row">{this.createRows()}</div>);
  //   }
  //   return board;
  // }
  render() {
    return (
      <div className="board">
        {this.createSpace(0)}
        {this.createSpace(1)}
        {this.createSpace(2)}
        {this.createSpace(3)}
        {this.createSpace(4)}
        {this.createSpace(5)}
        {this.createSpace(6)}
        {this.createSpace(7)}
        {this.createSpace(8)}
      </div>
    );
  }
}

export default Board;
