import React, { useState, useEffect } from 'react'
import Airline from './Airline'
import Filter from './Filter'
import getAirlines from '../services/api'
import '../styles/blocks/section/section.scss'

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
        setNextAirlinePack(allAirlines.slice(0, 39))
      })
      .catch(error => console.log(error))
  }, [1])

  return (
    <>
      <section className='section'>
        <h1 className='section__title'>Airlines</h1>
        <Filter heading='Filter by airlines' />
        {nextAirlinesPack && nextAirlinesPack.map((airlineData, index) => <Airline data={airlineData} key={index} />)}
      </section>
    </>
  )
}
