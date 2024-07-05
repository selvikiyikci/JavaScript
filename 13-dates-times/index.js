let tarih = new Date();
let result;
result =  tarih.getDate();//!gün
result = tarih.getDay();//! 0= pazar 1=pazartesi
result = tarih.getFullYear(); //! yıl
result = tarih.getHours(); //! saat
result = tarih.getTime(); //!milisaniye

//! Tarihi güncelleme methotları 
/* tarih.setFullYear(2023); */
tarih.setMonth(2);
tarih.setDate(15);
result = tarih;

//!Doğum tarihi
let dogumTarihi = new Date(1991, 8, 14);
result = tarih.getFullYear() - dogumTarihi.getFullYear();


console.log(result);