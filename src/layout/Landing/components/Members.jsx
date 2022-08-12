/* This example requires Tailwind CSS v2.0+ */
import imgRonald from '../../../assets/RonRodr_thumb.jpg'
import imgKevin from '../../../assets/KevLoj_thumb.png'
import imgSaul from '../../../assets/HenGue_thumb.jpg'
import imgJavier from '../../../assets/JavLass_thumb.png'
import MemberCard from './MemberCard'



export default function Example() {
  return (
    <>
      <div id='miembros' className="p-4 py-28 sm:py-44 bg-gradient-to-b from-white to-indigo-300 animate__animated animate__fadeInRight">
        <p className="text-center text-3xl font-bold text-gray-800">
          Miembros principales
        </p>

        <p className="text-center mb-32 text-xl font-normal text-gray-500">
          Conoce a los fundadores
        </p>

        <div className="flex flex-col justify-center items-center space-y-24 xl:space-y-0  xl:flex-row justify evenly">

          <MemberCard
            memberPhoto={imgKevin}
            memberName="Kevin Loja"
            memberArea="Web developer"
            memberDesc="Es de la ciudad de Latacunga, se enfoca en el desarrollo web, 
            administración empresarial y operacional, es bilingüe y
            sabe de marketing; un todólogo."
            memberFacebook="https://www.facebook.com/kloja1"
            memberInstagram="https://www.instagram.com/luci.f.7/"
            memberGithub="https://github.com/KevinL96"
            memberLinkedIn="https://www.linkedin.com/in/kevin-loja-93266453/"
          />

          <MemberCard
            memberPhoto={imgRonald}
            memberName="Ronald Rodríguez"
            memberArea="Mobile developer"
            memberDesc="Nacido en Santo Domingo de los Tsáchilas, desarrollador móvil especializado
            en tecnologías como Dart y Flutter; es confiable, agradable y muy buen colega."
            memberInstagram="https://www.instagram.com/ronaldrodri1/"
            memberFacebook="https://www.facebook.com/ronald.rodriguezmachado"
            memberGithub="https://github.com/ZedritG"
          />

          <MemberCard
            memberPhoto={imgSaul}
            memberName="Henry Guerrero"
            memberArea="Lead dev"
            memberDesc="Oriundo de la ciudad de Quito, presidente
                  del Club de Software de la Universidad Técnica de Cotopaxi. "
            // memberFacebook="https://www.facebook.com/henrysaul.guerreroleon/"
            memberInstagram="https://www.instagram.com/panjed.7/"
            memberTwitter="https://twitter.com/chelovek_Henry"
            memberGithub="https://github.com/Punkistein8"
            memberLinkedIn="https://www.linkedin.com/in/henry-guerrero-leon/"
          />

          <MemberCard
            memberPhoto={imgJavier}
            memberName="Javier Lasso"
            memberArea="Backend developer "
            memberDesc="Made in Machachi, se especializa en bases de datos y en desarrollo
            de servicios backend, es muy sociable, carismático y elocuente."
            memberFacebook="https://www.facebook.com/jhon.javier.52687"
            memberTwitter="https://twitter.com/Jotatroll"
            memberInstagram="https://www.instagram.com/javierjhonl/"
            memberGithub="https://github.com/JavierJhon"
          />

        </div>

      </div>
    </>
  )
}
