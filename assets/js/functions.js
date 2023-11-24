// check number or not
function isItNumber(num) {
  return num === num && typeof num === "number";
}

// check what number is smallest
const smallNum = function (num1, num2) {
  if (!isItNumber(num1) || !isItNumber(num2)) {
    return null;
  }
  if (num1 < num2) {
    return num1;
  }
  return num2;
};

const checkAdulthood = function (age) {
  if (!isItNumber(age)) {
    return null;
  }
  return !(age < 18);
};

const calculator = function (num1, num2, operator) {
  if (!isItNumber(num1) || !isItNumber(num2)) {
    return null;
  }
  switch (operator) {
    case "+": {
      return num1 + num2;
    }
    case "-": {
      return num1 - num2;
    }
    case "/": {
      return num1 / num2;
    }
    case "*": {
      return num1 * num2;
    }
    default: {
      alert("перезавантажте сторінку. Щось не так :'(");
    }
  }
  // if (operator === "+") {
  //     return num1 + num2;
  // }
  // else if (operator == "-") {
  //     return num1 - num2;
  // }
  // else if (operator == "/") {
  //     return num1 / num2;
  // }
  // else if (operator == "*") {
  //     return num1 * num2;
  // }
};

// 1 task
let num1 = +prompt("Enter first number"),
  num2 = +prompt("Enter second number");
console.log(smallNum(num1, num2));

// 2 task
let age = +prompt("How old are you?");
console.log(checkAdulthood(age));

// 3 task
(num1 = +prompt("Enter first number")), (num2 = +prompt("Enter second number"));
let operator = prompt("Enter operator");
console.log(calculator(num1, num2, operator));
