import React from "react"

const HomeVideo = () => {
    return (
        <section className="dark-bg sinsec-dec sinsec-dec2">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="video-box fl-wrap">
                            <img src="images/all/2.jpg" className="respimg" alt="" />
                            <a className="video-box-btn color-bg image-popup" href="https://vimeo.com/110234211"><i className="fal fa-play" aria-hidden="true"></i></a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="video-promo-text fl-wrap mar-top">
                            <h3>Our Video Presentation  </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. </p>
                            <a href="#" className="btn float-btn flat-btn color-btn mar-top">Our Youtube Chanel</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="half-bg-dec single-half-bg-dec" data-ran="12"></div>
            <div className="sec-lines"></div>
        </section>
    )
}

export default HomeVideo
