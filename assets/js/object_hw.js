"use strict";

function User(name, lName, gender) {
	let that = this;
	this.name = name;
	this.lName = lName;
	this.gender = gender;
	this.messageCount = 0;
}

const userProto = {
	genderFunc: function () {
		return this.gender ? "male" : "female";
	},
	allInfo: function () {
		return `User ${this.name} ${this.lName}, gender ${
			this.gender ? "male" : "female"
		}, write ${this.messageCount} messages`;
	},
	newMessage: function (mesText) {
		console.log(
			`User ${this.name} ${this.lName} write the message: "${mesText}"`
		);
		return ++this.messageCount;
	},
};

User.prototype = userProto;

const user1 = new User("Gregory", "Smith", true);
const user2 = new User("Michael", "Myers", false);

// genderFunc: () => (this.gender === true ? "male" : "female"),
// allInfo: () =>
//   `User ${this.name} ${this.lName}, gender ${this.gender} type/write ${this.messageCount} messages`,
