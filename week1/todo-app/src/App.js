import React, { useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'test1', checked: true },
    { id: 2, text: 'test2', checked: true },
    { id: 3, text: 'test3', checked: false },
  ]);
  return (
    <div>
      <TodoTemplate>
        <TodoInsert />
        <TodoList todos={todos} />
      </TodoTemplate>
    </div>
  );
};

export default App;
