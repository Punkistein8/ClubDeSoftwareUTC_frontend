import { useState } from 'react'
import useTalleres from '../../hooks/useTalleres'

const Talleres = () => {

  const [nombreTaller, setNombreTaller] = useState('')
  const [responsables, setResponsables] = useState('')
  const [descripcion, setDescripcion] = useState('')

  const { guardarTaller } = useTalleres();

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
    <div className='flex'>
      <div className='w-1/2'>
        <h1 className='text-lg'>Ingresa un nuevo taller</h1>
        <form className='mt-4 p-10' onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            <div className='my-2'>
              <label htmlFor='nombreTaller' className='text-lg font-medium text-white'>Nombre del Taller</label>
              <input
                id='nombreTaller'
                type='text'
                className='w-full p-2 border-2 placeholder-gray-400 rounded-lg'
                placeholder='Ingresa el Nombre del Taller'
                onChange={(e) => setNombreTaller(e.target.value)}
                value={nombreTaller}
              />
            </div>
            <div className='my-2'>
              <label htmlFor='responsables' className='text-lg font-medium text-white'>Responsables</label>
              <input
                id='responsables'
                type='text'
                className='w-full p-2 border-2 placeholder-gray-400 rounded-lg'
                placeholder='Nombres de los responsables'
                onChange={(e) => setResponsables(e.target.value)}
                value={responsables}
              />
            </div>
            <div className='my-2'>
              <label htmlFor='descripcion' className='text-lg font-medium text-white'>Descripción</label>
              <textarea
                id='descripcion'
                className='w-full p-2 border-2 placeholder-gray-400 rounded-lg'
                placeholder='Descripción del taller'
                onChange={(e) => setDescripcion(e.target.value)}
                value={descripcion}
              />
            </div>
            <input type='submit' className='w-full p-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg my-2' value='Guardar' />
          </div>
        </form>
      </div>
      <div className='w-1/2'>
        <h1 className='text-lg'>Lista de talleres</h1>
      </div>

    </div>
  )
}

export default Talleres