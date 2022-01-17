const faker = require('faker')


function get() {
       let user ={
              nombre:faker.name.firstName(),
              apellido:faker.name.lastName(),
              email:faker.internet.email(),
              website:faker.internet.url(),
              image:faker.image.avatar()
       }
       return user
}

module.exports={
       get
}