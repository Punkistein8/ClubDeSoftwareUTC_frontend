
import { useEffect, useRef } from "react";
import useAuth from "../../../hooks/useAuth";
import { Navigate } from 'react-router-dom'
import 'animate.css';
import softDev from './soft-dev.jpg'

const EstudiantesHome = () => {
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
      {auth.tipo === 'usuario' ? (
        <div className="flex flex-col sm:flex sm:flex-row gap-9">
          <div className=" sm:w-1/2 sm:h-[90vh] flex justify-center items-center flex-col">
            <section
              style={styleProp}
              onMouseMove={handleHover}
              onMouseLeave={resetStyles}
              ref={ref}
              className="mt-4 animate__animated animate__fadeInUp w-5/6 text-justify border-solid border-[0.5px] border-slate-100 rounded-xl shadow-sm bg-white">
              <h2 className="text-center text-2xl py-5">¡Sé bienvenido, <br /> <span>{nombre}</span>!</h2>
              <hr className="" />
              <p className="py-8 px-10"> Te recordamos que esta aplicación web está en versión beta,
                El Club de Software está trabajando en implementar <span>mejoras</span> y <span>funcionalidades</span> que
                serán desplegadas proximamente.
              </p>
            </section>
          </div>
          <div className="sm:w-1/2 sm:h-[90vh] flex justify-center items-center flex-col">
            <div className="animate__animated animate__fadeInUp sm:h-fit sm:mr-7">
              <img className=" w-64 sm:w-[420px] rounded-xl shadow-black shadow-2xl" src={softDev} alt="soft-dev" />
            </div>
          </div>
        </div>
      ) : <Navigate to={'/admin'} />}
    </>
  )
}

export default EstudiantesHome 