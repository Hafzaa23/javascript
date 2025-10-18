// for in waxay la shaqaysa object ga

let person = {
  name: "hafsa ahmed",
  Age: 22,
  city: "muqdisho",
};

for (const key in person) {
  // console.log(key) ;
  // console.log(key, person[key]);
  // console.log(person[key]) ;
  //console.log(key + " :" + persone[key]);
  console.log("the key is  " + key + "   and the value   " + person[key]);
}
