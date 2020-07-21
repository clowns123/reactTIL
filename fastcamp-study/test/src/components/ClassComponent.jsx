import React from 'react';

// class
// 타입체크 방법 : flow, (typescript)
class ClassComponent extends React.Component {
  static defaultProps = {
    age: 0,
  };
  render() {
    const { name, age, children } = this.props;
    return (
      <div>
        <h1>나는 클래스컴포넌트야</h1>
        {name !== undefined && <h3>나는 {name}</h3>}
        {(age !== undefined) && <h3>나는 {age}</h3>}
        {children !== undefined && <h3>나는 자식이 있어</h3>}
      </div>
    );
  }
}

// ClassComponent.defaultProps = {
//   age: 0,
// };

export default ClassComponent;
