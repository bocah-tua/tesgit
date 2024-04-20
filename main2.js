function nilaiAcak() {
    var nilai = [];
    for (var i = 0; i < 100; i++) {
        nilai.push(Math.floor(Math.random() * 50) + 1);
    }
    return nilai;
}
console.log( "ini adalah array dengan nilai acak "+ nilaiAcak());
// let randomVal = nilaiAcak()
// console.log(randomVal)


function cekGanjilGenap(array) {
    let ganjil =[]
    let genap =[]
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 == 0){
            genap.push(array [i])
        }else{
            ganjil.push(array [i])
        }
    }
    return {ganjil,genap}
}
let a = cekGanjilGenap(nilaiAcak()); //atau dengan variabel
let hasilGanjil = a.ganjil;
let hasilGenap = a.genap;

console.log("array ganji "+ hasilGanjil)
// console.log (a.ganjil)
console.log("array genap " + hasilGenap)
// console.log (a.genap)



function minMax(array){
    let nilaiMin = array[0]
    let nilaiMax = array[0]
    for (let i = 0 ; i < array.length ; i++){
        if(array[i] < nilaiMin) {
            nilaiMin =array [i];
        }
        if(array[i] > nilaiMax){
            nilaiMax = array[i];
        }
    }
    return {nilaiMin , nilaiMax}
}
let e = minMax(hasilGanjil);
let f = e.nilaiMin;
let g = e.nilaiMax;
console.log("nilai min array ganjil "+ f);
console.log("nilai max array ganjil "+ g);

let totalGanjil = 0;
for (let i = 0 ; i  < hasilGanjil.length ; i++){
    totalGanjil = totalGanjil + hasilGanjil[i];
}
console.log("nilai total array ganjil = " + totalGanjil )
console.log("nilai average array ganjil = " + totalGanjil/hasilGanjil.length )



let h = minMax(hasilGenap);
let i = h.nilaiMin;
let j = h.nilaiMax;
console.log("nilai min array genap " + i);
console.log("nilai max array genap " + j);
let avrg1 = totalGanjil/hasilGanjil.length

let totalGenap = 0;
for (let i = 0 ; i  < hasilGenap.length ; i++){
    totalGenap = totalGenap + hasilGenap[i];
}
console.log("nilai total array genap = " + totalGenap )
console.log("nilai average array genap = " + totalGenap/hasilGenap.length )
let avrg2 = totalGenap/hasilGenap.length

//perbandingan
function perbandingan(a, b) {
    if(a > b){
        console.log("array ganjil = " + a +" _lebih besar dari array genap = " +b);
    }else{
        console.log("array ganjil = " + a + " _lebih kecil dari array genap = " +b);
    }

}

perbandingan(f, i);//perbandingan nilai min kedua array
perbandingan(g, j);//max
perbandingan(totalGanjil,totalGenap);//total
perbandingan(avrg1,avrg2)//average