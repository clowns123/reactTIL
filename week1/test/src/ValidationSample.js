/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
      clicked: false,
      validated: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      // eslint-disable-next-line react/no-access-state-in-setstate
      validated: this.state.password === '0000',
    });
    this.input.focus();
  };

  render() {
    return (
      <div>
        <input
          // eslint-disable-next-line no-return-assign
          ref={(ref) => (this.input = ref)}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            // eslint-disable-next-line no-nested-ternary
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
        />
        <button onClick={this.handleButtonClick} type="button">
          검증하기
        </button>
      </div>
    );
  }
}

export default ValidationSample;
