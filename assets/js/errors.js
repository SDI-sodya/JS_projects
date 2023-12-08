// "use strict";

// // console.log("Thing 1");

// const myFirstError = new Error("You did bad thing");

// // throw 1;
// // throw myFirstError;
// // throw new Error("Bad stuff");

// // console.log("Thing 2");

// myFirstError.sectet = "some secred data";

// const getSumOfTwoNumbers = function (num1, num2) {
//   if (num1 !== num1 || typeof num1 !== "number") {
//     throw new TypeError("num1 must be number");
//   } else if (num2 !== num2 || typeof num2 !== "number") {
//     throw new TypeError("num2 must be number");
//   }
//   return num1 + num2;
// };

// try {
//   console.log("Thing 1");

//   const res1 = getSumOfTwoNumbers(5, "5");

//   console.log("Thing 2");
// } catch (error) {
//   // блок обробки помилок
//   console.log("catch");
//   console.log(error);
//   console.log();
// } finally {
//   console.log("finally");
// }

// console.log("after all");

// // Math(random) - рандомне значення від 0 до 1
// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }

// let x = +prompt("Введіть, будь ласка, число X"),
//   y = +prompt("Введіть, будь ласка, число Y");

// console.log(`${x} + ${y} = ${x + y}`);
// console.log(`${x} - ${y} = ${x - y}`);
// console.log(`${x} / ${y} = ${x / y}`);
// console.log(`${x} * ${y} = ${x * y}`);

// console.log(x + " + " + y + " = " + (x + y));
// console.log(x + " * " + y + " = " + x * y);

// const testStr = "Test string Lorem Ipsum";

// // console.log(testStr);

// const letter1 = testStr.charAt(3);
// const letter2 = testStr[3];
// const letterUnicode = testStr.charCodeAt(3);

// // testStr[2] = "x";

// // console.log(testStr);

// const newStr = testStr.concat("string 1", "srtring 2");

// const isLoremHere = testStr.includes("Lorem");
// const isOremHere = testStr.includes("Orem");

// const loremStartingIndex = testStr.indexOf("Lorem");
// const oremStartingIndex = testStr.indexOf("Orem");

// const testStr2 = testStr.slice(0, 4);
// const testStr3 = testStr.slice(-5);

// let testStr4 = "User       Last name";

// const trimmedStr = testStr4.trim();

// const upperCaseStr = testStr.toUpperCase();
// const lowerCaseStr = testStr.toLowerCase();

// const noLorem = testStr.replace("Lorem", "some other text");

// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }

// const testStr = "Test string Lorem Ipsum";

// function toRandomCase(str = "") {
//   let resultStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (Math.round(Math.random()) === 1) {
//       resultStr += str[i].toUpperCase();
//       continue;
//     }
//     resultStr += str[i].toLowerCase();
//   }
//   console.log(resultStr);
// }

// toRandomCase(testStr);

// function toRandomCase2(str) {
//   const lettersArr = str.split("");

//   const newLettersArr = lettersArr.map(function (letter) {
//     if (Math.round(Math.random()) === 1) {
//       return letter.toUpperCase();
//     } else {
//       return letter.toLowerCase();
//     }
//   });
//   const resultStr = newLettersArr.join("");
//   console.log(resultStr);
// }

// function toRandomCase2(str) {
//   let lettersArr = str.split("");

//   lettersArr = lettersArr.map(function (letter) {
//     Math.round(Math.random()) === 1
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
//   });
//   lettersArr = lettersArr.join("");
//   console.log(lettersArr);
// }

// toRandomCase2(testStr);

// testStr
// slice

const testStr = "teSt sTRIng Lorem ipSUum";

function capitalizeStr(str) {
  let lettersArr = str.split("");
  for (let i = 0; i < lettersArr.length; i++)
    if (lettersArr[i] === " ")
      lettersArr[i + 1] = lettersArr[i + 1].toUpperCase();

  let newLettersArr = lettersArr.join("");
  console.log(newLettersArr);
}

capitalizeStr(testStr);

function howManyVowelsStr(str) {
  let lettersArr = str.split("");
  let arrEngLetters = [
    {
      letterUpper: "A",
      letterlower: "a",
      count: 0,
    },
    {
      letterUpper: "A",
      letterlower: "a",
      count: 0,
    },
    {
      letterUpper: "A",
      letterlower: "a",
      count: 0,
    },
    {
      letterUpper: "A",
      letterlower: "a",
      count: 0,
    },
    {
      letterUpper: "A",
      letterlower: "a",
      count: 0,
    },
  ];
}

// VowelsStr(str) {
//   let lettersArr = str.split("");
//   let arrEngLetters = [
//     {
//       letterUpper: 'A',
//       letterlower: 'a',
//       count: 0 },
//     {
//       letterUpper: 'A',
//       letterlower: 'a',
//       count: 0 },
//     {
//       letterUpper: 'A',
//       letterlower: 'a',
//       count: 0 },
//     {
//       letterUpper: 'A',
//       letterlower: 'a',
//       count: 0 },
//     {
//       letterUpper: 'A',
//       letterlower: 'a',
//       count: 0 }];
// }
