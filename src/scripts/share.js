import $ from 'jquery'
require('./plugins/jquery-share')

const showShare = () => {
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

const hideShare = () => {
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
        hideShare()
    })

    ssb.on("click", function () {

        if (shrcn.hasClass("isShare")) showShare()
        else hideShare()
        return false
    })
}

export default {Share, hideShare}
