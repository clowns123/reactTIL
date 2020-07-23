import React from 'react';

class StateComponents extends React.Component {
  state = {
    list: [],
    count: 0,
  };

  // 라이플사이클 훅
  // 처음 렌더링 된 후 호출되는 라이플사이클
  componentDidMount() {
    console.log('componentDidMount');
    // state를 설정하는 2가지 방법

    setInterval(() => {
      this.setState({
        ...this.state,
        count: this.state.count + 1,
      });
    }, 1000);

    setInterval(() => {
      this.setState((state) => ({
        count: state.count + 1,
      }));
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>클래스 컴포넌트 {this.state.count}</h1>
        <button onClick={this.click2}>눌러봐</button>
      </div>
    );
  }
  click2() {
    console.log('test2');
  }
  click1 = () => console.log('test');
}

export default StateComponents;
