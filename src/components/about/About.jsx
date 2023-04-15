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
          I am a developer who specializes in front-end development. I have a strong enthusiasm for programming and continuously expanding my knowledge. Furthermore, I take pleasure in imparting my acquired knowledge with others.
          </p>
        </div>
        <div className="right">
          <p>
          Hi. I'm Eslam, nice to meet you. Please take a look around.
          </p>
        </div>
       </div>
     </div>
   </section>
  )
}

export default About