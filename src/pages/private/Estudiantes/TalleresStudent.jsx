import { useEffect, useState } from 'react'
import Talleres from '../TalleresAdmin/Talleres';
import { Navigate } from 'react-router-dom'

import clienteAxios from "../../../config/axios.jsx";
import useAuth from '../../../hooks/useAuth';

const TalleresStudent = () => {
  const { auth } = useAuth();
  const [talleres, setTalleres] = useState([])

  useEffect(() => {//useEffect para obtener los talleres
    const setearTalleres = async () => {
      const { data } = await clienteAxios.get('talleres/agg-tall');
      setTalleres(data);
    }
    setearTalleres();
  }, [])

  return (
    <>
      {auth.tipo === 'usuario'
        ?
        (<>
          {talleres.length ? (
            <>
              <h1 className='text-3xl font-bold'>Todos los talleres</h1>
              <div className='flex flex-col justify-center'>
                {talleres.map((taller, index) => (
                  <Talleres key={index} taller={taller} />
                ))}
              </div>
            </>
          ) : (
            <>
              <h1 className='text-3xl font-bold'>No hay talleres que mostrar</h1>
              <h1 className='text-white'>¡Comienza agregando <span>talleres</span>!</h1>
            </>
          )}
        </>)
        :
        (<Navigate to={'/admin/talleres'} />)
      }
    </>
  )
}

export default TalleresStudent