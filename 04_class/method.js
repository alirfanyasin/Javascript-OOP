// METHOD
class Person{
  constructor(name, gender){
    this.name = name
    this.gender = gender
    this.address;
    // this.sayHello = function(name) {
    //   console.log(`Hello ${name}, my name is ${this.name}`)
    // }
  }

  sayHello(name) {
      console.log(`Hello ${name}, my name is ${this.name}`)
  }
}


let irfan = new Person('Irfan', 'Laki-Laki')
irfan.address = 'Jl. Anonym 45 Blok K'
irfan.sayHello('Budi')