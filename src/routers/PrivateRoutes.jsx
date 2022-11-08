import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export const PrivateRoutes = ({ children }) => { //el children es información de un usuario q se almacena en el contexto....
  // Colocar el context creado en el archivo 'AuthContext.jsx'
  const { user } = useContext(AuthContext);
// El authcontext recibe la información del usuario, en este caso son dos propiedades

  // en caso de q el usuario este logeado se manda un childres, el children es la información del ususario, en caso de q no, se redirige al home
  return user.isLogged
          ? children 
          : <Navigate to='/login' />
}
