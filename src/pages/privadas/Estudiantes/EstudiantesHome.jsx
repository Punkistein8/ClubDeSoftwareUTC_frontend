
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from 'react-router-dom'


const EstudiantesHome = () => {
  const { auth, cargando } = useAuth();
  const { nombre } = auth;
  const navegar = useNavigate();

  return (
    <>
      {auth.tipo === 'usuario' ? <h1>Desde Home Students</h1> : navegar('/admin')}
    </>
  )
}

export default EstudiantesHome 