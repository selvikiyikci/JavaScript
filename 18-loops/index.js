// let  fruits = ["Apple", "Pear", "Banana", "Orange", "Watermelon"];

// for(let i = 0; i < fruits.length; i++) {

// }
// //! O'dan 100'e kadar sayıları yazdır
// for(let i =0; i < 100; i = i + 2){
//     console.log(i);
// }
//!  sayı toplama
// let sayilar = [10, 20, 5, 50, 100, 200];

// let total = 0;
// for(let i = 0; i < sayilar.length; i++) {
//     console.log(total = total + sayilar[i]);
// }

//!kısa yol
// let sayilar = [10, 20, 5, 50, 100, 200];

// let total = 0 ;
// for (let i in sayilar){
//     console.log(total += sayilar[i]);

// }
// let sayilar = [10, 20, 5, 50, 100, 200];
// let total = 0 ;

// for(sayi of sayilar){
//     console.log(total += sayi);
// }

//çoklu kullanıcı
let users = [
    {
        "id": "1",
        "ad": "Emin",
        "soyad": "Başbayan",
        "email": "basbayanemin@gmail.com",
        "yas": 25
    },
    {
        "id": "2",
        "ad": "Nur",
        "soyad": "Başbayan",
        "email": "basbayanemin@gmail.com",
        "yas": 25
    },
    {
        "id": "3",
        "ad": "Bedirhan",
        "soyad": "Başbayan",
        "email": "basbayanemin@gmail.com",
        "yas": 25
    }
]

for (let i = 0; i <  users.length ; i++) {
    console.log(users[i].ad);
}






