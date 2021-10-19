import React from 'react'

const HomeFeaturedProjects = () => {

    return (
        <section className="dark-bg featured-projects-wrap" id="sec5">
            <div className="fet_pr-carousel-title">
                <div className="fet_pr-carousel-title-item">
                    <h3>Our Featured Projects</h3>
                    <p>In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida.</p>
                    <a href="#" className="btn float-btn flat-btn color-btn mar-top">Our Portfolio</a>
                </div>
            </div>
            <div className="slider-carousel-wrap fl-wrap">
                <div className="fet_pr-carousel cur_carousel-slider-container fl-wrap">
                    <div className="slick-item">
                        <div className="fet_pr-carousel-box">
                            <div className="fet_pr-carousel-box-media fl-wrap">
                                <img src="http://solonick.kwst.net/site/images/folio/web/slider/3.jpg" className="respimg" alt="" />
                                <a href="http://solonick.kwst.net/site/images/folio/web/slider/3.jpg" className="fet_pr-carousel-box-media-zoom   image-popup"><i className="fal fa-search"></i></a>
                            </div>
                            <div className="fet_pr-carousel-box-text fl-wrap">
                                <h3><a href="#">Lokomotive Project</a></h3>
                                <div className="fet_pr-carousel-cat"><a href="#">Branding</a> <a href="#">Web Design</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="slick-item">
                        <div className="fet_pr-carousel-box">
                            <div className="fet_pr-carousel-box-media fl-wrap">
                                <img src="http://solonick.kwst.net/site/images/folio/web/slider/4.jpg" className="respimg" alt="" />
                                <a href="https://vimeo.com/183619886" className="fet_pr-carousel-box-media-zoom   image-popup"><i className="fal fa-play"></i></a>
                            </div>
                            <div className="fet_pr-carousel-box-text fl-wrap">
                                <h3><a href="#">Architecture Agensy</a></h3>
                                <div className="fet_pr-carousel-cat"><a href="#">Photography</a> <a href="#">Web Design</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="slick-item">
                        <div className="fet_pr-carousel-box">
                            <div className="fet_pr-carousel-box-media fl-wrap">
                                <img src="http://solonick.kwst.net/site/images/folio/web/slider/1.jpg" className="respimg" alt="" />
                                <a href="http://solonick.kwst.net/site/images/folio/web/slider/1.jpg" className="fet_pr-carousel-box-media-zoom   image-popup"><i className="fal fa-search"></i></a>
                            </div>
                            <div className="fet_pr-carousel-box-text fl-wrap">
                                <h3><a href="#">Corporate website</a></h3>
                                <div className="fet_pr-carousel-cat"><a href="#">Branding</a> <a href="#">Web</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="slick-item">
                        <div className="fet_pr-carousel-box">
                            <div className="fet_pr-carousel-box-media fl-wrap">
                                <img src="http://solonick.kwst.net/site/images/folio/web/slider/2.jpg" className="respimg" alt="" />
                                <a href="http://solonick.kwst.net/site/images/folio/web/slider/2.jpg" className="fet_pr-carousel-box-media-zoom   image-popup"><i className="fal fa-search"></i></a>
                            </div>
                            <div className="fet_pr-carousel-box-text fl-wrap">
                                <h3><a href="#">Mobile ui Interface</a></h3>
                                <div className="fet_pr-carousel-cat"><a href="#">UI/UX</a> <a href="#">Web Design</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="slick-item">
                        <div className="fet_pr-carousel-box">
                            <div className="fet_pr-carousel-box-media fl-wrap">
                                <img src="http://solonick.kwst.net/site/images/folio/web/slider/5.jpg" className="respimg" alt="" />
                                <a href="http://solonick.kwst.net/site/images/folio/web/slider/5.jpg" className="fet_pr-carousel-box-media-zoom   image-popup"><i className="fal fa-search"></i></a>
                            </div>
                            <div className="fet_pr-carousel-box-text fl-wrap">
                                <h3><a href="#">Fashion Agensy</a></h3>
                                <div className="fet_pr-carousel-cat"><a href="#">Development</a> <a href="#">Web Design</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sp-cont sp-arr sp-cont-prev"><i className="fal fa-long-arrow-left"></i></div>
                <div className="sp-cont sp-arr sp-cont-next"><i className="fal fa-long-arrow-right"></i></div>
            </div>
            <div className="fet_pr-carousel-counter"></div>
        </section>
    )
}

export default HomeFeaturedProjects
