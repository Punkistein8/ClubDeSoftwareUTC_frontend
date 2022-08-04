import '../stylesheet/Slogan.css';
import TypeAnimation from 'react-type-animation';


function Slogan(props) {
  return (
    <div className='slogan'>
      <h2 className='slogan--words'>
        La {' '}
        <TypeAnimation
          cursor={true}
          sequence={[
            'autoeducación',
            800,
            'diligencia',
            800,
            'disciplina',
            800,
          ]}
          wrapper="span"
          repeat={3}
        /> <br/> es la clave del éxito.
      </h2>
    </div>
  )
}

export default Slogan;