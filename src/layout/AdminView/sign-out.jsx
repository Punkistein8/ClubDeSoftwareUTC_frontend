
import useAuth from '../../hooks/useAuth'

function SvgComponent(props) {

  const { cerrarSesion } = useAuth();

  return (
    <svg className='hover:cursor-pointer my-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}
      onClick={cerrarSesion}>
      <path fill="none" d="M0 0H256V256H0z" />
      <path
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
        d="M174.011 86L216 128 174.011 170"
      />
      <path
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
        d="M104 128L215.971 128"
      />
      <path
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
        d="M104 216H48a8 8 0 01-8-8V48a8 8 0 018-8h56"
      />
    </svg>
  )
}

export default SvgComponent
