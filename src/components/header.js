import * as React from 'react'
import logo from '../images/logo.png'
import { Link } from 'gatsby'
import { gsap } from 'gsap'

const Header = () => {
    const handleNavClick = () => {
        const navEl = document.querySelector('.nav-button')
        const navOverlayEl = document.querySelector('.nav-overlay')
        const navHolderEl = document.querySelector('.nav-holder')

        if(navEl.classList.contains('but-hol')) {

            gsap.to(navOverlayEl, { display: 'block', opacity: 1, duration: .5 })
            gsap.to(navHolderEl, { left: '0', opacity: 1, duration: .6 })

            navEl.classList.add('cmenu')
            navEl.classList.remove('but-hol')
        } else {

            gsap.to(navOverlayEl, { display: 'none', opacity: 0, duration: .5 })
            gsap.to(navHolderEl, { left: '-1064px', opacity: 0, duration: .6 })

            navEl.classList.remove('cmenu')
            navEl.classList.add('but-hol')
        }
    }

    return (
        <header className="main-header">
            <Link className="logo-holder" to="/">
                <img src={logo}  alt="PragICTS logo" />
            </Link>
            <div className="nav-button but-hol" onClick={handleNavClick}>
                <span  className="nos"></span>
                <span className="ncs"></span>
                <span className="nbs"></span>
                <div className="menu-button-text">Menu</div>
            </div>
            <div className="header-social">
                <ul >
                    <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#" target="_blank"><i className="fab fa-vk"></i></a></li>
                </ul>
            </div>
            <div className="show-share showshare">
                <i className="fal fa-retweet"></i>
                <span>Share This</span>
            </div>
        </header>
    )
}

export default Header
