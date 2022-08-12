//Este componente se puede decir que es la fuente de los datos del state global de la aplicacion, se relaciona con useContext y useReducer.
//Aqui van a vivir los datos de autorización y los vamos a poder USAR con un hook personalizado 'useAuth' 😮
import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/axios";


const AuthContext = createContext(); //Crea un contexto de autenticacion para poder usarlo en otros componentes

const AuthProvider = ({ children }) => { //Destructuring props.children para que todos los componentes hijos se suscriban al estado global de autenticacion

  const [cargando, setCargando] = useState(true); //Estado que indica si esta cargando o no
  const [auth, setAuth] = useState({}); //Creando el estado de la autenticación usando el hook 'useState()' ⚓

  useEffect(() => { //Hook que se ejecuta cuando el componente se monta o se actualiza ⚓
    const autenticarUsuario = async () => {
      const token = localStorage.getItem('tokenAppClub') //Obtener el token que ya debe estar guardado en LocalStorage
      if (!token) {
        return setCargando(false);
      } //Si no hay token, no hacemos nada, sale del flujo

      const config = {  //Configuracion para el header de la peticion
        headers: {
          "Content-Type": "application/json", //Tipo de contenido que se va a enviar en la peticion (JSON)
          Authorization: `Bearer ${token}` //Token que ya debe estar guardado en LocalStorage (Bearer es una palabra reservada de JWT)
        }
      }

      try { //Intentar hacer la peticion
        const { data } = await clienteAxios('/usuarios/perfil', config) //Obtener el perfil del usuario
        setAuth(data) //Guardar el perfil del usuario en el state
      } catch (error) { //Si hay un error en la peticion
        console.log(error.response.data.msg); //Mostrar el mensaje de error
        setAuth({}) //Limpiar el state y dejarlo con un objeto vacio
      }
      setCargando(false) //Despues de hacer la peticion, deshabilitar el estado de cargando
    }

    autenticarUsuario(); //Llamar a la funcion para autenticar al usuario
  }, [] //Arreglo vacio para que se ejecute solo una vez
  )

  const cerrarSesion = () => {
    localStorage.removeItem('tokenAppClub');
    setAuth({});
  }

  return (
    <AuthContext.Provider  //Poniendo a disposicion el contexto de autenticacion a nivel global
      value={{ //Esto es lo que se va a retornar en el contexto
        auth, //El state global de la aplicacion
        setAuth, //El setter del state global de la aplicacion
        cargando, //El estado de cargando
        cerrarSesion //Funcion para cerrar sesion
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthProvider };
