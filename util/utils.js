const getFecha= ()=>new Date().toLocaleString()

const getIndex = (id,usuarios)=> usuarios.findIndex(usuario=>usuario.id===id)


module.exports={
       getFecha,
       getIndex
}