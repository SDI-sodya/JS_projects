// alert;
// console.log();

// let userName = prompt("Введіть своє ім'я");
// alert('Привіт, ' + userName);

// let num1 = +prompt('Введіть число:'),
// num2 = +prompt('Введіть число:');

const funcSumTwoNums = function (num1 = 1, num2 = 1) {
  if (num1 !== num1 || typeof num1 !== "number") {
    return null;
  } else if (num2 !== num2 || typeof num2 !== "number") {
    return null;
  }
  return (result = num1 + num2);
};

// let res = funcSumTwoNums(num1, num2);
// alert(res);

let test1 = "3dfd";
console.log(test1);

if (true) {
  let test1 = 645478;

  console.log(test1);
}

console.log(test1);

// alert(test1 == "3dfd" ? "OK!" : "No(");
100 > 10 ? "Yes" : "No";

// switch .. case

/* 
    1 - класична
    2 - пепперонні
    3 - американо
    4 - 4 сира
*/

// let itemNumber = +prompt("Яку піцу ви зочете замовити?");

// switch (itemNumber) {
//   case 1: {
//     alert("Ви замовили класичну піцу");
//     break;
//   }
//   case 2: {
//     alert("Ви замовили пепперонні піцу");
//     break;
//   }
//   case 3: {
//     alert("Ви замовили американо піцу");
//     break;
//   }
//   case 4: {
//     alert("Ви замовили 4 сира піцу");
//     break;
//   }
//   default: {
//     alert("Немає такого коду піци");
//     break;
//   }
// }

//
//

// myFirstFunction(5,2); ERROR

// function expression - параметрична функція
// параметр функції - спеціальна змінна, достпуна тільки всередині функції
const myFirstFunction = function (testValue, testValue2) {
  return testValue + testValue2;
};

sum2(5, 5);

// functional declaration - об'ява функції
function sum2(num1, num2) {
  // debugger;
  return num1 + num2;
}

// чисты функція - clear func
function multiply(num1, num2) {
  return num1 * num2;
}

function square(num) {
  return multiply(num, num);
}

// детерменовані функції - determined func
// функція, яка повертає одне й те саме значення з одним і тим самим результатом

// функції з побічним ефектом
function sum(num1, num2) {
  let result = num1 + num2;
  console.log(result);
  return result;
}

// let result;
// function sum2(num1, num2) {
//   result = num1 + num2;
//   return result;
// }

// функції вищого порядку HOF (High Order Function)
// фкнція, що приймає як аргумент інші функції фбо повертає іншу функцію як результат
// 1
function hof1(func1) {
  if (Math.random() > 0.5) {
    func1();
  }
}
// 2
function hof2() {
  const func2 = function () {
    console.log("boo");
  };

  return func2;
}

// функції стрілки
const nonArrowSum = function (num1 = 2, num2 = 2) {
  return num1 + num2;
};

const arrow = () => {
  return num1 + num2;
};

const arrowSum2 = (num1 = 2, num2 = 2) => num1 + num2;

const rozetkaShop = {
  name: "Rozetka",
  products: [
    { name: "prod 1", price: 5000, quantity: 0 },
    { name: "prod 2", price: 1000, quantity: 1 },
    { name: "prod 3", price: 200, quantity: 2 },
    { name: "prod 4", price: 21200, quantity: 105 },
    { name: "prod 5", price: 67800, quantity: 11221 },
  ],
  displayAllProducts: function () {
    let that = this;
    this.products.forEach(function (products) {
      console.log(that);
      console.log(
        `Shop ${that.name} has product ${product.name} with price ${proiduct.price} and quantity ${products.quantity}`
      );
    });
  },
  displayAllProductsV2: function () {
    function displayProduct(product) {
      console.log(that);
      console.log(
        `Shop ${that.name} has product ${product.name} with price ${proiduct.price} and quantity ${products.quantity}`
      );
    }

    const bindedCorrectThisFunc = displayProduct.bind(this);

    this.products.forEach(bindedCorrectThisFunc);
  },

  displayAllProductsV3: function () {
    // const callback = (products) => {
    //   console.log(this);
    //   console.log(
    //     `Shop ${that.name} has product ${product.name} with price ${proiduct.price} and quantity ${products.quantity}`
    //   );
    // };

    // this.products.forEach(callback);

    this.products.forEach((products) => {
      console.log(this);
      console.log(
        `Shop ${that.name} has product ${product.name} with price ${proiduct.price} and quantity ${products.quantity}`
      );
    });

    this.products.forEach(callback);
  },
};

// не може бути конструктором, так як не має свого контексту, тобто не має свого this
const functionFunc = () => {
  const test = new arrowFunc();
};

// у стрілок не має аргументів arguments. контекстс === this
const hasArguments = function () {
  console.log(arguments);
};

const doesntHaveArguments = () => {
  console.log(arguments);
};

// function sumOfAnyNumbers(num1, num2, ...restNumbers) {
//   let result = num1 + num2;
//   for (let i = 0; i < restNumbers.length; i++) {
//     result += restNumbers[i];
//   }
//   return result;
// }

// rest
// залишковий параметр
const sumOfAnyNumbers = (num1, num2, ...restNumbers) => {
  let result;
  for (let i = 0; i < restNumbers.length; i++) {
    result += restNumbers[i];
  }
  return result;
};

const numbers = [50, 15, 978, 6546, 879, 645];

// nothing
// const res1 = sumOfAnyNumbers(numbers);

// so long
// const res1 = sumOfAnyNumbers(numbers[0],numbers[1],..)

// spread - оператор (оператор розширення)
const res1 = sumOfAnyNumbers(...numbers);

// ==============================================

function testFunc() {
  console.log("func");
  logData("secret message");
  // testFunc();
}

function logData(data) {
  console.log(data);
}

function countdown(number) {
  console.log(number);

  if (number > 1) {
    countdown(number - 1);
  }
  // reutrn undefined
}

/*
5
4
3
2
1
*/

const logRange = (min, max) => {
  if (min > max) {
    throw new RangeError("Min must not bebigger than max");
  }

  console.log(min);
  if (min < max) {
    logRange(min + 1, max);
  }
};

const tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
    },
    right: {
      value: 5,
      left: {
        value: 7,
      },
      right: {
        value: 8,
      },
    },
  },
  right: {
    value: 3,
    right: {
      value: 6,
      right: {
        value: 9,
      },
    },
  },
};

function reduceTree(treeObj) {
  let total = treeObj.value;

  if (treeObj.left) {
    total += reduceTree(treeObj.left);
  }
  if (treeObj.right) {
    total += reduceTree(treeObj.right);
  }

  return total;
}

function toPower(number, power) {
  // debugger;
  if (power === 0) return 1;
  let result = number;
  if (power > 1) {
    result *= toPower(number, power - 1);
  } else if (power < 0) {
    result *= toPower(number, power + 1);
  }
  return result;
}

function toPower2(number, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp === 1) {
    return number;
  }
  if (exp > 1) {
    return number * toPower2(number, exp - 1);
  }
  if (exp < 0) {
    return (1 / number) * toPower(number, Math.abs(exp) - 1);
  }
}
