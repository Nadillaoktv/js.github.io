// 1. Mencari Keliling Persegi Panjang
// Memasukan nilai panjang, lebar
// Menghitung rumus: 2*P 2*L
// Menampilkan Hasil

// Memasukan Nilai Panjang, lebar
     let panjang = 150;
     let lebar = 40;

// Menghitung Rumus
// let hasil = 2 * panjang + 2 * lebar;

// Menampilkan hasil 
// console.log("Keliling persegi panjang adalah: " + hasil)

// 2. Luas Lingkaran 

// Tentukan phi dan r
    let phi = 3.14;
    let r = 10;

    let hasilL = phi * r * r;

     console.log("hasil nya: " + hasilL)

     let Lp = 64;

    let sisi =  Math.sqrt(Lp);

    let hasilNya = 4 * sisi;

     console.log (hasilNya)

    //syarat umur membuat KTP
    //input
let umur = 18;

// proses/ logika
if(umur >= 17){
    result = "Membuat KTP";
} else {
    result = "Belum bisa membuat KTP";
}

// output
console.log(result)

// pelajaran
let PABP = 86;
let Math = 86;
let DPK = 77;

let rata2 = (PABP + Math + DPK) / 3;

// logika 
if(rata2 >= 80 && rata2 <= 100) {
    grade = "A";
}

else if(rata2 >= 75 && rata2 <= 80) {
    grade = "B";
}

// output 
console.log(grade)