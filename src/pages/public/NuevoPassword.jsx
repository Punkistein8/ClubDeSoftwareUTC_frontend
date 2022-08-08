import LogoClub from "../public/logoClub.png";
import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import clienteAxios from "../../config/axios";
import BackArrow from './BackArrow'

const NuevoPassword = () => {
  const [password, setPassword] = useState('');
  const navegar = useNavigate();
  const [tokenValido, setTokenValido] = useState(true);
  const params = useParams();
  const { token } = params;

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios(`/usuarios/olvide-password/${token}`);
        // alert('Coloca tu nueva contraseña');
      } catch (error) {
        setTokenValido(false);
        console.log(`ERROR:; ${error}`);
      }
    }
    comprobarToken();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (password.length < 6) {
    //   alert('La contraseña debe tener al menos 6 caracteres');
    //   return;
    // }

    try {
      const url = `/usuarios/olvide-password/${token}`;
      const { data } = await clienteAxios.post(url, { password });
      console.log(data);
      alert(data.msg);
      return navegar('/login')
    } catch (error) {
      alert(`ERROR:; ${error}`);
    }
  }
  return (
    <>
      {tokenValido && (
        <>
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
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Ingresa tu nueva contraseña</h2>
                  </div>
                  <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
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
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Nueva Contraseña"
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-center">
                      <div className="text-sm">
                        <Link to={'/olvidepass'}>
                          <p className="font-medium text-indigo-600 hover:text-indigo-500">
                            Inicia Sesión aquí
                          </p>
                        </Link>
                      </div>

                    </div>

                    <div>
                      <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#00A7E6] hover:bg-[#0894c9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Cambiar contraseña
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div >
          </div >
        </>
      )}
      {!tokenValido && (
        <>
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
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Este enlace ya no es válido</h2>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-sm">
                      Inicia Sesión con tu nueva contraseña
                      <Link to={'/login'}>
                        <p className="font-medium text-indigo-600 hover:text-indigo-500 text-center">
                          👉 aquí
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div >
          </div >
        </>)
      }
    </>
  )
}

export default NuevoPassword