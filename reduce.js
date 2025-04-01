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


// customer avg age

let custormers = [
  {
    id: 1,
    f_name: "abby",
    l_name: "thomas",
    gender: "M",
    married: true,
    age: 32,
    expense: 500,
    purchased: ["shampoo", "Toys", "Books"],
  },
  {
    id: 2,
    f_name: "jerry",
    l_name: "tom",
    gender: "M",
    married: true,
    age: 64,
    expense: 100,
    purchased: ["stick", "blade"],
  },
  {
    id: 3,
    f_name: "Dianna",
    l_name: "Cherry",
    gender: "F",
    married: true,
    age: 22,
    expense: 1500,
    purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
  },
  {
    id: 4,
    f_name: "Dev",
    l_name: "Currain",
    gender: "M",
    married: true,
    age: 82,
    expense: 90,
    purchased: ["Book"],
  },
  {
    id: 5,
    f_name: "Maria",
    l_name: "Gomes",
    gender: "F",
    married: false,
    age: 7,
    expense: 300,
    purchased: ["Toys"],
  },
];

let count = 0;
const total = custormers.reduce((accumulator,customer,currentIndex,array)=>{
  if(customer.purchased.includes('Book')){
    accumulator = accumulator + customer.age;
    count = count +1
  }
  return accumulator
},0)


const avgCustBookPurched = Math.floor(total / count)
console.log(total);
console.log(avgCustBookPurched);
 
