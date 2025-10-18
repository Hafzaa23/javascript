//Qaabka 1 aad ee array loo abuuro
var ListOfShoping = ["mango", "banan", "Loos"];
console.log(ListOfShoping);

console.log(ListOfShoping[1]);
console.log(ListOfShoping.length);
ListOfShoping[0] = "watermelon";
console.log(ListOfShoping[0]);

//Qaabka 1 aad ee array loo abuuro
var ListOfStudent = new Array("maxamed", "ali", "hafsa");
console.log(ListOfStudent);

let names = ["john ", "jane ", "bob ", "Alice", "Chrlic ", "cali"];
names[2] = "Hafsa";
names[3] = "Ali";
names[5] = "zara";
names.push("adam"); //wuu ku sii dari
names.unshift("ali"); //horay buu ali ku dari
names.pop(); //kan udan beeyu delete di
names.shift(); // bilow guu delete di
names.splice(2, 0, "sara"); // adds/removes items at any index
console.log(names);

names.forEach((x) => console.log(x)); // gives numbers one by one x stand for 1number
names.forEach((x) => console.log(x + " is nice")); // adds every one is nice
let double = names.map((x) => x);
