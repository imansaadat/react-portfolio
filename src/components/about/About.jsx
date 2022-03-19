import React from 'react'
import './About.css'
const About = () => {
  return (
   <section name='About' className='about flex'>
     <div className='container'>
       <div className='title center'>
           <h2>About</h2>
       </div>
       <div className='about_content'>
        <div className='left'>
          <p>
          I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?
          </p>
        </div>
        <div className="right">
          <p>
          Hi. I'm Clint, nice to meet you. Please take a look around.
          </p>
        </div>
       </div>
     </div>
   </section>
  )
}

export default About