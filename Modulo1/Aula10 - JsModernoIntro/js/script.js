'use strinct'; // O javascript acusa mais erros.

// var x let
// var escopo abrangente
// let escopo reduzido

function withVar() {
  for (var i = 0; i < 10; i++) {
    console.log('var ' + i);
  }
  i = 20;
  console.log(i);
}

function withLet() {
  for (let i = 0; i < 10; i++) {
    console.log('let ' + i);
  }
  i = 20;
  console.log(i);
}

withVar();
withLet();
const c = 10;
//c = 20;
const d = [];
d.push(c);
console.log(d);
//const - não podemos reatribuir valores.

function sum(a, b) {
  return a + b;
}
//função anonima
const sum2 = function (a, b) {
  return a + b;
};

// arrow function
const sum3 = (a, b) => {
  return a + b;
};
// arrow function reduzida
const sum4 = (a, b) => a + b;

console.log(sum(1, 5));
console.log(sum2(1, 7));
console.log(sum3(1, 9));
console.log(sum4(1, 11));

// template literals
const name = 'Daniel';
const surName = 'Oliveira';
const text1 = 'Meu nome é ' + name + ' ' + surName;
const text2 = `Meu nome é ${name} ${surName}`;
console.log(text1);
console.log(text2);

//default parameters
const sum5 = (a = 1, b = 13) => a + b;
const sum6 = (a, b = 13) => a + b;
console.log(sum5());
console.log(sum6(2));
