import React from 'react'

const Card = ({item:{img,title}}) => {
  return (
     <div className='card' style={{backgroundImage:`url(${img})`}}>
          <div className='overlay'>
             <p>{title}</p>
             <div className='btn-group'>
                <a href="/">Demo</a>
                <a href="/">Code</a>
             </div>
          </div>
     </div>
  )
}

export default Card