import { useState, useEffect } from 'react'

import clienteAxios from '../../../config/axios';

const Talleres = (props) => {

  const { taller } = props;
  const [nombreTaller, setNombreTaller] = useState(taller.nombreTaller)
  const [inscritos, setInscritos] = useState(taller.inscritos.lenght)
  const [inscripcion, setInscripcion] = useState('');

  useEffect(() => {
    const obtenerEstadoBoton = async () => {
      const token = localStorage.getItem('tokenAppClub');
      if (!token) {
        return alert('WTF no hay token 😮');
      }

      const config = { //Configuracion para el header de la peticion (pasar el middleware de autenticacion)
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }

      try {
        const { data } = await clienteAxios.post('talleres/ident-tall', { nombreTaller }, config)
        setInscripcion(data.botonLabel)
        setInscritos(data.cantidadInscritos)
      } catch (error) {
        console.log(error.response);
      }
    }
    obtenerEstadoBoton();
  }, [])

  const handleClick = async ({ nombreTaller }) => {
    const token = localStorage.getItem('tokenAppClub');
    if (!token) {
      return alert('WTF no hay token 😮');
    }

    const config = { //Configuracion para el header de la peticion (pasar el middleware de autenticacion)
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }
    try {
      const { data } = await clienteAxios.post('talleres/inscr-tall', { nombreTaller, inscribirse: true }, config)
      alert(data.msg);
      setInscripcion(data.botonLabel)
      setInscritos(data.cantidadInscritos)
    } catch (error) {
      console.log(error.response);
    }
  }



  return (
    <div className='animate__animated animate__fadeIn bg-gray-200 w-3/4 rounded-md shadow-xl mt-3'>
      <h1 className='font-bold text-left p-3 text-xl'>Nombre: <span className='text-stone-900 font-light'>{taller.nombreTaller}</span></h1>
      <hr className='border-gray-400' />
      <h1 className='font-bold text-left p-3'>Responsables: <span className='text-stone-900 font-light'>{taller.responsables}</span></h1>
      <h1 className='font-bold text-left p-3'>Descripción: <span className='text-stone-900 font-light'>{taller.descripcion}</span></h1>
      <h1 className='font-bold text-left p-3'>Inscritos: <span className='text-stone-900 font-light'><>{inscritos}</></span></h1>
      <div className='flex justify-center'>
        {inscripcion === 'Inscribirse' ? (
          <button
            className='bg-emerald-700 hover:bg-emerald-800 w-full p-2 font-bold text-zinc-50 rounded-b-md cursor-pointer'
            onClick={() => handleClick(taller)}
          >{inscripcion}</button>
        ) : (
          <button
            className='bg-red-700 hover:bg-red-800 w-full p-2 font-bold text-zinc-50 rounded-b-md cursor-pointer'
            onClick={() => handleClick(taller)}
          >{inscripcion}</button>
        )}
      </div>
    </div>
  )
}

export default Talleres