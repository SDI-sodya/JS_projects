function isItNumber(num) {
    if (num !== num || typeof num !== "number") {return false;} else {return true;} 
}

const numArrSum = function(num1,num2) {
    if (isItNumber(num1) !== true || isItNumber(num2) !== true) {alert(null);return null;}
    let result = 0;
    for (let i = num1; i <= num2; i++) {
        result+=i;
    }
    alert(result);
    return result;
};

const task2Check = function() {  
    let result = 6, answer = 0, i=5;
    while( i > 0 ) {
        switch (i) {
            case 1: {alert("У вас залишилася "+i+" спроба");break;}
            case 2,3,4: {alert("У вас залишилося "+i+" спроби");break;}
            case 5: {alert("У вас залишилося "+i+" спроб");break;}
            default: {alert("У вас залишилося "+i+" спроб");break;}
        }
        i--;
        answer = +prompt("Порахуй скільки буде (2 + 2 * 2)");
        if (answer === result && i == 5) {
            alert("Вау! Вирішив з першого разу! Молодець!");break;
        } else if (i <= 0) {
            alert("Ти не зміг вирішити. Відповідь: "+result);break;
        } else if (answer !== result) {
            alert("Невірно. Спробуй ще раз!");
        } else {
            alert("Все вірно! Ти молодець!");break;
        };
    };
}

const pow = function(num,powNum) {
    if (isItNumber(num) !== true || isItNumber(powNum) !== true) {alert(null);return null;};
    
    if (powNum > 0) { for (let i = 1; i < powNum; i++) {num*=num;}; }
    else if (powNum < 0) { for (let i = 1; i < -(powNum); i++) {num*=num;};num = 1/num; }
    else if (powNum == 0) { num=1; };
    return num;
}

const fact = function(num) {
    if (isItNumber(num) !== true) {alert(null);return null;};
    if (num < 0) {
        return null;
    }
    else if (num === 0) {
        return 1;
    }
    let result = 1;
    for (let i = 1; i <= num; i++) { result*=i; };
    return result;
}

const simpComplNum = function(num) {
    if (isItNumber(num) !== true) {alert(null);return null;};
    if (num < 0 || num === 0) { return null; }
    for (let i = 2; i <= 10; i++) {
        if (num % i === 0 && num % num === 0) return false;
    };
    return true;
}






// 1 task
let num1 = 1, num2 = 100, result;
result = numArrSum(num1,num2);


// 2 task
let answerTask2 = task2Check();


// 3 task
num1 = +prompt("Введіть число, яке хоче піднести до степеня");
num2 = +prompt("Введіть ступінь числа");
alert(pow(num1,num2));

// bonus task 1
num1 = +prompt("Введіть число. Ми переробимо його на факторіал");
alert(fact(num1));

// bonus task 2
num1 = +prompt("Введіть число");
alert(simpComplNum(num1));