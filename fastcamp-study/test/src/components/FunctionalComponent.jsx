import React from 'react';

function FunctionalComponent({name = "kim", age = 0, children = "nomam"}) {
    return (
        <div>
            <h1>나는 클래스컴포넌트야</h1>
            {name !== undefined && <h3>나는 {name}</h3>}
            {age !== undefined && <h3>나는 {age}</h3>}
            {children !== undefined && <h3>나는 자식이 있어</h3>}
        </div>
    );
}


export default FunctionalComponent;

// const FunctionalComponent = ({name, age, children}) => (
//     <div>
//         <h1>나는 클래스컴포넌트야</h1>
//         {name && <h3>나는 {name}</h3>}
//         {age && <h3>나는 {age}</h3>}
//         {children && <h3>나는 자식이 있어</h3>}
//     </div>
// );
// export default FunctionalComponent