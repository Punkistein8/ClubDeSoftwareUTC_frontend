import '../stylesheet/BotonLogin.css';

function BotonLogin(props) {
  return (
    <button className='botonLogin' id='botonLogin'>
      <span className='botonLogin--login'>{props.children}</span>
    </button>
  );
};

export default BotonLogin;