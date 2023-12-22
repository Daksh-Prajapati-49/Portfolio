import React from 'react'
import './About.css'
// import useWindowDimensions from '../utils/useWindowDimension'

const About = () => {
  return (
    <div className='about' id='about'>
      <img  id='pic' src='/profile_pic.jpeg' alt='profile' />
      <div className='about__content'>
        <h1>
          About Me
        </h1>
        <p>
          I am a Full Stack Developer with a Bachelor's of Technology in Electronics & Communication Engineering from IIIT, Jabalpur. I have a passion for learning and sharing my knowledge with others.
        </p>
        <a href='https://drive.google.com/file/d/1An7PmgmgN5PUW-EIncSWWB37odYDALvK/view?usp=sharing' target='_blank' rel='noreferrer' alt='resume'>
          Resume
        </a>

      </div>
    </div>
  )
}

export default About