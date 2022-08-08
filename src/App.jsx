import { Routes, Route, BrowserRouter } from "react-router-dom"
import Landing from './layout/Landing/Landing.jsx'
import RutaProtegida from './layout/RutaProtegida.jsx'

import Login from "./pages/public/Login.jsx"
import OlvidePass from "./pages/public/OlvidePass.jsx"
import Registrarse from "./pages/public/Registrarse.jsx"
import ConfirmarCuenta from "./pages/public/ConfirmarCuenta.jsx"
import NuevoPassword from "./pages/public/NuevoPassword.jsx"

import AdministrarTalleres from "./pages/private/TalleresAdmin/AdministrarTalleres.jsx"
import TalleresUIForm from "./pages/private/TalleresAdmin/TalleresUIForm.jsx"
import Calendario from "./pages/private/Calendario.jsx"
import Blog from "./pages/private/Blog.jsx"
import Usuarios from "./pages/private/Usuarios.jsx"

import { AuthProvider } from "./context/AuthProvider.jsx"
import { TalleresProvider } from "./context/TalleresProvider.jsx"
import EstudiantesHome from "./pages/private/Estudiantes/EstudiantesHome.jsx"
import TalleresStudent from "./pages/private/Estudiantes/TalleresStudent.jsx"

const App = () => {

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
              <Route exact path="talleres" element={<TalleresUIForm />} />
              <Route exact path="calendario" element={<Calendario />} />
              <Route exact path="blog" element={<Blog />} />
              <Route exact path="usuarios" element={<Usuarios />} />
            </Route>

            <Route path="/utcstudent" element={<RutaProtegida />}>
              <Route index element={<EstudiantesHome />} />
              <Route exact path="talleres" element={<TalleresStudent />} />
            </Route>
          </Routes>
        </TalleresProvider>
      </AuthProvider >
    </BrowserRouter>
  )
}

export default App