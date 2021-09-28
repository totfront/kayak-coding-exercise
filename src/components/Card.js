import React, { useState, useEffect } from 'react'
import minimiseUrl from '../services/minimiseUrl'
// import SmoothRender from 'react-smooth-render'

import '../styles/blocks/card/card.scss'
import '../styles/blocks/card/__title/card__title.scss'
import '../styles/blocks/card/__logo/card__logo.scss'
import '../styles/blocks/card/__site/card__site.scss'
import '../styles/blocks/card/__text/card__text.scss'
import '../styles/blocks/card/__text/_phone-number/card__text_phone-number.scss'

export default function Card(props) {
  const { name, logoURL, site, phone, alliance } = props.data
  const [siteUrl, setSiteUrl] = useState(site)
  const [cardOnHover, setCardOnHover] = useState(false)

  useEffect(() => {
    if (props.data) {
      minimiseUrl(siteUrl, setSiteUrl)
    }
  }, [])

  return (
    <li className='card' onMouseOver={() => setCardOnHover(true)} onMouseLeave={() => setCardOnHover(false)}>
      <img className='card__logo' src={`https://content.r9cdn.net/${logoURL}`} alt='airline logo' />
      <article>
        <h3 className='card__title'>{name}</h3>
        {cardOnHover && (
          <>
            {alliance !== 'none' && <span className='card__text'>{alliance}</span>}
            <address className='card__address'>
              <a href={`tel:${phone}`} className='card__text card__text_phone-number'>
                {phone}
              </a>
            </address>
            {/* <SmoothRender hidden={!cardOnHover} timing={300}> */}
            <a href={`${site}`} className='card__site'>
              {siteUrl}
            </a>
            {/* </SmoothRender> */}
          </>
        )}
      </article>
    </li>
  )
}
