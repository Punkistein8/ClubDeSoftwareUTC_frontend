import './ConfirmarCuenta.css'
import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import clienteAxios from '../../config/axios.jsx';

const contador = inicio => {
  const [contador, setContador] = useState(inicio);
  const navegar = useNavigate(); //permite navegar entre las páginas de la aplicación

  useEffect(() => { //el useEffect se ejecuta una vez al inicio de la aplicación y no se ejecuta nuevamente
    const intervalo = setInterval(() => { //se ejecuta cada segundo y se actualiza el contador
      setContador(contador - 1); //se actualiza el contador en 1
    }, 1000);
    return () => { //se ejecuta cuando el componente se desmonta
      clearInterval(intervalo); //se detiene el contador
    }
  },
    [contador] //se ejecuta cuando el contador cambia de valor y no se ejecuta nuevamente hasta que cambie de valor
  );

  if (contador === 0) { //si el contador es 0, se redirige a la página de login
    return navegar('/login');
  }
  return contador;
}


const ConfirmarCuenta = () => {
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [alerta, setAlerta] = useState({});
  const params = useParams(); //obtiene los parámetros de la url y los almacena en un objeto "params"
  const { token } = params;

  let cuentaRegresiva = 5;
  cuentaRegresiva = contador(cuentaRegresiva);

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
    <div className='contenedorCuenta h-screen bg-[#333]'>
      {!cargando ? (
        <div className='contenedorCuenta'>
          <div className='flex justify-center w-full items-center absolute'>
            <h1 className='text-white font-semibold text-4xl mt-52 relative'>{alerta.msg} <br />
              <p className='text-lg text-center'>
                <Link to={'/login'}>
                  <span>
                    serás redirigido en {cuentaRegresiva} segundos
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