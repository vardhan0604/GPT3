import React from 'react'
import './Blog.css'
const Blog = ({imgUrl,date,title} ) => {
  return (
    <div className='blog'>
      <div>
        <img src={imgUrl} alt="" />
      </div>
      <div className="bs">
      <div className='blog-text'>
        <p>{date}</p>
        <h3>{title}</h3>
      </div>
      <a href="#">Read Full Article</a>
    </div>
    </div>
  )
}

export default Blog
