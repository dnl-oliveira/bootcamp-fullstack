function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));

function compareNumbers(a, b) {
  //return a > b ? 1 : a < b ? -1 : 0;
  return a - b;
}
console.log(compareNumbers(1, 2));
console.log(compareNumbers(2, 1));
console.log(compareNumbers(1, 1));

function superSum(from, upTo) {
  var sum = 0;
  for (var i = from; i <= upTo; i++) {
    sum += i;
  }
  return sum;
}

console.log(superSum(1, 10));
console.log(superSum(1, 10000));
console.log(superSum(2, 1));

var title = document.querySelector('h1');
title.textContent = 'Mudei titulo';
var personalDataArray = document.querySelectorAll('.data');
personalDataArray = Array.from(personalDataArray);
for (var i = 0; i < personalDataArray.length; i++) {
  var currentElement = personalDataArray[i];
  currentElement.classList.add('emphasis');
}
