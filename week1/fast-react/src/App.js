/* eslint-disable  */
import React, { useRef, useMemo, useCallback, useReducer } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter((user) => user.active).length;
}

const initialState = {
  input: {
    username: '',
    email: '',
  },
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmnail.com',
      active: true,
    },
    {
      id: 2,
      username: 'clown',
      email: 'clowns1232123@gmail.com ',
      active: false,
    },
    {
      id: 3,
      username: 'ghkdxogus',
      email: 'ghkdxogus71@naver.com',
      active: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        input: {
          ...state.inputm,
          [action.name]: action.value,
        },
      };
    case 'CREATE_USER':
      return {
        input: initialState.input,
        users: state.users.concat(action.user),
      };
    default:
      throw new Error('no action');
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const { username, email } = state.input;
  const nextId = useRef(4);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value,
    });
  }, []);

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    nextId.current += 1;
  }, [email, username]);
  return (
    <>
      <CreateUser
        onCreate={onCreate}
        onChange={onChange}
        username={username}
        email={email}
      />
      <UserList users={users} />
      <div>활성 사용자 수 : 0</div>
    </>
  );
}

export default App;
