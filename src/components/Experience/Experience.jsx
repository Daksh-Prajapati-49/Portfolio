import React from 'react'
import './Experience.css'
import useReveal from '../utils/useReveal'

const experiences = [
  {
    hash: 'a3f9c21',
    branch: 'groww',
    logo: '/groww.png',
    company: 'Groww',
    role: 'Software Engineer Intern',
    period: 'Jan 2024 – Jul 2024',
  },
  {
    hash: '7be04d8',
    branch: 'heycoach',
    logo: '/heycoach.png',
    company: 'HeyCoach',
    role: 'Competitive Programming Intern',
    period: 'Nov 2023 – Dec 2023',
  },
];

const Experience = () => {
  const [ref, visible] = useReveal();

  return (
    <section className={`section exp reveal ${visible ? 'is-visible' : ''}`} id='exp' ref={ref}>
      <h2 className='section__title'><span>02.</span>experience</h2>
      <p className='comment exp__cmd'>$ git log --oneline --career</p>

      <ol className='exp__log'>
        {experiences.map((exp, i) => (
          <li className='exp__item' key={exp.hash}>
            <span className='exp__node' />
            <div className='exp__card'>
              <div className='exp__meta'>
                <span className='exp__hash'>commit {exp.hash}</span>
                <span className='exp__branch'>
                  ({i === 0 ? 'HEAD -> ' : ''}{exp.branch})
                </span>
              </div>
              <div className='exp__body'>
                <div className='exp__logo'>
                  <img src={exp.logo} alt={exp.company} />
                </div>
                <div>
                  <h3>{exp.role} <span>@ {exp.company}</span></h3>
                  <p className='exp__date'>{exp.period}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Experience
