
import useAuth from "../../../hooks/useAuth";
import { Navigate } from 'react-router-dom'

import softDev from './soft-dev.jpg'


const EstudiantesHome = () => {
  const { auth, cargando } = useAuth();
  const { nombre } = auth;

  return (
    <>
      {auth.tipo === 'usuario' ? (
        <div className="flex">
          <div className="w-1/2">
            
          </div>
          <div className="w-1/2">
            <div className="w-full p-36">
              <img className="rounded-xl shadow-black shadow-2xl" src={softDev} alt="soft-dev" />
            </div>
          </div>
        </div>
      ) : <Navigate to={'/admin'} />}
    </>
  )
}

export default EstudiantesHome 