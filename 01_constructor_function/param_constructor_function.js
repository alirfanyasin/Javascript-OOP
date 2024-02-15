// PARAMETER CONSTRUCTOR FUNCTION
function Mahasiswa(firsName, lastName){
  this.firsName = firsName;
  this.lastName = lastName;
  this.nim;
  this.intro = function(name){
    console.info(`Hello ${name}, Nama saya ${firsName}`)
  }
}



let MhsIrfan = new Mahasiswa('Irfan', 'Yasin');
MhsIrfan.nim = '1203220158'
MhsIrfan.intro('Rizal');

console.log(MhsIrfan)