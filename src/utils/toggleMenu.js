import { gsap } from 'gsap'

const toggleMenu = () => {
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

export default toggleMenu
