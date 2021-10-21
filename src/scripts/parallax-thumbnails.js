import $ from 'jquery'
import fitText from './plugins/fit-text'

const ParallaxThumbnails = () => {
    $(".bg-parallax-module").each(function () {
        const tcp = $(this)
        const dpl = tcp.data("position-left")
        const dpt = tcp.data("position-top")
        tcp.css({
            "top": dpt + "%"
        })
        tcp.css({
            "left": dpl + "%",
        })
    })
    $(".album-thumbnails div").each(function () {
        const dp2 = $(this).data("position-left2")
        const dpt2 = $(this).data("position-top2")
        $(this).css({
            "top": dpt2 + "%"
        })

        $(this).css({
            "left": dp2 + "%",
        })
    });
    $(".section-subtitle").fitText(0.85)
}

export default ParallaxThumbnails
