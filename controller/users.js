const user=require('../generador/user')
const util=require('../util/utils')
const { usuarios }=require('../model/users')
let validaciones = require('../validaciones/user')

const getUsers=(req,res)=>{
              res.send(usuarios)
       }


//GET - GENERATE USUARIOS
const generateUsers=(req,res)=>{

              let cant = req.params.cant || 50
              for(let i=0; i<cant;i++){
                     const usuario=user.get()
                     usuario.id=i+1;
                     usuario.fecha=util.getFecha()
                     usuarios.push(usuario)
              }
              res.send(usuarios)
       }

//POST - CREATE USUARIOS
const postUser=(req,res)=>{//id no obligatorio usar ->?
              let usuario= req.body
              let val=validaciones.validar(usuario)

              if(val.validacion){
                     usuario.id=usuarios.length + 1
                     usuario.fecha=util.getFecha()
                     usuarios.push(usuario)
                     res.send('ok post')
              }else{
                     res.send(val)
              }
       }

//PUT - ACTUALIZAR USUARIOS
//const putUser=(req,res)=>{
//              let id = parseInt(req.params.id)
//              let usuario= req.body
//
//              let val=validaciones.validar(usuario)
//
//              if(val.validacion){
//                     usuario.id=id;
//                     usuario.fecha=util.getFecha()
//                     let index = util.getIndex(id,usuarios)
//                     usuarios.splice(index,1,usuario)
//                     res.send('ok put')
//              }else{
//                     res.send(val)
//              }
//       }

//PUT   - ACTUALIZACION PARCIAL

const putUser=(req,res)=>{
              let id = parseInt(req.params.id)
              let usuarioNew= req.body

              let val=validaciones.validar(usuarioNew, false)

              if(val.validacion){
                     usuarioNew.id=id;
                     usuarioNew.fecha=util.getFecha()
                     let index = util.getIndex(id,usuarios)

                     let usuario = usuarios[index]
                     let usuarioUpdate={...usuario, ...usuarioNew}//pisar atributo del primer parametro con el 2do - crea otro objeto copiado, sino seria referencia - spread operator clonador de obj- un merge entre obj
                     usuarios.splice(index,1,usuarioUpdate)
                     res.send(usuarioUpdate)
              }else{
                     res.send(val)
              }
       }

//DELETE - ELIMINAR USUARIO
const deleteUser=(req,res)=>{
              let id = parseInt(req.params.id)
              let index = util.getIndex(id,usuarios)
              let usuario = usuarios.splice(index,1)
              res.send(usuario)
       }

const notfound=(req,res)=>{
       res.send(`<h2> Ruta no implementada</h2>`)
}


module.exports={
       getUsers,
       generateUsers,
       postUser,
       putUser,
       deleteUser,
       notfound
}