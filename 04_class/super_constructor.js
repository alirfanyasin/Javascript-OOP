// SUPER CONSTRUCTOR
class Employee {
  constructor(name) {
    this.name = name
  }

  sayHello(name) {
    console.log(`Hello ${name}, my name is ${this.name}`)
  }
}


// Class Manager Akan memiliki Constructor turunan dari constructor employe
class Manager extends Employee {
  constructor(firstName, lastName){
    super(firstName)
    this.lastName = lastName
  }

  sayHello(name) {
    console.log(`Hello ${name}, my name is ${this.name}`)
  }
}


const irfan = new Employee('Irfan')
irfan.sayHello('Nafita')

const kurniawan = new Manager('Muhammad', 'Herman')
kurniawan.sayHello('Derina')


console.log(irfan)
console.log(kurniawan)


