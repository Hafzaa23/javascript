// //1
let firstH1 = document.getElementById("wanna-first");
firstH1.textContent = firstH1.textContent + "Hello world!";
document.body.appendChild(firstH1);
//si aad wax badan udaabacdo loop isticmali
for (let i = 0; i <= 500; i++) {
  let firstH1 = document.createElement("h1");
  firstH1.textContent = "Hello world!";
  document.body.appendChild(firstH1);
}

let AlltheFirstWannaBe = document.getElementsByClassName("wanna-first");
AlltheFirstWannaBe[0].style.color = "blue";
AlltheFirstWannaBe[0].style.fontSize = "50px";
AlltheFirstWannaBe[1].style.color = "yellow";
AlltheFirstWannaBe[1].style.fontSize = "50px";

// si aan numbers ugu daro i++ isticmali
for (let i = 0; i <= 500; i++) {
  let firstH1 = document.getElementsByTagName("h1");
  firstH1.innerHTML = i + "Hello world! "; //<br> shaqadiisa waxaa qaban innerHtml br dhexda aad ka kala jabinaysad galin
  firstH1.style.color = "red";
  firstH1.style.backgroundColor = "yellow";

  let firstp = document.getElementById("wanna-first");
  firstp.textContent = firstp.text + "Hello world!";

  //document.body.appendChild(firstH1)// , firstp );
  // document.body.removeChild(firstH1)
}
