//Arrow function
/* const sayHello = () => {
    console.log("hello");
}
sayHello()
 */
/* Eski sürümde böyle yazılabilirdi.

 const sayHello = function() {
  console.log("hello");
} */

// Bir satırda da yazılabilir.

// const sayHello = () => console.log("hello");
// Ad yazdırılan bir fonksiyon
//const sayHello = (name) => {
//  console.log(`Hello, ${name}`);
//}


// Eski sürümde böyle de yazılabilirdi.
//const sayHello = function(name) {
//  console.log(`Hello, ${name}`);
//}

//! Array methods 
//? map()
/* const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((x) => x * x);
console.log(squares); */

//? filter()
/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((x) => x % 2 === 0 );
console.log(evenNumbers); */

//? reduce()
/* const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc,x) => acc + x ,0);
console.log(sum); */

//? find()-It just gives only one number value as a solution.
/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const findNumber = numbers.find((x => x > 2));
console.log(findNumber);
 */


//? some()- It returns true or false.
/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isBigNumbersExist = numbers.some((x) => x < 5)
console.log(isBigNumbersExist); */


//? every()- Checks if all are even.
/* const numbers = [2, 4, 6, 8, 10];
const isAllEven = numbers.every((x) => x % 2 === 0);
console.log(isAllEven); */

//! Spread operator
/* const numbers = [1, 2, 3];
const numbers2 = [...numbers, 4, 5, 6];
console.log(numbers2); */
/* 
const numbers = [1, 2, 3];
const ad = (x, y, z) => x + y + z;
console.log(add(...numbers)); */

//! For object

/*  const obj1 = {name: "John", age: 30};
const obj2 = {...obj1, job: "Developer"};
console.log(obj2); // { name: "John", age: 30, job: "Developer" } */

/* const obj1 = {name: "John", age: 30};
const obj2 = {name: "Mike", job: "Developer", ...obj1};
console.log(obj2); // { name: "John", job: "Developer", age: 30 } */

//! Destructring
/* const obj = {name: "John", age: 30, job: "Developer"};
const {name, age} = obj;
const newObj = {name, age, location: "New York"};
console.log(newObj); // { name: "John", age: 30, location: "New York" } */

/* const obj = {name: "John", age: 30};
const {name : JohnName, age} = obj;
console.log(JohnName); // "John"
console.log(age); // 30 */
/* 
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5] */

//!Maps

/* const map = new Map();
map.set("name", "John");
map.set("age", 30);
map.set("job", "Developer");
/* console.log(map.get("name")); // "John"
map.delete("job");
console.log(map); // Map { 'name' => 'John', 'age' => 30 } */

/* map.forEach((value, key) => console.log(`${key}: ${value}`)); */ 

//! Sets
const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(3); // duplicate value will not be added
console.log(set.has(2)); // true
console.log(set.has(4)); // false
set.delete(2);
console.log(set); // Set { 1, 3 }
set.forEach(value => console.log(value));