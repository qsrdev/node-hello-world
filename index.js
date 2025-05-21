import { contaVocali } from "./functions.js";

let stampaParola = process.argv[3];
// console.log(stampaParola);
if (process.argv[2] === "vocali") {
  console.log(contaVocali(stampaParola));
} else {
  console.log(contaNumeri);
}
