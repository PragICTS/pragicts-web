import $ from 'jquery'
require('./plugins/jquery-share')

const hideMenu = () => {
    const nbw = $(".nav-button")
    const nhw = $(".nav-holder")
    const nho = $(".nav-overlay")

    nhw.animate({
        left: "-1064px",
        opacity: 0
    }, {
        queue: false,
        duration: 600,
        easing: "easeInOutExpo"
    })
    nbw.addClass("but-hol").removeClass("cmenu")
    nho.fadeOut(500)
}

const showShare = (shrcn, ssb) => {
    hideMenu()
    shrcn.fadeIn(1).removeClass("isShare").addClass("invis-share")
    $(".share-title span").shuffleLetters({})
    ssb.addClass("clshbt")
    setTimeout(function () {
        $(".soa").each(function (a) {
            var b = $(this)
            setTimeout(function () {
                b.addClass("soavis")
            }, 150 * a)
        })

    }, 300)
}

const hideShare = (shrcn, ssb) => {
    shrcn.fadeOut(400).addClass("isShare").removeClass("invis-share")
    $(".soa").removeClass("soavis")
    ssb.removeClass("clshbt")
}

const Share = () => {
    $(".share-container").share({
        networks: ['facebook', 'pinterest', 'googleplus', 'twitter', 'linkedin']
    })
    const shrcn = $(".share-wrapper")
    const ssb = $(".showshare")

    $(".close-share").on("click", function () {
        hideShare(shrcn, ssb)
    })

    ssb.on("click", function () {

        if (shrcn.hasClass("isShare")) showShare(shrcn, ssb)
        else hideShare(shrcn, ssb)
        return false
    })
}

export default Share
