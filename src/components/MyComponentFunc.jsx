import React, { useState, useRef } from 'react';
import './MyComponent.css';

//Function 형태의 컴포넌트
const MyComponentFunc = ({ name, children }) => {
    //useState() Hook 사용
    const [value, setValue] = useState(0);
    const [inputs, setInputs] = useState({
        username: '',
        message: ''
    });

    const [valid, setValid] = useState(false);    
    //비구조화 할당
    const { username, message } = inputs;
    const myUsername = useRef(null);

    //Event Handler 함수 ( ... 펼침연산자 )
    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    } //handleChange

    const handleEnter = (e) => {

    } //handleEnter

    return (
        <div>
            <h2>함수 형태의 컴포넌트</h2>
            <h3>Hello!! {name}</h3>
            {children}
            <p>상태변수 value = {value}</p>
            <button onClick={() => setValue(value + 1)}>증가</button>
            <button onClick={() => setValue(value - 1)}>감소</button>
            <br />
            <p>상태변수 message = {message}</p>
            <input name="message" value={message} onChange={handleChange} />
            <p>상태변수 username = {username}</p>
            <input name="username" value={username} onChange={handleChange}
                className={valid ? 'success':'failure'}
             />

        </div>
    );
};

export default MyComponentFunc;