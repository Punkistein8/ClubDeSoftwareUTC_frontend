import LogoClub from './logoClub.png'

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import useAuth from '../../hooks/useAuth.jsx'
import clienteAxios from '../../config/axios'

import BackArrow from './BackArrow'

const Registrarse = () => {

  const { setAuth } = useAuth();
  const navegar = useNavigate();
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault();
    if ([nombre, email, password, confirmPassword].includes('')) {
      alert('Todos los campos son obligatorios')
      return;
    }

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden')
      return;
    }

    // if (password.length < 6) {
    //   alert('La contraseña debe tener al menos 6 caracteres')
    //   return;
    // }

    //Crear usuario en la base de datos
    try {
      // await clienteAxios.post('/usuarios', { nombre, email, password });
      const url = '/usuarios';
      const respuesta = await clienteAxios.post(url, { nombre, email, password });
      setNombre('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')

      return alert('Usuario creado correctamente, revisa tu email');
    } catch (error) {
      console.log('Error: ', error);
      alert(error.response.data.msg);
      return;
    }

  }

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="container h-[70vh] w-[90%] md:w-1/2 bg-slate-50 rounded-xl shadow-lg">
        <div className='absolute mt-3 ml-3'>
          <Link to={'/'}>
            <BackArrow />
          </Link>
        </div>

        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img src={LogoClub} className="mx-auto h-20 w-auto animate__animated animate__fadeIn" alt='Logo Club de Software UTC'></img>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Regístrate</h2>            </div>

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" defaultValue="true" />

              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Tu Nombre"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Tu Contraseña"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="rep-password" className="sr-only">
                    Repetir Password
                  </label>
                  <input
                    id="rep-password"
                    name="rep-password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 rounded-b-md py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Repite tu Contraseña"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-center text-center justify-center">
                <div className="text-sm">
                  ¿Ya tienes una cuenta? <br />
                  <Link to={'/login'}>
                    <p href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Inicia sesión aquí
                    </p>
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#00A7E6] hover:bg-[#0894c9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Registrarse
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registrarse