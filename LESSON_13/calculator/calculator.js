'use strict';
//let x = +prompt('Задайте число X:','0');
//let y = +prompt('Задайте число Y:','0');
//
//function sum(x,y) {
//  return x + y;
//}

//function mult(x,y) {
//  return x * y;
//}

// END FIRST VERSION

//let user = {};
//user.name = 'John';
//user.surname = 'Smith';
//user.name = 'Pete';
//delete user.name;
//
//function isEmpty(obj) {
//  for (let key in obj) {
//    return false;
//  }
//  return true;
//}

function isEmpty(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
}