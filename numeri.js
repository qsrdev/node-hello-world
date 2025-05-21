const numeri = [3, 5, 56, 6, 19, 29, 22, 45, 75, 95, 102, 199];

const numeroMaggiore = (array) => {
  let biggestNumber = 0;
  array.forEach((number) => {
    if (number > biggestNumber) {
      biggestNumber = number;
    }
  });
  return biggestNumber;
};

console.log(`Il numero maggiore è ${numeroMaggiore(numeri)}`);
