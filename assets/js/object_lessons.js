"use strict";

// let phone = {
//   brand: "Nokia",
//   model: "3310 Max",
//   price: 9999.99,
//   color: "black",
//   isOns: true,
//   call: function () {
//     prompt("Write a phone number:");
//     alert("Your phone is calling!");
//   },
//   printPhoneData: function () {
//     console.log(
//       "Телефон " +
//         this.brand +
//         " " +
//         this.model +
//         " коштує " +
//         this.price +
//         " гривень"
//     );
//   },
// };

// phone.printPhoneData();

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
  test: 10,
};

const newTestObj2 = {
  notTest: 20,
};

const newTestObj3 = {
  notTest: 20,
};
// Prototypes;

const newTestObj4 = newTestObj3;

// console.log(newTestObj1 === newTestObj2); // false
// console.log(newTestObj2 === newTestObj3); // false
// console.log(newTestObj2 === newTestObj2); // true
// console.log(newTestObj3 === newTestObj4); // true

// Prototypes

// const video = {
//   id: 0,
//   title: "My first video",
//   description: "bla bla bla",
//   views: 15000,
//   likes: 150,
//   dislikes: 3,
//   isPrivate: false,
//   comments: [
//     {
//       id: 0,
//       text: "Best video ever",
//     },
//   ],
//   addView: function () {
//     return ++this.views;
//   },
// };

// let videoId = 0;

// function Video(title, decription, isPrivate) {
//   this.id = videoId++;
//   this.title = title;
//   this.decription = decription;
//   this.views = 0;
//   this.likes = 0;
//   this.dislikes = 0;
//   this.isPrivate = isPrivate;
//   this.comments = [];

//   this.addView = function () {
//     return ++this.views;
//   };
// }

// // неоптимальний підхід для прототипів
// // testVideo1.__proto__ = videoPrototype;

// //
// Video.prototype = videoPrototype;

// const video2 = new Video("Video title", "...", false);
// const video3 = new Video("Video tutle2", "...", false);
// console.log("=============== PROTOTYPES ===============");

// // console.log(video2.addView === video3.addView);

// const arr1 = [1];
// const arr2 = [2];

// // console.log(arr1.push === arr2.push);

// const videoPrototype = {
//   test: function () {
//     console.log("this method written in videoPrototype");
//   },
// };

// const testVideo1 = {};

// const testVideo2 = {};

// testVideo1.__proto__ = videoPrototype;
// testVideo2.__proto__ = videoPrototype;

// const cat = {
//   name: "Bart",
//   isSleep: false,
// };

// const dog = {
//   name: "Tuzik",
//   isSleep: false,
// };

// const animalPrototype = {
//   isSleepPrototype: function () {
//     this.isSleep = !this.isSleep;
//     console.log(this.name + " sleeping now ...");
//     return this.isSleep;
//   },
// };

// dog.__proto__ = animalPrototype;

function Car(name, maxSpeed, color) {
  this.name = name;
  this.speed = 0;
  this.maxSpeed = maxSpeed;
  this.color = color;
}

const carPrototype = {
  Gas: function () {
    if (this.speed + 5 >= this.maxSpeed) return (this.speed = this.maxSpeed);
    return (this.speed += 5);
  },
  Brake: function () {
    if (this.speed - 5 <= 0) return (this.speed = 0);
    return (this.speed -= 5);
  },
  Stop: function () {
    return (this.speed = 0);
  },
};

Car.prototype = carPrototype;

const car1 = new Car("Bag", 21, "blue");
