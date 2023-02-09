import React from 'react'
import Blog from './Blog/Blog'
import './Blogs.css'
 import blog1 from'../../img/Rectangle 22.png'
 import blog2 from'../../img/blog2.png'
 import blog3 from'../../img/blog3.png'
 import blog4 from'../../img/blog4.png'
 import blog5 from'../../img/blog5.png'



const Blogs = () => {
  return (
    <div className='blogs'>
      <h1>A lot is happening, 
We are blogging about it.</h1>
      <div className='blogs-sec'>
        <div className='grid1'>
        <Blog  imgUrl={blog1} date='Sep 26, 2021' title ='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
        </div>
        <Blog imgUrl={blog2} date='Sep 26, 2021' title ='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
        <Blog imgUrl={blog3} date='Sep 26, 2021' title ='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
        <Blog imgUrl={blog4} date='Sep 26, 2021' title ='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
        <Blog imgUrl={blog5} date='Sep 26, 2021' title ='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
      </div>
    </div>
  )
}

export default Blogs
