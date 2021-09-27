import React from 'react'
import '../styles/blocks/header/header.scss'
import logo from '../images/logo.svg'

export default function Header() {
  return (
    <header className='header'>
      <img src={logo} alt='KAYAK logo' />
    </header>
  )
}
