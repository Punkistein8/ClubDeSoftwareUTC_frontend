import LogoClub from './logoClub.png'

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import useAuth from '../../hooks/useAuth.jsx'
import clienteAxios from '../../config/axios'

import BackArrow from './BackArrow'

const OlvidePass = () => {

  const { setAuth } = useAuth();
  const navegar = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    if (email === '' || email === null || email < 7) {
      alert('Ingrese un email')
    }

    try {
      const { data } = await clienteAxios.post('/usuarios/olvide-password', { email });
      alert(data.msg);
      setEmail('');
    } catch (error) {
      alert(error.response.data.msg)
    }
  }

  return (
    <div className="flex justify-center h-screen items-center bg-[#333]">
      <div className="container h-[70vh] w-[90%] md:w-1/2 bg-stone-300 rounded-xl shadow-lg">
        <div className='absolute mt-3 ml-3'>
          <Link to={'/'}>
            <BackArrow />
          </Link>
        </div>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img src={LogoClub} className="mx-auto h-20 w-auto animate__animated animate__fadeIn" alt='Logo Club de Software UTC'></img>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">¿Olvidaste tu contraseña?</h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Introduce tu correo electrónico para recuperarla o <br />{' '}
                <Link to={'/registrarme'}>
                  <span className="font-medium text-indigo-600 hover:text-indigo-500">
                    crea una nueva cuenta
                  </span>
                </Link>
              </p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
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
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
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
                  Enviar correo de recuperación
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OlvidePass