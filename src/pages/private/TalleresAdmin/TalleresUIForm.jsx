import { useState, useEffect } from 'react'
import { Navigate } from 'react-router'

import clienteAxios from '../../../config/axios'
import useTalleres from '../../../hooks/useTalleres'
import useAuth from '../../../hooks/useAuth'

import ListaTalleres from './ListaTalleres'

const Talleres = () => {
  const { auth } = useAuth();
  const [nombreTaller, setNombreTaller] = useState('')
  const [responsables, setResponsables] = useState('')
  const [descripcion, setDescripcion] = useState('')

  const { guardarTaller, setTalleres } = useTalleres();

  useEffect(() => {//useEffect para obtener los talleres
    console.log(auth.tipo);
    const setearTalleres = async () => {
      const { data } = await clienteAxios.get('talleres/agg-tall');
      setTalleres(data);
    }
    setearTalleres();
  }, []) //OJO CON ESTO

  const handleSubmit = (e) => {
    e.preventDefault()
    if ([nombreTaller, responsables, descripcion].includes('')) {
      alert('Todos los campos son obligatorios')
      return;
    }

    guardarTaller({
      nombreTaller,
      responsables,
      descripcion
    })

    setNombreTaller('')
    setResponsables('')
    setDescripcion('')

  }

  return (
    <>
      {auth.tipo === 'admin'
        ?
        (<div className='flex flex-col md:flex-row'>
          <div className='w-full md:w-1/2'>
            <h1 className="text-3xl font-bold text-center mt-5">Ingresa un nuevo taller</h1>
            <form className='mt-4 p-10' onSubmit={handleSubmit}>
              <div className='flex flex-col'>
                <div className='my-2'>
                  <label htmlFor='nombreTaller' className='text-lg font-medium text-black'>Nombre del Taller</label>
                  <input
                    id='nombreTaller'
                    type='text'
                    className='w-full p-2 border-2 placeholder-gray-400 rounded-lg focus:border-sky-500 focus:outline-none'
                    placeholder='Ingresa el Nombre del Taller'
                    onChange={(e) => setNombreTaller(e.target.value)}
                    value={nombreTaller}
                  />
                </div>
                <div className='my-2'>
                  <label htmlFor='responsables' className='text-lg font-medium text-black'>Responsables</label>
                  <input
                    id='responsables'
                    type='text'
                    className='w-full p-2 border-2 placeholder-gray-400 rounded-lg focus:border-sky-500 focus:outline-none'
                    placeholder='Nombres de los responsables'
                    onChange={(e) => setResponsables(e.target.value)}
                    value={responsables}
                  />
                </div>
                <div className='my-2'>
                  <label htmlFor='descripcion' className='text-lg font-medium text-black'>Descripción</label>
                  <textarea
                    id='descripcion'
                    className='w-full p-2 border-2 placeholder-gray-400 rounded-lg focus:border-sky-500 focus:outline-none'
                    placeholder='Descripción del taller'
                    onChange={(e) => setDescripcion(e.target.value)}
                    value={descripcion}
                  />
                </div>
                <input type='submit' className='w-full p-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg my-2 cursor-pointer' value='Guardar' />
              </div>
            </form>
          </div>
          <div className='w-full md:w-1/2 flex flex-col align-middle items-center'>
            <ListaTalleres />
          </div>
        </div>)
        :
        <Navigate to={'/utcstudent/talleres'} />}
    </>
  )
}

export default Talleres