//! Asenkron Programlama
/* console.log("1. işlem");
setTimeout(() => {
    console.log("2. işlem");
}, 2000);
console.log("3. işlem"); */

//! callback function
/* 
function sayHello(name, callback){
    console.log(`Hello ${name}`);
    callback();
}
function goodBye() {
    console.log("Goodbye");
}

sayHello("Emin", goodBye); */

//GET : Sunucudan veri almak için kullanılır.
//POST : Sunucuya veri göndermek için kullanılır.
//PUT : Sunucudaki mevcut verileri göndermek için kullanılır.
//DELETE : Sunucudan veri silmek için kullanılır.

//! AJAX and HTTP requests
/* let myList;
const xhr = new XMLHttpRequest();
xhr.open("GET", 'https://jsonplaceholder.typicode.com/users');
xhr.onload = function (){
    const response = xhr.responseText;
    if(xhr.status=== 200){
     myList = JSON.parse(response); 
    }
    else {
        console.log("Error occurred" + xhr.status);
    }
     
};
xhr.send();
 */

//! Promise
/* function getRandomNumber(){
return new Promise((resolve, reject) => {
const number = Math.floor(Math.random()*100  );
if(number % 2  === 0) {
 resolve(number);
}
else {
   reject(`Hata: ${number} sayısı tek bir sayıdır.`)
}
});
}
getRandomNumber()
.then(number=> console.log("Çözümlendi:" + number))
.catch(error   => console.log(error));
 */

//!Fetch
/* 
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log(error)); */

// Sürekli then then oluşturmak kötü bir görüntü oluşturabilir. Bu yüzden async ve await kullanırız.

//! Async & Await
/* async function getData(){
const response = await fetch('https://jsonplaceholder.typicode.com/users');
const data =  await response.json();
console.log(data);
}
getData()
 */

const getData = async () => {
    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);

    }
    catch {
        console.log(error);
    }
};

getData()



