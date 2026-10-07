import React, { useState } from 'react'
import './Skills.css';
import ProgressBar from "./ProgressBar";
import useReveal from '../utils/useReveal'

const skills = {
  'frontend.json': [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 70 },
    { name: 'React', level: 60 },
    { name: 'Bootstrap', level: 80 },
    { name: 'Material UI', level: 70 },
  ],
  'backend.json': [
    { name: 'Node.js', level: 80 },
    { name: 'Express.js', level: 70 },
    { name: 'MongoDB', level: 60 },
    { name: 'Python', level: 80 },
    { name: 'C++', level: 70 },
    { name: 'Java', level: 75 },
  ],
};

const tabs = Object.keys(skills);

const Skills = () => {
  const [active, setActive] = useState(tabs[0]);
  const [ref, visible] = useReveal();

  return (
    <section className={`section skills reveal ${visible ? 'is-visible' : ''}`} id='skills' ref={ref}>
      <h2 className='section__title'><span>04.</span>skills</h2>

      <div className='editor'>
        <div className='editor__tabs' role='tablist'>
          {tabs.map((tab) => (
            <button
              key={tab}
              role='tab'
              aria-selected={active === tab}
              className={`editor__tab ${active === tab ? 'editor__tab--active' : ''}`}
              onClick={() => setActive(tab)}
            >
              <span className='editor__icon'>{'{}'}</span>{tab}
            </button>
          ))}
        </div>
        <div className='editor__body'>
          <p className='comment'>{`// proficiency.log — ${active.replace('.json', '')}`}</p>
          {/* key forces a remount so bars re-animate when switching tabs */}
          <div className='skills__data' key={active}>
            {skills[active].map((skill, i) => (
              <ProgressBar
                key={skill.name}
                name={skill.name}
                progress={skill.level}
                animate={visible}
                delay={i * 120}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
