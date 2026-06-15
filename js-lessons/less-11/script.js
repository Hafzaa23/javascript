//desctructuring waa qaab value logala soo baxo array ga
//1. array destructing
const fruits = ["apple", "banana", "orange"];
//qaab kii old ga ahaaee yerista
// const first = fruits[0];
// const second = fruits[1];
// const third = fruits[2];

// console.log(first);
// console.log(second);
// console.log(third);

//qaabka cusub(destructing)
const [first, second, third] = fruits;

console.log(first);
console.log(second);
console.log(third);

//object destructing
let person = {
    firstName: "hafsa",
    lastName: "ahmed",
    age: 23,
    address: {
        street: "1234-444",
        city: "burtinle",
        state: "puntland",
    },
    hobbies: ["code", "music", "reading"],

};
//accesing object 
const firstName = person.firstName;
const lasttName = person.lastName;
const age = person.age;
//this is old
console.log(firstName);
console.log(lasttName);
console.log(age);

//new destructing

const { firstName, lastName, age } = person;
console.log(firstName);
console.log(lastName);
console.log(age);g

