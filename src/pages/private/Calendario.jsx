import useAuth from "../../hooks/useAuth"
import { Navigate } from "react-router"

const Calendario = () => {
  const { auth } = useAuth()
  return (
    <>
      {auth.tipo === "admin"
        ? (
          <h1>Desde calendario</h1>
        ) : (
          <Navigate to={'/utcstudent'} />
        )
      }
    </>
  )
}

export default Calendario