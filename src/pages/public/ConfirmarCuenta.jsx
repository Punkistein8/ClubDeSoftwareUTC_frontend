import './ConfirmarCuenta.css'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import clienteAxios from '../../config/axios.jsx';

const ConfirmarCuenta = () => {
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [alerta, setAlerta] = useState({});

  const params = useParams()
  const { token } = params;


  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `/usuarios/confirmar/${token}`
        const { data } = await clienteAxios(url); //el metodo GET va por default a la url
        setCuentaConfirmada(true);
        setAlerta({
          msg: data.msg,
          type: 'success'
        })

        alert(data.msg);
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
        });
      }
      setCargando(false);
    }
    confirmarCuenta();
  }, []);
  return (
    <div className='contenedorCuenta'>
      {!cargando ? (
        <div className='contenedorCuenta'>
          <div className='flex justify-center w-full items-center absolute'>
            <h1 className='text-white font-semibold text-4xl mt-52 relative'>{alerta.msg} <br />
              <p className='text-lg text-center'>
                <Link to={'/login'}>
                  <span>
                    ¡Inicia sesión aquí!
                  </span>
                </Link>
              </p>
            </h1>
          </div>
          <div className="confetti">
            <div className="confetti-piece" />
            <div className="confetti-piece" />
            <div className="confetti-piece" />
            <div className="confetti-piece" />
            <div className="confetti-piece" />
            <div className="confetti-piece" />
            <div className="confetti-piece" />
            <div className="confetti-piece" />
            <div className="confetti-piece" />
            <div className="confetti-piece" />
            <div className="confetti-piece" />
            <div className="confetti-piece" />
            <div className="confetti-piece" />
          </div>
        </div>
      ) : (
        <div className='contenedorCuenta'>
          <div className='flex justify-center w-full items-center absolute'>
            <h1 className='text-white font-semibold text-4xl mt-52 relative'>Confirmando tu cuenta <br />
              <p className='text-lg text-center'>
                Cargando...
              </p>
            </h1>
          </div>
        </div>
      )}
    </div>
  )
}

export default ConfirmarCuenta