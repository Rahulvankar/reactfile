import React from 'react';
import  Feature  from '../../components/feature/Feature';
import './WhatGPT3.css';
const WhatGPT3 = (props) => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
     <div className='gpt3__whatgpt3-feature'>
      <Feature title="What is GPT3" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quasi magnam qui omnis rerum, sequi labore corporis illo sint culpa quas cumque nulla eos ea vero nam quod animi eaque."/>
     </div>
     <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The Possibilities are beyond your imagination</h1>
        <p>Explore The Library  </p>
     </div>
     <div className='gpt3__whatgpt3-container'>
      <Feature title="Chatbots" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quasi magnam qui omnis rerum, sequi labore corporis illo sint culpa quas cumque nulla eos ea vero nam quod animi eaque."/>
      <Feature title="Knowledgebase" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quasi magnam qui omnis rerum, sequi labore corporis illo sint culpa quas cumque nulla eos ea vero nam quod animi eaque."/>
      <Feature title="Education" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quasi magnam qui omnis rerum, sequi labore corporis illo sint culpa quas cumque nulla eos ea vero nam quod animi eaque."/>
     </div>
    </div>
  )
}

export default WhatGPT3
