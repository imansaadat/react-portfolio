import React from 'react'

const SkillsItems = ({ item: { img, title, alt} }) => {
  return (
    <div className='item'>
      <img src={img} alt={alt} />
      <h4>{title}</h4>
    </div>
  )
}

export default SkillsItems