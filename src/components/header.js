import * as React from 'react'
import logo from '../images/logo.png'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header className="main-header">
            <Link className="logo-holder" to="/">
                <img src={logo}  alt="PragICTS logo" />
            </Link>
            <div className="nav-button but-hol">
                <span  className="nos"></span>
                <span className="ncs"></span>
                <span className="nbs"></span>
                <div className="menu-button-text">Menu</div>
            </div>
            <div className="header-social">
                <ul >
                    <li><a rel="noreferrer noopener" href="https://www.linkedin.com/company/pragicts/" target="_blank"><i aria-label='Linkedin' className="fab fa-linkedin"></i></a></li>
                    <li><a rel="noreferrer noopener" href="https://www.facebook.com/pragicts.ltd" target="_blank"><i aria-label='Facebook' className="fab fa-facebook-f"></i></a></li>
                    <li><a rel="noreferrer noopener" href="https://www.instagram.com/pragicts/" target="_blank"><i aria-label='Instagram' className="fab fa-instagram"></i></a></li>
                    <li><a rel="noreferrer noopener" href="https://twitter.com/pragictsltd" target="_blank"><i aria-label='Twitter' className="fab fa-twitter"></i></a></li>
                    <li><a rel="noreferrer noopener" href="https://www.pinterest.com/pragicts" target="_blank"><i aria-label='Pinterest' className="fab fa-pinterest"></i></a></li>
                    <li><a rel="noreferrer noopener" href="https://www.youtube.com/channel/UCNYbr4DHBPqeXslkZ6hRruQ" target="_blank"><i aria-label='YouTube' className="fab fa-youtube"></i></a></li>
                    <li><a rel="noreferrer noopener" href="https://pragicts.blogspot.com/" target="_blank"><i aria-label='YouTube' className="fab fa-blogger"></i></a></li>
                </ul>
            </div>
            {/* <div className="show-share showshare">
                <i className="fal fa-retweet"></i>
                <span>Share This</span>
            </div> */}
        </header>
    )
}

export default Header
