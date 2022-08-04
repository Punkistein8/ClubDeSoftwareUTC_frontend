import { useContext } from 'react'
import AuthContext from '../context/AuthProvider.jsx'

const useAuth = () => { // Hook que devuelve un objeto con los datos de autenticación y una funcion para cambiar el estado de autenticacion
  //useContext() es un hook que nos permite acceder a los diferentes contextos de la aplicacion Y SUS VALORES
  return (useContext(AuthContext)); //Retorna el contexto de autenticacion que se creo en AuthProvider.jsx y se puede usar desde cualquier componente
}

export default useAuth;