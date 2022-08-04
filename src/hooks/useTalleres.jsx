import { useContext } from 'react'
import TalleresContext from '../context/TalleresProvider.jsx'

const useTalleres = () => {
  return (useContext(TalleresContext));
}

export default useTalleres;