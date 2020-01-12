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

//
//let calculator = {
//  read() {
//  this.x = +prompt('Задайте число X:','0');
//  this.y = +prompt('Задайте число Y:','0');
//},
//  sum() {
//    return this.x + this.y;
//  },
//  mult() {
//    return this.x * this.y;
//  }
//};

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

//function isEmpty(obj) {
//  let sum = 0;
//  for (let key in obj) {
//    sum += obj[key];
//  }
//  return sum;
//}


//let user = {
//  name: 'John',
//  age: 30,
//  sayHi() {
//  console.log('
//  Привет!
//  Меня зовут ${user.name}!
//              ');
//  }
//};

//user.sayHi = function() {
//  console.log('Привет!');
//};
//
//user.sayHi = sayHi;

//let ladder = {
//  step: 0,
//  up() {
//    this.step++;
//    return this;
//  },
//  down() {
//    this.step--;
//    return this;
//  },
//  showStep() {
//    console.log(this.step);
//  }
//}

//let user = {
//  name: 'Alex',
//  age: 25
//}
//
//let user2 = users('Max', 53);
//
//function users(name, age) {
//  let obj = {
//    this.name: name, 
//    this.age: age
//  }
//  return obj;
//}



//function User(name) {
//  this.name = name;
//  this.isAdmin = false;
//}
//
//let user = new User('Федя');

//let obj = {};
//
//function A() {
//  return obj;
//}
//function B() {
//  return obj;
//}
//
//let a = new A();
//let b = new B();


 function Calculator() {
   this.read = function() {
  this.x = +prompt('Задайте число X:','0');
  this.y = +prompt('Задайте число Y:','0');
},
  this.sum = function() {
    return this.x + this.y;
  },
  this.mult = function() {
    return this.x * this.y;
  }
 }

let calculator = new Calculator();