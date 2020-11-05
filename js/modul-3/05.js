function getAllPropValues (array, prop) {
  'use strict';
  // Write code under this line 
  let newArray = [];
   for (let item of array) {
      for (let key in item){
        if (key === prop) {
          newArray.push (item[key])
        }
      }
    }
  return newArray;
}

// Объекты и ожидаемый результат
const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Радар', price: 1280, quantity: 2 },
    { name: 'Радар', price: 1320, quantity: 1 },
    { name: 'Сканер', price: 2700, quantity: 1 },
    { name: 'Сканер', price: 2500, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
]; 

console.log(getAllPropValues(products, 'name'));
// ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity'));
// [4, 2, 1, 1, 3, 7, 2]

console.log(getAllPropValues(products, 'category'));
//  []


// Задача 3-5
// Оператор in и метод push
// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов
// и имя свойства.

// Функция возвращает массив значений определенного свойства prop из каждого
// объекта в массиве.

// Используй метод push для добавления значения в массив и оператор in для
// проверки наличия свойства в объекте.


// второй вариант решения

// function getAllPropValues(array, prop) {
//   "use strict";
//   // Write code under this line
 
//   let arrayOfKeys = [];
//   for (const item of array) {
//     const keys = Object.entries(item);
 
//     for (const key of keys) {
//       if (key[0] === prop) {
//         arrayOfKeys.push(key[1]);
//       }
//     }
//   }
//   return arrayOfKeys;
// }