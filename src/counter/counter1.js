import React, { Component } from 'react';
// import './App.css';
import Button from './Button';

class Counter1 extends Component {

  state = {
    counter: 1
  };

  add() {
    debugger;
    let { counter } = this.state;
    counter ++;
    this.setState({counter});
  }

  decrement() {
    debugger;
    let { counter } = this.state;
    counter --;
    this.setState({counter});
  }

  renderDecrement() {
    if(this.state.counter === 0) {
      return false;
    } else {
      return (
          <p>
            AAAAAAAAAAAAAAaa
          </p>
      );
    }
  }

  render() {
    debugger;
    const { counter } = this.state;
    return (
      <div className="counter">
        <h2>COUNTER1</h2>
        <Button
        fff={this.decrement.bind(this)}
        ></Button>



        <button
        onClick={this.add.bind(this)}
        > add </button>
        <span>{counter}</span>

        {
            counter > 0 &&
            <button
                onClick={this.decrement.bind(this)}
                disabled={counter === 0}
            > decrement1 </button>
        }


      </div>
    );
  }
}

export default Counter1;
