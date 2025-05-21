const vocali = ["a", "e", "i", "o", "u"];

function contaVocali(string) {
  let count = 0;
  for (let lettera of string.toLowerCase()) {
    if (vocali.includes(lettera)) {
      count++;
    }
  }
  return count;
}

export { contaVocali };
