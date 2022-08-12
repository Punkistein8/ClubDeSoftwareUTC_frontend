
import mainSaul from '../../../assets/main-saul.png'
import mainKevin from '../../../assets/main-kevin.png'
import mainRonSauJav from '../../../assets/main-ron-sau-jav.png'


const About = () => {
  return (
    <>
      <section className='pb-28 bg-gradient-to-b from-indigo-300 to-blue-50'>
        <div id='about' className="animate__animated animate__fadeInLeft px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="text-center max-w-lg mb-6 font-sans text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl sm:leading-none">
                  🤝 ¿Quiénes somos?
                </h2>
                <p className="text-base text-gray-700 md:text-lg text-center">
                  Somos estudiantes de 7mo Semestre de la Carrera de
                  Ingeniería en Sistemas de Información de la <a className='font-semibold cursor-pointer hover:underline hover:-translate-y-1 hover:scale-110' href='https://www.utc.edu.ec/' target="_blank">Universidad Técnica de Cotopaxi.</a><br />
                  Estamos comprometidos en ser un apoyo total en el proceso de formación profesional de todos los estudiantes de la
                  <a className='font-semibold cursor-pointer hover:underline hover:-translate-y-1 hover:scale-110'
                    target="_blanl"
                    href='https://www.facebook.com/profile.php?id=100076213147628' > carrera</a> y la comunidad universitaria en general al
                  contar con el apoyo de nuestros <a target='__blank' href='https://ciya-utc.com/ciya/index.php/welcome/docentes#btn-52' className='font-semibold cursor-pointer hover:underline'>
                    docentes y tutores</a>.
                </p>
              </div>
              <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                <div className="bg-white border-l-4 shadow-sm border-[#008ae6]">
                  <div className="h-full p-5 border border-l-0 rounded-r">
                    <h6 className="mb-2 font-semibold leading-5">
                      Nuestros talleres 👩‍💻
                    </h6>
                    <p className="text-sm text-gray-900">
                      Impartimos talleres de formación en lenguajes de programación,
                      soft skills, algoritmia, desarrollo de aplicaciones web y más.
                    </p>
                  </div>
                </div>
                <div className="bg-white border-l-4 shadow-sm border-[#008ae6]">
                  <div className="h-full p-5 border border-l-0">
                    <h6 className="mb-2 font-semibold leading-5">
                      Nuestro objetivo 🎯
                    </h6>
                    <p className="text-sm text-gray-900">
                      Formar una comunidad universitaria estudiantil en la que
                      podamos compartir nuestras experiencias y conocimientos de
                      una manera divertida y amena.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-end'>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src={mainSaul}
                alt=""
              />
            </div>
          </div>
          <div className="mt-5 grid gap-5 row-gap-8 lg:grid-cols-2">
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src={mainKevin}
                alt=""
              />
            </div>
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src={mainRonSauJav}
                alt=""
              />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default About