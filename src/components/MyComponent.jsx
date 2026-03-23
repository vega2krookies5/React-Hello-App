import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Class 형태의 컴포넌트
class MyComponent extends Component {
    //컴포넌트 내부에 상태변수를 포함하는 state 객체선언
    state = {
        value: 0,
    };
    //메서드 오버라이딩
    render() {
        //Destructuring Assignment 적용해서 변수 선언
        const {name, age} = this.props;
        const {value} = this.state;
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
                <button>감소</button>
            </div>
        );
    }
}//class

MyComponent.defaultProps= {
    name: '기본이름',
    age: 100
};
MyComponent.propTypes= {
    //name props 타입을 문자열로설정함
    name: PropTypes.string,
    // age props 타입을 숫자타입으로 설정하고 필수 Props
    age: PropTypes.number.isRequired
}
export default MyComponent;