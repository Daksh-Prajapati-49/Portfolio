import React from 'react'
import './Experience.css'

const Experience = () => {
  return (
    <div className='exp' id='exp'>
      <h1>Experiences</h1>
      <div className='exp__content'>
        <div>
          <img src='/groww.png' alt='groww'/>
          <h3>Software Engineer Intern</h3>
          <h3>Jan 2024 - Jul 2024</h3>
        </div>
        <div>
          <img src='/heycoach.png' alt='heycoach'/>
          <h3>Competitive Programming Intern</h3>
          <h3>Nov 2023 - Dec 2023</h3>
        </div>
      </div>
    </div>
  )
}

export default Experience