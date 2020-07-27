import React from "react";
import root from "react-shadow";

//스타일을 먹인 컴포넌트를 쓴다.
// 엘리먼트 방식 : styled('button')
// 컴포넌트 방식 : styled(컴포넌트)
// const StyledButton = styled.button`
//   background: transparent;
//   border-radius: ${(props) => props.radius || 3}px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0 1em;
//   padding: 0.25em 1em;
//   cursor: pointer;
//   ${(props) =>
//     props.primary &&
//     css`
//       background: blue;
//       color: white;
//     `}

//   &:hover {
//     border: 2px solid red;
//   }
//   &::before {
//     content: "@";
//   }
// `;

export default function Button(props) {
  return (
    <>
      <root.div className="Hello">
        <button>버튼</button>
      </root.div>
      <button>버튼</button>
    </>
  );
}
