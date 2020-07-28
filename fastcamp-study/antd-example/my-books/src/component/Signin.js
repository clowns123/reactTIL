import React from 'react';
import Axios from 'axios';
import { message } from 'antd';
import withAuth from './withAuth';

class Signin extends React.Component {
  state = {
    email: '',
  };

  change = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  passwordRef = React.createRef(); // 한번 만들어지면 그대로

  render() {
    // const token = sessionStorage.getItem('token');
    // console.log(token);
    // if (token !== null) {
    //   return <Redirect to="/" />;
    // }

    const click = async () => {
      //   console.log('로그인', this.state.email, this.passwordRef.current.value);
      // 이메일과 패스워드를 뽑아서 서버에 보낸다. POST
      // REST API
      // 무언가를 생성할 때 POST
      // 무언가를 조회할 때 GET
      // 무언가를 수정할 때 PATCH
      // 무언가를 삭제할 때 DELETE

      // 서버에 허가된 유저인지 체크하고 인증 토큰을 받아오는 행위

      // 유저 테이블
      // 유저아이디, 유저이메일, 유저패스워드(암호화), 유저생성일...

      // 세션 테이블
      // 세션아이디, 세션토큰, 세션생성일...

      // 인증 토큰을 브라우저 어딘가에 저장하고

      // 다른 정보를 얻어올때, 나 인증한 유저라 라고 토큰을 함께 보낸다.

      // 즉 로그인은 생성 POST로 세션을 생성한다.
      // https://api.marktube.tv/v1/me POST{email password}
      const email = this.state.email;
      const password = this.passwordRef.current.value;
      if (email === '' || password === '') return;

      try {
        const res = await Axios.post('https://api.marktube.tv/v1/me', {
          // 1. 토큰 저장
          // 2. 홈으로 이동
          email,
          password,
        });
        // 1. 토큰 저장
        const token = res.data.token;
        console.log(res, token);
        sessionStorage.setItem('token', token);

        // 2. 홈으로 이동
        this.props.history.push('/');
      } catch (err) {
        const errCode = err.response.data.error;
        if (errCode === 'PASSWORD_NOT_MATCH') {
          message.error('패스워드 틀림');
        } else if (errCode === 'USER_NOT_EXIST') {
          message.error('유저 틀림');
        } else {
          message.error('모른다 오류');
        }
      }
      // .then((res) => console.log(res))
      // .catch((err) => {
      //   console.log(err);
      // });
    };

    return (
      <div>
        <h1>로그인</h1>
        <p>
          <input type="text" value={this.state.email} onChange={this.change} />
        </p>
        <p>
          <input type="password" ref={this.passwordRef} />
        </p>
        <p>
          <button onClick={click}>로그인</button>
        </p>
      </div>
    );
  }
}

// function Signin(props) {
//   const click = () => console.log('로그인');
//   return (
//     <div>
//       <h1>로그인</h1>
//       <p>
//         <input type="text" />
//       </p>

//       <p>
//         <input type="password" />
//       </p>
//       <p>
//         <button onClick={click}>로그인</button>
//       </p>
//     </div>
//   );
// }

export default withAuth(Signin, false);
