// SUPER METHOD
class Shape{

  paint(){
    console.info('Paint Shape')
  }
}



class Circle extends Shape {

  paint(){
    super.paint() // memanggil paint() method yang ada di parent class
    console.info('Paint Circle')
  }
}


const shape1 = new Shape()
shape1.paint()

const circle = new Circle()
circle.paint()


console.info(shape1)
console.info(circle)