// METHOD CONSTRUCTOR FUNCTION
function Mahasiswa() {
  // Properti
  this.name;
  this.nim
  this.email
  // Method
  this.intro = function(name){
    console.info(`Halo, nama saya ${name}, dengan NIM ${this.nim}`)
  }
}

let MhsIrfan = new Mahasiswa()
MhsIrfan.name = 'Irfan Yasin'
MhsIrfan.nim = '1203220158'
MhsIrfan.email = 'irfanyasin@telkomuniversity.student.ac.id'
MhsIrfan.intro('Yasin');

console.log(MhsIrfan)