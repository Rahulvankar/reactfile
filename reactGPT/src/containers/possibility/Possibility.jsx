import React from 'react';
import './possibility.css';
import PossibilityImage from '../../assets/possibility.png';
const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={PossibilityImage} alt="possiblility" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
         <h1 className='gradient__text'>The possibility are beyond your imagination</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptates fugiat inventore rem id facilis aut ab ullam laborum provident.</p>
           <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility
