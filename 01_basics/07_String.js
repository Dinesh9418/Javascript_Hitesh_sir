const name = "Dinesh";
const repoCount = 27;

console.log(name + " " + repoCount + "04");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Dinesh jadhav')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(6));

const newString = gameName.substring(0, 5)
console.log(newString)

const anotherString = gameName.slice(0, 4)
console.log(anotherString);

const newStringOne = "  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Dinesh.com/dinesh%20jadhav";
let updatedUrl = url.replace('%20', "-")
console.log(updatedUrl);

console.log(url.includes('jadhav'));
console.log(url.includes('jadhav1'));

console.log(gameName.split(' '));

