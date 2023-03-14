//array

const myArray = [0, 1, 2, 3, 4, 5];
// console.log(myArray);

const myArray2 = new Array(1, 2, 3, 4)
// console.log(myArray2);

//array methods

// myArray.push(6);
// myArray.push(9);
// console.log(myArray);
// myArray.pop();
// console.log(myArray);

// myArray.unshift(9);
// console.log(myArray);

// myArray.shift();
// console.log(myArray);

// const newArray =  myArray.join();
// console.log(myArray); 
// console.log(newArray.charAt(19));

//slice, splice

console.log("A ", myArray);
const myn1 = myArray.slice(1, 3);
console.log(myn1)
console.log("B ", myArray);


console.log("C ", myArray);
const myn2 = myArray.splice(1, 3);
console.log(myn2)
console.log("c ", myArray);