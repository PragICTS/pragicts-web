import $ from 'jquery'
import scrollToFixed from './plugins/scroll-to-fixed'

const ScrollToFixed = () => {
    $(".scroll-nav-wrap").scrollToFixed({
        minWidth: 569,
        zIndex: 12,
        preUnfixed: function () {
            $(this).css("margin-top", "0");
        },
        preFixed: function () {
            if ($(window).width() < 1064) $(this).css("margin-top", "80px");
        }
    });
    $(".hidden-info-wrap-bg").scrollToFixed({
        minWidth: 1064,
        zIndex: 12,
        marginTop: 80,
        removeOffsets: true,
        limit: function () {
            var a = $(".limit-box").offset().top - $(".hidden-info-wrap-bg").outerHeight(true);
            return a;
        }
    });
    $(".fixed-column").scrollToFixed({
        minWidth: 1064,
        zIndex: 12,
        marginTop: 120,
        removeOffsets: true,
        limit: function () {
            var a = $(".limit-box").offset().top - $(".fixed-column").outerHeight(true) - 50;
            return a;
        }
    });
    if ($(".fixed-bar").outerHeight(true) < $(".post-container").outerHeight(true)) {
        $(".fixed-bar").addClass("fixbar-action");
        $(".fixbar-action").scrollToFixed({
            minWidth: 1064,
            marginTop: function () {
                var a = $(window).height() - $(".fixed-bar").outerHeight(true) - 100;
                if (a >= 0) return 20;
                return a;
            },
            removeOffsets: true,
            limit: function () {
                var a = $(".limit-box").offset().top - $(".fixed-bar").outerHeight() - 20;
                return a;
            }
        });
    } else $(".fixed-bar").removeClass("fixbar-action");
}

export default ScrollToFixed
