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

const skillData = [
  {
    img: HtmlImg,
    title: 'html',
    alt: 'html'
  },
  {
    img: CSSImg,
    title: 'css',
    alt: 'css'
  },
  {
    img: TailwindImg,
    title: 'tailwind',
    alt: 'tailwind'
  },
  {
    img: BootstrapImg,
    title: 'bootstrap',
    alt: 'bootstrap'
  },
  {
    img: SassImg,
    title: 'sass',
    alt: 'sass'
  },
  {
    img: JsImg,
    title: 'javascript',
    alt: 'javascript'
  },
  {
    img: ReactJsImg,
    title: 'react',
    alt: 'react'
  },
  {
    img: GitHubImg,
    title: 'github',
    alt: 'github'
  },
]

const Skills = () => {
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
                  <Card key={index} item={item} />
                ))
               }
           </div>
       </div>
    </section>
  )
}

export default Skills