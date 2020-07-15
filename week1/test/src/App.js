import React, { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';
import IterationSample from './IterationSample';

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      color: '#000',
    };
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    // const { color } = this.state;
    // return (
    //   <div>
    //     <button type="button" onClick={this.handleClick}>
    //       랜덤 색상
    //     </button>
    //     <ErrorBoundary>
    //       <LifeCycleSample color={color} />
    //     </ErrorBoundary>
    //   </div>
    // );
    return (
      <>
        <IterationSample />
      </>
    );
  }
}

export default App;
