import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = (name) => setMessage(`입장합니다. ${name}님`);
  const onClickLeave = () => setMessage('퇴장합니다.');
  return (
    <div>
      <button type="button" onClick={onClickEnter}>
        입장
      </button>
      <button type="button" onClick={onClickLeave}>
        퇴장
      </button>
      <h1>{message}</h1>
    </div>
  );
};

export default Say;
