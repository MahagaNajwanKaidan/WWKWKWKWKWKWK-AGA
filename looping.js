//ada lima macam bentuk perulangan di Java script. Secara umum, perulangan dibagi menjadi 2
// yaitu counted loop and Uncounted loop
// perbedaan nya:
//1. counted loop merupakan perulangan yang jelas dan sudah tentu banyak perulangannya
//2.counted loop merupakan perulangan yang tidak jelas berapa kali harus menggulang.
//contoh
// for(i = 1; i<10; i++){
//     PushUp();
// }

// //contoh unconted Loop
// let bosan;

// while(bosan == false){
//     PushUp();
// }


//Macam macam penilain counted loop:
//1. perulangan For
//2. Perulangan ForEach
//3. Perulangan repeat

//macam macam perulangan uncounted loop:
//1. Perulanagan While
//2. Perulangan Do/While


// perulangan FOR
// Perulangan for merupakan perulangan yang termasuk dalam counted loop, karena sudah jelas beberapa kali akan mengulang sebuah perulangan
//contoh
// for(let i =0; i <1000; i++){
//     document.write(`<p> Perulangan ini berulang $ {i}kali.</p>`)
// }


//perulangan WHILE
//perulangan while merupakan perulangan yang termasuk kedalam perulangan unconted loop namun, 
//perulangan while juga dapat masuk atau menjadi perulangan yang counted loop dengan memberikan sebuah counter didalamnya

//contoh
// let ulang= confirm("apakah anda mau mengulang?");
// let counter = 0;

// while(ulang){
//     let jawab = confirm("Apakah Anda Mau mengulang?");
//     counter++;
//     if(jawab == false){
//         ulang = false;
//     }

// }

// document.write("Perulangan sudah dilakukan sebanyak " + counter + " Kali ");

//Perulangan DO/While
//perulangan do/While sama seperti perulangan while.


// Perbedaan nya adalah perulangan do/while akan dilakukan perulangan 
//sebanyak 1 kali terlebih dahulu lalu mengecek kondisi yang ada di dalam kurung while.
// do{
//     //code
// }while(kondisi);

//Contoh
// var ulang = confirm("Apakah anda mau mengulang?");
// var counter = 0;

// do{
//     counter++;
//     ulang = confirm("Apakah anda mau mengulang?");
// }while(ulang);

// document.write("Perulangan yang sudah dilakukan sebanyak " + counter + " Kali ");
//TUGAS 
let sum= "";
while(true){
    let value = prompt("masukkan sebuah huruf",'');
    if(!value) break;

    sum+= value;
}

alert('sum : '+ sum);