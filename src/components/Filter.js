import React from 'react'
import '../styles/blocks/filter/__title/filter__title.scss'
import '../styles/blocks/filter/__form/filter__form.scss'
import '../styles/blocks/filter/__option/filter__option.scss'
import '../styles/blocks/filter/__form-input/filter__form-input.scss'

export default function Filter(props) {
  const { heading } = props
  return (
    <>
      <div className='filter'>
        <h3 className='filter__title'>{heading}</h3>
        <form className='filter__form'>
          <label className='filter__option'>
            <input className='filter__form-input' type='radio' name='filter' value='Oneworld' />
            Oneworld
          </label>
          <label className='filter__option'>
            <input className='filter__form-input' type='radio' name='filter' value='Sky Team' />
            Sky Team
          </label>
          <label className='filter__option'>
            <input className='filter__form-input' type='radio' name='filter' value='Sky Alliance' />
            Sky Alliance
          </label>
        </form>
      </div>
    </>
  )
}
