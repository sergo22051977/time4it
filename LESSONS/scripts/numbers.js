'use strict'
//console.log(0b101011);
//let num = 351.23435;
//console.log(num.toString(32))

let firstNumber, lastNumber;

while (true) {
  firstNumber = +prompt('Введите число:');
  if (isNaN(firstNumber) == false) {
    break;
  };
};

while (true) {
  lastNumber = +prompt('Введите число:');
  if (isNaN(lastNumber) == false) {
    break;
  };
};

console.log('Сумма двух чисел: '+ (firstNumber + lastNumber) + '!');