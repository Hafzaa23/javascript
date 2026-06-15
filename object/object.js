//object consest of alot of variable and allow you to group

const person1 = {
  firstName: "hafsa",
  lastName: "Ahme",
  age: 22,
  isMarried: false,
  address: {
    street: "lamiga34",
    city: "burtinle",
    status: "SG",
    zip: "12345",
  },
  hoppies: ["read", "coding", "art"],
  favfood: ["barris", "canjeelo", "baasto"],
  favDrink: "canbe",
};

const person2 = {
  firstName: "caasho",
  lastName: "maxamed",
  age: 40,
  iaMarried: true,
  address: {
    street: "lamiga34",
    city: "burtinle",
    status: "SG",
    zip: "12345",
  },
  hoppies: ["read", "coding", "art"],
  favfood: ["barris", "canjeelo", "baasto"],
  favDrink: "canbe",
};

//how change a akey value and how delete
person1.age = 100;
delete person1.firstName; //delete key and value

//how to accsess object
console.log(person1);
console.log(person1.firstName);
console.log(person1.address.city);
console.log(person1.hoppies[2]);

let person3 = {};

person3.firstName = "bob";
person3.lastName = "cali";
person3.age = 37;

console.log(person3);

let person4 = new Object();
person4["firstName"] = "cabdi";

console.log(person4);
