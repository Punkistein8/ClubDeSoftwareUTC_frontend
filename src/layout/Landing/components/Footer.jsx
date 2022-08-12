import logoClub from '../../../assets/logoBlanco.svg'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-center lg:text-left h-[10vh] flex justify-center">
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
    </footer>
  )
}

export default Footer