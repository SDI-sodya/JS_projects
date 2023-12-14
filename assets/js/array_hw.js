// task 1
function indexValue(arr) {
	arr.forEach((y, x) => console.log(`Item with index ${x} has value ${y}`));
}

//task 2
function showAdult(users) {
	return users.filter(function (user) {
		return user.age >= 18;
	});
}

//task 3
function findFemale(users) {
	return users.findIndex(function (user) {
		return user.gender === "female";
	});
}

const arr1 = ["test", false, 2345, null];
const arr2 = [
	{ firstName: "Test", lastName: "Testovich", age: 27, gender: "male" },
	{ firstName: "User", lastName: "Userenko", age: 12, gender: "male" },
	{ firstName: "Test`ya", lastName: "Testovna", age: 16, gender: "female" },
	{ firstName: "Logina", lastName: "Consol`evna", age: 42, gender: "female" },
	{ firstName: "Undefined", lastName: "Undefined", age: 99 },
	{ firstName: "Null", lastName: "Nullochyk", gender: "male" },
];

// task 1
indexValue(arr1);
// task 2
console.log(showAdult(arr2));
//task 3
console.log(findFemale(arr2));
