import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
import about_img from '../../assets/about1.png'
import play_icon from '../../assets/play-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Programs = () => {
  return (
    <div className='programs'>
      <div className="about-left">
      
        <img src={about_img} alt="" className='about-img'/>
        
      </div>
      <div className="about-right">
        <h3>Image To Verbal Description</h3>
        <a href="http://localhost:8501/" target="_blank" rel="noreferrer">
        <button type='submit' className='btn dark-btn'>Click Here To Generate <img src={white_arrow} alt="" /></button>
        </a>
        
        
      </div>
        
      </div>
    
  )
}

export default Programs
