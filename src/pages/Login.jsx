import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'
// Diseñar el formulario de inicio de sesión y programar los eventos de formulario
// Como así también el envío de los datos al servidor
export const Login = () => {
  return (
<>

<main className="form-signin w-100 m-auto">
  <form>
    <img className="mb-4" src='' alt="" width="72" height="57"/>
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

    <div className="form-floating">
      <input type="text" name='usuario' className=" form-control" id="floatingInput" placeholder="name@example.com" onChange=''/>
      <label for="floatingInput">Usuario</label>
    </div>
    <div className="form-floating">
      <input type="password" onChange='' name="password" className="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>

    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>
    <button NavLink=''  className="w-100 btn btn-lg btn-primary" onClick='' type="submit">Sign in</button>
    <p className="mt-5 mb-3 text-muted">&copy; 20172022</p>

  </form>
</main>

</>
  )
}
