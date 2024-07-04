let number1 = 10;
let number2 = 20;
let number3 = 20;
let result;


//!1-Aritmetik Operatörler 
//? + , -, /, *, %, ++, --
result = number1 + number3;
result = number1 - number3;
result = number1 / number3;
result = number1 * number3;
result = number3 % number1;
result = number1++;

//!2- Karşılaştırma Operatörleri
//? ==,  !=, ===,  >, <, , >=, <=
result = number1 == number2;
result = 10 === "10"; // 3 eşittir tip kontrolü yapar.
//console.log(result);
//3!Mantıksal Operatörler
//? &&: ve, ||: veya,  !: tersi

// iki şartı da sağlaması lazım &&
console.log(number1 !== number2 &&   number1 < number2);
 // bir şartı sağlaması yeteri ||
 console.log(number1 !== number2  ||   number1 < number2);
 // !
 console.log(!(number1 > number3) &&  number2 >= number1);



