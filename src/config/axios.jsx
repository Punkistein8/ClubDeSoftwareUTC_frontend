import axios from 'axios';

const clienteAxios = axios.create({ //Crear un clienteAxios
  baseURL: `${import.meta.env.VITE_BACKEND_URL}` //seteando la URL base del backend de la aplicacion
})

export default clienteAxios;