import logoClub from '../logoClub.png'
import { Link, Route, Routes } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

import SvgComponent from '../sign-out'
const StudentView = () => {

  // const card = document.querySelector(".card");
  // const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
  // const THRESHOLD = 15;
  
  // /*
  //  * Read the blog post here:
  //  * https://letsbuildui.dev/articles/a-3d-hover-effect-using-css-transforms
  //  */
  // function handleHover(e) {
  //   const { clientX, clientY, currentTarget } = e;
  //   const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;
  
  //   const horizontal = (clientX - offsetLeft) / clientWidth;
  //   const vertical = (clientY - offsetTop) / clientHeight;
  //   const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
  //   const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
  
  //   card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
  // }
  
  // function resetStyles(e) {
  //   card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
  // }
  
  // if (!motionMatchMedia.matches) {
  //   card.addEventListener("mousemove", handleHover);
  //   card.addEventListener("mouseleave", resetStyles);
  // }
  


  return (
    <>
      <div className='bg-slate-800 w-full '>
        <div className='container flex justify-between items-center'>
          <div className='flex flex-row items-center'>
            <img src={logoClub} className='max-h-16 m-7' />
            <div className='flex flex-col items-center'>
              {/* <span>{nombre}</span> */}
              {/* <button className='bg-red-700 hover:bg-red-900 h-fit text-white p-2 rounded-md mt-2'
                onClick={cerrarSesion}>Cerrar Sesión</button> */}
              <div className='w-10'>
                <SvgComponent />
              </div>
            </div>
          </div>
          <nav className="text-gray-400 flex items-center" href="#">
            <Link to='/utcstudent' className='h-fit pr-5'>Inicio</Link>
            <Link to='/utcstudent/talleres' className='h-fit pr-5'>Talleres</Link>
          </nav>
        </div>
      </div>
    </>
  )
}

export default StudentView