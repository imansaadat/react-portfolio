import React from 'react'
import Card from './Card'
import Keyboarda from '../../assets/keyboarda.png';
import Epoxy from '../../assets/epoxy.png';
import Sitechin from '../../assets/sitechin.png';
import LandingSitechin from '../../assets/landingSitechin.png';
import Defi from '../../assets/Defi.png';
import ManageLanding from '../../assets/manageLanding.png';
import Bookmark from '../../assets/bookmark.png';
import Easybank from '../../assets/easybank.png';
import Secured from '../../assets/secured.png';
import { HiArrowNarrowRight } from 'react-icons/hi';
import './Work.css'

const workData = [
  {
    img:Epoxy,
    title:'Epoxy'
  },
  {
    img:Secured,
    title:'Secured'
  },
  {
    img:Bookmark,
    title:'Bookmark'
  },
  {
    img:ManageLanding,
    title:'manageLanding'
  },
  {
    img:Defi,
    title:'Defi'
  },
  {
    img:Easybank,
    title:'Easybank'
  },
  {
    img:LandingSitechin,
    title:'landingSitechin'
  },
  {
    img:Keyboarda,
    title:'Keyboarda'
  },
  {
    img:Sitechin,
    title:'Sitechin'
  },
]

const Work = () => {
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
                <Card key={index} item={item} />
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