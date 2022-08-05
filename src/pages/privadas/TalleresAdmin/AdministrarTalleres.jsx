
import useAuth from "../../../hooks/useAuth"
import { useNavigate } from 'react-router-dom'


const AdministrarTalleres = () => {
  const { auth, cargando } = useAuth();
  const { nombre } = auth;
  const navegar = useNavigate();

  return (
    <>
      {auth.tipo === 'admin' ? <h1>Desde Home</h1> : navegar('/utcstudent')}
    </>
  )
}

export default AdministrarTalleres