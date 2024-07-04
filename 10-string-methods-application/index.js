let url="https://www.bilgisayargenetigi.com";
let youtube ="Bilgisayar Genetiği";
let result;

//1-Karakter sayısı bulmalıyım
result = url.length;
result = youtube.replace(" ","").length;
//2- Youtube değişkeni kaç karakterden oluşuyor.
result = youtube.split(" ").length;
result = url.split(".").length;


//3- Kanal adı başlangıç kontrol
result = youtube.startsWith("Bilgisayar")
if (result){
    console.log("yapılacaklar");
}
else {
    console.log("false döndü");
}
console.log(result);
//4- Kelime kontrolü
if(youtube.indexOf("Genetiği") > -1){
console.log("çalıştı");
}
else {
    console.log("çalışmadı");
}

//5- Url ve Youtube değişken birleştir.
youtube = youtube.toLowerCase().replace(" ", "-");
//url = url.replace("com", "com/");
// const newUrl = url.replace(url, url + youtube);
let newUrl = `${url}/${youtube}`
console.log(newUrl);