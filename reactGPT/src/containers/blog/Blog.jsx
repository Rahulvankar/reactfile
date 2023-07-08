import React from 'react';
import  Article  from '../../components/article/Article';
import {blog01, blog02, blog03, blog04,blog05} from '../blog/import';
import './blog.css';
const Blog = () => {
    return (
        <div className='gpt3__blog section__padding' id='blog'>
            <div className='gpt3__blog-hedding'>
              <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
            </div> 
            <div className='gpt3__blog-container'>
                <div className='gpt3__blog-container_groupA'>
                 <Article imgUrl={blog01} date="sep 26,20" title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, molestiae."/>
                </div>
                <div className='gpt3__blog-container_groupB'>
                 <Article imgUrl={blog02} date="sep 26,20" title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, molestiae."/>
                 <Article imgUrl={blog03} date="sep 26,20" title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, molestiae."/>
                 <Article imgUrl={blog04} date="sep 26,20" title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, molestiae."/>
                 <Article imgUrl={blog05} date="sep 26,20" title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, molestiae."/>

                </div>
            </div>
        </div>
    )
}

export default Blog
