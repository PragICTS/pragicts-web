/*! lightgallery - v1.3.1
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2019 Sachin N; Licensed Apache 2.0 */
!function(e,t){"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e)}):"object"==typeof exports?module.exports=t(require("jquery")):t(e.jQuery)}(this,function(e){!function(){"use strict";var t={mode:"lg-slide",cssEasing:"ease",easing:"linear",speed:600,height:"100%",width:"100%",addClass:"",startClass:"lg-start-zoom",backdropDuration:150,hideBarsDelay:6e3,useLeft:!1,closable:!0,loop:!0,escKey:!0,keyPress:!0,controls:!0,slideEndAnimatoin:!0,hideControlOnEnd:!1,mousewheel:!0,getCaptionFromTitleOrAlt:!0,appendSubHtmlTo:".lg-sub-html",subHtmlSelectorRelative:!1,preload:1,showAfterLoad:!0,selector:"",selectWithin:"",nextHtml:"",prevHtml:"",index:!1,iframeMaxWidth:"100%",download:!0,counter:!0,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:!0,enableDrag:!0,dynamic:!1,dynamicEl:[],galleryId:1};function s(s,i){if(this.el=s,this.$el=e(s),this.s=e.extend({},t,i),this.s.dynamic&&"undefined"!==this.s.dynamicEl&&this.s.dynamicEl.constructor===Array&&!this.s.dynamicEl.length)throw"When using dynamic mode, you must also define dynamicEl as an Array.";return this.modules={},this.lGalleryOn=!1,this.lgBusy=!1,this.hideBartimeout=!1,this.isTouch="ontouchstart"in document.documentElement,this.s.slideEndAnimatoin&&(this.s.hideControlOnEnd=!1),this.s.dynamic?this.$items=this.s.dynamicEl:"this"===this.s.selector?this.$items=this.$el:""!==this.s.selector?this.s.selectWithin?this.$items=e(this.s.selectWithin).find(this.s.selector):this.$items=this.$el.find(e(this.s.selector)):this.$items=this.$el.children(),this.$slide="",this.$outer="",this.init(),this}s.prototype.init=function(){var t=this;t.s.preload>t.$items.length&&(t.s.preload=t.$items.length);var s=window.location.hash;s.indexOf("lg="+this.s.galleryId)>0&&(t.index=parseInt(s.split("&slide=")[1],10),e("body").addClass("lg-from-hash"),e("body").hasClass("lg-on")||(setTimeout(function(){t.build(t.index)}),e("body").addClass("lg-on"))),t.s.dynamic?(t.$el.trigger("onBeforeOpen.lg"),t.index=t.s.index||0,e("body").hasClass("lg-on")||setTimeout(function(){t.build(t.index),e("body").addClass("lg-on")})):t.$items.on("click.lgcustom",function(s){try{s.preventDefault(),s.preventDefault()}catch(e){s.returnValue=!1}t.$el.trigger("onBeforeOpen.lg"),t.index=t.s.index||t.$items.index(this),e("body").hasClass("lg-on")||(t.build(t.index),e("body").addClass("lg-on"))})},s.prototype.build=function(t){var s=this;s.structure(),e.each(e.fn.lightGallery.modules,function(t){s.modules[t]=new e.fn.lightGallery.modules[t](s.el)}),s.slide(t,!1,!1,!1),s.s.keyPress&&s.keyPress(),s.$items.length>1?(s.arrow(),setTimeout(function(){s.enableDrag(),s.enableSwipe()},50),s.s.mousewheel&&s.mousewheel()):s.$slide.on("click.lg",function(){s.$el.trigger("onSlideClick.lg")}),s.counter(),s.closeGallery(),s.$el.trigger("onAfterOpen.lg"),s.$outer.on("mousemove.lg click.lg touchstart.lg",function(){s.$outer.removeClass("lg-hide-items"),clearTimeout(s.hideBartimeout),s.hideBartimeout=setTimeout(function(){s.$outer.addClass("lg-hide-items")},s.s.hideBarsDelay)}),s.$outer.trigger("mousemove.lg")},s.prototype.structure=function(){var t,s="",i="",l=0,o="",n=this;for(e("body").append('<div class="lg-backdrop"></div>'),e(".lg-backdrop").css("transition-duration",this.s.backdropDuration+"ms"),l=0;l<this.$items.length;l++)s+='<div class="lg-item"></div>';if(this.s.controls&&this.$items.length>1&&(i='<div class="lg-actions"><button class="lg-prev lg-icon">'+this.s.prevHtml+'</button><button class="lg-next lg-icon">'+this.s.nextHtml+"</button></div>"),".lg-sub-html"===this.s.appendSubHtmlTo&&(o='<div class="lg-sub-html"></div>'),t='<div class="lg-outer '+this.s.addClass+" "+this.s.startClass+'"><div class="lg" style="width:'+this.s.width+"; height:"+this.s.height+'"><div class="lg-inner">'+s+'</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>'+i+o+"</div></div>",e("body").append(t),this.$outer=e(".lg-outer"),this.$slide=this.$outer.find(".lg-item"),this.s.useLeft?(this.$outer.addClass("lg-use-left"),this.s.mode="lg-slide"):this.$outer.addClass("lg-use-css3"),n.setTop(),e(window).on("resize.lg orientationchange.lg",function(){setTimeout(function(){n.setTop()},100)}),this.$slide.eq(this.index).addClass("lg-current"),this.doCss()?this.$outer.addClass("lg-css3"):(this.$outer.addClass("lg-css"),this.s.speed=0),this.$outer.addClass(this.s.mode),this.s.enableDrag&&this.$items.length>1&&this.$outer.addClass("lg-grab"),this.s.showAfterLoad&&this.$outer.addClass("lg-show-after-load"),this.doCss()){var r=this.$outer.find(".lg-inner");r.css("transition-timing-function",this.s.cssEasing),r.css("transition-duration",this.s.speed+"ms")}setTimeout(function(){e(".lg-backdrop").addClass("in")}),setTimeout(function(){n.$outer.addClass("lg-visible")},this.s.backdropDuration),this.s.download&&this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'),this.prevScrollTop=e(window).scrollTop()},s.prototype.setTop=function(){if("100%"!==this.s.height){var t=e(window).height(),s=(t-parseInt(this.s.height,10))/2,i=this.$outer.find(".lg");t>=parseInt(this.s.height,10)?i.css("top",s+"px"):i.css("top","0px")}},s.prototype.doCss=function(){return!!function(){var e=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],t=document.documentElement,s=0;for(s=0;s<e.length;s++)if(e[s]in t.style)return!0}()},s.prototype.isVideo=function(e,t){var s;if(s=this.s.dynamic?this.s.dynamicEl[t].html:this.$items.eq(t).attr("data-html"),!e)return s?{html5:!0}:(console.error("lightGallery :- data-src is not pvovided on slide item "+(t+1)+". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"),!1);var i=e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),l=e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),o=e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),n=e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);return i?{youtube:i}:l?{vimeo:l}:o?{dailymotion:o}:n?{vk:n}:void 0},s.prototype.counter=function(){this.s.counter&&e(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">'+(parseInt(this.index,10)+1)+'</span> / <span id="lg-counter-all">'+this.$items.length+"</span></div>")},s.prototype.addHtml=function(t){var s,i,l=null;if(this.s.dynamic?this.s.dynamicEl[t].subHtmlUrl?s=this.s.dynamicEl[t].subHtmlUrl:l=this.s.dynamicEl[t].subHtml:(i=this.$items.eq(t)).attr("data-sub-html-url")?s=i.attr("data-sub-html-url"):(l=i.attr("data-sub-html"),this.s.getCaptionFromTitleOrAlt&&!l&&(l=i.attr("title")||i.find("img").first().attr("alt"))),!s)if(null!=l){var o=l.substring(0,1);"."!==o&&"#"!==o||(l=this.s.subHtmlSelectorRelative&&!this.s.dynamic?i.find(l).html():e(l).html())}else l="";".lg-sub-html"===this.s.appendSubHtmlTo?s?this.$outer.find(this.s.appendSubHtmlTo).load(s):this.$outer.find(this.s.appendSubHtmlTo).html(l):s?this.$slide.eq(t).load(s):this.$slide.eq(t).append(l),null!=l&&(""===l?this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html"):this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")),this.$el.trigger("onAfterAppendSubHtml.lg",[t])},s.prototype.preload=function(e){var t=1,s=1;for(t=1;t<=this.s.preload&&!(t>=this.$items.length-e);t++)this.loadContent(e+t,!1,0);for(s=1;s<=this.s.preload&&!(e-s<0);s++)this.loadContent(e-s,!1,0)},s.prototype.loadContent=function(t,s,i){var l,o,n,r,a,d,g=this,h=!1,u=function(t){for(var s=[],i=[],l=0;l<t.length;l++){var n=t[l].split(" ");""===n[0]&&n.splice(0,1),i.push(n[0]),s.push(n[1])}for(var r=e(window).width(),a=0;a<s.length;a++)if(parseInt(s[a],10)>r){o=i[a];break}};if(g.s.dynamic){if(g.s.dynamicEl[t].poster&&(h=!0,n=g.s.dynamicEl[t].poster),d=g.s.dynamicEl[t].html,o=g.s.dynamicEl[t].src,g.s.dynamicEl[t].responsive)u(g.s.dynamicEl[t].responsive.split(","));r=g.s.dynamicEl[t].srcset,a=g.s.dynamicEl[t].sizes}else{if(g.$items.eq(t).attr("data-poster")&&(h=!0,n=g.$items.eq(t).attr("data-poster")),d=g.$items.eq(t).attr("data-html"),o=g.$items.eq(t).attr("href")||g.$items.eq(t).attr("data-src"),g.$items.eq(t).attr("data-responsive"))u(g.$items.eq(t).attr("data-responsive").split(","));r=g.$items.eq(t).attr("data-srcset"),a=g.$items.eq(t).attr("data-sizes")}var c=!1;g.s.dynamic?g.s.dynamicEl[t].iframe&&(c=!0):"true"===g.$items.eq(t).attr("data-iframe")&&(c=!0);var m=g.isVideo(o,t);if(!g.$slide.eq(t).hasClass("lg-loaded")){if(c)g.$slide.eq(t).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:'+g.s.iframeMaxWidth+'"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="'+o+'"  allowfullscreen="true"></iframe></div></div>');else if(h){var p="";p=m&&m.youtube?"lg-has-youtube":m&&m.vimeo?"lg-has-vimeo":"lg-has-html5",g.$slide.eq(t).prepend('<div class="lg-video-cont '+p+' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="'+n+'" /></div></div>')}else m?(g.$slide.eq(t).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'),g.$el.trigger("hasVideo.lg",[t,o,d])):g.$slide.eq(t).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="'+o+'" /></div>');if(g.$el.trigger("onAferAppendSlide.lg",[t]),l=g.$slide.eq(t).find(".lg-object"),a&&l.attr("sizes",a),r){l.attr("srcset",r);try{picturefill({elements:[l[0]]})}catch(e){console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.")}}".lg-sub-html"!==this.s.appendSubHtmlTo&&g.addHtml(t),g.$slide.eq(t).addClass("lg-loaded")}g.$slide.eq(t).find(".lg-object").on("load.lg error.lg",function(){var s=0;i&&!e("body").hasClass("lg-from-hash")&&(s=i),setTimeout(function(){g.$slide.eq(t).addClass("lg-complete"),g.$el.trigger("onSlideItemLoad.lg",[t,i||0])},s)}),m&&m.html5&&!h&&g.$slide.eq(t).addClass("lg-complete"),!0===s&&(g.$slide.eq(t).hasClass("lg-complete")?g.preload(t):g.$slide.eq(t).find(".lg-object").on("load.lg error.lg",function(){g.preload(t)}))},s.prototype.slide=function(t,s,i,l){var o=this.$outer.find(".lg-current").index(),n=this;if(!n.lGalleryOn||o!==t){var r=this.$slide.length,a=n.lGalleryOn?this.s.speed:0;if(!n.lgBusy){var d,g,h;if(this.s.download)(d=n.s.dynamic?!1!==n.s.dynamicEl[t].downloadUrl&&(n.s.dynamicEl[t].downloadUrl||n.s.dynamicEl[t].src):"false"!==n.$items.eq(t).attr("data-download-url")&&(n.$items.eq(t).attr("data-download-url")||n.$items.eq(t).attr("href")||n.$items.eq(t).attr("data-src")))?(e("#lg-download").attr("href",d),n.$outer.removeClass("lg-hide-download")):n.$outer.addClass("lg-hide-download");if(this.$el.trigger("onBeforeSlide.lg",[o,t,s,i]),n.lgBusy=!0,clearTimeout(n.hideBartimeout),".lg-sub-html"===this.s.appendSubHtmlTo&&setTimeout(function(){n.addHtml(t)},a),this.arrowDisable(t),l||(t<o?l="prev":t>o&&(l="next")),s)this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"),r>2?(g=t-1,h=t+1,0===t&&o===r-1?(h=0,g=r-1):t===r-1&&0===o&&(h=0,g=r-1)):(g=0,h=1),"prev"===l?n.$slide.eq(h).addClass("lg-next-slide"):n.$slide.eq(g).addClass("lg-prev-slide"),n.$slide.eq(t).addClass("lg-current");else n.$outer.addClass("lg-no-trans"),this.$slide.removeClass("lg-prev-slide lg-next-slide"),"prev"===l?(this.$slide.eq(t).addClass("lg-prev-slide"),this.$slide.eq(o).addClass("lg-next-slide")):(this.$slide.eq(t).addClass("lg-next-slide"),this.$slide.eq(o).addClass("lg-prev-slide")),setTimeout(function(){n.$slide.removeClass("lg-current"),n.$slide.eq(t).addClass("lg-current"),n.$outer.removeClass("lg-no-trans")},50);n.lGalleryOn?(setTimeout(function(){n.loadContent(t,!0,0)},this.s.speed+50),setTimeout(function(){n.lgBusy=!1,n.$el.trigger("onAfterSlide.lg",[o,t,s,i])},this.s.speed)):(n.loadContent(t,!0,n.s.backdropDuration),n.lgBusy=!1,n.$el.trigger("onAfterSlide.lg",[o,t,s,i])),n.lGalleryOn=!0,this.s.counter&&e("#lg-counter-current").text(t+1)}n.index=t}},s.prototype.goToNextSlide=function(e){var t=this,s=t.s.loop;e&&t.$slide.length<3&&(s=!1),t.lgBusy||(t.index+1<t.$slide.length?(t.index++,t.$el.trigger("onBeforeNextSlide.lg",[t.index]),t.slide(t.index,e,!1,"next")):s?(t.index=0,t.$el.trigger("onBeforeNextSlide.lg",[t.index]),t.slide(t.index,e,!1,"next")):t.s.slideEndAnimatoin&&!e&&(t.$outer.addClass("lg-right-end"),setTimeout(function(){t.$outer.removeClass("lg-right-end")},400)))},s.prototype.goToPrevSlide=function(e){var t=this,s=t.s.loop;e&&t.$slide.length<3&&(s=!1),t.lgBusy||(t.index>0?(t.index--,t.$el.trigger("onBeforePrevSlide.lg",[t.index,e]),t.slide(t.index,e,!1,"prev")):s?(t.index=t.$items.length-1,t.$el.trigger("onBeforePrevSlide.lg",[t.index,e]),t.slide(t.index,e,!1,"prev")):t.s.slideEndAnimatoin&&!e&&(t.$outer.addClass("lg-left-end"),setTimeout(function(){t.$outer.removeClass("lg-left-end")},400)))},s.prototype.keyPress=function(){var t=this;this.$items.length>1&&e(window).on("keyup.lg",function(e){t.$items.length>1&&(37===e.keyCode&&(e.preventDefault(),t.goToPrevSlide()),39===e.keyCode&&(e.preventDefault(),t.goToNextSlide()))}),e(window).on("keydown.lg",function(e){!0===t.s.escKey&&27===e.keyCode&&(e.preventDefault(),t.$outer.hasClass("lg-thumb-open")?t.$outer.removeClass("lg-thumb-open"):t.destroy())})},s.prototype.arrow=function(){var e=this;this.$outer.find(".lg-prev").on("click.lg",function(){e.goToPrevSlide()}),this.$outer.find(".lg-next").on("click.lg",function(){e.goToNextSlide()})},s.prototype.arrowDisable=function(e){!this.s.loop&&this.s.hideControlOnEnd&&(e+1<this.$slide.length?this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-next").attr("disabled","disabled").addClass("disabled"),e>0?this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-prev").attr("disabled","disabled").addClass("disabled"))},s.prototype.setTranslate=function(e,t,s){this.s.useLeft?e.css("left",t):e.css({transform:"translate3d("+t+"px, "+s+"px, 0px)"})},s.prototype.touchMove=function(t,s){var i=s-t;Math.abs(i)>15&&(this.$outer.addClass("lg-dragging"),this.setTranslate(this.$slide.eq(this.index),i,0),this.setTranslate(e(".lg-prev-slide"),-this.$slide.eq(this.index).width()+i,0),this.setTranslate(e(".lg-next-slide"),this.$slide.eq(this.index).width()+i,0))},s.prototype.touchEnd=function(e){var t=this;"lg-slide"!==t.s.mode&&t.$outer.addClass("lg-slide"),this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity","0"),setTimeout(function(){t.$outer.removeClass("lg-dragging"),e<0&&Math.abs(e)>t.s.swipeThreshold?t.goToNextSlide(!0):e>0&&Math.abs(e)>t.s.swipeThreshold?t.goToPrevSlide(!0):Math.abs(e)<5&&t.$el.trigger("onSlideClick.lg"),t.$slide.removeAttr("style")}),setTimeout(function(){t.$outer.hasClass("lg-dragging")||"lg-slide"===t.s.mode||t.$outer.removeClass("lg-slide")},t.s.speed+100)},s.prototype.enableSwipe=function(){var e=this,t=0,s=0,i=!1;e.s.enableSwipe&&e.doCss()&&(e.$slide.on("touchstart.lg",function(s){e.$outer.hasClass("lg-zoomed")||e.lgBusy||(s.preventDefault(),e.manageSwipeClass(),t=s.originalEvent.targetTouches[0].pageX)}),e.$slide.on("touchmove.lg",function(l){e.$outer.hasClass("lg-zoomed")||(l.preventDefault(),s=l.originalEvent.targetTouches[0].pageX,e.touchMove(t,s),i=!0)}),e.$slide.on("touchend.lg",function(){e.$outer.hasClass("lg-zoomed")||(i?(i=!1,e.touchEnd(s-t)):e.$el.trigger("onSlideClick.lg"))}))},s.prototype.enableDrag=function(){var t=this,s=0,i=0,l=!1,o=!1;t.s.enableDrag&&t.doCss()&&(t.$outer.on("mousedown.lg",function(i){t.$outer.hasClass("lg-zoomed")||t.lgBusy||e(i.target).text()||(i.preventDefault(),t.manageSwipeClass(),s=i.pageX,l=!0,t.$outer.scrollLeft+=1,t.$outer.scrollLeft-=1,t.$outer.removeClass("lg-grab").addClass("lg-grabbing"),t.$el.trigger("onDragstart.lg"))}),e(window).on("mousemove.lg",function(e){l&&(o=!0,i=e.pageX,t.touchMove(s,i),t.$el.trigger("onDragmove.lg"))}),e(window).on("mouseup.lg",function(n){o?(o=!1,t.touchEnd(i-s),t.$el.trigger("onDragend.lg")):(e(n.target).hasClass("lg-object")||e(n.target).hasClass("lg-video-play"))&&t.$el.trigger("onSlideClick.lg"),l&&(l=!1,t.$outer.removeClass("lg-grabbing").addClass("lg-grab"))}))},s.prototype.manageSwipeClass=function(){var e=this.index+1,t=this.index-1;this.s.loop&&this.$slide.length>2&&(0===this.index?t=this.$slide.length-1:this.index===this.$slide.length-1&&(e=0)),this.$slide.removeClass("lg-next-slide lg-prev-slide"),t>-1&&this.$slide.eq(t).addClass("lg-prev-slide"),this.$slide.eq(e).addClass("lg-next-slide")},s.prototype.mousewheel=function(){var e=this;e.$outer.on("mousewheel.lg",function(t){t.deltaY&&(t.deltaY>0?e.goToPrevSlide():e.goToNextSlide(),t.preventDefault())})},s.prototype.closeGallery=function(){var t=this,s=!1;this.$outer.find(".lg-close").on("click.lg",function(){t.destroy()}),t.s.closable&&(t.$outer.on("mousedown.lg",function(t){s=!!(e(t.target).is(".lg-outer")||e(t.target).is(".lg-item ")||e(t.target).is(".lg-img-wrap"))}),t.$outer.on("mousemove.lg",function(){s=!1}),t.$outer.on("mouseup.lg",function(i){(e(i.target).is(".lg-outer")||e(i.target).is(".lg-item ")||e(i.target).is(".lg-img-wrap")&&s)&&(t.$outer.hasClass("lg-dragging")||t.destroy())}))},s.prototype.destroy=function(t){var s=this;t||(s.$el.trigger("onBeforeClose.lg"),e(window).scrollTop(s.prevScrollTop)),t&&(s.s.dynamic||this.$items.off("click.lg click.lgcustom"),e.removeData(s.el,"lightGallery")),this.$el.off(".lg.tm"),e.each(e.fn.lightGallery.modules,function(e){s.modules[e]&&s.modules[e].destroy()}),this.lGalleryOn=!1,clearTimeout(s.hideBartimeout),this.hideBartimeout=!1,e(window).off(".lg"),e("body").removeClass("lg-on lg-from-hash"),s.$outer&&s.$outer.removeClass("lg-visible"),e(".lg-backdrop").removeClass("in"),setTimeout(function(){s.$outer&&s.$outer.remove(),e(".lg-backdrop").remove(),t||s.$el.trigger("onCloseAfter.lg")},s.s.backdropDuration+50)},e.fn.lightGallery=function(t){return this.each(function(){if(e.data(this,"lightGallery"))try{e(this).data("lightGallery").init()}catch(e){console.error("lightGallery has not initiated properly")}else e.data(this,"lightGallery",new s(this,t))})},e.fn.lightGallery.modules={}}()});
/*! lg-zoom - v1.0.4 - 2016-12-20
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2016 Sachin N; Licensed GPLv3 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){!function(){"use strict";var b=function(){var a=!1,b=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return b&&parseInt(b[2],10)<54&&(a=!0),a},c={scale:1,zoom:!0,actualSize:!0,enableZoomAfter:300,useLeftForZoom:b()},d=function(b){return this.core=a(b).data("lightGallery"),this.core.s=a.extend({},c,this.core.s),this.core.s.zoom&&this.core.doCss()&&(this.init(),this.zoomabletimeout=!1,this.pageX=a(window).width()/2,this.pageY=a(window).height()/2+a(window).scrollTop()),this};d.prototype.init=function(){var b=this,c='<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';b.core.s.actualSize&&(c+='<span id="lg-actual-size" class="lg-icon"></span>'),b.core.s.useLeftForZoom?b.core.$outer.addClass("lg-use-left-for-zoom"):b.core.$outer.addClass("lg-use-transition-for-zoom"),this.core.$outer.find(".lg-toolbar").append(c),b.core.$el.on("onSlideItemLoad.lg.tm.zoom",function(c,d,e){var f=b.core.s.enableZoomAfter+e;a("body").hasClass("lg-from-hash")&&e?f=0:a("body").removeClass("lg-from-hash"),b.zoomabletimeout=setTimeout(function(){b.core.$slide.eq(d).addClass("lg-zoomable")},f+30)});var d=1,e=function(c){var e,f,d=b.core.$outer.find(".lg-current .lg-image"),g=(a(window).width()-d.prop("offsetWidth"))/2,h=(a(window).height()-d.prop("offsetHeight"))/2+a(window).scrollTop();e=b.pageX-g,f=b.pageY-h;var i=(c-1)*e,j=(c-1)*f;d.css("transform","scale3d("+c+", "+c+", 1)").attr("data-scale",c),b.core.s.useLeftForZoom?d.parent().css({left:-i+"px",top:-j+"px"}).attr("data-x",i).attr("data-y",j):d.parent().css("transform","translate3d(-"+i+"px, -"+j+"px, 0)").attr("data-x",i).attr("data-y",j)},f=function(){d>1?b.core.$outer.addClass("lg-zoomed"):b.resetZoom(),d<1&&(d=1),e(d)},g=function(c,e,g,h){var j,i=e.prop("offsetWidth");j=b.core.s.dynamic?b.core.s.dynamicEl[g].width||e[0].naturalWidth||i:b.core.$items.eq(g).attr("data-width")||e[0].naturalWidth||i;var k;b.core.$outer.hasClass("lg-zoomed")?d=1:j>i&&(k=j/i,d=k||2),h?(b.pageX=a(window).width()/2,b.pageY=a(window).height()/2+a(window).scrollTop()):(b.pageX=c.pageX||c.originalEvent.targetTouches[0].pageX,b.pageY=c.pageY||c.originalEvent.targetTouches[0].pageY),f(),setTimeout(function(){b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")},10)},h=!1;b.core.$el.on("onAferAppendSlide.lg.tm.zoom",function(a,c){var d=b.core.$slide.eq(c).find(".lg-image");d.on("dblclick",function(a){g(a,d,c)}),d.on("touchstart",function(a){h?(clearTimeout(h),h=null,g(a,d,c)):h=setTimeout(function(){h=null},300),a.preventDefault()})}),a(window).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom",function(){b.pageX=a(window).width()/2,b.pageY=a(window).height()/2+a(window).scrollTop(),e(d)}),a("#lg-zoom-out").on("click.lg",function(){b.core.$outer.find(".lg-current .lg-image").length&&(d-=b.core.s.scale,f())}),a("#lg-zoom-in").on("click.lg",function(){b.core.$outer.find(".lg-current .lg-image").length&&(d+=b.core.s.scale,f())}),a("#lg-actual-size").on("click.lg",function(a){g(a,b.core.$slide.eq(b.core.index).find(".lg-image"),b.core.index,!0)}),b.core.$el.on("onBeforeSlide.lg.tm",function(){d=1,b.resetZoom()}),b.core.isTouch||b.zoomDrag(),b.core.isTouch&&b.zoomSwipe()},d.prototype.resetZoom=function(){this.core.$outer.removeClass("lg-zoomed"),this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"),this.core.$slide.find(".lg-image").removeAttr("style data-scale"),this.pageX=a(window).width()/2,this.pageY=a(window).height()/2+a(window).scrollTop()},d.prototype.zoomSwipe=function(){var a=this,b={},c={},d=!1,e=!1,f=!1;a.core.$slide.on("touchstart.lg",function(c){if(a.core.$outer.hasClass("lg-zoomed")){var d=a.core.$slide.eq(a.core.index).find(".lg-object");f=d.prop("offsetHeight")*d.attr("data-scale")>a.core.$outer.find(".lg").height(),e=d.prop("offsetWidth")*d.attr("data-scale")>a.core.$outer.find(".lg").width(),(e||f)&&(c.preventDefault(),b={x:c.originalEvent.targetTouches[0].pageX,y:c.originalEvent.targetTouches[0].pageY})}}),a.core.$slide.on("touchmove.lg",function(g){if(a.core.$outer.hasClass("lg-zoomed")){var i,j,h=a.core.$slide.eq(a.core.index).find(".lg-img-wrap");g.preventDefault(),d=!0,c={x:g.originalEvent.targetTouches[0].pageX,y:g.originalEvent.targetTouches[0].pageY},a.core.$outer.addClass("lg-zoom-dragging"),j=f?-Math.abs(h.attr("data-y"))+(c.y-b.y):-Math.abs(h.attr("data-y")),i=e?-Math.abs(h.attr("data-x"))+(c.x-b.x):-Math.abs(h.attr("data-x")),(Math.abs(c.x-b.x)>15||Math.abs(c.y-b.y)>15)&&(a.core.s.useLeftForZoom?h.css({left:i+"px",top:j+"px"}):h.css("transform","translate3d("+i+"px, "+j+"px, 0)"))}}),a.core.$slide.on("touchend.lg",function(){a.core.$outer.hasClass("lg-zoomed")&&d&&(d=!1,a.core.$outer.removeClass("lg-zoom-dragging"),a.touchendZoom(b,c,e,f))})},d.prototype.zoomDrag=function(){var b=this,c={},d={},e=!1,f=!1,g=!1,h=!1;b.core.$slide.on("mousedown.lg.zoom",function(d){var f=b.core.$slide.eq(b.core.index).find(".lg-object");h=f.prop("offsetHeight")*f.attr("data-scale")>b.core.$outer.find(".lg").height(),g=f.prop("offsetWidth")*f.attr("data-scale")>b.core.$outer.find(".lg").width(),b.core.$outer.hasClass("lg-zoomed")&&a(d.target).hasClass("lg-object")&&(g||h)&&(d.preventDefault(),c={x:d.pageX,y:d.pageY},e=!0,b.core.$outer.scrollLeft+=1,b.core.$outer.scrollLeft-=1,b.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"))}),a(window).on("mousemove.lg.zoom",function(a){if(e){var j,k,i=b.core.$slide.eq(b.core.index).find(".lg-img-wrap");f=!0,d={x:a.pageX,y:a.pageY},b.core.$outer.addClass("lg-zoom-dragging"),k=h?-Math.abs(i.attr("data-y"))+(d.y-c.y):-Math.abs(i.attr("data-y")),j=g?-Math.abs(i.attr("data-x"))+(d.x-c.x):-Math.abs(i.attr("data-x")),b.core.s.useLeftForZoom?i.css({left:j+"px",top:k+"px"}):i.css("transform","translate3d("+j+"px, "+k+"px, 0)")}}),a(window).on("mouseup.lg.zoom",function(a){e&&(e=!1,b.core.$outer.removeClass("lg-zoom-dragging"),!f||c.x===d.x&&c.y===d.y||(d={x:a.pageX,y:a.pageY},b.touchendZoom(c,d,g,h)),f=!1),b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")})},d.prototype.touchendZoom=function(a,b,c,d){var e=this,f=e.core.$slide.eq(e.core.index).find(".lg-img-wrap"),g=e.core.$slide.eq(e.core.index).find(".lg-object"),h=-Math.abs(f.attr("data-x"))+(b.x-a.x),i=-Math.abs(f.attr("data-y"))+(b.y-a.y),j=(e.core.$outer.find(".lg").height()-g.prop("offsetHeight"))/2,k=Math.abs(g.prop("offsetHeight")*Math.abs(g.attr("data-scale"))-e.core.$outer.find(".lg").height()+j),l=(e.core.$outer.find(".lg").width()-g.prop("offsetWidth"))/2,m=Math.abs(g.prop("offsetWidth")*Math.abs(g.attr("data-scale"))-e.core.$outer.find(".lg").width()+l);(Math.abs(b.x-a.x)>15||Math.abs(b.y-a.y)>15)&&(d&&(i<=-k?i=-k:i>=-j&&(i=-j)),c&&(h<=-m?h=-m:h>=-l&&(h=-l)),d?f.attr("data-y",Math.abs(i)):i=-Math.abs(f.attr("data-y")),c?f.attr("data-x",Math.abs(h)):h=-Math.abs(f.attr("data-x")),e.core.s.useLeftForZoom?f.css({left:h+"px",top:i+"px"}):f.css("transform","translate3d("+h+"px, "+i+"px, 0)"))},d.prototype.destroy=function(){var b=this;b.core.$el.off(".lg.zoom"),a(window).off(".lg.zoom"),b.core.$slide.off(".lg.zoom"),b.core.$el.off(".lg.tm.zoom"),b.resetZoom(),clearTimeout(b.zoomabletimeout),b.zoomabletimeout=!1},a.fn.lightGallery.modules.zoom=d}()});
/*!  lightGallery video */
!function(e,o,i,l){"use strict";var a={videoMaxWidth:"855px",youtubePlayerParams:!1,vimeoPlayerParams:!1,dailymotionPlayerParams:!1,videojs:!1},s=function(o){return this.core=e(o).data("lightGallery"),this.$el=e(o),this.core.s=e.extend({},a,this.core.s),this.videoLoaded=!1,this.init(),this};s.prototype.init=function(){var o=this;o.core.$el.on("hasVideo.lg.tm",function(e,i,l,a){if(o.core.$slide.eq(i).find(".lg-video").append(o.loadVideo(l,"lg-object",!0,i,a)),a)if(o.core.s.videojs)try{videojs(o.core.$slide.eq(i).find(".lg-html5").get(0),{},function(){o.videoLoaded||this.play()})}catch(s){console.error("Make sure you have included videojs")}else o.core.$slide.eq(i).find(".lg-html5").get(0).play()}),o.core.$el.on("onAferAppendSlide.lg.tm",function(e,i){o.core.$slide.eq(i).find(".lg-video-cont").css("max-width",o.core.s.videoMaxWidth),o.videoLoaded=!0});var i=function(e){if(e.find(".lg-object").hasClass("lg-has-poster")&&e.find(".lg-object").is(":visible"))if(e.hasClass("lg-has-video")){var i=e.find(".lg-youtube").get(0),l=e.find(".lg-vimeo").get(0),a=e.find(".lg-dailymotion").get(0),s=e.find(".lg-html5").get(0);if(i)i.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*");else if(l)try{$f(l).api("play")}catch(r){console.error("Make sure you have included froogaloop2 js")}else if(a)a.contentWindow.postMessage("play","*");else if(s)if(o.core.s.videojs)try{videojs(s).play()}catch(r){console.error("Make sure you have included videojs")}else s.play();e.addClass("lg-video-palying")}else{e.addClass("lg-video-palying lg-has-video");var t,d,c=function(i,l){if(e.find(".lg-video").append(o.loadVideo(i,"",!1,o.core.index,l)),l)if(o.core.s.videojs)try{videojs(o.core.$slide.eq(o.core.index).find(".lg-html5").get(0),{},function(){this.play()})}catch(a){console.error("Make sure you have included videojs")}else o.core.$slide.eq(o.core.index).find(".lg-html5").get(0).play()};o.core.s.dynamic?(t=o.core.s.dynamicEl[o.core.index].src,d=o.core.s.dynamicEl[o.core.index].html,c(t,d)):(t=o.core.$items.eq(o.core.index).attr("href")||o.core.$items.eq(o.core.index).attr("data-src"),d=o.core.$items.eq(o.core.index).attr("data-html"),c(t,d));var n=e.find(".lg-object");e.find(".lg-video").append(n),e.find(".lg-video-object").hasClass("lg-html5")||(e.removeClass("lg-complete"),e.find(".lg-video-object").on("load.lg error.lg",function(){e.addClass("lg-complete")}))}};o.core.doCss()&&o.core.$items.length>1&&(o.core.s.enableSwipe&&o.core.isTouch||o.core.s.enableDrag&&!o.core.isTouch)?o.core.$el.on("onSlideClick.lg.tm",function(){var e=o.core.$slide.eq(o.core.index);i(e)}):o.core.$slide.on("click.lg",function(){i(e(this))}),o.core.$el.on("onBeforeSlide.lg.tm",function(e,i,l){var a=o.core.$slide.eq(i),s=a.find(".lg-youtube").get(0),r=a.find(".lg-vimeo").get(0),t=a.find(".lg-dailymotion").get(0),d=a.find(".lg-html5").get(0);if(s)s.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*");else if(r)try{$f(r).api("pause")}catch(c){console.error("Make sure you have included froogaloop2 js")}else if(t)t.contentWindow.postMessage("pause","*");else if(d)if(o.core.s.videojs)try{videojs(d).pause()}catch(c){console.error("Make sure you have included videojs")}else d.pause();var n;n=o.core.s.dynamic?o.core.s.dynamicEl[l].src:o.core.$items.eq(l).attr("href")||o.core.$items.eq(l).attr("data-src");var m=o.core.isVideo(n,l)||{};(m.youtube||m.vimeo||m.dailymotion)&&o.core.$outer.addClass("lg-hide-download")}),o.core.$el.on("onAfterSlide.lg.tm",function(e,i){o.core.$slide.eq(i).removeClass("lg-video-palying")})},s.prototype.loadVideo=function(o,i,l,a,s){var r="",t=1,d="",c=this.core.isVideo(o,a)||{};if(l&&(t=this.videoLoaded?0:1),c.youtube)d="?wmode=opaque&autoplay="+t+"&enablejsapi=1",this.core.s.youtubePlayerParams&&(d=d+"&"+e.param(this.core.s.youtubePlayerParams)),r='<iframe class="lg-video-object lg-youtube '+i+'" width="560" height="315" src="//www.youtube.com/embed/'+c.youtube[1]+d+'" frameborder="0" allowfullscreen></iframe>';else if(c.vimeo)d="?autoplay="+t+"&api=1",this.core.s.vimeoPlayerParams&&(d=d+"&"+e.param(this.core.s.vimeoPlayerParams)),r='<iframe class="lg-video-object lg-vimeo '+i+'" width="560" height="315"  src="http://player.vimeo.com/video/'+c.vimeo[1]+d+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';else if(c.dailymotion)d="?wmode=opaque&autoplay="+t+"&api=postMessage",this.core.s.dailymotionPlayerParams&&(d=d+"&"+e.param(this.core.s.dailymotionPlayerParams)),r='<iframe class="lg-video-object lg-dailymotion '+i+'" width="560" height="315" src="//www.dailymotion.com/embed/video/'+c.dailymotion[1]+d+'" frameborder="0" allowfullscreen></iframe>';else if(c.html5){var n=s.substring(0,1);("."===n||"#"===n)&&(s=e(s).html()),r=s}return r},s.prototype.destroy=function(){this.videoLoaded=!1},e.fn.lightGallery.modules.video=s}(jQuery,window,document);