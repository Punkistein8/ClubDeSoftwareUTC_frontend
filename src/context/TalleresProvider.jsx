import { createContext, useState, useEffect } from 'react';
import clienteAxios from '../config/axios';

const TalleresContext = createContext();

export const TalleresProvider = ({ children }) => {
  const [talleres, setTalleres] = useState([]);
  const guardarTaller = async (taller) => {
    try {
      const { data } = await clienteAxios.post('/talleres/agg-tall', taller);
      const { nombreTaller } = data;
      const { createdAt, updatedAt, __v, ...tallerAlmacenado } = data;
      setTalleres([tallerAlmacenado, ...talleres]);
      alert(`¡Taller '${nombreTaller}' agregado correctamente!`); //mensaje de alerta
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <TalleresContext.Provider
      value={{
        talleres,
        setTalleres,
        guardarTaller
      }}>
      {children}
    </TalleresContext.Provider>
  )
}

export default TalleresContext