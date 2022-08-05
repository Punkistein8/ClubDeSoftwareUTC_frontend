import { Outlet, Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import AdminView from "./AdminView/AdminView";
import StudentView from "./StudentView/StudentView";



const RutaProtegida = () => {
  const { auth, cargando, cerrarSesion } = useAuth();

  if (cargando) {
    return <h1>Cargando...</h1>
  }

  return (
    <>
      {auth.tipo === "usuario" ?
        (<StudentView />)
        :
        (<AdminView />)
      }
      {auth?._id ? <Outlet /> : <Navigate to="/login" />}
    </>
  )

}

export default RutaProtegida