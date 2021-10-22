import $ from 'jquery'
import lightGallery from './plugins/lightgallery/lightgallery'
require('./plugins/lightgallery/lg-zoom')
require('./plugins/lightgallery/lg-video')

const LightGallery = () => {
    function lightGalleryInit() {
        $(".image-popup").lightGallery({
            selector: "this",
            cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
            download: false,
            counter: false
        });
        const o = $(".lightgallery")
        const p = o.data("looped")
        o.lightGallery({
            selector: ".lightgallery a.popup-image",
            cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
            download: false,
            loop: false,
            counter: false
        });
    }
    lightGalleryInit()
}

export default LightGallery
