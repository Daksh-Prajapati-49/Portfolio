import React, { useEffect, useState } from 'react'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const RESUME_URL = 'https://drive.google.com/file/d/1An7PmgmgN5PUW-EIncSWWB37odYDALvK/view?usp=sharing';

const links = [
    { href: '#about', label: 'about' },
    { href: '#exp', label: 'experience' },
    { href: '#project', label: 'projects' },
    { href: '#skills', label: 'skills' },
    { href: '#contact', label: 'contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const close = () => setOpen(false);

    return (
        <nav className={`navi ${scrolled ? 'navi--scrolled' : ''}`}>
            <a href='#home' className='navi__logo' onClick={close}>
                <span className='navi__prompt'>~/</span>daksh<span className='navi__cursor'>_</span>
            </a>

            <button
                className='navi__toggle'
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                onClick={() => setOpen(!open)}
            >
                {open ? <CloseIcon /> : <MenuIcon />}
            </button>

            <div className={`navi__links ${open ? 'navi__links--open' : ''}`}>
                {links.map((link, i) => (
                    <a key={link.href} href={link.href} onClick={close}>
                        <span className='navi__num'>0{i + 1}.</span>{link.label}
                    </a>
                ))}
                <a href={RESUME_URL} target='_blank' rel='noreferrer' className='btn navi__resume' onClick={close}>
                    resume.pdf
                </a>
            </div>
        </nav>
    )
}

export default Navbar
