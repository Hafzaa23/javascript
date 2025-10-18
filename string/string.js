// let fullName = "Hafsa Ahmed";
// let firstName = New String(" Hafsa")

// console.log(fullName.topstring())

let firstName = "hafsa";
let lastName = "ahmed";
let fullName =  "my fulll name is"   +  " " + firstName + " " +  lastName + "!"
fullName = fullName . replace ("my" , "our")


// let fullName =  '"my fulll name is" $ {firstName } $ {lastName}'

console.log(fullName)

//spaces

let myName = "     caasha      "
console.log(myName.length) // space ka xitaa wuu tirin

console.log(myName.trim())

console.log(myName.charAt())
console.log(myName.indexOf("c"));


let age = 20 ;
let fName = `hafsa is  ${age}`; //only work if you have ` and you tell this is a variable
console.log(fName);



//different ways to create strings


let mHore = "caasha cali"; // using double quetes
let mDanbe = 'mahamed'; // using single quetes
let da = 30 ;
let isMaried = true;
let city = new String("new york"); // gives object halkuu kusiin lahaa string(using the string  constructor)
let country =  `USA`; // using template literals back ticks
console.log(mHore,mDanbe,city.toString(), country); // hadaad kasaartid tostring awal suu ahaa waad arki kadhaa object ubadashe string

//how to access strings 

console.log(mHore.charAt(0));
console.log(mHore.indexOf("c"));
console.log(mHore.indexOf("k"));
console.log(mHore.indexOf("m") );//kuma jiro -1console.log(mHore.indexOf("c"));
console.log(mHore.lastIndexOf("c"));


//string methods
let str = "  Hello, World! \n"; // \n new line  \t means tap
console.log(str. length); //count allways start 1
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim()); //if in space is cating
console.log(str.trimStart());//
console.log(str.trimEnd());
console.log(str.split(","));
console.log(str.split(""));
console.log(str.replace("World", "Earth"));
console.log(str.includes("World"));
console.log(str.startsWith("Hello"));
console.log(str.endsWith("!"));
console.log(str.repeat(3));
console.log(str.padStart(20, "Hello"));
console.log(str.padEnd(20 ,"World"));
console.log(str.charAt(0));
console.log(str.charCodeAt(0));
console.log(str.slice(0,5));
console.log(str.substring(0,5));
console.log(str.split("").reverse().join(""));












if (str.includes("World")){
    console.log("this string the word world in it!");
}else{
    console.log("it does not have the world in it!");
}






