

import con from '../database/connection.js'

//departamento 
export const Departamento =(req, res) => {
    const {nombre_depart,descripcion_depart } = req.body
    // construir la data que será insertada
    const data = {
        nombre_depart:nombre_depart,
        descripcion_depart:descripcion_depart,
    }
    // construir el query con la sintaxis INSERT
   
    con.query('INSERT INTO Departamento SET ?', data, (err, result) => {
        if (err) {
            console.log('Ocurrio un error al insertar el registro')
            return
        }
        res.redirect('/Departamento')
    })
}

export const departamentos=(req, res,next) => {
    
    con.query('SELECT * FROM Departamento', (err, result) => {
        if (err) {
            console.log('Ocurrio un error al mostrar la información')
            //console.log(err);
            return
        }
        req.departamentos = result
        next()
        
    })

}
export const eliminardepa = (req, res) => {
    const {id_depart} = req.body

    con.query('DELETE FROM Departamento WHERE id_depart = ?',id_depart, (err, result) => {
        if (err) {
            console.log(`Ocurrio un error al eliminar el departamento ${err}`)
            return
        }

        res.redirect('/Departamento')
    })
}


export const actualizardep = (req, res) => {
    const { id_depart,nombre_depart, descripcion  } = req.body

    if (!id_depart || !nombre_depart || !descripcion){
        console.log(`No se proporcionarion todos los datos necesarios para actualizar el departamentO ${err}`)
        return res.redirect('/departamentos')
    } 

    // Construir la data que sera insertada
    const data = {
        nombre_depart:nombre_depart,
        descripcion_depart:descripcion_depart,
    }

    con.query('UPDATE Departamento SET ? WHERE id_depart = ?', [data,id_depart], (err, result) => {
        if (err) {
            console.log(`Ocurrio un error al actualizar los datos del departamento ${err}`)
            return
        }

        res.redirect('/departamentos')
    })
}




//empleado 
export const Empleado =(req,res)=>{
    const {nombre_emp,apellido_emp,edad_emp,telefono_emp,corre_emp,direccion_emp, id_depart}= req.body
    // construir la data que será insertada
    const data = {
        nombre_emp:nombre_emp,
        apellido_emp:apellido_emp,
        edad_emp:edad_emp,
        telefono_emp:telefono_emp,
        corre_emp:corre_emp,
        direccion_emp:direccion_emp,
        id_depart: id_depart
    }
    // construir el query con la sintaxis INSERT
    // consultas preparadas
    if(!Departamento){
        console.log(`No existen departamentos`)
        return res.redirect('/empleados')
    }
    con.query('INSERT INTO Empleado SET ?', data, (err, result) => {
        if (err) {
            console.log('Ocurrio un error al insertar el registro')
            return
        }

        res.redirect('/Empleado')
    })
}

export const empleados=(req, res,next) => {
    
    con.query('SELECT * FROM Empleado', (err, result) => {
        if (err) {
            console.log('Ocurrio un error al mostrar la información')
            //console.log(err);
            return
        }
        req.empleados = result
        next()
        
    })

}

export const eliminarempleado= (req, res) => {
    const {id_emp} = req.body

    con.query('DELETE FROM Empleado WHERE id_emp = ?',[id_emp], (err, result) => {
        if (err) {
            console.log(`Ocurrio un error al eliminar el departamento ${err}`)
            return
        }

        res.redirect('/Empleado')
    })
}