const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Horizontal Sum

const resultH = matrix.map((row) => {
  return row.reduce((a, b) => a + b);
});

console.log(resultH);

// Vertical Sum

const resultV = matrix.reduce((acc, cur) => {
  return acc.map((v, i) => cur[i] + v);
});

console.log(resultV);




// another solution
const numbers = [1, 2, 3, 4, 5];

// Mapped
const squares = numbers.reduce((acc, cur) => {
  acc.push(cur * cur);
  return acc;
}, []);
console.log(squares);

// Filter
const odds = numbers.reduce((acc, cur) => {
  if (cur % 2 === 1) {
    acc.push(cur);
  }
  return acc;
}, []);
console.log(odds);

// Big Array
const bigArray = [];
for (let i = 0; i < 5000000; i++) {
  bigArray.push(i);
}
// console.log(bigArray);

// Map and filter-chain - Time Efficience
console.time("Both");
const biga = bigArray.filter((v) => v % 2 === 0).map((v) => v * 2);
console.timeEnd("Both");
// console.log(biga);

console.time('Reduce')
bigArray.reduce((acc, cur) => {
  if (cur % 2 === 0) {
    acc.push(cur * 2);
  }
  return acc;
},[]);
console.timeEnd('Reduce')

// flat Sum
const flatSum = matrix.reduce((acc, cur) => {
  return acc + cur.reduce((a, b) => a + b);
}, 0);
console.log(flatSum);

// new matrix reduce added

const numbers = [1, 2, 3, 4, 5];

// Mapped
const squares = numbers.reduce((acc, cur) => {
  acc.push(cur * cur);
  return acc;
}, []);
console.log(squares);

// Filter
const odds = numbers.reduce((acc, cur) => {
  if (cur % 2 === 1) {
    acc.push(cur);
  }
  return acc;
}, []);
console.log(odds);

// Big Array
const bigArray = [];
for (let i = 0; i < 5000000; i++) {
  bigArray.push(i);
}
// console.log(bigArray);

// Map and filter-chain - Time Efficience
console.time("Both");
const biga = bigArray.filter((v) => v % 2 === 0).map((v) => v * 2);
console.timeEnd("Both");
// console.log(biga);

console.time('Reduce')
bigArray.reduce((acc, cur) => {
  if (cur % 2 === 0) {
    acc.push(cur * 2);
  }
  return acc;
},[]);
console.timeEnd('Reduce')
