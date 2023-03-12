//Date
let myDate = new Date();

// Sun Mar 12 2023
console.log(myDate.toDateString());

// Sun Mar 12 2023
console.log(myDate.toDateString());

// 3/12/2023
console.log(myDate.toLocaleDateString());

// 3/12/2023, 7:26:53 AM 
console.log(myDate.toLocaleString());

//7:26:53 AM
console.log(myDate.toLocaleTimeString());


// let createdDate = new Date(2023, 13, 2);
let createdDate = new Date("01-14-2023")
// console.log("Created date " + createdDate.toDateString());
// console.log(createdDate.getTime());

let myTimeStamp1 = Date.now();
// console.log(myTimeStamp1);

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth()+1); 
console.log(newDate.getDay()+1); 

newDate.toLocaleString('default',{
    weekday:"long",
    timeZone : ""
})