// html4
console.log(document.getElementById("text1"));
console.log(document.getElementsByClassName("text2"));
console.log(document.getElementsByTagName("div"));

// html5
console.log(document.querySelector("#text1"));
console.log(document.querySelector(".text2"));
console.log(document.querySelector("div"));

console.log(document.querySelectorAll(".text2"));
console.log(document.querySelectorAll("div"));

document.getElementById("text1").innerHTML = "Hello World";

const para1 = document.createElement("p");
const node1 = document.createTextNode("Hello");
para1.appendChild(node1);

document.querySelectorAll(".text2")[0].appendChild(para1);

// text2 class의 모두 html5 구문을 추가하고 싶을 때
let text2Element = document.querySelectorAll(".text2");
for (let i = 0; i < text2Element.length; i++) {
  let para = document.createElement("p");
  let node = document.createTextNode("Hello HTML 5");
  para.appendChild(node);
  text2Element[i].appendChild(para);
}

// document.querySelector('.test2').appendChild('<P>')

$(function () {
  $(".text2").eq(0).append("<span>Append Jquery Node.</span>"); //eq() 인데스번호
});
