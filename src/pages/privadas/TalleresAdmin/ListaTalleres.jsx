import { useEffect } from "react";
import useTalleres from "../../../hooks/useTalleres.jsx";

import Talleres from "./Talleres.jsx";

const ListaTalleres = () => {

  const { talleres } = useTalleres();

  useEffect(() => {
    const obtenerTalleres = () => {
      console.log(talleres);
    }
    obtenerTalleres();
  }, [1]);

  return (
    <>
      {talleres.length ? (
        <>
          <h1 className=" text-2xl">Listado de talleres</h1>
          {talleres.map((taller, index) => (
            <Talleres key={index} taller={taller} />
          ))}
        </>
      ) :
        (<>
          <h1 className=" text-2xl">No hay talleres que mostrar</h1>
          <h1 className="text-white">¡Comienza agregando <span>talleres</span>!</h1 >
        </>)}
    </>
  )
}

export default ListaTalleres