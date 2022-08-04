import './Landing.css';

import { Link } from 'react-router-dom';

import Enlace from './components/Enlaces';
import BotonLogin from './components/BotonLogin.jsx';
import BackImage from './components/BackImage.jsx';
import Slogan from './components/Slogan.jsx';
import CardsContainer from './components/CardsContainer.jsx';
import ProjCards from './components/ProjCards';
import FacebookIco from './components/svg/FacebookIco.jsx';
import WhatsappIco from './components/svg/WhatsappIco.jsx';
import TituloSeccion from './components/TituloSeccion.jsx';

import logoDesc from './images/logoBlanco.svg';
import homeBackImage from './images/main-background.png';
import projBackImage from './images/projects-background.jpg';
import blogBackImage from './images/blog-background.jpg';
import aboutBackImage from './images/about-background.jpg'
import contactBackImage from './images/contact-background.jpg';
import logoName from './images/logo-name.svg';
import logoUTC from './images/logoUTC.svg';
import aboutImage from './images/imagenAbout.jpg';

function Landing() {

  return (
    <div className="App">
      <div className='menuSuperior'>
        <Enlace href='#home'>Inicio</Enlace>
        <Enlace href='#projects'>Proyectos</Enlace>
        <Enlace href='#about'>¿Quiénes Somos?</Enlace>
        <Enlace href='#blog'>Blog</Enlace>
        <Enlace href='#contacto'>Contacto</Enlace>
        <Link to={'login'}>
          <BotonLogin >Login</BotonLogin>
        </Link>
      </div>
      <header className='menuLateral'>
        <img className='menuLateral--logoBlanco' src={logoDesc} /> {/* Logo blanco */}
        <div className='menuLateral--contenedor'>
          <Enlace href='#home'>Inicio</Enlace>
          <Enlace href='#projects'>Proyectos</Enlace>
          <Enlace href='#about'>¿Quiénes Somos?</Enlace>
          <Enlace href='#blog'>Blog</Enlace>
          <Enlace href='#contacto'>Contacto</Enlace>
          <Link to={'login'}>
            <BotonLogin >
              Login
            </BotonLogin>
          </Link>
        </div>
      </header>

      <main className='mainFlow'>

        <section className="home" id='home'>
          <BackImage
            image={homeBackImage}
          />

          <div className='home--contenedorLeft'>
            <Slogan />
          </div>

          <div className='home--contenedorRight'>
            <img src={logoName} className='home--logo name' />
            <img src={logoUTC} className='home--logo utc' />
          </div>
        </section>

        <section className="projects" id='projects' >
          <TituloSeccion
            marginLeft='0'
            width='100%'>
            Proyectos
          </TituloSeccion>

          <BackImage
            image={projBackImage} />
        </section>

        <section className="about" id='about'>
          <TituloSeccion marginLeft='0'>¿Quiénes Somos?</TituloSeccion>

          <div className='contenedorAbout'>
            <div className='contenedorImagenes'>
              <img className='imagenAbout' src={aboutImage} ></img>
            </div>
            <article className='articuloAbout'>
              Somos estudiantes universitarios con responsabilidad social y académica que desean desarrollar proyectos que contribuyan a la comunidad universitaria.
              <br />
              <br />
              Nuestra meta es que nuestros proyectos sean de calidad y utilidad, ya sea didáctica o práctica.
              <br />
              <br />
              <span>Equipo de trabajo:</span>
              <ol>
                <li>♠ Henry Guerrero</li>
                <li>♣ Ronald Rodríguez</li>
                <li>♥ Kevin Loja</li>
                <li>♦ Javier Lasso</li>
              </ol>
              <br />
              Estudiantes de sexto semestre de Sistemas de Información.
              <br />
              Contamos con el apoyo de la dirección de carrera de la Universidad Técnica de Cotopaxi con la directora de carrera,
              la <span>Ing Verónica Tapia</span>.

            </article>
          </div>

          <BackImage
            image={aboutBackImage} />

        </section>

        <section className="blog" id='blog'>
          <TituloSeccion>Blog</TituloSeccion>
          <CardsContainer />
          <BackImage
            image={blogBackImage} />
        </section>

        <section className="contacto" id='contacto'>
          <TituloSeccion>Contacto</TituloSeccion>
          <div className='contenedorContactos'>
            <FacebookIco />
            <WhatsappIco />
          </div>
          <BackImage
            image={contactBackImage}
          />
        </section>
      </main>

    </div>
  );
}
export default Landing;