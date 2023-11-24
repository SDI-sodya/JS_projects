// x5000
// const firstVipUser = 'bestuser1234@gmail.com';
// const secondVipUser = 'dfgsertvdxfv@outlook.com';
// const thirdVipUser = 'opiweuropi@gmail.com';

// const vipEmails = {
//     0: 'bestuser1234@gmail.com',
//     1: 'dfgsertvdxfv@outlook.com',
//     2: 'opiweuropi@gmail.com'
// }

// console.log(vipEmails[1]);

// масив - це різновид об'єкту
// через конструктор
// const vipEmails = new Array('bestuser1234@gmail.com', 'dfgsertvdxfv@outlook.com', 'opiweuropi@gmail.com');

// // літеральне створення массиву
// const vipEmails = ['bestuser1234@gmail.com', 'dfgsertvdxfv@outlook.com', 'opiweuropi@gmail.com'];

// // console.log(typeof vipEmails); // object

// console.log(vipEmails);

// // vipEmails[4000] = 'almostlastmail@mail.com';
// // console.log(vipEmails);

// const arr1 = [];

// // додавання елементу в кінець массиву
// arr1.push(100);

// arr1.push(null);

// arr1.push('test', false, {});

// // practic 1
// const arr2 = [];
// arr2.push('first test');
// arr2.push('my', 'world', 'is', 'here');

// // видалення останнього елементу з масива
// arr2.pop();
// let deleteValue = arr2.pop();
// console.log(arr2);
// console.log(deleteValue);
// console.log(arr2);

// // додавання елементів на початок масива
// arr2.unshift('add1', 'add2');
// console.log(arr2);
// deleteValue = arr2.shift();
// console.log(deleteValue);

// // початковий індекс, з якого відбувається зміна
// arr2.splice();
// console.log(arr2);

// arr2.splice(2, 1);
// // з третього сзначення всі елементи будуть додаватися з певного індексу
// arr2.splice(1,0,'test','original');
// console.log(arr2);

// // копія всього масиву
// let copy1 = arr2.slice();
// console.log(copy1);
// // копіювати починаючи з вказаного індексу
// let copy2 = arr2.slice(2);
// let copy3 = arr2.slice(-2);
// console.log(copy2);
// console.log(copy3);

// // параметр вказує ДО якого індексу скопіювати
// const copy4 = arr1.slice(2,4);
// const copy5 = arr1.slice(2,-2);
// console.log(copy4);
// console.log(copy5);

// // console.log(copy1 === arr2);
// const arr3 = ['first', 224, 908, 6774, 'second', 'third','fourth','fifth','sixth', 'seventh', 234, null, 123, 'test'];
// console.log(arr3);

// arr3.splice(-5);
// console.log(arr3);

// arr3.splice(2,2);

// nov 24

// join
const names = [];
const namesString = names.join("\\__/");
// console.log(namesString);

// includes
const isAndriyInArray = names.includes("Andriy");

// reverse
const reversedArray = names.reverse(); // reversedArray === names -> true

// flat
const deepArray = [
  "first",
  "second",
  ["deep-1", "deep-2", "deep-3", "deep-4", ["deeper-1", ["deepest"]]],
  "fourth",
];

// deeper-1
// console.log(deepArray[2][3][0])

const flatted1 = deepArray.flat(1);
// console.log(flatted1);

const arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// console.log(arr11.includes(10));

const arr12 = [1, 2, 3, [10, 20, 30, [100, [1000]]], 4];
const arr12New = arr12.flat(Infinity); // краще Infinity, тобто будь-яку кулькість він переведе до масиву нормального виду
// console.log(arr12New);

const arr13 = [1, 2, 3, 4];
const arr14 = [9, 8, 7, 6];
const arr15 = arr13.concat(10, arr14);
// console.log(arr15)

const users = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];
// for (let i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }

// const doSomething = function (whatToDo, item) {
//   whatToDo(item);
// };

// doSomething(alert, "Magic");

// // forEach
// function printUserCallback(user) {
//   console.log(user);
// }

// users.forEach(printUserCallback);

const num1 = [1, 2, 3, 4, 5];

// function powMath(num) {
//   console.log(Math.pow(num, 4));
// }
// num1.forEach(powMath);

// num1.forEach(function (number) {
//   console.log(Math.pow(number, 4));
// });

// map - повертає новий масив з результатами виклику коллбеків для кожного елементу початкового масиву

const newArray = num1.map(function (number) {
  return Math.pow(number, 4);
});

// filter - повертає новий масив, який складається з елементів які пройшли перевірку у колбек-функції
const betterUsers = ["Adriy", "Petro", "Natalka", "Olena", "Anton", "John"];

const noAntonsAllowed = betterUsers.filter(function callback(name) {
  return name !== "Anton";
});

// some - працює до першого true
const isAntonInArray = betterUsers.some(function (name) {
  return name === "Anton";
});

// every - працює до першого false
const isAntonInArray2 = betterUsers.every(function (name) {
  return name === "Anton";
});

// find - працбє до першого знайденого елемента з заданою умовою. виводить елемент
const firstAnton = betterUsers.find(function (name) {
  return name === "Anton";
});

// findIndex - працбє до першого знайденого елемента з заданою умовою. виводить індекс
const antonIndex1 = betterUsers.findIndex(function (name) {
  return name === "Anton";
});

// indexOf
const antonIndex3 = betterUsers.indexOf("Anton");
