import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Bulid Something amazing With GPT-3 OpenAI</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, dolor. Iusto nulla, error perferendis labore eius vero recusandae illum cumque id nesciunt ex quas, corrupti eaque necessitatibus reiciendis earum pariatur?</p>
        <div className='gpt3__header-content__input'>
          <input type="Email" placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt="people" />
          <p>1,600 people requested access visit in last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header
