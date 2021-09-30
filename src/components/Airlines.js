import React, { useState, useEffect } from 'react'
import Card from './Card'
import Filter from './Filter'
import getAirlines from '../services/api'
import '../styles/blocks/section/section.scss'
import '../styles/blocks/section/__title/section__title.scss'
import '../styles/blocks/grid/grid.scss'

export default function Airlines() {
  const [allAirlines, setAllAirlines] = useState([])
  const [airlinePack, setAirlinePack] = useState([])

  useEffect(() => {
    getAirlines()
      .then(res => {
        setAllAirlines(res)
        return res
      })
      .then(res => {
        setAirlinePack(res)
      })
      .catch(error => console.log('Responce failed. Error: ' + error))
  }, [])

  return (
    <>
      <section className='section'>
        <h1 className='section__title'>Airlines</h1>
        <Filter allAirlines={allAirlines} setAirlinePack={setAirlinePack} heading='Filter by Alliances' />
        <ul className='grid'>{airlinePack.lenght !== 0 ? airlinePack.map((airlineData, index) => <Card data={airlineData} key={index} />) : ''}</ul>
      </section>
    </>
  )
}
