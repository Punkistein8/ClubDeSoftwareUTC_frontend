import { Outlet, Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import AdminView from "./AdminView/AdminView";
import StudentView from "./StudentView/StudentView";



const RutaProtegida = () => {
  const { auth, cargando } = useAuth();

  if (cargando) {
    return <h1>Cargando...</h1>
  }

  return (
    // <div className="sm:max-h-screen sm:overflow-hidden sm:h-screen">
    <div className="">
      {auth.tipo === "usuario" ?
        (<StudentView />)
        :
        (<AdminView />)
      }
      {auth?._id ? <Outlet /> : <Navigate to="/login" />}
    </div>
  )

}

export default RutaProtegida