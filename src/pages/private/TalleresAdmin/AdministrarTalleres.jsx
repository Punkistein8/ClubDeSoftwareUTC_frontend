
import { useRef } from "react";
import { Navigate } from 'react-router-dom'

import useAuth from "../../../hooks/useAuth"

import softDevAdmin from './softDevAdmin.jpg'
import mainAdmin from './mainAdmin.jpg'

const AdministrarTalleres = () => {
  const { auth } = useAuth();
  const { nombre } = auth;

  const ref = useRef(null);
  const THRESHOLD = 15;

  const styleProp = {
    transition: ' transform 0.5 ease',
    transformStyle: 'preserve-3d',
    willChange: 'transform',
  }

  function handleHover(e) {
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;
    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

    ref.current.classList.remove("animate__animated", "animate__fadeIn");

    ref.current.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
  }

  function resetStyles(e) {
    ref.current.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
  }
  return (
    <>
      {auth.tipo === 'admin' ? (
        <div className="flex flex-col sm:flex sm:flex-row gap-9">
          <div className="sm:w-1/2 sm:h-[90vh] flex justify-center items-center flex-col">
            <section
              style={styleProp}
              onMouseMove={handleHover}
              onMouseLeave={resetStyles}
              ref={ref}
              className="mt-4 animate__animated animate__fadeInUp w-5/6 text-justify border-solid border-[0.5px] border-slate-100 rounded-xl shadow-sm bg-white">
              <h2 className="text-center text-2xl py-5">¡Sé bienvenido, <br /> <span>{nombre}</span>!</h2>
              <hr className="" />
              <p className="py-8 px-10"> Como ya sabes, la aplicación web está en su versión beta,
                agradeceríamos mucho que con tus privilegios de usuario Administrador puedas ayudarnos
                a mejorar la aplicación.
              </p>
            </section>
          </div>
          <div className="sm:w-1/2 sm:h-[90vh] flex justify-center items-center flex-col">
            <div className="animate__animated animate__fadeInUp sm:h-fit sm:mr-7">
              <img className="hidden mb-20 w-64 sm:block sm:w-[420px] rounded-xl shadow-black shadow-2xl" src={softDevAdmin} alt="soft-dev" />
              <img className="mb-4 w-80 sm:hidden rounded-xl shadow-black shadow-2xl" src={mainAdmin} alt="soft-dev" />
            </div>
          </div>
        </div>
      ) : (
        <Navigate to={'/utcstudent'} />
      )}
    </>
  )
}

export default AdministrarTalleres