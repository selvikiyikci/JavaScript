// let sayi1 = 10;
// let sayi2 = 20;
// let toplam = sayi1 + sayi2;
// let sayi3 = 20;
// let sayi4 = 30;
// let toplam2 = sayi3 + sayi4;
// console.log(toplam2);
// console.log(toplam);
/* 
function sayiToplami(sayi1, sayi2){
    let toplam = sayi1 + sayi2;
    console.log(toplam);
}
sayiToplami(10, 20)
sayiToplami(20, 30) */

//!Gelişmiş toplama fonksiyonu
/* let toplam = 0;
function sayiToplami(...sayilar){
    for(let sayi of sayilar) {
       toplam += sayi;
    }
}
sayiToplami(10,20,30,40,50,60,5,2,3, 100)
console.log(toplam); */
//shift + alt + a = kısa yol command line

//! Yaş hesaplama
function yasHesapla(dogumYili){
 return new Date().getFullYear() - dogumYili;
}
const hesapla = yasHesapla(1999);
console.log(hesapla);
  