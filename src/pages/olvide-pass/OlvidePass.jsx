import './assets/bootstrap/css/bootstrap.min.css'
import './assets/css/animate.min.css'
import './assets/css/Login-Form-Basic-icons.css'
import './assets/css/styles.css'
import logoClub from './assets/img/logoClub.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import clienteAxios from '../../config/axios.jsx'

const OlvidePass = () => {

  const [email, setEmail] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    if (email === '' || email === null || email < 7) {
      alert('Ingrese un email')
    }

    try {
      const { data } = await clienteAxios.post('/usuarios/olvide-password', { email });
      alert(data.msg);
      setEmail('');
    } catch (error) {
      alert(error.response.data.msg)
    }
  }

  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <title>OlvidePass</title>
      <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      />
      <link rel="stylesheet" href="assets/css/Login-Form-Basic-icons.css" />
      <link rel="stylesheet" href="assets/css/styles.css" />
      <section
        className="seccionOlvidePass d-flex flex-column position-relative py-4 py-xl-5"
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
                  <form
                    className="text-center d-flex flex-column justify-content-center align-items-center align-content-center flex-wrap-reverse order-2 justify-content-lg-center align-items-lg-center"
                    method="post"
                    style={{ width: "100%" }}
                    onSubmit={handleSubmit}

                  >
                    <div
                      className="d-flex justify-content-center mb-3"
                      id="div-email"
                      style={{ width: "100%" }}
                    >
                      <input
                        className="form-control d-flex justify-content-center"
                        type="email"
                        name="email"
                        placeholder="Email"
                        style={{
                          maxWidth: 371,
                          height: 54,
                          width: "100%",
                          fontSize: 21
                        }}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
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
                        Enviar
                      </button>
                    </div>
                    <p
                      className="text-muted"
                      style={{ height: 63, width: 274, fontSize: 19 }}
                    >
                      <Link to={'/login'}>
                        ¿Ya tienes una cuenta?
                        <br />
                        ¡Inicia Sesión!
                      </Link>
                    </p>
                    <p
                      className="text-muted"
                      style={{ height: 63, width: 274, fontSize: 19 }}
                    >
                      <Link to={'/login'}>
                        ¿No tienes una cuenta?
                        <br />
                        ¡Regístrate!
                      </Link>

                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OlvidePass