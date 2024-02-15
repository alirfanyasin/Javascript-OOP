// PRIVATE CLASS FIELD
class Counter {
  #counter = 0 // private field

  increment() {
    this.#counter++
  }

  decrement() {
    this.#counter--
  }

  get(){
    return this.#counter;
  }
}

const counter = new Counter()

// Mengubah nilai counter 
// counter.counter = 100; // tidak dapat diubah karena private

counter.increment()
counter.increment()

console.log(counter.get())