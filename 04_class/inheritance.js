// CLASS INHERITANCE
class Employee {
  // Method
  sayHello(name) {
    console.log(`Hello ${name}, my name is Employee ${this.name}`)
  }
}


class Manager extends Employee {
  // Method
  sayHello(name) {
    console.log(`Hello ${name}, my name is Manager ${this.name}`)
  }
}

const irfan = new Employee()
irfan.name = 'Irfan'
irfan.sayHello('Joko')
console.log(irfan)



const dora = new Manager()
dora.name = 'Dora'
dora.sayHello('Budi')
console.log(dora)