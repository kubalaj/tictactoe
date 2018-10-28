import React, { Component } from 'react';
import './styles.scss';

class Space extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  handleClick = () => {
    if(!this.state.value){
      this.setState({value: 'X'});
    }
  }

  render() {
    return (
      <div className="space" onClick={this.handleClick}>
        {this.state.value}
      </div>
    );
  }
}

export default Space;
