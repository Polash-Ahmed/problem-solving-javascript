// class BankAccount {
//     constructor(owner,balance){
//         this.owner = owner;
//         this.balance = balance;
//     }
//     deposit(amount){
//         this.balance +=amount;
//         return this.balance
//     }
//     withdraw(amount){
//         if(this.balance>=amount){
//             this.balance -= amount
//             return amount
//         }
//         else{
//             return 'Insufficient Balance'
//         }
//     }
// }

// const myAccount = new BankAccount('lew',5000)
// myAccount.deposit(2000);
// myAccount.withdraw(7001)
// console.log(myAccount);
// console.log(myAccount.withdraw());
// console.log(myAccount.deposit());

class Hotel {
  constructor(name, rooms, cost) {
    this.name = name;
    this.rooms = rooms;
    this.cost = cost;
  }

  getName() {
    return this.name;
  }
}

const hotel = new Hotel('projapoti', 20, 2000);
console.log(hotel.getName());

class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
  getSalary() {
    return this.salary;
  }
}

const employee = new Employee('John', 'Manager', 5000);
console.log(employee.getSalary());

class Library {
  constructor(name) {
    this.books = ['The Great Gatsby', 'To Kill a Mockingbird', '1984'];
    this.name = name;
  }
  addBook(book) {
    this.books.push(book);
  }
  hasBook(book1) {
    return this.books.includes(book1);
  }
}

const library = new Library('City Library');
library.addBook('The Great Gatsby2');
console.log(library.books);
console.log(library.hasBook('1984'));

class ShoppingCart {
  constructor(products, totalPrice) {
    this.products = products;
    this.totalPrice = totalPrice;
  }
  addToCart(name, price) {
    this.products.push(name);
    this.totalPrice += price
  }
  getTotalPrice(){
    return this.totalPrice
  }
}

const shopping = new ShoppingCart([],0)
shopping.addToCart("mobile",20500)
console.log(shopping.getTotalPrice());
