import React from 'react'
import '../stylesheet/ProjCards.css'

export default function ProjCards(props) {
  return (
    <a href="https://google.com" class="cardProj">
      <div class="inner">
        <h2 class="title">{props.title}</h2>
        <time class="subtitle">{props.subtitle}</time>
      </div>
    </a>
  )
}
