import React from 'react'

export default function Filter(props) {
  const { heading } = props
  return (
    <>
      <h3>{heading}</h3>
      <form>
        <input type='radio' />
        <input type='radio' />
        <input type='radio' />
      </form>
    </>
  )
}
