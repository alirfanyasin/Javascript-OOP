// CONSTRUCTOR INHERITANCE
function Employee(firstName){
  this.firstName = firstName;
  this.lastName;
  this.sayHello = function(name) {
    console.info(`Hello ${name}, nama saya ${this.firstName} ${this.lastName}`)
  }
}


// Manager Extends to Employee
function Manager(firstName, lastName) {
    Employee.call(this, firstName);
    this.lastName = lastName;
}

// Object definition
const rizal = new Employee('Rizal')
rizal.lastName = 'Muhammad'
rizal.sayHello('Hendri')

const irfan = new Manager('Irfan', 'Yasin')
console.info(irfan)
console.info(rizal)