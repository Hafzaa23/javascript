//function

//creating function
function sayHello() {
    console.log("hello students");//this code ka ladabacayo
}

//calling or invoking or executing function
sayHello();

//creating fuction with parameters

function addNumbers(num1, num2) {
    console.log(num1 + num2);
}

//caling function with parameters(nprameter number ah)
addNumbers(5, 10);

//function returning avalue
function subtractNumbers(num1,num2) {
    return (num1 - num2);
    
}
//caling funcion with return
console.log(subtractNumbers(20, 10));

//asing the return value to avariable

const result = subtractNumbers(4, 8);
console.log(result);


// fuction part2
//parameter text ah

function sayHelo(name = "mahamed") {
    console.log("my name is " + name);
}

sayHelo("Hafsa");

//parameter default ah
sayHelo();// mahamed bay by default uso galin



// rest parameter (waa inaa parameter badan isku dari kara anoon shegin)
function sum(...numbers) {
    console.log(numbers);

let total = 0;
for (const num of numbers) {
    total += num;
}
console.log(total);
}

sum(5, 2, 1, 4, 7);

//object as a parameter

function loginUser(user) {
    console.log(`the user id is ${user.id} and his name is ${user.name}`);
}
const user = {
    id: 1,
    name: "Abdillahi",
    emil: "abc@a.come"
};
loginUser(user);

//use Array as Aparameter

function userme(me) {
    console.log(`this is first array ${me[0]} and last ${me[3]}`);
}

const me = [
    1, 2, 3, 4
];

userme(me);

//fuction expresion

//fuction declaratio
function sayme(){
    console.log("welcome")
}//this is fuction declaratio

//function expretion you using variable

const introduce = function(name,age) {
    //code ka
    console.log(`my name is ${name}  and I am ${age} years old`)
}

introduce("mahamed", 20);

//Arrow function

const seyHi = () => {
    //code 
    console.log("hello students");

};
seyHi();


//
const add = (num1, num2) => {
    return num1 + num2;
};

console.log(add(2, 1));

const subtract = (num1, num2) => num1 - num2;
console.log(subtract(5, 1));

//
const divide = x => x / 2;
console.log(divide(4));

//Iile (immediately invoked function expressions)

(function sayHii() {
    console.log("hi student");
})();

//iile with parameter
(function greating(time) {
    console.log(`good ${time}  everyone`);
})("morning");
