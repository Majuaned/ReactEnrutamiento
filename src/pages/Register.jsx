import React from 'react'
import './Register.css'
import { NavBar } from '../ui/NavBar';

// Diseñar el formulario de inicio de sesión y programar los eventos de formulario
// Como así también el envío de los datos al servidor
export const Register = () => {
  return (
    <>
    <NavBar/>
    <div className="modal-body">
        <form className='form-control p-10 d-block'>
          <label htmlFor=""><h1>Registro de Usuario</h1></label>
          <br /><br /><br />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Correo electronico</label>
            <input type="email" className="form-control" id="email" placeholder="Ingrese su correo electronico" />
          </div>
          <div className="mb-3">
            <label htmlFor="Usuario" className="form-label">Nombre de Usuario</label>
            <input type="text" className="form-control" id="username" placeholder="Ingrese un nombre de usuario" />
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="form-label">Contrasena</label>
            <input type="password" className="form-control" id="password" placeholder="Ingrese la contraseña" />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordConfirm" className="form-label">Confirmar Contraseña</label>
            <input type="password" className="form-control" id="passwordConfirm" placeholder="Confirme contraseña" />
          </div>
          <button type="submit" class="btn btn-primary">Enviar Registro</button>
          {/* <div className="alert alert-primary" role="alert" id="alertRegister"  /> */}
        </form>
      </div>
    </>
  )
}
