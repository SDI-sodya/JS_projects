// function User(fistName, lastName, age) {
// 	this.fistName = fistName;
// 	this.lastName = lastName;
// 	this.age = age;
// }

// const userProto = {
// 	getFullName: function () {
// 		return `${this.firstName} ${this.lastName}`;
// 	},
// };

// User.prototype = userProto;
//
//
//
// function UserProto() {
// 	this.getFullName = function () {
// 		return `${this.firstName} ${this.lastName}`;
// 	};
// }

// const userPhoto = new UserProto();

// User.prototype = userProto;

// User.prototype = new UserProto();

// class

// class User {
// 	constructor(firstName, lastName, age) {
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 		this.age = age;
// 	}

// 	getFullName() {
// 		return `${this.firstName} ${this.lastName}`;
// 	}
// }

// const user13 = new User("Test", "User", 5000);

class House {
	constructor(numberOfFloors, address, style) {
		this.numberOfFloors = numberOfFloors;
		this.address = address;
		this.style = style;
	}

	// нижче можна написати методи екземпляру
	getHouseData() {
		return `House data address: `;
	}
}

// class User {
// 	constructor(firstName, lastName, gender, height, age) {
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 		this.gender = gender;
// 		this.height = height;
// 		this.age = age;
// 	}

// 	allInfo() {
// 		return `${this.firstName} ${this.lastName}, ${this.height} cm, ${
// 			this.gender === true ? "male" : "female"
// 		}`;
// 	}
// 	isAdult() {
// 		return this.age >= 18;
// 	}
// }

// const user1 = new User("George", "Smith", true, 180, 18);

// class Product {
// 	constructor(name, price, count, isForAdult) {
// 		this.name = name;
// 		this.price = price;
// 		this.count = count;
// 		this.isForAdult = isForAdult;
// 	}

// 	allPriceOfProduct() {
// 		return this.price * this.count;
// 	}
// }

// const prod1 = new Product("Banana", 25, 1324, false);

class Product {
	#private;
	#price;
	#quantity;
	constructor(name, price, quantity, ifForAdult = false) {}

	get quantity() {
		return this.#quantity;
	}

	set quantity(newQuantity) {
		if (typeof NewPrice !== "number" || isNaN(newPrice)) {
			throw new TypeError("Ціна має бути числом");
		}

		if (newQuantity < 0) {
			throw new TypeError("Кількість не може бути негативною");
		}

		this.#quantity = newQuantity;
	}

	get price() {
		return this.#price;
	}

	// безпечно отримуємо ціну
	set price(newPrice) {
		if (typeof NewPrice !== "number" || isNaN(newPrice)) {
			throw new TypeError("Ціна має бути числом");
		}

		if (NewPrice < 0) {
			throw new TypeError("Кількість не може бути негативною");
		}

		this.#price = NewPrice;
	}

	#secret() {
		console.log("privat method");
	}

	getTotalPrice() {
		return this.#price * this.#quantity;
	}

	static test2 = "static property";

	static isProduct(obj) {
		return obj instanceof Product;
	}
}
