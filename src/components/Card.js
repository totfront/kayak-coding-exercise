import React, { useState, useEffect } from 'react'
import minimiseUrl from '../services/minimiseUrl'
import '../styles/blocks/card/card.scss'
import '../styles/blocks/card/__title/card__title.scss'
import '../styles/blocks/card/__logo/card__logo.scss'
import '../styles/blocks/card/__site/card__site.scss'
import '../styles/blocks/card/__phone-number/card__phone-number.scss'

export default function Card(props) {
  const { data } = props
  const { name, logoURL, site, phone, alliance } = data

  const [siteUrl, setSiteUrl] = useState(site)

  useEffect(() => {
    if (siteUrl) {
      minimiseUrl(siteUrl, setSiteUrl)
    }
  }, [])

  // console.log(data)

  return (
    <li className='card'>
      <img className='card__logo' src={`https://content.r9cdn.net/${logoURL}`} alt='airline logo' />
      <article>
        <h3 className='card__title'>{name}</h3>
        <span className='card__text'>{alliance === 'none' ? 'no alliance' : alliance}</span>
        <address className='card__address'>
          <a href={`tel:${phone}`} className='card__phone-number'>
            {phone}
          </a>
        </address>
        <a href={`${site}`} className='card__site'>
          {siteUrl}
        </a>
      </article>
    </li>
  )
}
