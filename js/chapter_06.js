//scope

//Global scope(전역 범위)
let name = "tom";

function sumPrint() {
  // Function Scope(함수 범위)
  let sum = 50;

  for (let i = 0; i < 3; i++) {
    // Block Scope
    let msg = "Hello World";

    console.log(name);
    console.log(sum);
    console.log(msg);
  }
  // 함수범위
  console.log(name);
  console.log(sum);
  // console.log(msg);
}

// 전역범위
console.log(name);
// console.log(sum);
// console.log(msg);

// var : Global Scope, Function Scope만 적용가능

// this
let person = {
  name: "Jack",
  print: function () {
    console.log(this.name);
    console.log(this);
  }
};

person.print();
console.log(person);

console.log(this);

function type() {
  console.log(this);
}

type();
