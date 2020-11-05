const countTotalSalary = function(employees) {
  'use strict';
  // Write code under this line
    let total = 0;

    for (let employee in employees) {
        total += employees[employee];
    }
    return total;
    
};

// Объекты и ожидаемый результат
const developers = {
    mango: 300,
    poly: 250,
    alfred: 450,
};
//console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
}
//console.log(countTotalSalary(supports));
// 500


// Задача 3-4
// Суммирование значений свойств объекта
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
// Функция считает общую сумму зарплаты работников и возвращает ее.
// Каждое поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".

// еще один вариант решения 

// const countTotalSalary = function (employees) {
//   "use strict";
//   // Write code under this line
//   let total = 0;
//   const values = Object.values(employees);

//   for (const value of values) {
//     total += value;
//   }
//   return total;
// };