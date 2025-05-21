const numeri = process.argv.slice(2).map(Number);
let numeroMaggiore = Math.max(...numeri);
console.log(`il numero più grande è ${numeroMaggiore}`);

// const numeri = [3, 5, 56, 6, 19, 29, 22, 45, 75, 95, 102, 199];

// const numeroMaggiore = (array) => {
//   let biggestNumber = 0;
//   array.forEach((number) => {
//     if (number > biggestNumber) {
//       biggestNumber = number;
//     }
//   });
//   return biggestNumber;
// };

// console.log(`Il numero maggiore è ${numeroMaggiore(numeri)}`);

// ///////////////////////////////////////////////////////////////
// const prompt = require("prompt");

// const numeroMaggiore = (array) => {
//   let numeri = [];
//   let biggestNumber = 0;

//   //start prompt
//   prompt.start();

//   prompt.get();

//   array.forEach((number) => {
//     if (number > biggestNumber) {
//       biggestNumber = number;
//     }
//   });
//   return biggestNumber;
// };
