import React from 'react'
import '../stylesheet/CardsContainer.css'

import blogImage1 from '../images/blog-herr.jpg'
import blogImage2 from '../images/blog-technology.jpg'
import HenGue_thumb from '../images/HenGue_thumb.jpg'
import KevLoj_thumb from '../images/KevLoj_thumb.jpg'


export default function CardsContainer() {
  return (
    //SE RECOMIENDA PONER IMÁGENES CON UNA DIMENSIÓN DE 590X552
    <ul className="cards">
      <Card
        img={blogImage2}
        author="Henry Guerrero"
        date="Hace 1 hora"
        icono={HenGue_thumb}
        description='Conoce los frameworks y librerías más utilizados para JavaScript en el entorno del desarrollo web.'
      />
      <Card
        img="https://i.imgur.com/oYiTqum.jpg"
        author="Kevin Loja"
        date="Hace 3 días"
        icono={KevLoj_thumb}
        description='Aprende sobre los patrones de diseño gráfico de ilustraciones vectoriales modernas.'
      />

    </ul>
  )
}

function Card(params) {
  return (
    <li>
      <a href="" className="card">
        <img src={params.img} className="card__image" alt="" />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
            <img className="card__thumb" src={params.icono} alt="" />
            <div className="card__header-text">
              <h3 className="card__title">{params.author}</h3>
              <span className="card__status">{params.date}</span>
            </div>
          </div>
          <p className="card__description">{params.description}</p>
        </div>
      </a>
    </li>
  )
}
