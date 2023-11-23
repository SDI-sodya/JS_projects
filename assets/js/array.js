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
const vipEmails = new Array('bestuser1234@gmail.com', 'dfgsertvdxfv@outlook.com', 'opiweuropi@gmail.com');

console.log(typeof vipEmails);

console.log(vipEmails);

vipEmails[4000] = 'almostlastmail@mail.com';
console.log(vipEmails);

