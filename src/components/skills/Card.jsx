import React from 'react'

const Card = ({ item: { img, title, alt} }) => {
  return (
    <div className='card'>
      <img src={img} alt={alt} />
      <h4>{title}</h4>
    </div>
  )
}

export default Card