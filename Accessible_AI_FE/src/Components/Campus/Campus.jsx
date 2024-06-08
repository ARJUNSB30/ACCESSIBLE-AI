import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'
import about_img from '../../assets/about3.png'
import play_icon from '../../assets/play-icon.png'



const Campus = () => {
  return (
    <div className='campus'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        
      </div>
      <div className="about-right">
        <h3>Text To Verbal Description</h3>
        <a href="https://bobbyhadz.com" target="_blank" rel="noreferrer">
        <button type='submit' className='btn dark-btn'>Click Here To Generate <img src={white_arrow} alt="" /></button>
        </a>
     </div>
    </div>
  )
}

export default Campus
