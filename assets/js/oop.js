class Post {}

class User {
	constructor(login, password, email) {
		this.login = login;
		this.password = password;
		this.email = email;
		this.isBanned = false;
	}

	createPost(text) {
		const newPost = new Post(text);
	}
	deletePost(post) {
		console.log("post deleted");
	}
}

const user1 = new User("user1234", "1234test", "user@gmail.com");

// class Moderator {
// 	constructor(login, password, email, permissions) {
// 		this.login = login;
// 		this.password = password;
// 		this.email = email;
// 		this.permissions = permissions;
// 	}

// 	createPost(text) {
// 		const newPost = new Post(text);
// 	}

// 	deletePost(post) {
// 		console.log("post deleted");
// 	}
// }

// Успадкування
class Moderator extends User {
	constructor(login, password, email, permissions) {
		super(login, password, email);
		this.permissions = permissions;
	}

	createSubForm(name) {
		console.log(`subforum ${name} created`);
	}
}

const moder1 = new Moderator("moder1", "12345moder", "moder@gmail.com", []);

class Admin extends Moderator {
	constructor(login, password, email, permissions) {
		super(login, password, email, permissions);
	}

	ban(user) {
		// return (user.isBanned = !user.isBanned);
		return (user.isBanned = true);
	}
}

const admin1 = new Admin("admin", "12345admin", "admin@gmail.com", []);

// Абстракція - виділення найважливішого
// class Product {
// 	constructor(name, price, quantity, weight, height, width) {
//   }
// }

class Fish {
	constructor(name, typeOfFood, isAlive = true) {
		this.name = name;
		this.typeOfFood = typeOfFood;
		this.isAlive = isAlive;
	}

	swim() {
		console.log(`Fish ${this.name} swimming. Bul-bul...`);
	}
}

const fish1 = new Fish("Guppy", "predator");

class Shark extends Fish {
	constructor(name, isAlive) {
		super(name, isAlive);
		this.typeOfFood = "predator";
	}

	hunt(fish) {
		if (this.isAlive === false) {
			throw new Error(`Sorry, but your shark is die`);
		}
		if (fish instanceof Fish) {
			if (Math.floor(Math.random() * 2) === 0) {
				return console.log(`Hunt is successfully!`);
			}
			this.isAlive = false;
			return console.log(`Sorry... You're fail`);
		}
		throw new Error("It's not a fish");
	}
}

const shark1 = new Shark("Billy");

// =========================================
// =========================================
// =========================================

class Animal {
	constructor(name, species) {
		this.name = name;
		this.species = species;
	}

	static nameNormal() {}

	move() {
		return `${this.name} is moving`;
	}

	speak() {
		return `*hush*`;
	}
}

class Snake extends Animal {
	constructor(name, species) {
		super(name, (species = "snake"));
	}
	move() {
		return `${this.name} is slithing`;
	}
	speak() {
		return `Shshsh`;
	}
}

class Eagle extends Animal {
	constructor(name, species) {
		super(name, (species = "eagle"));
	}

	move() {
		return `${this.name} is flying`;
	}
	speak() {
		return `Chvink`;
	}
}

const eagle1 = new Eagle("Mr. Potter");
const snake1 = new Snake("Malfoy");

/* 
	SOLID

	(не тільки в ООП)
	Single-responsibility principle - принцип єдиної відповідальності
	Open-closed principle - принцип відкритості / закритості
	(тільки ООП)
	Liskov substitution principle -  
	Interface segregation principle - 
	Dependency inversion principle - 
*/

// Single-responsibility principle - принцип єдиної відповідальності
// якщо робите щось (клас) для роботи А, не змушйте його зробити задачу Б

function sun(...number) {
	return number.reduce((acc, num) => (acc += num));
}

function isNormalNumber(num) {
	if (typeof num !== "number" || isNan(num)) {
		throw new TypeError("num must be number");
	}
}

//
// Open-closed principle - принцип відкритості / закритості

function calcLetters(str, vowels = ["a", "o", "u", "i", "e", "y"]) {
	const lowerCasedStr = str.toLowerCase();

	let resut = 0;

	for (let i = 0; i < lowerCasedStr.length; i++) {
		let letter = lowerCasedStr[i];
		if (vowels.includes(letter)) {
			result++;
		}
	}
}

// iskov substitution principle
// замінюємо один класс на інший і нічого не потрібноо ломатися

const tamer = {
	trainMoving: function (animal) {
		return animal.move();
	},
};

// tamer.trainMoving(animal1);
// tamer.trainMoving(snake);

//
// Interface segregation principle - принцип поділу інтерфейсу
// створюйте методи та властивасті тоді, коли це
// потрібно, щоб не спадкувати зайві речі

//
// Dependency inversion principle - не залежити ві д деталей реалізації (не допускати хардкода)
