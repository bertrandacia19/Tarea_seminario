import './loadEnv.js'
import express from 'express' 
import  router  from './router/router.js'

//Puerto donde escucha expreess
const PORT = 11000

//Aplicacion (server)de express
const app = express()

//Definir  el sistema de vistas (plantillas)a autilizar
app.set('view engine','pug')

//Definir la ubicacion de los archivos publicos
app.use(express.static('public'))
// Configuracion para procesar los formularios
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//routers
app.use('/', router)

//servidor de express escuchando en el puerto
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})


