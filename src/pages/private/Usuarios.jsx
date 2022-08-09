import useAuth from "../../hooks/useAuth"
import { Navigate } from 'react-router-dom';
const Usuarios = () => {

  const { auth } = useAuth();

  return (
    <>
      {auth.tipo === 'admin' ? <h1>Desde Usuarios</h1> : <Navigate to={'/utcstudent'} />}
    </>
  )
}

export default Usuarios