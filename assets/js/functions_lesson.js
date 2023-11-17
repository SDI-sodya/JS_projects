// alert;
// console.log();

// let userName = prompt("Введіть своє ім'я");
// alert('Привіт, ' + userName);

// let num1 = +prompt('Введіть число:'),
// num2 = +prompt('Введіть число:');

const funcSumTwoNums = function(num1 = 1, num2 = 1) {
    if (num1 !== num1 || typeof num1 !== 'number') {
        return null;
    }
    else if (num2 !== num2 || typeof num2 !== 'number') {
        return null;
    }
    return result = num1 + num2;
};

// let res = funcSumTwoNums(num1, num2);
// alert(res);

let test1 = '3dfd';
console.log(test1);

if (true) {
    let test1 = 645478;

    console.log(test1);
}

console.log(test1);


alert(test1 == '3dfd' ? 'OK!' : 'No(');
(100 > 10) ? 'Yes' : 'No';

// switch .. case

/* 
    1 - класична
    2 - пепперонні
    3 - американо
    4 - 4 сира
*/

let itemNumber = +prompt('Яку піцу ви зочете замовити?');

switch (itemNumber) {
    case 1: {
        alert('Ви замовили класичну піцу');
        break;
    }
    case 2: {
        alert('Ви замовили пепперонні піцу');
        break;
    }
    case 3: {
        alert('Ви замовили американо піцу');
        break;
    }
    case 4:{
        alert('Ви замовили 4 сира піцу');
        break;
    }
    default:{
        alert('Немає такого коду піци');
        break;
    }
}