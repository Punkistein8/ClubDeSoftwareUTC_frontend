import { useEffect } from "react";
import useTalleres from "../../../hooks/useTalleres.jsx";

import Talleres from "./Talleres.jsx";

const ListaTalleres = () => {

  const { talleres } = useTalleres();

  return (
    <>
      {talleres.length ? (
        <>
          <h1 className=" text-3xl font-bold text-center mt-5 mb-14">Listado de talleres</h1>
          {talleres.map((taller, index) => (
            <Talleres key={index} taller={taller} />
          ))}
        </>
      ) :
        (<>
          <h1 className=" text-3xl font-bold text-center mt-5">No hay talleres que mostrar</h1>
          <h1 className=" text-center mt-5">¡Comienza agregando <span>talleres</span>!</h1 >
        </>)}
    </>
  )
}

export default ListaTalleres