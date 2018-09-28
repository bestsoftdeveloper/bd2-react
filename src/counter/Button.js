import React, { Component } from 'react';
// import './App.css';

class Button extends Component {

  constructor(props)
  {
    super(props);
  }

  render() {
    const { fff } = this.props;

    return (
        <button
        onClick={fff}
        >BTN</button>
    );
  }
}

export default Button;

// Button.propTypes  ={
//   fff: PropTypes.func.isRequired
// }


