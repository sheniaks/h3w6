//TASK 1 
function sumMin(arr) {
    let sum = [];
    arr.forEach((min) => sum.push(Math.min(...min)));
    return sum.reduce((x, y) => x + y);
  } 
//   console.log(
//     sumMin([
//       [7, 5, 55],
//       [3, 2, 1],
//       [9, 11, 3],
//     ])
//   );

//TASK 2
function twoOldestAges(arr) {
    let oldest = (arr.sort((a, b) => a - b)).slice(-2);
    console.log(arr);
    console.log(oldest);
  }  
//twoOldestAges([7, 5, 55, 33, 22, 11 , 3313, 3, 77 , 122]);

//TASK 3
function returnShortest(str) {
    let arr = str.split(" ");
    arr.sort(function (a, b) {
      return a.length - b.length;
    });
    console.log(`${str} --> ${arr[0].length}`);
  }  
// returnShortest("test req hello man qq re tt");

//TASK 4
const sortString = (str) => {
    const findIndex = (word) => word.split('').reduce((acc, val) => +val ? +val : acc, 0);
    const arr = str.split(' ');
    const sorted = (a, b) => {return findIndex(a) - findIndex(b)};
    arr.sort(sorted);
    return arr.join(' ');
 };
//console.log(sortString("4of Fo1r pe6ople g3ood th5e the2"));
  