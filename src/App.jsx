import { Routes, Route, BrowserRouter } from "react-router-dom"
import Landing from './layout/Landing/Landing.jsx'
import RutaProtegida from './layout/RutaProtegida.jsx'

import Login from "./pages/login/Login.jsx"
import OlvidePass from "./pages/olvide-pass/OlvidePass.jsx"
import Registrarse from "./pages/registrarse/Registrarse.jsx"
import ConfirmarCuenta from "./pages/ConfirmarCuenta.jsx"
import NuevoPassword from "./pages/nuevo-pass/NuevoPassword.jsx"

import AdministrarTalleres from "./pages/privadas/TalleresAdmin/AdministrarTalleres.jsx"
import Talleres from "./pages/privadas/TalleresAdmin/TalleresUIForm.jsx"
import Calendario from "./pages/privadas/Calendario.jsx"
import Blog from "./pages/privadas/Blog.jsx"
import Usuarios from "./pages/privadas/Usuarios.jsx"

import { AuthProvider } from "./context/AuthProvider.jsx"
import { TalleresProvider } from "./context/TalleresProvider.jsx"

const App = () => {

  const script1 = document.createElement("script");
  const script2 = document.createElement("script");
  script1.src = '/src/pages/login/assets/bootstrap/js/bootstrap.min.js';
  script2.src = '/src/pages/login/assets/js/bs-init.js';
  script1.async = true;
  script2.async = true;
  document.body.appendChild(script1);
  document.body.appendChild(script2);
  return (
    <BrowserRouter>
      <AuthProvider>
        <TalleresProvider>
          <Routes>
            <Route path="/">
              <Route index element={<Landing />} />
              <Route exact path="login" element={<Login />} />
              <Route exact path="olvidepass" element={<OlvidePass />} />
              <Route exact path="olvidepass/:token" element={<NuevoPassword />} />
              <Route exact path="registrarme" element={<Registrarse />} />
              <Route exact path="confirmar/:token" element={<ConfirmarCuenta />} />
            </Route>

            <Route path="/admin" element={<RutaProtegida />}>
              <Route index element={<AdministrarTalleres />} />
              <Route exact path="talleres" element={<Talleres />} />
              <Route exact path="calendario" element={<Calendario />} />
              <Route exact path="blog" element={<Blog />} />
              <Route exact path="usuarios" element={<Usuarios />} />
            </Route>
          </Routes>
        </TalleresProvider>
      </AuthProvider >
    </BrowserRouter>
  )
}

export default App