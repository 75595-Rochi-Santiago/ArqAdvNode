const Joi = require("@hapi/joi");

function validar(usuario, required=true) {
       const userSchema = Joi.object({
              nombre: required ? Joi.string().alphanum().required() : Joi.string().alphanum(),
              apellido:required ? Joi.string().alphanum().required() : Joi.string().alphanum(),
              email:required ? Joi.string().email().required() : Joi.string().email(),
              website:required ? Joi.string().uri().required(): Joi.string().uri()
       })

       const {error}=userSchema.validate(usuario)

       if(error){
              return {validacion: false, error}
       }else{
              return {validacion: true}
       }
}

module.exports={
       validar
}