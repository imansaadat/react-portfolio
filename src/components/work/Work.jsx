import React from 'react'
import WorkItems from './WorkItems'
import { HiArrowNarrowRight } from 'react-icons/hi';
import './work.css'

const Work = ({workData}) => {
  return (
    <section name='Work' className='work'>
      <div className='container'>
        <div className='title'>
          <h2>Work</h2>
          <p>Check out some of my projects</p>
        </div>
        <div className='card_container'>
            {
              workData.map((item,index)=>(
                <WorkItems key={index} item={item} />
              ))
            }
        </div>
        <div>
          <button className='btn'>View Work <HiArrowNarrowRight className='icon' /> </button>
        </div>
      </div>
    </section>
  )
}

export default Work