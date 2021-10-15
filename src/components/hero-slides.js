import React, { useEffect } from 'react'
import Glide from '@glidejs/glide'
import { StaticImage } from "gatsby-plugin-image"

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
                    <div className="fullscreen-slider-item full-height fl-wrap glide__slide">
                        <div className="bg par-elem hero-bg"  data-bg="https://pragicts.com/images/home/banners/banner-expedite-business-outcomes-new1.jpg"></div>
                        <div className="overlay"></div>
                        <div className="half-hero-wrap">
                            <h1>Expedite Your<br /> <span>Outcomes.</span></h1>
                            <h4>We can deliver the pertinent digital platforms</h4>
                            <div className="clearfix"></div>
                            <a href="#sec2" className="custom-scroll-link btn float-btn flat-btn color-btn mar-top">Let's Start</a>
                        </div>
                    </div>
                    <div className="fullscreen-slider-item full-height fl-wrap glide__slide">
                        <div className="bg par-elem hero-bg"  data-bg="https://pragicts.com/images/home/banners/banner-enhance-your-online-visibility.jpg"></div>
                        <div className="overlay"></div>
                        <div className="half-hero-wrap">
                            <h1>Augment Your <br />  <span>Growth.</span></h1>
                            <h4>We can help you succeed on the internet</h4>
                            <div className="clearfix"></div>
                            <a href="portfolio.html" className="btn float-btn flat-btn color-btn mar-top">Our Portfolio</a>
                        </div>
                    </div>
                    <div className="fullscreen-slider-item full-height fl-wrap glide__slide">
                        <div className="half-hero-wrap">
                            <h1>Focus On <br /><span> Your Business.</span></h1>
                            <h4>Let us manage your digital assets for exceptional results</h4>
                            <div className="clearfix"></div>
                            <a href="services.html" className="btn float-btn flat-btn color-btn mar-top">Our Services</a>
                        </div>
                        <div className="bg par-elem hero-bg"  data-bg="https://pragicts.com/images/home/banners/banner-focus-on-your-business.jpg"></div>
                        <div className="overlay"></div>
                    </div>
                </div>
                <div data-glide-el="controls">
                    <div data-glide-dir="<" className="sp-cont   sp-cont-prev"><i className="fal fa-arrow-left"></i></div>
                    <div data-glide-dir=">" className="sp-cont   sp-cont-next"><i className="fal fa-arrow-right"></i></div>
                    <div className="fullscreenslider-counter"></div>
                </div>
            </div>
            <div className="hero-decor-numb"><span>40.7143528  </span><span>-74.0059731 </span> <a href="https://www.google.com.ua/maps/" target="_blank" className="hero-decor-numb-tooltip">Based In Colombo, Sri Lanka</a></div>
        </div>
    )
}

export default HeroSlides
