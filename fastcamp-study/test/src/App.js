import React from 'react';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

function App() {
  return (
    <div className="App">
      <ClassComponent name="mark" age={12}>
        children
      </ClassComponent>
      <ClassComponent name="mark" age={12} />
      <ClassComponent />
      <FunctionalComponent name="mark" age={12}>
        children
      </FunctionalComponent>
      <FunctionalComponent name="mark" age={12} />
      <FunctionalComponent />{' '}
    </div>
  );
}

export default App;
