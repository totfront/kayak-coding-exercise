import React from 'react'
import '../styles/blocks/grid/__card/grid__card.scss'
import '../styles/blocks/grid/__card-title/grid__card-title.scss'
import '../styles/blocks/grid/__card-pic/grid__card-pic.scss'

export default function Card(props) {
  const { data } = props
  const { name, logoURL } = data

  console.log(data)

  return (
    <li className='grid__card'>
      <img className='grid__card-pic' src={`https://content.r9cdn.net/${logoURL}`} alt='airline logo' />
      <span className='grid__card-title'>{name}</span>
      <div></div>
    </li>
  )
}
