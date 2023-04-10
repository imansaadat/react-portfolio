import React from 'react'
import SkillsItems from './SkillsItems'
import './skills.css'
const Skills = ({skillData}) => {
  return (
    <section name='Skills' className='skills flex'>
       <div className='container'>
           <div className='title'>
                <h2>Skills</h2>
                <p>These are the technologies I've worked with</p>
           </div>
           <div className='card_container'>
               {
                skillData.map((item,index)=>(
                  <SkillsItems key={index} item={item} />
                ))
               }
           </div>
       </div>
    </section>
  )
}

export default Skills