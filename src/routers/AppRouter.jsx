import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { TodosScreen } from "../pages/TodosScreen"
//import {  } 

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/login' element={ 
          <PublicRoutes>
            {/* Colocar el componente a proteger */}
            <Login/>
          </PublicRoutes>
        } />

      <Route path='/registro' element={ 
          <PublicRoutes>
            {/* Colocar el componente a proteger */}
            <Register/>
          </PublicRoutes>
        } />

        <Route path='/*' element={
          <PrivateRoutes>
            {/* Proteger las rutas privadas*/}
              <TodosScreen/>

          </PrivateRoutes>
        } />

      </Routes>
    </BrowserRouter>
  )
}
