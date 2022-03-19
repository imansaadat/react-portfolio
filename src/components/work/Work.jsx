import React from 'react'
import Card from './Card'
import Keyboarda from '../../assets/keyboarda.png';
import Epoxy from '../../assets/epoxy.png';
import Sitechin from '../../assets/sitechin.png';
import landingSitechin from '../../assets/landingSitechin.png';
import Defi from '../../assets/Defi.png';
import manageLanding from '../../assets/manageLanding.png';
import Bookmark from '../../assets/bookmark.png';
import Easybank from '../../assets/easybank.png';
import Secured from '../../assets/secured.png';
import './Work.css'
const Work = () => {
  return (
    <section name='Work' className='work'>
      <div className='container'>
        <div className='title'>
          <h2>Work</h2>
          <p>Check out some of my projects</p>
        </div>
        <div className='card_container'>
            <Card img={Epoxy} title='Epoxy'/> 
            <Card img={Secured} title='Secured'/> 
            <Card img={Bookmark} title='Bookmark'/> 
            <Card img={manageLanding} title='Manage Landing'/> 
            <Card img={Defi} title='Defi'/> 
            <Card img={Easybank} title='Easybank'/> 
            <Card img={landingSitechin} title='Landing Sitechin'/> 
            <Card img={Keyboarda} title='Keyboarda'/> 
            <Card img={Sitechin} title='Sitechin'/> 
        </div>
      </div>
    </section>
  )
}

export default Work