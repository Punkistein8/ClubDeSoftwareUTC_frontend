import { createContext, useState, useEffect } from 'react';
import clienteAxios from '../config/axios';

const TalleresContext = createContext();

export const TalleresProvider = ({ children }) => {
  const [talleres, setTalleres] = useState([]);
  const guardarTaller = async (taller) => {
    try {
      const { data } = await clienteAxios.post('/talleres/agg-tall', taller);
      
      alert(data.message); //mensaje de alerta
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <TalleresContext.Provider
      value={{
        talleres,
        guardarTaller
      }}>
      {children}
    </TalleresContext.Provider>
  )
}

export default TalleresContext