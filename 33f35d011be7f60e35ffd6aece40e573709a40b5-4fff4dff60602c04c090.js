(self.webpackChunkpragicts=self.webpackChunkpragicts||[]).push([[333],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var c,l,u,s;if(Array.isArray(e)){if((c=e.length)!=o.length)return!1;for(l=c;0!=l--;)if(!i(e[l],o[l]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!o.has(l.value[0]))return!1;for(s=e.entries();!(l=s.next()).done;)if(!i(l.value[1],o.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!o.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((c=e.length)!=o.length)return!1;for(l=c;0!=l--;)if(e[l]!==o[l])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(o,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!i(e[u[l]],o[u[l]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,a=n(7294),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){u.push(this),s()},o.componentDidUpdate=function(){s()},o.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(f,"canUseDOM",c),f}}},7770:function(e,t,n){"use strict";n.d(t,{Z:function(){return Te}});var r,a,i,o,c=n(7294),l=function(){return c.createElement("div",{className:"loader-wrap"},c.createElement("div",{className:"pin"}))},u=n.p+"static/logo-a5d26f5ac0092d15325d88a0ec5d9123.png",s=n(5444),f=function(){return c.createElement("header",{className:"main-header"},c.createElement(s.Link,{className:"logo-holder",to:"/"},c.createElement("img",{src:u,alt:"PragICTS logo"})),c.createElement("div",{className:"nav-button but-hol"},c.createElement("span",{className:"nos"}),c.createElement("span",{className:"ncs"}),c.createElement("span",{className:"nbs"}),c.createElement("div",{className:"menu-button-text"},"Menu")),c.createElement("div",{className:"header-social"},c.createElement("ul",null,c.createElement("li",null,c.createElement("a",{rel:"noreferrer noopener",href:"https://www.linkedin.com/company/pragicts/",target:"_blank"},c.createElement("i",{"aria-label":"Linkedin",className:"fab fa-linkedin"}))),c.createElement("li",null,c.createElement("a",{rel:"noreferrer noopener",href:"https://www.facebook.com/pragicts.ltd",target:"_blank"},c.createElement("i",{"aria-label":"Facebook",className:"fab fa-facebook-f"}))),c.createElement("li",null,c.createElement("a",{rel:"noreferrer noopener",href:"https://www.instagram.com/pragicts/",target:"_blank"},c.createElement("i",{"aria-label":"Instagram",className:"fab fa-instagram"}))),c.createElement("li",null,c.createElement("a",{rel:"noreferrer noopener",href:"https://twitter.com/pragictsltd",target:"_blank"},c.createElement("i",{"aria-label":"Twitter",className:"fab fa-twitter"}))),c.createElement("li",null,c.createElement("a",{rel:"noreferrer noopener",href:"https://www.pinterest.com/pragicts",target:"_blank"},c.createElement("i",{"aria-label":"Pinterest",className:"fab fa-pinterest"}))),c.createElement("li",null,c.createElement("a",{rel:"noreferrer noopener",href:"https://www.youtube.com/channel/UCNYbr4DHBPqeXslkZ6hRruQ",target:"_blank"},c.createElement("i",{"aria-label":"YouTube",className:"fab fa-youtube"}))),c.createElement("li",null,c.createElement("a",{rel:"noreferrer noopener",href:"https://pragicts.blogspot.com/",target:"_blank"},c.createElement("i",{"aria-label":"YouTube",className:"fab fa-blogger"}))))))},p=function(){return c.createElement(c.Fragment,null,c.createElement("div",{className:"nav-overlay"},c.createElement("div",{className:"tooltip color-bg"},"Close Menu")),c.createElement("div",{className:"nav-holder"},c.createElement("a",{className:"header-logo",href:"index.html"},c.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANcAAABBCAYAAABCQjHrAAAACXBIWXMAAC4jAAAuIwF4pT92AAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTE0VDIyOjExOjE5KzA1OjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEwLTE0VDIyOjExOjE5KzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0xNFQyMjoxMToxOSswNTozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2MjYzNmNlOS1iY2Y4LTg2NDUtOWM3My03OWQzYjIyMTQ4MWMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5YTA2ODIzMS1lOWVlLTQ1NDgtYThi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",alt:"PragICTS Logo"})),c.createElement("div",{className:"nav-title"},c.createElement("span",null,"Menu")),c.createElement("div",{className:"nav-inner-wrap"},c.createElement("nav",{className:"nav-inner sound-nav sliding-menu",id:"menu"},c.createElement("div",{className:"sliding-menu-wrapper"},c.createElement("ul",{className:"menu-panel-root"},c.createElement("li",null,c.createElement(s.Link,{to:"/",className:"act-link"},"Home")),c.createElement("li",null,c.createElement(s.Link,{to:"/about-us"},"Services")),c.createElement("li",null,c.createElement(s.Link,{to:"/"},"Solutions")),c.createElement("li",null,c.createElement(s.Link,{to:"/"},"Careers")),c.createElement("li",null,c.createElement(s.Link,{to:"/"},"Projects")),c.createElement("li",null,c.createElement(s.Link,{to:"/"},"About Us"))))))))},m=n(5697),b=n.n(m),d=n(4839),y=n.n(d),h=n(2993),E=n.n(h),g=n(6494),v=n.n(g),T="bodyAttributes",A="htmlAttributes",S="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},I=(Object.keys(w).map((function(e){return w[e]})),"charset"),k="cssText",O="href",M="http-equiv",C="innerHTML",j="itemprop",R="name",N="property",L="rel",Y="src",B="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},x="defaultTitle",D="defer",F="encodeSpecialCharacters",H="onChangeClientState",G="titleTemplate",Z=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),W=[w.NOSCRIPT,w.SCRIPT,w.STYLE],U="data-react-helmet",z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Q=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},q=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},_=function(e){var t=re(e,w.TITLE),n=re(e,G);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=re(e,x);return t||r||void 0},$=function(e){return re(e,H)||function(){}},ee=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return X({},e,t)}),{})},te=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},ne=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&le("Helmet: "+e+' should be of type "Array". Instead found type "'+z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],l=c.toLowerCase();-1===t.indexOf(l)||n===L&&"canonical"===e[n].toLowerCase()||l===L&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==C&&c!==k&&c!==j||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var c=i[o],l=v()({},r[c],a[c]);r[c]=l}return e}),[]).reverse()},re=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ae=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){ae(e)}),0)}),ie=function(e){return clearTimeout(e)},oe="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ae:n.g.requestAnimationFrame||ae,ce="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ie:n.g.cancelAnimationFrame||ie,le=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ue=null,se=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;me(w.BODY,r),me(w.HTML,a),pe(f,p);var m={baseTag:be(w.BASE,n),linkTags:be(w.LINK,i),metaTags:be(w.META,o),noscriptTags:be(w.NOSCRIPT,c),scriptTags:be(w.SCRIPT,u),styleTags:be(w.STYLE,s)},b={},d={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(b[e]=n),r.length&&(d[e]=m[e].oldTags)})),t&&t(),l(e,b,d)},fe=function(e){return Array.isArray(e)?e.join(""):e},pe=function(e,t){void 0!==e&&document.title!==e&&(document.title=fe(e)),me(w.TITLE,t)},me=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(U),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var l=o[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===a.indexOf(l)&&a.push(l);var s=i.indexOf(l);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);a.length===i.length?n.removeAttribute(U):n.getAttribute(U)!==o.join(",")&&n.setAttribute(U,o.join(","))}},be=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===k)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(U,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},de=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ye=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},he=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[U]=!0,a=ye(n,r),[c.createElement(w.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=de(n),i=fe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+q(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+q(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case T:case A:return{toComponent:function(){return ye(t)},toString:function(){return de(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[U]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===C||n===k){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===C||e===k)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+q(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===W.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},Ee=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:he(w.BASE,t,r),bodyAttributes:he(T,n,r),htmlAttributes:he(A,a,r),link:he(w.LINK,i,r),meta:he(w.META,o,r),noscript:he(w.NOSCRIPT,c,r),script:he(w.SCRIPT,l,r),style:he(w.STYLE,u,r),title:he(w.TITLE,{title:f,titleAttributes:p},r)}},ge=y()((function(e){return{baseTag:te([O,B],e),bodyAttributes:ee(T,e),defer:re(e,D),encode:re(e,F),htmlAttributes:ee(A,e),linkTags:ne(w.LINK,[L,O],e),metaTags:ne(w.META,[R,I,M,N,j],e),noscriptTags:ne(w.NOSCRIPT,[C],e),onChangeClientState:$(e),scriptTags:ne(w.SCRIPT,[Y,C],e),styleTags:ne(w.STYLE,[k],e),title:_(e),titleAttributes:ee(S,e)}}),(function(e){ue&&ce(ue),e.defer?ue=oe((function(){se(e,(function(){ue=null}))})):(se(e),ue=null)}),Ee)((function(){return null})),ve=(a=ge,o=i=function(e){function t(){return J(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!E()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return X({},r,((t={})[n.type]=[].concat(r[n.type]||[],[X({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case w.TITLE:return X({},a,((t={})[r.type]=o,t.titleAttributes=X({},i),t));case w.BODY:return X({},a,{bodyAttributes:X({},i)});case w.HTML:return X({},a,{htmlAttributes:X({},i)})}return X({},a,((n={})[r.type]=X({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=X({},t);return Object.keys(e).forEach((function(t){var r;n=X({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[Z[n]||n]=e[n],t}),t)}(V(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=V(e,["children"]),r=X({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(a,r)},Q(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:b().object,bodyAttributes:b().object,children:b().oneOfType([b().arrayOf(b().node),b().node]),defaultTitle:b().string,defer:b().bool,encodeSpecialCharacters:b().bool,htmlAttributes:b().object,link:b().arrayOf(b().object),meta:b().arrayOf(b().object),noscript:b().arrayOf(b().object),onChangeClientState:b().func,script:b().arrayOf(b().object),style:b().arrayOf(b().object),title:b().string,titleAttributes:b().object,titleTemplate:b().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=Ee({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);ve.renderStatic=ve.rewind;var Te=function(e){var t=e.pageTitle,n=e.children;return c.createElement(c.Fragment,null,c.createElement(ve,null,c.createElement("meta",{charSet:"utf-8"}),c.createElement("title",null,t),c.createElement("link",{rel:"canonical",href:"https://pragicts.com"})),c.createElement(l,null),c.createElement("div",{id:"main"},c.createElement(f,null),c.createElement(p,null),n))}}}]);
//# sourceMappingURL=33f35d011be7f60e35ffd6aece40e573709a40b5-4fff4dff60602c04c090.js.map