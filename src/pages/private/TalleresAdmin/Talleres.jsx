import React from 'react'

const Talleres = (props) => {
  const { taller } = props;
  return (
    <div className='bg-gray-200 w-3/4 rounded-md shadow-xl mt-3'>
      <h1 className='font-bold text-left p-3 text-xl'>Nombre: <span className='text-stone-900 font-light'>{taller.nombreTaller}</span></h1>
      <hr></hr>
      <h1 className='font-bold text-left p-3'>Responsables: <span className='text-stone-900 font-light'>{taller.responsables}</span></h1>
      <h1 className='font-bold text-left p-3'>Descripción: <span className='text-stone-900 font-light'>{taller.descripcion}</span></h1>
      <h1 className='font-bold text-left p-3'>Inscritos: <span className='text-stone-900 font-light'>{taller.inscritos.length}</span></h1>
      <div className='flex justify-center'>
        <button className='bg-emerald-700 hover:bg-emerald-800 w-full p-2 font-bold text-zinc-50 rounded-b-md ' >Inscribirse</button>
      </div>
    </div>
  )
}

export default Talleres