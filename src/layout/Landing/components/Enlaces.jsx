import '../stylesheet/Enlaces.css';

function Enlaces(props){
  
  return (
    <a className='enlace' href={props.href} >
      {props.children}
    </a>
  );
}

export default Enlaces;