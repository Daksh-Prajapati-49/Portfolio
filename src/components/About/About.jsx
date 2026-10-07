import React from 'react'
import './About.css'
import useReveal from '../utils/useReveal'

const About = () => {
  const [ref, visible] = useReveal();

  return (
    <section className={`section about reveal ${visible ? 'is-visible' : ''}`} id='about' ref={ref}>
      <h2 className='section__title'><span>01.</span>about_me</h2>
      <div className='about__grid'>
        <div className='about__text'>
          <p>
            I'm a <strong>Software Engineer</strong> at <strong>Katha</strong>, where I build the
            backend, AI agents and product surfaces of an influencer-marketing marketplace —
            from schema design to production rollout. I hold a B.Tech in Electronics &amp;
            Communication Engineering from <strong>IIIT Jabalpur</strong>, and I love turning
            messy manual workflows into systems that just run.
          </p>

          <pre className='code'>
            <code>
              <span className='c-key'>const</span> <span className='c-var'>daksh</span> = {'{'}{'\n'}
              {'  '}role: <span className='c-str'>'Software Engineer @ Katha'</span>,{'\n'}
              {'  '}education: <span className='c-str'>'B.Tech ECE @ IIIT Jabalpur'</span>,{'\n'}
              {'  '}stack: [<span className='c-str'>'Rails'</span>, <span className='c-str'>'MySQL'</span>, <span className='c-str'>'Next.js'</span>, <span className='c-str'>'LLMs'</span>],{'\n'}
              {'  '}lovesCP: <span className='c-bool'>true</span>,{'\n'}
              {'  '}currentlyBuilding: <span className='c-str'>'AI agents'</span>,{'\n'}
              {'}'};
            </code>
          </pre>

          <a href='https://drive.google.com/file/d/1An7PmgmgN5PUW-EIncSWWB37odYDALvK/view?usp=sharing' target='_blank' rel='noreferrer' className='btn'>
            $ open resume.pdf
          </a>
        </div>

        <div className='about__pic'>
          <img src='/profile_pic.png' alt='Daksh Prajapati' />
        </div>
      </div>
    </section>
  )
}

export default About
