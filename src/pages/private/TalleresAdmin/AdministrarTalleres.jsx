
import useAuth from "../../../hooks/useAuth"
import { Navigate } from 'react-router-dom'


const AdministrarTalleres = () => {
  const { auth } = useAuth();
  return (
    <>
      {auth.tipo === 'admin' ? <h1>Desde Home</h1> : <Navigate to={'/utcstudent'}/>}
    </>
  )
}

export default AdministrarTalleres