import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Class 형태의 컴포넌트
class MyComponent extends Component {

    //Event Handler함수를 Arrow함수가 아니라 기존함수로 선언했을 경우 bind(this)가 필요함
    // constructor(props) {
    //     super(props);
    //     this.handleDecrement = this.handleDecrement.bind(this);
    // }

    //컴포넌트 내부에 상태변수를 포함하는 state 객체선언
    state = {
        value: 0,
        message: '',
        username: ''
    };
    //Event Handler 함수선언
    //handleDecrement() {    
    handleDecrement = () => {
        this.setState({
            value: this.state.value - 1
        });
    }; //handleDecrement  

    handleChange(e) {
        this.setState({
            message: e.target.value
        });
    }
    //메서드 오버라이딩
    render() {
        //Destructuring Assignment 적용해서 변수 선언
        const { name, age } = this.props;
        const { value, message, username } = this.state;
        const { handleDecrement } = this;

        return (
            <div>
                <h2>클래스 형태의 컴포넌트</h2>
                <h3>Hello!! {name} / {age}</h3>
                <p>상태변수 value = {value}</p>
                <button onClick={() => (
                    this.setState({
                        value: value + 1
                    })
                )}>증가</button>
                <button onClick={handleDecrement}>감소</button>
                <br />
                <p>상태변수 message = {message}</p>
                <input value={message} onChange={ } />
                <p>상태변수 username = {username}</p>

            </div>
        );
    }
}//class

MyComponent.defaultProps = {
    name: '기본이름',
    age: 100
};
MyComponent.propTypes = {
    //name props 타입을 문자열로설정함
    name: PropTypes.string,
    // age props 타입을 숫자타입으로 설정하고 필수 Props
    age: PropTypes.number.isRequired
}
export default MyComponent;