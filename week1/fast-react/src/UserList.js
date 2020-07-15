/* eslint-disable  */
import React, { useEffect, useReducer } from 'react';

const User = React.memo(function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;

  return (
    <div>
      <b
        style={{
          color: active ? 'green' : 'black',
          cursor: 'pointer',
        }}
        onClick={() => onToggle(id)}
      >
        {username}
      </b>{' '}
      <span>{email}</span>
      <button type="button" onClick={() => onRemove(id)}>
        삭제
      </button>
    </div>
  );
});

function UserList({ users, onRemove, onToggle }) {
  return (
    <>
      <div>
        {users.map((user) => (
          <User
            key={user.id}
            user={user}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))}
      </div>
    </>
  );
}

export default React.memo(
  UserList,
  (prevProps, nextProps) => prevProps.users === nextProps.users
);
