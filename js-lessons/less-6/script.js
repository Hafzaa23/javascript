//string

let stg = "Hello world";
console.log(stg);

//concatnation = inaa dhowr string isku darto

let greating = "Hello" +  "everyone";
console.log(greating);

const name = "Abdillahi";
const age = 23;
console.log("hello, my name is" + name, "and I am", + age + "years old");

//template literals (qaab kale oo string laiskugu dare)

console.log(`Hello my name is ${name} and  I am ${age} years old`);

//string properts and methods

const myText = "Hello student , welcome to korodhsoaqoon ";
let outPut = myText;
// string length
outPut = myText.length;
console.log(outPut);

//touppercase and lowercase 
outPut = myText.toUpperCase();
outPut = myText.toLowerCase();
console.log(outPut);

//find the character at the specified index

outPut = myText.charAt(9);
console.log(outPut);

//find index of the first occurence of a value

outPut = myText.indexOf("co");
console.log(outPut);

//extra apart of the string the start index to text

outPut = myText.substring(16, 23);
outPut = myText.slice(6, 14);
console.log(outPut);

//replacing part of the string with onother value

outPut = myText.replace("student", "everyone");
console.log(outPut);

//if string contains the specified value
outPut = myText.includes("korodhsoaqoon");
console.log(outPut);

//splitting astring in to array(la jajabiyo)
outPut = myText.split("");
console.log(outPut);

