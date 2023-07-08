import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Improving end distrust instantly',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, odit.'
  },
  {
    title: 'Become the tended active',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, odit.'
  },
  {
    title: 'Messge or am onthing',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, odit.'
  },
  {
    title: 'Really boy law county',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, odit.'
  },
]
const Features = () => {
  return (
    <div className='gpt3__features section__padding ' id='features'>
      <div className='gpt3__features-hadding '>
        <h1 className='gradient__text'>
          The Feature is Now and You Just Need To Realize It.Step into Future Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>

      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title} />
        ))}
      </div>
    </div>
  )
}

export default Features
