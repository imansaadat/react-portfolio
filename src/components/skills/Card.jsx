import React from 'react'
import './Skills.css'
const Card = ({img , text}) => {
  return (
    <div className='card'>
         <img src={img} alt="" />
         <h4>{text}</h4>
    </div>
  )
}

export default Card