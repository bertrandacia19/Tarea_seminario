import express from 'express' 
import{Empleado,Departamento,departamentos,empleados,eliminardepa,eliminarempleado} from '../controllers/authController.js'

const router = express.Router()

// rutas para las vistas

router.get('/', (req, res) => {
    res.render('index')
})
router.get('/Empleado',empleados,departamentos, (req, res) => {
    res.render('Empleado',{empleados:req.empleados, departamentos:req.departamentos})
})

router.get('/Departamento',departamentos, (req, res) => {
    res.render('Departamento',{departamentos:req.departamentos})
})



// rutas para los controllers
router.post('/Empleado',Empleado)
router.post('/eliminarempleado',eliminarempleado)

//departamento
router.post('/Departamento',Departamento)
router.post('/eliminardepa',eliminardepa)

//rutas para los controles
export default router 