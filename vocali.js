const vocali = ["a", "e", "i", "o", "u"];
let string = process.argv[2];

function contaVocali(string) {
  let count = 0;
  for (let lettera of string.toLowerCase()) {
    if (vocali.includes(lettera)) {
      count++;
    }
  }
  return `Il numero di vocali è ${count} `;
}

console.log(contaVocali(string));
