import React, { useState, useEffect } from 'react'
import '../styles/blocks/filter/__title/filter__title.scss'
import '../styles/blocks/filter/__form/filter__form.scss'
import '../styles/blocks/filter/__option/filter__option.scss'
import '../styles/blocks/filter/__form-input/filter__form-input.scss'
import '../styles/blocks/filter/__form-input-prepend/filter__form-input-prepend.scss'
import '../styles/blocks/filter/__form-input-prepend/_selected/filter__form-input-prepend_selected.scss'

export default function Filter(props) {
  const { heading, allAirlines, setAirlinePack } = props

  const [selectedAlliance, setSelectedAlliance] = useState('')

  const filterAirlines = (airlines, selectedAlliance) => {
    const entries = Object.fromEntries(
      new Map([
        ['ST', 'Sky Team'],
        ['OW', 'Oneworld'],
        ['SA', 'Star Alliance']
      ])
    )
    return airlines.filter(airline => entries[airline.alliance] === selectedAlliance)
  }

  useEffect(() => {
    setAirlinePack(filterAirlines(allAirlines, selectedAlliance))
  }, [selectedAlliance])

  const changePrependElementColor = (element, formContainer) => {
    formContainer.querySelectorAll('.filter__form-input-prepend').forEach(prependElement => {
      prependElement.classList.remove('filter__form-input-prepend_selected')
    })

    element.classList.add('filter__form-input-prepend_selected')
  }

  const handleChange = evt => {
    setSelectedAlliance(evt.target.value)
    changePrependElementColor(evt.target.parentNode.querySelector('.filter__form-input-prepend'), evt.target.parentNode.parentNode)
  }

  return (
    <>
      <div className='filter'>
        <h3 className='filter__title'>{heading}</h3>
        <form className='filter__form'>
          <label className='filter__option'>
            <input className='filter__form-input' onChange={handleChange} type='radio' name='filter' value='Oneworld' />
            <span className='filter__form-input-prepend' />
            Oneworld
          </label>
          <label className='filter__option'>
            <input className='filter__form-input' onChange={handleChange} type='radio' name='filter' value='Sky Team' />
            <span className='filter__form-input-prepend' />
            Sky Team
          </label>
          <label className='filter__option'>
            <input className='filter__form-input' onChange={handleChange} type='radio' name='filter' value='Star Alliance' />
            <span className='filter__form-input-prepend' />
            Star Alliance
          </label>
        </form>
      </div>
    </>
  )
}
