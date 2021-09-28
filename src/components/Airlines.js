import React, { useState, useEffect } from 'react'
import Card from './Card'
import Filter from './Filter'
import getAirlines from '../services/api'
import '../styles/blocks/section/section.scss'
import '../styles/blocks/section/__title/section__title.scss'
import '../styles/blocks/grid/grid.scss'

export default function Airlines() {
  const [allAirlines, setAirlines] = useState([])
  const [nextAirlinesPack, setNextAirlinePack] = useState([])

  useEffect(() => {
    getAirlines()
      .then(res => {
        setAirlines(res)
        return res
      })
      .then(() => {
        // render first 40 airlines
        setNextAirlinePack(allAirlines.slice(0, 40))
      })
      .catch(error => console.log(error))
  })

  return (
    <>
      <section className='section'>
        <h1 className='section__title'>Airlines</h1>
        <Filter heading='Filter by airlines' />
        <ul className='grid'>{nextAirlinesPack && nextAirlinesPack.map((airlineData, index) => <Card data={airlineData} key={index} />)}</ul>
      </section>
    </>
  )
}
