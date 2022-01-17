const user=require('../generador/user')
const util=require('../util/utils')
const users=require('../model/users')
const usuarios=users.usuarios

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
              usuario.id=usuarios.length + 1
              usuario.fecha=util.getFecha()
              usuarios.push(usuario)
              res.send('ok post')
       }

//PUT - ACTUALIZAR USUARIOS
const putUser=(req,res)=>{
              let id = parseInt(req.params.id)
              let usuario= req.body
              usuario.id=id;
              usuario.fecha=util.getFecha()
              let index = util.getIndex(id,usuarios)
              usuarios.splice(index,1,usuario)

              res.send('ok put')
       }

//DELETE - ELIMINAR USUARIO
const deleteUser=(req,res)=>{
              let id = parseInt(req.params.id)
              let index = util.getIndex(id,usuarios)
              let usuario = usuarios.splice(index,1)
              res.send(usuario)
       }

module.exports={
       getUsers,
       generateUsers,
       postUser,
       putUser,
       deleteUser
}