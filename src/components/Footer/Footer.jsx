import React from 'react'
import './Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import useReveal from '../utils/useReveal'

const Footer = () => {
  const [ref, visible] = useReveal();

  return (
    <footer className='footer' id='contact'>
      <div className={`section footer__inner reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
        <p className='footer__cmd'><span>05.</span> $ ./contact.sh</p>
        <h2>Get in Touch</h2>
        <p className='footer__text'>
          Always up for conversations about backend systems, AI agents or interesting engineering roles.
          Whether you have an opportunity, a question, or just want to say hi — my inbox is always open.
        </p>
        <a href='mailto:dakshprajapati493@gmail.com' className='btn footer__cta'>
          $ mail dakshprajapati493@gmail.com
        </a>
      </div>

      <div className='footer__bar'>
        <span>
          <span className='footer__tag'>&lt;/&gt;</span> with <span className='footer__heart'>♥</span> by{' '}
          <a href='https://github.com/Daksh-Prajapati-49' target='_blank' rel='noreferrer'>
            <GitHubIcon style={{ fontSize: '0.95rem', verticalAlign: '-2px' }} /> Daksh Prajapati
          </a>{' '}
          using React
        </span>
        <span className='footer__status'>● main · © {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}

export default Footer
