const arr1 [1, 2, 3];
const arr2 [4, 5, 6];


function arrayPlusArray(arr1, arr2) {
   return arr1.concat(arr2).reduce((acc, current) => acc + current);
  }


console.log(arrayPlusArray);//что выводить в консоль??