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
            <div className='flex flex-col'>
              <h1 className='text-3xl font-bold text-center mt-5 self-center'>Todos los talleres</h1>
              <div className='w-full flex flex-col'>
                {talleres.map((taller, index) => (
                  <div className='w-full flex justify-center mb-3'>
                    <Talleres key={index} taller={taller} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              <h1 className='text-3xl font-bold text-center mt-5'>No hay talleres que mostrar</h1>
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