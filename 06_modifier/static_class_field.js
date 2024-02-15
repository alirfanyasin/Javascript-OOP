// STATIC CLASS FIELD
class Configuration {
  static name = 'Belajar JavaScript Dasar'
  static version = 1.0
  static author = 'Irfan Yasin'
}

const config = new Configuration() 
console.info(config) // tidak ada isi fieldnya
console.info(config.name) // undefined
console.info(Configuration.name) // Belajar Javascript Dasar (Tidak perlu instance objectnya)