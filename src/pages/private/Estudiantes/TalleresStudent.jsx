import { useEffect, useState } from 'react'
import Talleres from '../TalleresAdmin/Talleres';

import useTalleres from "../../../hooks/useTalleres.jsx";
import clienteAxios from "../../../config/axios.jsx";
import ListaTalleres from '../TalleresAdmin/ListaTalleres';

const TalleresStudent = () => {

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
      <h1 className='text-3xl font-bold'>Todos los talleres</h1>
      {talleres.length ? (
        <div className='flex flex-col justify-center'>
          {talleres.map((taller, index) => (
            <Talleres key={index} taller={taller} />
          ))}
        </div>
      ) : (
        <>
          <h1 className='text-3xl font-bold'>No hay talleres que mostrar</h1>
          <h1 className='text-white'>¡Comienza agregando <span>talleres</span>!</h1>
        </>
      )}
    </>
  )
}

export default TalleresStudent