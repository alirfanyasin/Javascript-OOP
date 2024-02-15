// KONSEP PROTOTYPE
function Person(firstName, lastName){
  this.firstName = firstName
  this.lastName = lastName
  this.sayHello = function(name){
    console.info(`Hello ${name}, nama saya ${firstName} ${lastName}`)
  }
}

// Instance
let irfan = new Person('Irfan', 'Yasin')
let dika = new Person('Dika', 'Hermawan')

console.info(irfan)
console.info(dika)