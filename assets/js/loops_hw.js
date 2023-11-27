function isItNumber(num) {
  return num === num && typeof num === "number";
}

const numArrSum = function (num1, num2) {
  if (!isItNumber(num1) || !isItNumber(num2)) return null;
  let result = 0,
    i = num1;
  // while(i <= num2) {
  //   result += i++;
  // }

  // do {
  //   result += i++;
  // } while (i <= num2);

  for (let i = num1; i <= num2; i++) {
    result += i;
  }
  return result;
};

// =========================

const task2Check = function () {
  let result = 6,
    answer = 0;
  // let i = 5;
  // do {
  //   switch (i) {
  //     case 1: {
  //       alert("У вас залишилася " + i + " спроба");
  //       break;
  //     }
  //     case (2, 3, 4): {
  //       alert("У вас залишилося " + i + " спроби");
  //       break;
  //     }
  //     case 5: {
  //       alert("У вас залишилося " + i + " спроб");
  //       break;
  //     }
  //     default: {
  //       alert("У вас залишилося " + i + " спроб");
  //     }
  //   }
  //   i--;
  //   answer = +prompt("Порахуй скільки буде (2 + 2 * 2)");
  //   if (answer === result && i === 5) {
  //     alert("Вау! Вирішив з першого разу! Молодець!");
  //     break;
  //   } else if (i <= 0) {
  //     alert("Ти не зміг вирішити. Відповідь: " + result);
  //     break;
  //   } else if (answer !== result) {
  //     alert("Невірно. Спробуй ще раз!");
  //   } else {
  //     alert("Все вірно! Ти молодець!");
  //     break;
  //   }
  // }while(i > 0)

  // for (let i = 1; i > 0;i--) {
  //   switch (i) {
  //     case 1: {
  //       alert("У вас залишилася " + i + " спроба");
  //       break;
  //     }
  //     case (2, 3, 4): {
  //       alert("У вас залишилося " + i + " спроби");
  //       break;
  //     }
  //     case 5: {
  //       alert("У вас залишилося " + i + " спроб");
  //       break;
  //     }
  //     default: {
  //       alert("У вас залишилося " + i + " спроб");
  //     }
  //   }
  //   answer = +prompt("Порахуй скільки буде (2 + 2 * 2)");
  //   if (answer === result && i === 5) {
  //     alert("Вау! Вирішив з першого разу! Молодець!");
  //     break;
  //   } else if (i <= 0) {
  //     alert("Ти не зміг вирішити. Відповідь: " + result);
  //     break;
  //   } else if (answer !== result) {
  //     alert("Невірно. Спробуй ще раз!");
  //   } else {
  //     alert("Все вірно! Ти молодець!");
  //   }
  //   i--;
  // }

  let i = 5;
  while (i > 0) {
    switch (i) {
      case 1: {
        alert("У вас залишилася " + i + " спроба");
        break;
      }
      case (2, 3, 4): {
        alert("У вас залишилося " + i + " спроби");
        break;
      }
      case 5: {
        alert("У вас залишилося " + i + " спроб");
        break;
      }
      default: {
        alert("У вас залишилося " + i + " спроб");
      }
    }
    answer = +prompt("Порахуй скільки буде (2 + 2 * 2)");
    if (answer === result && i === 5) {
      alert("Вау! Вирішив з першого разу! Молодець!");
      break;
    } else if (i <= 0) {
      alert("Ти не зміг вирішити. Відповідь: " + result);
      break;
    } else if (answer !== result) {
      alert("Невірно. Спробуй ще раз!");
    } else {
      alert("Все вірно! Ти молодець!");
      break;
    }
    i--;
  }
};

// =========================

const pow = function (num, powNum) {
  if (!isItNumber(num) || !isItNumber(powNum)) return null;

  if (powNum > 0) {
    for (let i = 1; i < powNum; i++) {
      num *= num;
    }
  } else if (powNum < 0) {
    for (let i = 1; i < -powNum; i++) {
      num *= num;
    }
    num = 1 / num;
  } else if (powNum === 0) {
    num = 1;
  }
  return num;
};

// =========================

const fact = function (num) {
  if (!isItNumber(num)) return null;
  if (num < 0) return null;
  if (num === 0 || num === 1) return 1;

  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};

// =========================

const simpComplNum = function (num) {
  if (!isItNumber(num)) return null;
  if (num <= 0) return null;

  for (let i = 2; i <= 7; i++) {
    if (i === num) break;
    if (num % i === 0) return false;
  }
  return true;
};

// 1 task
let num1 = 1,
  num2 = 100;
console.log(numArrSum(num1, num2));

// 2 task
task2Check();

// 3 task
num1 = +prompt("Введіть число, яке хоче піднести до степеня");
num2 = +prompt("Введіть ступінь числа");
console.log(pow(num1, num2));

// bonus task 1
num1 = +prompt("Введіть число. Ми переробимо його на факторіал");
console.log(fact(num1));

// bonus task 2
num1 = +prompt("Введіть число");
console.log(simpComplNum(num1));
