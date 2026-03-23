import React from 'react';
import MyComponent from './components/MyComponent';
import MyComponentFunc from './components/MyComponentFunc';

const App = () => {
  return (
    <>
      <MyComponent  name="리액트" />
      {/* <MyComponent age={20} /> */}
      <hr/>
      <MyComponentFunc name="리액트함수형">
        <p>함수형 컴포넌트의 하위 엘리먼트</p>
      </MyComponentFunc>  
    </>
  );
};

export default App;