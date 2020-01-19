'use strict';

let arr = ['Mike', 'Alex', 'Sane', 'Gusane', 'Max'];

// Перебор массива

// Вариант №1

//for (let i = 0; i < arr.length; i++) {
//  console.log(arr[i]);
//}

// Вариант №2

//for (let name of arr) {
//  console.log(name);
//}

// Вариант №3

//for (let key in arr) {
//  console.log(arr[key]);
//}

// Многомерные массивы

//let matrix = [
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
//]

// Задача №1

/*
  Напписать функцию sumInput(), которая:
  1. Просит пользователя ввести значение(prompt), которая она запишет в массив;
  2. Завершит работу если будет введена пустая строка или "Отмена";
  3. Подсчитывает и возвращает сумму элементов массива.
*/

//function sumInput() {
//  
//  let numbers = [];
//  
//  while (true) {
//    let value = prompt('Введите число: ', 0);
//    
//    if (value === '' || value === null || !isFinite(value)) break;
//    
//    numbers.push(+value);
//  }
//  
//  let sum = 0;
//  
//  for (let number of numbers) {
//    sum = sum + number; // sum += number;
//  }
//  
//  return(sum);
//}


// Методы массивов

arr.splice(3, 0, 'Nik', 'David', 'Morgan');

//Метод splice может удалять и добавлять элементы в массив

arr.slice(1,3);

// Метод slice может получить часть массива

arr.concat(['Elen', 'Kevin'], ['lola', 'Sam']);

// Метод contact объединяет несколько массивов в один


arr.forEach(function(item, index, array) {
  console.log(`${index + 1} элемент массива ${array}: ${item}`);  
});

// метод forEach перебирает элементы массива и выполняет, указанные нам действия

arr.indexOf('Sane'); // Ищет элемент и возвращает индекс
arr.includes('Sane'); // Возвращает true, если нашел

let users = [
  {id: 1, name: 'Alex'},
  {id: 2, name: 'Mike'},
  {id: 3, name: 'Bob'}
]

let user = users.find(item => item.name === 'Bob');
let user2 = users.findIndex(item => item.name === 'Bob');

// Поиск элементов в массиве, которые удовлетворят условию

let someUsers = users.filter(item => item.id < 2);

// Фильтрует элементы в массиве по критерию

let arr2 = [1,2,3,4,5,6,7,8,9];
let arr3 = arr2.map(item => item * 2);

// Перебирает массив и создает новый с результатами действий, которые мы определили

let arr4 = [15,2,1,25];

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;  
}

arr4.sort((a, b) => a - b);

// Реализация правильной математической сортировки