import $ from 'jquery'
require('./plugins/sliding-menu')
require('./plugins/shuffle-letters')
require('./plugins/jquery-easing')

const showMenu = (nbw, nhw, nho) => {
    // hideShare()
    nho.fadeIn(500)
    nhw.animate({
        left: "0",
        opacity: 1
    }, {
        queue: false,
        duration: 600,
        easing: "easeInOutExpo"
    })
    nbw.removeClass("but-hol").addClass("cmenu")
    setTimeout(function () {
        $(".nav-title span").shuffleLetters({})
    }, 300)
}

const hideMenu = (nbw, nhw, nho) => {
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

const Menu = () => {

    const nbw = $(".nav-button")
    const nhw = $(".nav-holder")
    const nho = $(".nav-overlay")

    $("#menu").menu()
    $(".sliding-menu li a.nav").parent("li").addClass("submen-dec")

    nbw.on("click", function () {
        if (nbw.hasClass("but-hol")) showMenu(nbw, nhw, nho)
        else hideMenu(nbw, nhw, nho)
        return false
    })
    nho.on("click", function () {
        hideMenu(nbw, nhw, nho)
        return false
    })
    $(".sliding-menu a ").mousemove(function (e) {
        $(this).shuffleLetters({})
    })

    const tooltips = document.querySelectorAll('.nav-overlay .tooltip')

    window.onmousemove = function (e) {
        var x = (e.clientX + 20) + 'px',
            y = (e.clientY + 20) + 'px'
        for (var i = 0; i < tooltips.length; i++) {
            tooltips[i].style.top = y
            tooltips[i].style.left = x
        }
    }
}

export default Menu
