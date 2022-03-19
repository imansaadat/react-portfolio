import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import './Contact.css'
const Contact = () => {
  return (
    <section name='Contact' className='contact flex'>
      <div className='container'>
        <div className='form_block'>
          <form>
            <h2><span className='blue'>Contact</span> Us</h2>
            <div className='field_block'>
              <input type="text" placeholder='Enter your name' />
            </div>
            <div className='field_block'>
              <input type="email" placeholder='Enter your email' />
            </div>
            <div className='field_block'>
              <textarea rows='10' placeholder='Enter your message' />
            </div>
            <div className='field_block'>
              <button className='btn'>Let's Collaborate <HiArrowNarrowRight className='icon' /> </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
