/* eslint-disable  */
import produce from 'immer';

const state = {
  posts: [
    {
      id: 1,
      title: '제목입니다.',
      body: '내용입니다.',
      comments: [{ id: 1, text: '재미있다.' }],
    },
    {
      id: 2,
      title: '제목입니다.2',
      body: '내용입니다.2',
      comments: [{ id: 2, text: '재미있다.2' }],
    },
  ],
  selectedId: 1,
};
const nextState = produce(state, (draft) => {
  const post = draft.posts.find((post) => post.id === 1);
  post.comments.push({
    id: 3,
    text: '정말쉽다',
  });
});

console.log(produce);
