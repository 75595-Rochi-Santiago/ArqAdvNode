const { application } = require('express')
const express = require('express')
const controller=require('../controller/users')

const router = express.Router()

function set() {
       router.get('/usuarios/', controller.getUsers)
       router.get('/usuarios/generar/:cant?',controller.generateUsers)
       router.post('/usuarios/:id?',controller.postUser)
       router.put('/usuarios/:id',controller.putUser)
       router.delete('/usuarios/:id',controller.deleteUser)
       return router
}

module.exports={
       set,
       notfound: controller.notfound
}