import React from "react";
import quertString from "query-string";

export default function About(props) {
    const query = quertString.parse(props.location.search);
    const { name } = query;
    // const searchParams = new URLSearchParams(props.location.search);
    // const name = searchParams.get("name");
    return (
        <>
            <div>About입니다.</div>
            {name && <p>name는 {name}입니다.</p>}
        </>
    );
}
