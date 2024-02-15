// PRIVATE METHOD
class Person {
  say(name) {
    if(name) {
      this.#sayWithName(name)
    }else {
      this.#sayWithoutName()
    }
  }
 

  // Private Method
  #sayWithName(name) {
    console.log(`Hello ${name}`)
  }

  #sayWithoutName() {
    console.log('Hello')
  }

}


const eko = new Person()
eko.say('Diki')

// eko.#sayWithoutName(); // error