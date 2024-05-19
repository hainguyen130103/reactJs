import { useState } from 'react';
import Day1, { myObject1, myObject, myArray } from './day1/day1';
import myFunction from './day1/day1';
import Day2 from './day2/Day2';

function App() {
  const handleClick = () => {
    console.log('Da click vao component Day2');
  };

  return (
    <>
      {/* <Day1 /> */}
      <Day2 title='Nguyen Thanh Hai' test='123' onClick={handleClick} />
    </>
  );
}

export default App;