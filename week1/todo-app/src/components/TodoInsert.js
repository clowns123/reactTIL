import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = () => {
  const [value, setValue] = useState('');
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <from className="TodoInsert">
      <input placeholder="할 일을 적으세요" value={value} onChange={onChange} />
      <button type="submit">
        <MdAdd />
      </button>
    </from>
  );
};

export default TodoInsert;
