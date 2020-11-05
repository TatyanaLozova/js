const countProps = function(obj) {
    'use strict';
  // Write code under this line
  return Object.keys(obj).length;
};

console.log(countProps({})); // 0

console.log(countProps({a:1, b:1})); // 2

console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5


// Задача 3-2
// Подсчет количества свойств в объекте
// Напиши функцию countProps(obj), которая возвращает
// число - количество свойств в объекте.

// Циклы не должны использоваться

// Ожидается что countProps является функцией
// Ожидается что функция вернет 0 для пустого объекта
// Ожидается что функция вернет 2 для объекта {a:1, b:1}
// Ожидается что функция вернет 5 для объекта {a:1, b:1, c:1, d:1, e:1}
// Ожидается использование метода 'Object.keys'
// Ожидается использование свойства 'length'