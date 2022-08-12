import logoClub from '../../../assets/logoBlanco.svg'
import LogoWhats from './svg/WhatsappIco'
const Footer = () => {
  return (
    <footer id='contacto' className="bg-gray-800 text-center lg:text-left h-[10vh] flex justify-evenly">
      <div className='flex '>
        <div
          className="text-white text-center p-4 h-[10vh] flex flex-col justify-center items-center"
        >
          Club de Software UTC <br />
          <a className="text-slate-400">
            © 2022 Copyright
          </a>
        </div>

        <div className='flex align-middle justify-center items-center'>
          <img src={logoClub} className='h-[3vh]' />
        </div>
      </div>

      <div className='flex items-center'>
        <LogoWhats className='w-12' />
      </div>
    </footer>
  )
}

export default Footer