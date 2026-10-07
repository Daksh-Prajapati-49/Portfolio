import React, { useEffect, useState } from 'react'
import './Header.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

const roles = ['Software Engineer @ Katha', 'Backend Engineer', 'AI Agent Builder', 'Full Stack Developer'];

// Types out each role, pauses, deletes it, and moves on to the next one.
const useTypewriter = (words, typeSpeed = 80, deleteSpeed = 40, pause = 1600) => {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = words[index % words.length];
        let timeout;
        if (!deleting && text === word) {
            timeout = setTimeout(() => setDeleting(true), pause);
        } else if (deleting && text === '') {
            setDeleting(false);
            setIndex((i) => i + 1);
        } else {
            timeout = setTimeout(() => {
                setText(word.slice(0, text.length + (deleting ? -1 : 1)));
            }, deleting ? deleteSpeed : typeSpeed);
        }
        return () => clearTimeout(timeout);
    }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

    return text;
};

const Header = () => {
    const role = useTypewriter(roles);

    return (
        <header className='header' id='home'>
            <div className='header__inner'>
                <p className='header__hello'>Hi, my name is</p>
                <h1 className='header__name'>
                    Daksh Prajapati<span className='header__dot'>.</span>
                </h1>

                <div className='terminal'>
                    <div className='terminal__bar'>
                        <span className='terminal__dot terminal__dot--red' />
                        <span className='terminal__dot terminal__dot--yellow' />
                        <span className='terminal__dot terminal__dot--green' />
                        <span className='terminal__title'>daksh@portfolio: ~</span>
                    </div>
                    <div className='terminal__body'>
                        <p><span className='t-prompt'>$</span> whoami</p>
                        <p className='t-out'>
                            <span className='t-role'>{role}</span>
                            <span className='t-caret' />
                        </p>
                        <p><span className='t-prompt'>$</span> cat education.txt</p>
                        <p className='t-out'>B.Tech, Electronics &amp; Communication — IIIT Jabalpur</p>
                        <p><span className='t-prompt'>$</span> cat now.txt</p>
                        <p className='t-out t-green'>● shipping AI agents &amp; backend systems for influencer marketing</p>
                    </div>
                </div>

                <div className='header__actions'>
                    <a href='#project' className='btn'>
                        ./view-projects
                    </a>
                    <a href='#contact' className='btn btn--ghost'>
                        ./say-hello
                    </a>
                </div>

                <div className='header__socials'>
                    <a href='https://github.com/Daksh-Prajapati-49' target='_blank' rel='noreferrer' aria-label='GitHub'>
                        <GitHubIcon />
                    </a>
                    <a href='mailto:dakshprajapati493@gmail.com' aria-label='Email'>
                        <EmailOutlinedIcon />
                    </a>
                    <a href='https://drive.google.com/file/d/1An7PmgmgN5PUW-EIncSWWB37odYDALvK/view?usp=sharing' target='_blank' rel='noreferrer' aria-label='Resume'>
                        <DescriptionOutlinedIcon />
                    </a>
                </div>
            </div>

            <a href='#about' className='header__scroll' aria-label='Scroll to about'>
                <span>scroll</span>
                <span className='header__scroll-line' />
            </a>
        </header>
    )
}

export default Header
