/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import { Link } from 'react-router-dom'

import mainMain from '../../../assets/imagenAbout.jpg'
import mainClub from '../../../assets/main-club.png'
import mainSaul from '../../../assets/main-saul.png'
import mainKevin from '../../../assets/main-kevin.png'

import imgRonald from '../../../assets/RonRodr_thumb.jpg'
import imgKevin from '../../../assets/KevLoj_thumb.png'
import imgSaul from '../../../assets/HenGue_thumb.jpg'
import imgJavier from '../../../assets/JavLass_thumb.png'
import MemberCard from './MemberCard'



export default function Example() {
  return (
    <>
      <div id='miembros' className="p-4 bg-white animate__animated animate__fadeInRight">
        <p className="text-center text-3xl font-bold text-gray-800">
          Miembros principales
        </p>

        <p className="text-center mb-32 text-xl font-normal text-gray-500">
          Conoce a los miembros fundadores
        </p>

        <div className="flex justify-center items-center space-y-24 xl:space-y-0 flex-col xl:flex-row justify evenly">
          <MemberCard
            memberPhoto={imgSaul}
            memberName="Henry Guerrero"
            memberArea="Lead dev"
            memberDesc="Estudiante de 7mo semestre de la carrera de Ingeniería en Sistemas de Información, presidente
                  del Club de Software de la Universidad Técnica de Cotopaxi. "
            memberFacebook="https://www.facebook.com/henrysaul.guerreroleon/"
            memberInstagram="https://www.instagram.com/panjed.7/"
            memberTwitter="https://twitter.com/chelovek_Henry"
            memberGithub="https://github.com/Punkistein8"
            memberLinkedIn="https://www.linkedin.com/in/henry-guerrero-leon/"
          />

          <MemberCard
            memberPhoto={imgRonald}
            memberName="Ronald Rodríguez"
            memberArea="Mobile Developer 📱"
            memberDesc="Estudiante de 7mo Semestre de la Carrera de Ingeniería de Sistemas de Información de la Universidad Técnica de Cotopaxi,
            confiable, buen amigo y autosuficiente."
            memberFacebook="https://www.facebook.com/ronald.rodriguezmachado"
            memberGithub="https://github.com/ZedritG"
          />

          <MemberCard
            memberPhoto={imgKevin}
            memberName="Kevin Loja"
            memberArea="Web developer 💻"
            memberDesc="Estudiante de 7mo Semestre de Ingeniería de Sistemas de la Universidad Técnica de Cotopaxi,
                  autodidacta y proactivo."
            memberFacebook="https://www.facebook.com/kloja1"
            memberInstagram="https://www.instagram.com/luci.f.7/"
            memberGithub="https://github.com/KevinL96"
            memberLinkedIn="https://www.linkedin.com/in/kevin-loja-93266453/"
          />

          <MemberCard
            memberPhoto={imgJavier}
            memberName="Javier Lasso"
            memberArea="Backend developer "
            memberDesc="Estudiante de 7mo Semestre de Ingeniería de Sistemas de la Universidad Técnica de Cotopaxi,
                  responsable, elocuente y muy carismático."
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
