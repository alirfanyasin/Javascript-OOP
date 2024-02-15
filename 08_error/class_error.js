// CLASS ERROR
class ValidationError extends Error {
  constructor(message, field) {
    super(message)
    this.field = field
  }
}


class MathUtil {
  static sum(...numbers){
    if(numbers.length === 0) {
      throw new ValidationError('Total harus lebih dari 0', 'Numbers')
    }

    let total = 0;
    for (const number of numbers) {
      total += number
    }

    return total
  }
}


// try {
//   console.info(MathUtil.sum())
// }catch(error){
//   console.error(`Terjadi Error : ${error.message}`)
// }


// Mengambil Informasi Tamabahan berupa field
try {
  console.info(MathUtil.sum())
}catch(error){
  if(error instanceof ValidationError){
    console.error(`Terjadi Error : ${error.message} dengan field ${error.field}`)
  }else {
    console.error(`Terjadi Error : ${error.message}`)
  }
}


