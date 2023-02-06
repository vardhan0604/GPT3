import React from 'react'
import './Hero.css'
import people from '../../img/Illustration.png'
import group from '../../img/Group 81.png'
import comp1 from '../../img/google.png'
import comp2 from '../../img/slack.png'
import comp3 from '../../img/Bitmap.png'
import comp4 from '../../img/dropbox.png'
import comp5 from '../../img/shopify.png'
const Hero = () => {
  return (
    <div>
    <div className='hero'>
        <div>
            <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
            <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            <div className='input-sec'>
                <input type="text" className='heroinput' placeholder='Your Email address'/>
                <button>Get Started</button>
            </div>
            <div className='testinomial'>
              <img src={group} alt="" srcset="" />
              <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
        </div> 
        <div>
            <img src={people} alt="" />
        </div>

        
    </div>
    <div className='comp'>
          <img src={comp1} alt="" srcset="" />
          <img src={comp2} alt="" srcset="" />
          <img src={comp1} alt="" srcset="" />
          <img src={comp4} alt="" srcset="" />
          <img src={comp5} alt="" srcset="" />
        </div>
    </div>
  )
}

export default Hero
