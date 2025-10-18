let firstName = "hafsa"  // is global

let persone = {
    lastName : "Ahmed",
    city:"muqdisho",
    age:22,   // this bracet waxa ku dhex jira waa local 
}

//global
let magacHore = "hafsa"
// local
function mycode() {
    let magacaDanbe = "ahmed"
    console.log(magacHore ,  magacaDanbe)
}
mycode()  
// console.log(magacHore + " " + magacaDanbe); code waa khalad buu dhihi b/c magaca danbe waa local adiba global baa joogta

// hafsa waa global wax kasta oo global local ku wuu daabici karaa // balse ahmed local ka basaa daabici kara  global consele.log madaa bici karo

//global is open Area
var myName = "hafsayaal";
console.log(myName);

//Local Area
{
        console.log(myName)
    }


    //hadaan globalka kasaaro ma wadaagi kadhaan oo error buu sosari
//console.log(ourName); //hadaan tan gadaal geeyo

//Local Area
{
        var ourName = "hafsayaal";
        console.log(ourName)
    }
    console.log(ourName);

