//object literals
let person = {
    firstName: "hafsa",
    lastName: "ahmed",
    address: {
        street: "1234-444",
        city: "burtinle",
        state: "puntland",
    },
    hobbies: ["code", "music", "reading"],

};
//accessing object properties
let x;
 x = person;
x = person.firstName;
 x = person.lastName;
 x = person.hobbies;
x = person.hobbies[0];
x = person.address.city;

console.log(x);

//apdaring properties
person.firstName = "ali;"
x = person;
console.log(x);
// deleting properties
delete person.hobbies;
x = person;
console.log(x);

//creating new properties
person.age = 23;
console.log(x);

//adding fuctions
person.greet = function() {
    console.log("hello , my name is" `${this.firstName}`);

};
x = person;
x.greet();
console.log(x);

