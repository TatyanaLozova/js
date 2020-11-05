const findBestEmployee = function (employees) {
  'use strict';
  // Write code under this line
    let bestBestEmployee = "";
    let taskQuantity = 0;
   
   let array = Object.values(employees); //переводим все объекты  в масив
    taskQuantity = Match.max(...array);
    
    for (let key in employees) {
        if (employees[key] === taskQuantity) {
            bestBestEmployee = key;

        }
    } 
    return taskQuantity;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
}; 
//console.log(findBestEmployee(developers)); 
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
}; 
//console.log(findBestEmployee(supports)); 
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
}
//console.log(findBestEmployee(sellers)); 
// 'lux'  


// Альтернативное решение 3 задачи от Евгения.
// const findBestEmployee = function (employees) {
//   "use strict";
//   // Write code under this line
//   let bestEmployee = "";
//   let value = 0;

//   const entries = Object.entries(employees);
//   for (const entry of entries) {
//     // const key = [0];
//     // const valueEntry = [1];
//     // console.log(entry);

//     if (entry[1] > value) {
//       value = entry[1];
//       bestEmployee = entry[0];
//     }
//   }

//   return bestEmployee;
// };

// Задача 3-3
// Поиск наибольшего значения среди свойств объекта
// Напиши функцию findBestEmployee(employees), которая принимает объект
// сотрудников и возвращает имя самого продуктивного(который выполнил больше
//      всех задач).Сотрудники и кол - во выполненных задач содержатся как свойства
// объекта в формате "имя": "кол-во задач".