/*primitive --
7 types : String , Number, Boolean, null, undefind, Symbol, BigInt
*/
const score = 100
const scoreValue = 1000.3

const isLoggedIn = false
//console.log("isLogged In " +typeof isLoggedIn)

const outSideTemp = null
//console.log("outSide Temp " +typeof outSideTemp)

let userEmail;

const id = Symbol('123');
const anotherID = Symbol('123')
//console.log(id === anotherID);

const bigNumber = 12345678910;
//console.log(typeof bigNumber)

/* Reference Type / non-primitive
Array , Objects, Functions
*/

const heros = ["shaktiman", "naagraj", "doga"]
//console.log(typeof heros)

let myObj = {
    name: "Dinesh",
    age: 22
}
//console.log(typeof myObj)

const myFunction = function () {
    //  console.log("Hello world");
}
//console.log(typeof myFunction)

//Memory
// 1)Stack (primitive) 

//2) Heap (non-primitive)

let myYoutubeName = "LTIMindtree"
let anotherName = myYoutubeName;

anotherName = "Scrobits"

console.log(myYoutubeName)
console.log(anotherName);

let user1 = {
    email: "user@gmail.com",
    upi: "user@icici"
}
console.log(user1.email);

let userTwo = user1;
userTwo.email = "Dinesh@gmail.com"
console.log(user1.email);
console.log(userTwo.email);