let value = "test value";

function test1() {
  console.log(`Value in test1: ${value}`);
}

function test2() {
  let value = 500;

  console.log(`Value in test2: ${value}`);
}

function wrapper() {
  let value = null;
  console.log(`Value in wrapper: ${value}`);

  function test3() {
    debugger;
    console.log(`Value in test3: ${value}`);
  }

  test3();
}

// BAD EXAMPLE
// let i = 0;
// function counter() {
//   i++;
//   return i;
// }

// let i = 0;
// function createCounter() {
//   let i = 0;
//   const increment = function () {
//     return ++i;
//   };

//   return increment;
// }

// лічильники будуть різні
// const counter1 = createCounter();
// const counter2 = createCounter();

function createCounter() {
  let i = 0;
  const increment = function () {
    return ++i;
  };
  const decrement = function () {
    return --i;
  };
  return {
    increment,
    decrement,
  };
}

// function createMultiplier(x) {
//   let total = x;
//   function multiply(y) {
//     return (total *= y);
//   }
//   return multiply;
// }

// function createMultiplier(x) {
//   return (y) => (x *= y);
// }

const createMultiplier = (x) => (y) => (x *= y);

const otherMultiplier = createCounter(2);
