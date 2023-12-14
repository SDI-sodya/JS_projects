"use strict";

// task 1
function quantityOfStr(...number) {
	let k = 0;
	number.forEach((num) => (typeof num === "string" ? k++ : (k = k)));
	return k;
}

//task 2
function calc(sign = "+", ...number) {
	debugger;
	let result = 0;
	if (sign === "+") {
		number.forEach((num) => result + num);
	} else if (sign === "-") {
		number.forEach((num) => result - num);
	} else if (sign === "*") {
		number.forEach((num) => result * num);
	} else if (sign === "/") {
		number.forEach((num) => result / num);
	}
	return result;
}

const arrOfNum = [123, 34, 46, "string", "1", "2", 3, true, "234", "123"];

const arrOfNum1 = [1, 2, 3, 4, 5];

// task 1
console.log(quantityOfStr(...arrOfNum));
// task 2
console.log(calc("+", ...arrOfNum1));
