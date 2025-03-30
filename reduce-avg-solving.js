let numbers = [1, 2, 3, 4, 5, 6];

function sumFunc(a, b) {
  return a + b;
}

const sum = numbers.reduce(sumFunc);
console.log(sum);

const avg = numbers.reduce((acc, cur, index, arr) => {
  acc += cur;
  if (index === arr.length - 1) {
    return acc / arr.length;
  }
  return acc;
});
console.log(avg);
