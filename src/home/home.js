import React, { Component } from 'react';
// import './App.css';

class Home extends Component {

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
  navigate = (page) => {
    debugger;
    this.props.history.push('/'+ page);
  };

  navigateCounter = () => {
    debugger;
    this.props.history.push('/counter');
  };

  navigateCounter1 = () => {
    debugger;
    this.props.history.push('/counter1');
  };

  navigateDb1 = () => {
    debugger;
    this.props.history.push('/db1');
  };


  render() {
    return (
      <div className="counter">
        <h2>HOME</h2>
        <div>
        <span onClick={this.navigateCounter.bind(this)}>counter</span>
        </div>

        <div>
          <span onClick={this.navigateCounter1}>counter 1</span>
        </div>
        <div>
          <span onClick={this.navigateDb1}>bd 1</span>
        </div>


      </div>
    );
  }
}

export default Home;
