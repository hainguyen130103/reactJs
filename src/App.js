import { useState } from 'react';
// import MyComponent from './btday1/MyComponent';
// import Day1, { myObject1, myObject, myArray } from './day1/day1';
// import myFunction from './day1/day1';
import Bt2 from './btday2/Bt2';

function App() {
  const handleClick = () => {
    console.log('');
  };

  return (
    <>
      <Bt2 title='Nguyen Thanh Hai' test='123' onClick={handleClick} />
    </>
  );
}

export default App;