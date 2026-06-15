//arrays

//aaray litteral

const numbers = [12, 42, 56, 14, 118];
console.log(numbers);

const mixd = [14, "hello", null, false];
console.log(mixd);

//array constuctor 
const fruits = new Array("Apple", "orange", "Grape");
console.log(fruits);

//getting value from array 
let x;
x = numbers[0];
x = numbers[2];
x = numbers[4] + numbers[0];

x = numbers.length;

fruits[2] = "banana";
x = fruits;
console.log(x);




///// leeson : Array methode

const arr = [31, 41, 154, 53, 66];


//1. push() = is adding at enf of array value

arr.push(100);
console.log(arr);

//2. pop() = removing last value of aaray

arr.pop();
arr.pop();

console.log(arr);

//3. unshift() = adding value to the begining  of the array

arr.unshift(200);
console.log(arr);

// shift() = removing th first value of the array

arr.shift();
arr.shift();
console.log(arr);

//reverse() = is the revesind end to start

arr.reverse();
console.log(arr);

// //includes() = cheking to see if the something is in the array
let y ;

y = arr.includes(43);
console.log(y);

//indexof() = returns index position of the first match

x = arr.indexOf(31);
x = arr.toString();
console.log(x);

//slice (star, end) = waxay kuso celiyan  elements anew array

x = arr.slice(1, 4);
console.log(x);



//lesson Arrays Nasting , Concotention , and spread

//array nesting  is array with array

const fruit = ["apple ", "banana", "orange"];
const berries = ["strowberry", "bluebery", "rospberry"];

fruit.push(berries);
console.log(fruit);

//accessing element inside the nested array

x = fruit[3][1];
console.log(x);

//nasting two arrays in a single array

const allfruits = [fruit, berries];
 
x = allfruits;

console.log(x);

//concotenating arrays with concat () isku darid

x = fruit.concat(berries);
console.log(x)

//spread  operator = contatenating array [...]

x = [...fruit, ...berries];
console.log(x);

const copyfruit = [...fruit];
x = copyfruit;
console.log(x);

x = ['pow pow', ...fruit];
console.log(x);

//
const arr1 = [1, 2, 3];
const arr2 = [5, 2, 3];
const arr3 = [9, 99, 3];

x = [arr1, arr2, arr3];
console.log(x);

x = x.flat(); //[] bay kasari
console.log(x);

