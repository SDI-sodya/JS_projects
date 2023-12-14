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
	constructor(name, typeOfFood) {
		this.name = name;
		this.typeOfFood = typeOfFood;
	}

	swim() {
		console.log(`Fish ${this.name} swim. Bul-bul...`);
	}
}

const fish1 = new Fish("Guppy", "predator");

class Shark extends Fish {
	constructor(name, typeOfFood) {
		super(name);
		this.typeOfFood = "predator";
	}
}

const shark1 = new Shark("Billy");
