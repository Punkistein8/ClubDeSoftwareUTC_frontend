import logoClub from "./assets/img/logoClub.png";
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import clienteAxios from "../../config/axios";

const NuevoPassword = () => {
  const [password, setPassword] = useState('');
  const [tokenValido, setTokenValido] = useState(true);
  const params = useParams();
  const { token } = params;

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios(`/usuarios/olvide-password/${token}`);
        // alert('Coloca tu nueva contraseña');
      } catch (error) {
        setTokenValido(false);
        console.log(`ERROR:; ${error}`);
      }
    }
    comprobarToken();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (password.length < 6) {
    //   alert('La contraseña debe tener al menos 6 caracteres');
    //   return;
    // }

    try {
      const url = `/usuarios/olvide-password/${token}`;
      const { data } = await clienteAxios.post(url, { password });
      console.log(data);
      alert(data.msg);
    } catch (error) {
      alert(`ERROR:; ${error}`);
    }
  }
  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <title>NuevoPassword</title>
      <section
        className="d-flex flex-column position-relative py-4 py-xl-5"
        style={{ height: "100vh" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 20 20"
          fill="none"
          data-bss-hover-animate="wobble"
          style={{
            fontSize: 275,
            color: "#00a7e6",
            width: 64,
            height: "auto",
            marginLeft: 43
          }}
        >
          <Link to={'/'}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM10.7071 7.70711C11.0976 7.31658 11.0976 6.68342 10.7071 6.29289C10.3166 5.90237 9.68342 5.90237 9.29289 6.29289L6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L9.29289 13.7071C9.68342 14.0976 10.3166 14.0976 10.7071 13.7071C11.0976 13.3166 11.0976 12.6834 10.7071 12.2929L9.41421 11H13C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9L9.41421 9L10.7071 7.70711Z"
              fill="currentColor"
            />
          </Link>
        </svg>
        <div
          className="container d-flex flex-grow-1 align-items-center align-content-around flex-sm-column justify-content-sm-around flex-md-column justify-content-md-around flex-lg-row justify-content-lg-around align-items-lg-center flex-xl-row flex-xxl-row"
          id="container-XtraSmall"
          style={{ maxWidth: "100%" }}
        >
          <div className="row g-0 flex-row bounce animated mb-5">
            <div className="col d-flex justify-content-center">
              <img
                className="img-fluid pulse animated infinite"
                src={logoClub}
                width="100px"
                style={{ minWidth: 210, width: 210 }}
                loading="lazy"
              />
            </div>
          </div>
          <div
            className="row justify-content-center"
            style={{ width: "50%", minWidth: 371 }}
          >
            <div className="col justify-content-center">
              <div
                className="card justify-content-center mb-5"
                id="cardContainer"
                style={{
                  borderStyle: "solid",
                  borderColor: "var(--bs-dark)",
                  maxWidth: 694
                }}
              >
                <div
                  className="card-body d-flex flex-column align-items-center"
                  style={{
                    background: "var(--bs-gray-900)",
                    borderStyle: "none",
                    maxWidth: 694,
                    width: "100%"
                  }}
                >
                  {tokenValido && (
                    <form
                      className="text-center d-flex flex-column justify-content-center align-items-center align-content-center flex-wrap-reverse order-2 justify-content-lg-center align-items-lg-center"
                      method="post"
                      style={{ width: "100%" }}
                      onSubmit={handleSubmit}
                    >
                      <h1>Coloca tu nueva contraseña</h1>
                      <div
                        className="d-flex justify-content-center mb-3"
                        id="div-pasword"
                        style={{ width: "100%" }}
                      >
                        <input
                          className="form-control d-flex justify-content-center"
                          type="password"
                          name="password"
                          placeholder="Tu nuevo password"
                          style={{
                            maxWidth: 371,
                            height: 54,
                            width: "100%",
                            fontSize: 21
                          }}
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                        />
                      </div>
                      <div
                        className="d-flex justify-content-center mb-3"
                        id="div-login"
                        style={{ maxWidth: "none", height: 54, width: 120 }}
                      >
                        <button
                          className="btn btn-primary d-block w-100"
                          type="submit"
                          style={{
                            background: "#00a7e6",
                            maxWidth: 371,
                            height: 54,
                            width: "100%",
                            fontSize: 21,
                            borderRadius: 31
                          }}
                        >
                          Actualizar
                        </button>
                      </div>
                      <p
                        className="text-muted"
                        style={{ height: 63, width: 274, fontSize: 19 }}
                      >
                        ¿Ya tienes una cuenta?
                        <br />
                        ¡Inicia Sesión!
                      </p>
                      <p
                        className="text-muted"
                        style={{ height: 63, width: 274, fontSize: 19 }}
                      >
                        ¿No tienes una cuenta?
                        <br />
                        ¡Regístrate!
                      </p>
                    </form>
                  )}
                  {!tokenValido && (
                    <>
                      <h1>Este enlace ya no es válido, vuelve a iniciar sesión. 🙄</h1>
                      <Link to={'/login'}>
                        ¡Inicia Sesión con tu nueva contraseña aquí!
                      </Link>
                      ☝
                    </>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NuevoPassword