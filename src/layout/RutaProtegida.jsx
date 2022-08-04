import { Outlet, Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import AdminView from "./AdminView/AdminView";



const RutaProtegida = () => {
  const { auth, cargando, cerrarSesion } = useAuth();

  if (cargando) {
    return <h1>Cargando...</h1>
  }

  return (
    <>
      <AdminView />
      {auth?._id ? <Outlet /> : <Navigate to="/login" />}
      {/* <Outlet></Outlet> */}
    </>
  )

}

export default RutaProtegida