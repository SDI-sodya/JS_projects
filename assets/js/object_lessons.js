"use strict";


let phone = {
    brand: "Nokia",
    model: "3310 Max",
    price: 9999.99,
    color: "black",
    isOns: true,
    call: function() {
        prompt("Write a phone number:");
        alert("Your phone is calling!");
    },
    printPhoneData: function() {
        console.log("Телефон "+this.brand+" "+this.model+" коштує "+this.price+" гривень");
    }
}

phone.printPhoneData();


// функцыъ-конструктори - альтернативний спосіб створення об'єктів
// за потрібної нам структурою
// function Phone (brand, model, price, color, isOn, operator) { // краще писати її з великої літери
//     let newPhone = {
//         // brand: brand,
//         // model: model,
//         // price: price,
//         // color: color,
//         // isOn: isOn,
//         // operator: operator
//         brand,
//         model,
//         price,
//         color,
//         isOn,
//         operator
//     }
//     return newPhone;
// }




// function Phone (brand, model, price, color, isOn, operator) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//     this.color = color;
//     this.isOn = isOn;
//     this.operator = operator;
//     this.call = function() {
//         alert("Your phone is calling!");
//     }
//     this.printPhoneData = function() {
//         console.log("Телефон "+this.brand+" "+this.model+" коштує "+this.price+" гривень");
//     }
// }

// const phone5 = Phone("test", "Best model", 150, "rainbow", true, "Lifecell"); // має бути вже повноцінний об'єкт телефона




const newTestObj1 = {
    test: 10
};

const newTestObj2 = {
    notTest: 20
};

const newTestObj3 = {
    notTest: 20
};

const newTestObj4 = newTestObj3;

console.log(newTestObj1 === newTestObj2); // false
console.log(newTestObj2 === newTestObj3); // false
console.log(newTestObj2 === newTestObj2); // true
console.log(newTestObj3 === newTestObj4); // true


