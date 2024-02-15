// INSTANCE OF
class Employee{

}

class Manager extends Employee{

}

const budi = new Employee()
const eko = new Manager()

console.log(budi instanceof Employee) // true
console.log(budi instanceof Manager) // false
console.log(eko instanceof Employee) // true
console.log(eko instanceof Manager) // true

// console.log(typeof budi) // object
// console.log(typeof eko) // object