import React from 'react'
import Card from './Card'
import './Skills.css'
import HtmlImg from '../../assets/html.png';
import CSSImg from '../../assets/css.png';
import TailwindImg from '../../assets/tailwind.png';
import BootstrapImg from '../../assets/bootstrap.png';
import SassImg from '../../assets/sass.png';
import JsImg from '../../assets/javascript.png';
import ReactJsImg from '../../assets/react.png';
import GitHubImg from '../../assets/github.png';
const Skills = () => {
  return (
    <section name='Skills' className='skills flex'>
       <div className='container'>
           <div className='title'>
                <h2>Skills</h2>
                <p>These are the technologies I've worked with</p>
           </div>
           <div className='card_container'>
               <Card img={HtmlImg} text='HTML'/>
               <Card img={CSSImg} text='CSS'/>
               <Card img={BootstrapImg} text='Bootstrap'/>
               <Card img={TailwindImg} text='Tailwind'/>
               <Card img={SassImg} text='Sass'/>
               <Card img={JsImg} text='Javascript'/>
               <Card img={ReactJsImg} text='ReactJs'/>
               <Card img={GitHubImg} text='Github'/>
           </div>
       </div>
    </section>
  )
}

export default Skills