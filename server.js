const express = require('express')
const router=require('./router/users')

const app = express();
//middleware
app.use(express.json())
app.use('/api', router.set())

const PORT=8080
app.listen(PORT,err=>{
       if(err) return console.log(`Error en servidor: ${err}`)
       console.log("Servidor corriendo en puerto: ", PORT)
})