// // OLD WAY!
// // function sum() {
// //   const argsArr = [...arguments]
// //   return argsArr.reduce((total, currVal) => {
// //     return total + currVal
// //   })
// // }

// // New way using rest:
// function sum(...nums) {
//   return nums.reduce((total, currVal) => {
//     return total + currVal
//   })
// }

// //We can have named params and then collect the rest into an array:
// function fullName(first, last, ...titles) {
//   console.log('first', first)
//   console.log('last', last)
//   console.log('titles', titles)
// }

// // We can use rest parameters in arrow functions!
// const multiply = (...nums) => (
//   nums.reduce((total, currVal) => total * currVal)
// )
function s(...n) {
  console.log(n);
  return n.reduce((a, c) => a + c);
}
// console.log(s(1, 2, 3, 4));
function nameFlr(f, l, ...params) {
  console.log(f, l, params);
}
nameFlr("r", "i", "r", "a", "b", "c");
const sa = (...n) => n.reduce((a, c) => a + c);
console.log(sa(1, 2, 3, 4, 5));
