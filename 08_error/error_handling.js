// ERROR HANDLING
class MathUtil {

  static sum(...numbers){
    if(numbers.length === 0){
      throw new Error('Total parameter harus lebih dari 0')
    }

    let total = 0;
    for (const number of numbers) {
      total += number
    }
    return total
  }

}


try{
  console.log(MathUtil.sum())
  // console.log(MathUtil.sum(1,2,3,4,5))

}catch(error){
  console.error(`Terjadi Error : ${error.message}`)

}finally{ // selalu di eksekusi meskipun error atau tidak error
  console.log('Hello')
}
