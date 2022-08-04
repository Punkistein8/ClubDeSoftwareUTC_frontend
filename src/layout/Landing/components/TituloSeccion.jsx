import 'animate.css';
import '../stylesheet/TituloSeccion.css';

import { useInView } from 'react-intersection-observer';


export default function TituloSeccion(props) {

  const { ref: miTitulo, inView: tituloVisible } = useInView({ threshold: 0.25 });

  const h1Styles = {
    marginLeft: `${props.marginLeft}%`,
  }

  const divStyles = {
    width: `${props.width}`,
    height: `${props.height}`,
  }

  return (
    <div ref={miTitulo} className='title_container' style={divStyles}>
      <h1 className={`animate__animated ${tituloVisible ? 'animate__fadeInRight mostrar' : ''} titulo`} style={h1Styles}>
        {props.children}
      </h1>
    </div>
  )
}