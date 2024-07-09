//! fonksiyonlar kendi scope alanlarını oluşturur.
//! var ile if block içerisinde oluşturmaz.
//! let ve const ile block içi scope oluşumu sağlanır.



let kullanici = "global scope : Emin";

function isimYazdir(){
    var kullanici = "function scope : Nur";
    console.log(kullanici);
}
if(true){
    let kullanici = "if scope : Yasin";
    console.log(kullanici);
}

console.log(kullanici);
isimYazdir();





//var değişkeniyle global scopeda kullaniciyi yazdırabiliriz ve aynı zamanda fonksiyonda da kullanici isminde değişken 
//oluşturup kullanabiliriz.

/* function isimYazdir2(){
    console.log(kullanici);
}
// Burada da direkt kullaniciyi global scopedan alır.
isimYazdir2();

 */