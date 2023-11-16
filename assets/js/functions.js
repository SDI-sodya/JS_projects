// check number or not
function isItNumber(num) { if (num !== num || typeof num !== "number") {return false;}else {return true;} }

// check what number is smallest
const smallNum = function(num1=0, num2=0) {
    if (isItNumber(num1) !== true ||
    isItNumber(num2) !== true) {
        return null;
    };
    if (num1 > num2) {
        alert(num1);
        return num1;
    }
    else {
        alert(num2);
        return num2;
    }
};

const checkAdulthood = function(age=1) {
    if (isItNumber(age) !== true) {
        return null;
    }
    if (age < 18) {
        alert('Ти ще маленький! Вийди звідси!');
        return false;
    }
    else {
        alert('Ти повнолітній. Заходь!');
        return true;
    }
};

const calculator = function(num1=0, num2=0, operator="+") {
    if (isItNumber(num1) !== true ||
    isItNumber(num2) !== true) {
        return null;
    }
    let result;
    if (operator == "+") {
        result=num1+num2;
        alert(result);
        return result;
    }
    else if (operator == "-") {
        result=num1-num2;
        alert(result);
        return result;
    }
    else if (operator == "/") {
        result=num1/num2;
        alert(result);
        return result;
    }
    else if (operator == "*") {
        result=num1*num2;
        alert(result);
        return result;
    }
};


// 1 task
let num1 = +prompt("Enter first number"),
    num2 = +prompt("Enter second number");
console.log(smallNum(num1,num2));

// 2 task
let age = +prompt("How old are you?");
console.log(checkAdulthood(age));

// 3 task
num1 = +prompt("Enter first number"),
num2 = +prompt("Enter second number");
let operator = prompt("Enter operator");
console.log(calculator(num1,num2,operator));