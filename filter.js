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

// Filtering out non-Senior Citizens

const seniorCustomers = custormers.filter((customer) => {
  return customer.age >= 60;
});

console.log(seniorCustomers);

const juniorCustomers = custormers.filter((customer) => {
  return customer.age < 60;
});

console.log(juniorCustomers);

