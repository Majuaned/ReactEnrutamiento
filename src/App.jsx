import { AuthContext } from './context/AuthContext'
import { AppRouter } from './routers/AppRouter'
import './App.css'
import { useReducer } from 'react';
import {authReducer} from './reducers/authReducer'

const init = ()=> {
  return JSON.parse(localStorage.getItem('user')) || {isLogged:false};
} 
        
function App() {
  // esta constante tiene 2 propiedades, isLogged y username, de la cual se trabajará con isLogged
  const [user,authDispath] = useReducer(authReducer,init)      
  
 /*  const user = {
    isLogged: false,
    username: 'zeus'
  } */

  const tasks = [
    {
      id: 1,
      title: 'Completar prácticos',
      description: 'Completar el práctico de useContext'
    }
  ];

  return (
    <AuthContext.Provider value={{
      user,
      authDispath
    }}>
      <AppRouter />
    </AuthContext.Provider>
  )
}

export default App
