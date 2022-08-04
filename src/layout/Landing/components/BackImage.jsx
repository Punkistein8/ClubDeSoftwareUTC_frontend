import '../stylesheet/BackImage.css';

export default function BackImage(props) {

  const whichBackground = {
    position: `${props.position}`,
    overflow: 'hidden',
    backgroundImage: `url(${props.image})`, // url de la imagen que se le pasa como propiedad
  }

  return (
    <div className='home-backImage' style={whichBackground} />
  );
}
