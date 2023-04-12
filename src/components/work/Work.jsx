import React,{useState} from 'react'
import WorkItems from './WorkItems'
import { HiArrowNarrowRight } from 'react-icons/hi';
import './work.css'

const Work = ({workData}) => {
  const [visible, setVisible] = useState(6);

  const showMoreItems = () => {
    setVisible((preValue) => preValue + 3);
  };

  return (
    <section name='Work' className='work'>
      <div className='container'>
        <div className='title'>
          <h2>Work</h2>
          <p>Check out some of my projects</p>
        </div>
        <div className='card_container'>
            {
             workData.slice(0, visible).map((item,index)=>(
                <WorkItems key={index} item={item} />
              ))
            }
        </div>
        { visible < workData.length && (
          <div>
            <button className="btn" onClick={showMoreItems}>
              View More <HiArrowNarrowRight className="icon" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Work