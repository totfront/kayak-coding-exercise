import React from 'react'

export default function Airline(props) {
  const { data } = props
  const { name } = data
  return (
    <div>
      <h3>{name}</h3>
    </div>
  )
}
