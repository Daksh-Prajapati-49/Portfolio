import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about' id='about'>
      <img  src='https://mohd-shahid-iqbal.github.io/myportfolio/static/media/shahid.c9f7e04d7825dd13872b.png' alt='profile' />
      <div className='about__content'>
        <h1>
          About Me
        </h1>
        <p>
          I am a Full Stack Developer with a Bachelor's of Technology in Electronics & Communication Engineering from IIIT, Jabalpur. I have a passion for learning and sharing my knowledge with others.
        </p>
        <div>
          Resume
        </div>

      </div>
    </div>
  )
}

export default About