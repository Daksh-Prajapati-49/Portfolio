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
            I'm a <strong>Full Stack Developer</strong> with a Bachelor of Technology in
            Electronics &amp; Communication Engineering from <strong>IIIT Jabalpur</strong>.
            I love turning ideas into fast, clean products — and I have a passion for
            learning and sharing my knowledge with others.
          </p>

          <pre className='code'>
            <code>
              <span className='c-key'>const</span> <span className='c-var'>daksh</span> = {'{'}{'\n'}
              {'  '}role: <span className='c-str'>'Full Stack Developer'</span>,{'\n'}
              {'  '}education: <span className='c-str'>'B.Tech ECE @ IIIT Jabalpur'</span>,{'\n'}
              {'  '}stack: [<span className='c-str'>'React'</span>, <span className='c-str'>'Node'</span>, <span className='c-str'>'MongoDB'</span>, <span className='c-str'>'Java'</span>],{'\n'}
              {'  '}lovesCP: <span className='c-bool'>true</span>,{'\n'}
              {'  '}openToWork: <span className='c-bool'>true</span>,{'\n'}
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
