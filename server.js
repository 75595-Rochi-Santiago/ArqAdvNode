const express = require('express')
const router=require('./router/users')
const compression=require('compression')

const app = express();
//middleware
app.use(express.json())
app.use(compression())

app.use('/api', router.set())

//Rutas no implementadas
app.get('*', router.notfound)
app.put('*', router.notfound)
app.post('*', router.notfound)
app.delete('*', router.notfound)

const PORT=8080
app.listen(PORT,err=>{
       if(err) return console.log(`Error en servidor: ${err}`)
       console.log("Servidor corriendo en puerto: ", PORT)
})