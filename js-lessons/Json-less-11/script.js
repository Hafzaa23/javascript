// json
//uses of jon
//1.data transfer
//2.config files
//3.ApI
//4.nosql database(firebase, mongodb)

var post = {
    id: 1,
    title: "post on",
    body: "this is post body"
}
console.log(post);

//convert object into json

var myJSONObject = JSON.stringify(post);
console.log(myJSONObject);

//convert json to object

var myObject = JSON.parse(myJSONObject);
console.log(myObject);

//json array 
var post = [
    { id: 1, title: "post one", body: "this post body" },
    { id: 2, title: "post two", body: "this post body" },
    { id: 3, title: "post three", body: "this post body" }
];
var myJSONArray = JSON.stringify(post);
console.log(post);