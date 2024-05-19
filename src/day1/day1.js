import React from 'react';

// let & const keywords
var a = 1;
let b = 2;
b = 'string';
const c = [];
c.push('a');

// data types
// Number, String, Boolean => let
// Object, Array, Function => const

// functions
function myFunction(myCallbackFunction) {
  return myCallbackFunction;
}
const myFunction1 = function () {};
const myFunction2 = (a, b) => {
  return a + b;
};

myFunction(myFunction1);

// Object, Array
const myObject = {
  key: 'value',
  key2: 'value2',
};
const myArray = ['a', 'b', 'c'];

// Array methods
// myArray.length
// myArray.push()
// myArray.slice(start, end)
// myArray.map()

// Modules
export const myObject1 = {};
export { myObject, myArray };
//export default myFunction;

// Asynchronous
setTimeout(() => {
  console.log(1);
}, 1000);
console.log(2);
// => Callback, Promise, Async / Await

// Promises
const isSuccess = true;
const myPromise = new Promise((resolve, reject) => {
  if (isSuccess) {
    resolve();
  } else {
    reject();
  }
});

myPromise.then((result) => result.slice(5)).catch((error) => error.message);

// Aync / Await

// React is a JS library
// JSX (Javascript XML)

// Component
const Day1 = () => {
  const name = 'name';

  return (
    <div>
      <img src='' alt='' className='icon-mic' />
      <img src='' alt='' className='avatar' />
      <p>{name}</p>
    </div>
  );
};

export default Day1;

// Component Lifecycle
// Initialization
// Mounting
// Updation
// Unmounting