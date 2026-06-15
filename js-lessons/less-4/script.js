// data types 
// 1 . primative

//string
const world = "welcome to javascript";
console.log(world);
console.log(typeof world)

//number
const age = 45;
console.log(age);
console.log(typeof world);

//boolean
const isMaried = false;
console.log(isMaried);
console.log(typeof isMaried);
//unfifined
let score;
console.log(typeof score);

//null
let name9 = null;
console.log(typeof name9);

//bigInt
const number1 = 2345678990888888;
console.log(number1);
console.log(typeof number1);

// 2. treference datatype

//array 
const numbers = [2, 4, 9];
console.log(typeof [numbers]);

const person = {
    name : "hafsa",
    email : "hafsa@gmail.come",
}
console.log(person , typeof person)

// types convert

//1.converts string  to number 3 ways:

//let myValue = "2033";

//myValue = parseInt(myValue);
//myValue = +myValue;
//myValue = number(myValue)

//console.log(myValue, typeof myValue);



//2.convert string to decimal

//let myValue = "387.88";

//myValue = parseFloat(myValue);

//console.log(myValue, typeof myValue)

//3.convert number to string
//let myValue = 123;

//myValue = String(myValue);
//myValue = myValue.toString();
//console.log(myValue, typeof myValue);


//4.convert number to boolean
// let myValue = 10;

// myValue = Boolean(myValue);

// console.log(myValue, typeof myValue);

//5. convert boolean to number
let myValue = false;

myValue =Number(myValue);

console.log(myValue, typeof myValue);


