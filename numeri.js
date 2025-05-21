// const numeri = process.argv.slice(2).map(Number);
// let numeroMaggiore = Math.max(...numeri);
// console.log(`il numero più grande è ${numeroMaggiore}`);

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
import prompt from "prompt";
const numeri = [];
let biggestNumber = 0;

setValues();

function setValues() {
  prompt.get(["num"], function (err, res) {
    if (parseInt(res.num) != res.num) {
      console.log(numeri);
      console.log(numeromaggiore());
    } else {
      const value = parseInt(res.num);
      console.log(value);

      numeri.push(value);
      setValues();
    }
  });
}

function numeromaggiore() {
  numeri.forEach((number) => {
    if (number > biggestNumber) {
      biggestNumber = number;
    }
  });

  return biggestNumber;
}

// function numeromaggiore() {
//   console.log("inserisci i numeri, premi invio per il numero maggiore");
//   prompt.start;

//   //prendo un numero tramite prompt
//   for (let index = 0; index < 5; index++) {
//     prompt.get(["num"], function (err, res) {
//       if (!isNaN(res.num)) {
//         console.log(numeri);

//         numeri.forEach((number) => {
//           if (number > biggestNumber) {
//             biggestNumber = number;
//           }
//         });
//         return biggestNumber;
//       } else {
//         numeri.push(parseInt(res.num));
//         // console.log(numeri);
//       }
//     });
//   }
// }
