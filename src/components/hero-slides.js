import React, { useEffect } from 'react'
import Glide from '@glidejs/glide'
import HeroImage1 from '../images/hero-images/hero-image-1.jpg'
import HeroImage2 from '../images/hero-images/hero-image-2.jpg'
import HeroImage3 from '../images/hero-images/hero-image-3.jpg'
import HeroImage4 from '../images/hero-images/hero-image-4.jpg'

const slides = [
    {
        image: HeroImage1,
        mainText: 'Expedite Your<br /> <span>Outcomes.</span>',
        subText: 'We can deliver the pertinent digital platforms'
    },
    {
        image: HeroImage2,
        mainText: 'Augment Your <br />  <span>Growth.</span>',
        subText: 'We can help you succeed on the internet',
        action: {
            'link': '/'
        }
    },
    {
        image: HeroImage3,
        mainText: 'Focus On <br /><span> Your Business.</span>',
        subText: 'Let us manage your digital assets for exceptional results',
        action: {
            'link': '/'
        }
    },
    {
        image: HeroImage4,
        mainText: 'Simplify<br /> <span>Your IT.</span>',
        subText: 'We can rationalize your digital footprint for optimum returns.',
        action: {
            'link': '/'
        }
    }
]

const HeroSlides = () => {
    useEffect(() => {
        new Glide('.hero-wrap', {
            type: 'carousel',
            perView: 1,
            autoplay: 3000,
            hoverpause: true,
        }).mount()

        let a = document.querySelectorAll(".hero-bg")

        a.forEach(function (a) {
            if(a.dataset.bg) {
                a.style.backgroundImage = "url(" + a.dataset.bg + ")"
            }
        })
    }, [])

    return (
        <div className="hero-wrap" id="sec1" data-scrollax-parent="true">
            <div className="slider-carousel-wrap full-height fullscreen-slider-wrap glide__track" data-glide-el="track">
                <div className="fullscreen-slider full-height cur_carousel-slider-container fl-wrap glide__slides">
                    {slides.map(slide => (
                        <div key={slide.image} className="fullscreen-slider-item full-height fl-wrap glide__slide">
                            <div className="bg par-elem hero-bg"  data-bg={slide.image}></div>
                            <div className="overlay"></div>
                            <div className="half-hero-wrap">
                                <h1 dangerouslySetInnerHTML={{ __html: slide.mainText }}></h1>
                                <h4>{slide.subText}</h4>
                                <div className="clearfix"></div>
                                {/* <a href={slide.action.link} className="custom-scroll-link btn float-btn flat-btn color-btn mar-top">Let's Start</a> */}
                            </div>
                        </div>
                    ))}
                </div>
                <div data-glide-el="controls">
                    <div data-glide-dir="<" className="sp-cont   sp-cont-prev"><i className="fal fa-arrow-left"></i></div>
                    <div data-glide-dir=">" className="sp-cont   sp-cont-next"><i className="fal fa-arrow-right"></i></div>
                    <div className="fullscreenslider-counter"></div>
                </div>
            </div>
            <div className="hero-decor-numb"><span>6.9149106  </span><span>79.9105932 </span> <a href="https://g.page/PragICTS?share" target="_blank" className="hero-decor-numb-tooltip">Based In Colombo, Sri Lanka</a></div>
        </div>
    )
}

export default HeroSlides
