import logoClub from '../logoClub.png'
import { Link, Route, Routes } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

import Dropdown from './Dropdown'

import SvgComponent from '../sign-out'

const AdminView = () => {
  const { auth } = useAuth();
  const { nombre } = auth;
  return (
    <>
      <div className='bg-slate-800 w-full'>
        <div className='container flex justify-around md:justify-between items-center'>
          <div className='flex flex-row items-center'>
            <img src={logoClub} className='max-h-16 m-7' />
            <div className='flex flex-col items-center'>
              <span>{nombre}</span>
              {/* <button className='bg-red-700 hover:bg-red-900 h-fit text-white p-2 rounded-md mt-2'
                onClick={cerrarSesion}>Cerrar Sesión</button> */}
              <SvgComponent />
            </div>
          </div>
          <nav className="text-gray-400 flex items-center">
            <div className='hidden md:block'>
              <Link to='/admin' className='h-fit pr-5'>Inicio</Link>
              <Link to='/admin/talleres' className='h-fit pr-5'>Talleres</Link>
              <Link to='/admin/calendario' className='h-fit pr-5'>Calendario</Link>
              <Link to='/admin/blog' className='h-fit pr-5'>Blog</Link>
              <Link to='/admin/usuarios' className='h-fit pr-5'>Usuarios</Link>
            </div>
            <div className='md:hidden'>
              <Dropdown />
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default AdminView