
import useAuth from "../../../hooks/useAuth";
import { Navigate } from 'react-router-dom'


const EstudiantesHome = () => {
  const { auth, cargando } = useAuth();
  const { nombre } = auth;

  return (
    <>
      {auth.tipo === 'usuario' ? <h1>Desde Home Students</h1> : <Navigate to={'/admin'} />}
    </>
  )
}

export default EstudiantesHome 