
import useAuth from "../../hooks/useAuth"

const AdministrarTalleres = () => {
  const { auth, cargando } = useAuth();
  const { nombre } = auth;
  return (
    <>
      <h1>Desde Home</h1>
    </>
  )
}

export default AdministrarTalleres 