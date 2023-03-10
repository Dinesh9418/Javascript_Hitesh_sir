let score = "Dinesh";
console.log(typeof (score));
console.log(typeof score);

let valueNumber = Number(score);
console.log("valueNumber --> " + typeof (valueNumber) + " " + valueNumber);

//"33" => 33
// "33abc" = >NaN
// true => 1
// undefind => object

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//1 = > true
//"" =>false
//"Dinesh" = >true

let someNumber = 33;
let StringNumber = String(someNumber)
console.log("StringNumber +" + StringNumber + " " + typeof StringNumber);