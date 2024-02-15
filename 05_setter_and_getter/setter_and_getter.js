// SETTER AND GETTER
class Person{
  constructor(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
  }

  // Getter 
  get fullname() {
    return `${this.firstName} ${this.lastName}`
  }


  set fullname(value){
    const result = value.split(" ")
    this.firstName = result[0]
    this.lastName = result[1]
  }
}


const irfan = new Person('Irfan', 'Yasin');
console.info(irfan)

console.log(irfan.fullname)

irfan.fullname = "Herman Hidayat"
console.log(irfan)
