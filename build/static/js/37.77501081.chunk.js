(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[37,1],{509:function(e,t,a){"use strict";e.exports=a(597)},511:function(e,t,a){"use strict";a.d(t,"e",(function(){return r})),a.d(t,"a",(function(){return c})),a.d(t,"g",(function(){return l})),a.d(t,"b",(function(){return i})),a.d(t,"d",(function(){return s})),a.d(t,"c",(function(){return u})),a.d(t,"f",(function(){return m})),a.d(t,"h",(function(){return d})),a.d(t,"i",(function(){return f}));var n=a(51),r=function(e,t,a,n){var r=t?e.filter((function(e){return e.category.filter((function(e){return e===t}))[0]})):e;if(a&&"new"===a){var c=r.filter((function(e){return e.new}));return c.slice(0,n||c.length)}if(a&&"bestSeller"===a)return r.sort((function(e,t){return t.saleCount-e.saleCount})).slice(0,n||r.length);if(a&&"saleItems"===a){var l=r.filter((function(e){return e.discount&&e.discount>0}));return l.slice(0,n||l.length)}return r.slice(0,n||r.length)},c=function(e,t){return t&&t>0?e-e*(t/100):null},l=function(e,t,a){if(e&&t&&a){if("productCategories"===t)return e.filter((function(e){return e.productCategories.filter((function(e){return e===a}))[0]}));if("tag"===t)return e.filter((function(e){return e.tag.filter((function(e){return e===a}))[0]}));if("color"===t)return e.filter((function(e){return e.data&&e.data.filter((function(e){return e.color===a}))[0]}));if("size"===t)return e.filter((function(e){return e.data&&e.data.filter((function(e){return e.size.filter((function(e){return e.name===a}))[0]}))[0]}));if("filterSort"===t){var r=Object(n.a)(e);if("default"===a)return r;if("priceHighToLow"===a)return r.sort((function(e,t){return t.price-e.price}));if("priceLowToHigh"===a)return r.sort((function(e,t){return e.price-t.price}))}}return e},o=function(e){return e.filter((function(e,t,a){return t===a.indexOf(e)}))},i=function(e){var t=[];return e&&e.map((function(e){return e.productCategories&&e.productCategories.map((function(e){return t.push(e)}))})),o(t)},s=function(e){var t=[];return e&&e.map((function(e){return e.tag&&e.tag.map((function(e){return t.push(e)}))})),o(t)},u=function(e){var t=[];return e&&e.map((function(e){return e.data&&e.data.map((function(e){return t.push(e.color)}))})),o(t)},m=function(e){var t=[];return e&&e.map((function(e){return e.data&&e.data.map((function(e){return e.size.map((function(e){return t.push(e.name)}))}))})),o(t)},d=function(e){document.querySelectorAll(".sidebar-widget-list-left button, .sidebar-widget-tag button, .product-filter button").forEach((function(e){e.classList.remove("active")})),e.currentTarget.classList.add("active")},f=function(e){var t=document.querySelector("#product-filter-wrapper");t.classList.toggle("active"),t.style.height?t.style.height=null:t.style.height=t.scrollHeight+"px",e.currentTarget.classList.toggle("active")}},517:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(120),l=a(163);t.a=function(){return r.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"breadcrumb-content text-center"},r.a.createElement(l.Breadcrumbs,{separator:r.a.createElement("span",null,"/"),item:c.c,finalItem:"span"}))))}},522:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(510),l=a(120),o=function(e){var t=e.imageUrl,a=e.logoClass;return r.a.createElement("div",{className:"".concat(a||"")},r.a.createElement(l.b,{to:"/"},r.a.createElement("img",{alt:"",src:""+t,style:{width:150}})))},i=a(75),s=Object(i.multilanguage)((function(e){var t=e.strings,a=e.menuWhiteClass,n=e.sidebarMenu;return r.a.createElement("div",{className:" ".concat(n?"sidebar-menu":"main-menu ".concat(a||"")," ")},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},t.home)),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/shop-grid-two-column"},t.products)),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/about"},t.about_us)),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/contact"},t.contact_us)),r.a.createElement("li",null,r.a.createElement("a",{href:"http://seller.buynaa.com",style:{color:"blue",fontSize:18,fontWeight:700,textDecoration:"underline"}},"Seller Console")))))})),u=a(519),m=a.n(u),d=a(520),f=a(20),p=a(74),b=a(164),g=a(511),E=a(161),v=a.n(E),h=function(e){e.cartData;var t=e.currency,a=(e.deleteFromCart,0),o=(Object(b.useToasts)().addToast,Object(n.useState)([])),i=Object(c.a)(o,2),s=i[0],u=i[1],p=Object(n.useState)([]),E=Object(c.a)(p,2),h=(E[0],E[1],Object(f.h)().id,function(){var e=Object(d.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,v.a.get("http://35.154.86.59/api/admin/remove_cart/".concat(t),{headers:{"auth-token":localStorage.getItem("auth-token")}});case 4:(a=e.sent)&&(console.log(a),y()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()),y=function(){var e=Object(d.a)(m.a.mark((function e(t){var a,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("http://35.154.86.59/api/admin/cartbycustomer",{headers:{"auth-token":localStorage.getItem("auth-token")}});case 2:a=e.sent,n=a.data,r=n.data,console.log(r),u(r),console.log(r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){localStorage.getItem("auth-token")&&y()}),[]),r.a.createElement("div",{className:"shopping-cart-content"},s&&(null===s||void 0===s?void 0:s.length)>0?r.a.createElement(n.Fragment,null,r.a.createElement("ul",{style:{height:150}},s.map((function(e,n){var c,o,i,s,u=Object(g.a)(e.price,e.discount);(e.price*t.currencyRate).toFixed(2),(u*t.currencyRate).toFixed(2);return a+=parseInt(e.gsttotal),r.a.createElement("li",{className:"single-shopping-cart",key:n},r.a.createElement("div",{className:"shopping-cart-img"},r.a.createElement(l.b,{to:"".concat("","/product-sticky/").concat(null===(c=e.product)||void 0===c?void 0:c._id)},r.a.createElement("img",{alt:"",src:""+(null===(o=e.product)||void 0===o?void 0:o.product_img[0]),className:"img-fluid"}))),r.a.createElement("div",{className:"shopping-cart-title"},r.a.createElement("h4",null,r.a.createElement(l.b,{to:"/product-sticky/"+(null===(i=e.product)||void 0===i?void 0:i._id)}," ",null===(s=e.product)||void 0===s?void 0:s.product_name)),r.a.createElement("h6",null,"Qty: ",e.product_qty),r.a.createElement("h6",null,"Color: ",e.color),r.a.createElement("h6",null,"Size: ",e.size),r.a.createElement("h6",null,"Price: ",e.gsttotal),r.a.createElement("span",null)),r.a.createElement("div",{className:"shopping-cart-delete"},r.a.createElement("button",{onClick:function(){var t;return h(null===(t=e.product)||void 0===t?void 0:t._id)}},r.a.createElement("i",{className:"fa fa-times-circle"}))))}))),r.a.createElement("div",{className:"shopping-cart-total"},r.a.createElement("h4",null,"Total :",r.a.createElement("span",{className:"shop-total"},"\u20b9 ",a))),r.a.createElement("div",{className:"shopping-cart-btn btn-hover text-center"},r.a.createElement(l.b,{className:"default-btn",to:"/cart"},"view cart"))):r.a.createElement("p",{className:"text-center"},"No items added to cart"))},y=a(76),O=Object(p.connect)((function(e){return{currency:e.currencyData,cartData:e.cartData,wishlistData:e.wishlistData,compareData:e.compareData}}),(function(e){return{deleteFromCart:function(t,a){e(Object(y.h)(t,a))}}}))((function(e){var t=e.currency,a=(e.cartData,e.wishlistData,e.compareData,e.deleteFromCart),o=e.iconWhiteClass,i=function(e){e.currentTarget.nextSibling.classList.toggle("active")},s=Object(n.useState)([]),u=Object(c.a)(s,2),p=u[0],b=u[1],g=function(){var e=Object(d.a)(m.a.mark((function e(t){var a,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("http://35.154.86.59/api/admin/cartbycustomer",{headers:{"auth-token":localStorage.getItem("auth-token")}});case 2:a=e.sent,n=a.data,r=n.data,b(r),console.log(r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){localStorage.getItem("auth-token")&&g()}),[]);Object(f.g)();var E=Object(n.useState)([]),y=Object(c.a)(E,2),O=y[0],N=y[1],w=function(){var e=Object(d.a)(m.a.mark((function e(){var t,a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("http://35.154.86.59/api/admin/getallwishlist",{headers:{"auth-token":localStorage.getItem("auth-token")}});case 2:t=e.sent,a=t.data,n=a.data,N(n),console.log(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){localStorage.getItem("auth-token")&&w()}),[]),r.a.createElement("div",{className:"header-right-wrap ".concat(o||"")},r.a.createElement("div",{className:"same-style account-setting  d-lg-block"},r.a.createElement("button",{className:"account-setting-active",onClick:function(e){return i(e)}},r.a.createElement("i",{className:"pe-7s-user"})),r.a.createElement("div",{className:"account-dropdown"},r.a.createElement("ul",null,localStorage.getItem("auth-token")?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/myOrder"},"My Order")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/my-account"},"My Account")),r.a.createElement("li",null,r.a.createElement(l.b,{onClick:function(e){return window.localStorage.removeItem("auth-token")(window.location.reload())}},"Logout"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/login-register"},"Login")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/login-register"},"Register")))))),r.a.createElement("div",{className:"same-style header-wishlist"},r.a.createElement(l.b,{to:"/wishlist"},r.a.createElement("i",{className:"pe-7s-like"}),r.a.createElement("span",{className:"count-style"},O&&O.length?O.length:0))),r.a.createElement("div",{className:"same-style cart-wrap d-none d-lg-block"},r.a.createElement("button",{className:"icon-cart",onClick:function(e){return i(e)}},r.a.createElement("i",{className:"pe-7s-shopbag"}),r.a.createElement("span",{className:"count-style"},p&&p.length?p.length:0)),r.a.createElement(h,{carts:p,currency:t,deleteFromCart:a})),r.a.createElement("div",{className:"same-style cart-wrap d-block d-lg-none"},r.a.createElement(l.b,{className:"icon-cart",to:"/cart"},r.a.createElement("i",{className:"pe-7s-shopbag"}),r.a.createElement("span",{className:"count-style"},p&&p.length?p.length:0))),r.a.createElement("div",{className:"same-style mobile-off-canvas d-block d-lg-none"},r.a.createElement("button",{className:"mobile-aside-button",onClick:function(){document.querySelector("#offcanvas-mobile-menu").classList.add("active")}},r.a.createElement("i",{className:"pe-7s-menu"}))))})),N=function(){return r.a.createElement("div",{className:"offcanvas-mobile-search-area"})},w=Object(i.multilanguage)((function(e){var t=e.strings;return r.a.createElement("nav",{className:"offcanvas-navigation",id:"offcanvas-navigation"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},t.home)),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/shop-grid-two-column"},t.products)),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/about"},t.about_us)),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/contact"},t.contact_us))))})),j=a(165),C=Object(p.connect)((function(e){return{currency:e.currencyData}}),(function(e){return{setCurrency:function(t){e(Object(j.b)(t))}}}))(Object(i.multilanguage)((function(e){e.currency,e.setCurrency,e.currentLanguageCode,e.dispatch;return r.a.createElement("div",{className:"mobile-menu-middle"})}))),S=function(){return r.a.createElement("div",{className:"offcanvas-widget-area"})},k=function(){Object(n.useEffect)((function(){for(var a=document.querySelector("#offcanvas-navigation"),n=a.querySelectorAll(".sub-menu"),r=a.querySelectorAll("a"),c=0;c<n.length;c++)n[c].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var l=a.querySelectorAll(".menu-expand"),o=l.length,i=0;i<o;i++)l[i].addEventListener("click",(function(t){e(t)}));for(var s=0;s<r.length;s++)r[s].addEventListener("click",(function(){t()}))}));var e=function(e){e.currentTarget.parentElement.classList.toggle("active")},t=function(){document.querySelector("#offcanvas-mobile-menu").classList.remove("active")};return r.a.createElement("div",{className:"offcanvas-mobile-menu",id:"offcanvas-mobile-menu"},r.a.createElement("button",{className:"offcanvas-menu-close",id:"mobile-menu-close-trigger",onClick:function(){return t()}},r.a.createElement("i",{className:"pe-7s-close"})),r.a.createElement("div",{className:"offcanvas-wrapper"},r.a.createElement("div",{className:"offcanvas-inner-content"},r.a.createElement(N,null),r.a.createElement(w,null),r.a.createElement(C,null),r.a.createElement(S,null))))},_=Object(p.connect)((function(e){return{currency:e.currencyData}}),(function(e){return{setCurrency:function(t){e(Object(j.b)(t))}}}))(Object(i.multilanguage)((function(e){e.currency,e.setCurrency,e.currentLanguageCode,e.dispatch;var t=e.borderStyle;return r.a.createElement("div",{className:"header-top-wap ".concat("fluid-border"===t?"border-bottom":"")})}))),P=function(e){var t=e.layout,a=e.top,l=e.borderStyle,i=e.headerPaddingClass,u=e.headerPositionClass,m=e.headerBgClass,d=Object(n.useState)(0),f=Object(c.a)(d,2),p=f[0],b=f[1],g=Object(n.useState)(0),E=Object(c.a)(g,2),v=E[0],h=E[1];Object(n.useEffect)((function(){var e=document.querySelector(".sticky-bar");return h(e.offsetTop),window.addEventListener("scroll",y),function(){window.removeEventListener("scroll",y)}}),[]);var y=function(){b(window.scrollY)};return r.a.createElement("header",{className:"header-area clearfix ".concat(m||""," ").concat(u||"")},r.a.createElement("div",{className:"".concat(i||""," ").concat("visible"===a?"d-none d-lg-block":"d-none"," header-top-area ").concat("fluid-border"===l?"border-none":"")},r.a.createElement("div",{className:"container-fluid"===t?t:"container"},r.a.createElement(_,{borderStyle:l}))),r.a.createElement("div",{className:" ".concat(i||""," sticky-bar header-res-padding clearfix ").concat(p>v?"stick":"")},r.a.createElement("div",{className:"container-fluid"===t?t:"container"},r.a.createElement("div",{className:"row",style:{marginBottom:"-8px"}},r.a.createElement("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4"},r.a.createElement("div",{style:{padding:15}},r.a.createElement(o,{imageUrl:"/assets/img/logo/BuyNaa.png"}))),r.a.createElement("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block"},r.a.createElement(s,null)),r.a.createElement("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8"},r.a.createElement(O,null)))),r.a.createElement(k,null)))},x=a(575),T=function(e){var t=e.footerLogo,a=e.spaceBottomClass,n=e.colorClass;return r.a.createElement("div",{className:"copyright ".concat(a||""," ").concat(n||"")},r.a.createElement("div",{className:"footer-logo"},r.a.createElement(l.b,{to:"/"},r.a.createElement("img",{alt:"",src:""+t,style:{width:150}}))),r.a.createElement("p",null,"\xa9 ",(new Date).getFullYear()," ",r.a.createElement("a",{href:"/",rel:"noopener noreferrer",target:""},"Buynaa"),".",r.a.createElement("br",null)," All Rights Reserved"))},L=(a(576),function(e){var t=e.spaceBottomClass,a=e.spaceLeftClass,n=e.sideMenu,c=e.colorClass,l=e.widgetColorClass;return r.a.createElement("div",{className:"footer-widget ".concat(t||""," ").concat(n?"ml-ntv5":a||""," ").concat(l||"")},r.a.createElement("div",{className:"subscribe-style ".concat(c||"")},r.a.createElement("p",null,"Get E-mail updates about our latest shop and special offers.")))}),D=function(e){var t=e.backgroundColorClass,a=e.spaceTopClass,o=e.spaceBottomClass,i=e.spaceLeftClass,s=e.spaceRightClass,u=e.containerClass,m=e.extraFooterClass,d=e.sideMenu,f=Object(n.useState)(0),p=Object(c.a)(f,2),b=p[0],g=p[1],E=Object(n.useState)(0),v=Object(c.a)(E,2),h=v[0],y=v[1];Object(n.useEffect)((function(){return y(100),window.addEventListener("scroll",O),function(){window.removeEventListener("scroll",O)}}),[]);var O=function(){g(window.scrollY)};return r.a.createElement("footer",{className:"footer-area ".concat(t||""," ").concat(a||""," ").concat(o||""," ").concat(m||""," ").concat(i||""," ").concat(s||"")},r.a.createElement("div",{className:"".concat(u||"container")},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"".concat(d?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},r.a.createElement(T,{footerLogo:"/assets/img/logo/BuyNaa.png",spaceBottomClass:"mb-30"})),r.a.createElement("div",{className:"".concat(d?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},r.a.createElement("div",{className:"footer-widget mb-30 ml-30"},r.a.createElement("div",{className:"footer-title"},r.a.createElement("h3",null,"ABOUT US")),r.a.createElement("div",{className:"footer-list"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/about"},"About us")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/contact"},"Contact")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"#/"},"Orders tracking")))))),r.a.createElement("div",{className:"".concat(d?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},r.a.createElement("div",{className:"".concat(d?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50")},r.a.createElement("div",{className:"footer-title"},r.a.createElement("h3",null,"USEFUL LINKS")),r.a.createElement("div",{className:"footer-list"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/TermsOfUse"},"Terms of Use")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/privacyPolicy"},"privacyPolicy")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/faqPage"},"FAQs")))))),r.a.createElement("div",{className:"".concat(d?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6")},r.a.createElement("div",{className:"".concat(d?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75")},r.a.createElement("div",{className:"footer-title"},r.a.createElement("h3",null,"FOLLOW US")),r.a.createElement("div",{className:"footer-list"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer"},"Facebook")),r.a.createElement("li",null,r.a.createElement("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer"},"Twitter")),r.a.createElement("li",null,r.a.createElement("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer"},"Instagram")),r.a.createElement("li",null,r.a.createElement("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer"},"Youtube")))))),r.a.createElement("div",{className:"".concat(d?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6")},r.a.createElement(L,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:d})))),r.a.createElement("button",{className:"scroll-top ".concat(b>h?"show":""),onClick:function(){x.animateScroll.scrollToTop()}},r.a.createElement("i",{className:"fa fa-angle-double-up"})))};t.a=function(e){var t=e.children,a=e.headerContainerClass,c=e.headerTop,l=e.headerPaddingClass,o=e.headerPositionClass;return r.a.createElement(n.Fragment,null,r.a.createElement(P,{layout:a,top:c,headerPaddingClass:l,headerPositionClass:o}),t,r.a.createElement(D,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}))}},527:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return c.default}}),t.default=void 0;var n=l(a(550)),r=l(a(530)),c=l(a(552));function l(e){return e&&e.__esModule?e:{default:e}}var o=r.default;t.default=o},530:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(0)),r=o(a(21)),c=o(a(39)),l=a(551);function o(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,b,g,E=function(e){function t(){return s(this,t),m(this,d(t).apply(this,arguments))}var a,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),a=t,(r=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&c.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var a=n.default.createElement("div",{className:"react-head-temp"},t);c.default.render(a,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var a=e.temporaryElement.querySelector(".react-head-temp");if(null!==a){var n=Array.prototype.slice.call(a.children),r=document.head,c=r.innerHTML;(n=(n=n.filter((function(e){return-1===c.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var a=(0,l.getDuplicateTitle)();a&&(0,l.removeChild)(r,a)}else if("meta"===t){var n=(0,l.getDuplicateMeta)(e);n&&(0,l.removeChild)(r,n)}else if("link"===t&&"canonical"===e.rel){var c=(0,l.getDuplicateCanonical)(e);c&&(0,l.removeChild)(r,c)}})),(0,l.appendChild)(document.head,n)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&u(a.prototype,r),o&&u(a,o),t}(n.Component);p=E,b="contextTypes",g={extract:r.default.func},b in p?Object.defineProperty(p,b,{value:g,enumerable:!0,configurable:!0,writable:!0}):p[b]=g;var v=E;t.default=v,e.exports=t.default},550:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=a(0),c=(n=a(21))&&n.__esModule?n:{default:n};function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return o(this,t),s(this,u(t).apply(this,arguments))}var a,n,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),a=t,(n=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return r.Children.only(this.props.children)}}])&&i(a.prototype,n),c&&i(a,c),t}(r.Component);!function(e,t,a){t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a}(d,"childContextTypes",{extract:c.default.func});var f=d;t.default=f,e.exports=t.default},551:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,a=null,n=[],l=[];return e.forEach((function(e){var r=e.type,c=e.props;"title"===r?t=e:"link"===r&&"canonical"===c.rel?a=e:"meta"===r?n.push(e):l.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};c.forEach((function(e){t[e]=[]}));for(var a=[],n=function(n){var l=e[n],o=l.props.id;(o?!t.id[o]:0===r.filter((function(e){var a=l.props[e],n=t[e][a];return n&&!n.props.id})).length)&&(a.unshift(l),c.forEach((function(e){var a=l.props[e];a&&(t[e][a]=l)})))},l=e.length-1;l>=0;l--)n(l);return a}(n)),[a],l)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,a=e.id;if(a)return a&&t.querySelector("#".concat(a));return n.reduce((function(a,n){var r,c=e.getAttribute(n);return c?a.concat((r=t.querySelectorAll("[".concat(n,' = "').concat(c,'"]')),(r=Array.prototype.slice.call(r||[])).filter((function(e){return!e.id})))):a}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=document.createDocumentFragment(),n=0,r=t.length;n<r;n++)a.appendChild(t[n]);e.appendChild(a)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=0,n=t.length;a<n;a++)e.removeChild(t[a])};var n=["property","name","itemprop"],r=n.concat(["itemProp"]),c=r.concat(["id"])},552:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(0)),r=l(a(21)),c=l(a(530));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f,p,b,g=function(e){function t(){return i(this,t),u(this,m(t).apply(this,arguments))}var a,r,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),a=t,(r=[{key:"render",value:function(){return n.default.createElement(c.default,null,n.default.createElement("title",null,this.props.title))}}])&&s(a.prototype,r),l&&s(a,l),t}(n.Component);f=g,p="propTypes",b={title:r.default.string},p in f?Object.defineProperty(f,p,{value:b,enumerable:!0,configurable:!0,writable:!0}):f[p]=b;var E=g;t.default=E,e.exports=t.default},580:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=(a(511),function(e){e.getLayout,e.getFilterSortParams;var t=e.productCount,a=e.sortedProductCount;return r.a.createElement("div",{className:"shop-top-bar mb-35"},r.a.createElement("div",{className:"select-shoing-wrap"},r.a.createElement("p",null,"Showing ",a," of ",t," result")))});t.a=function(e){var t=e.getLayout,a=e.getFilterSortParams,l=e.productCount,o=e.sortedProductCount;return r.a.createElement(n.Fragment,null,r.a.createElement(c,{getLayout:t,getFilterSortParams:a,productCount:l,sortedProductCount:o}))}},586:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(511),l=function(){return r.a.createElement("div",{className:"sidebar-widget"},r.a.createElement("h4",{className:"pro-sidebar-title"},"Search "),r.a.createElement("div",{className:"pro-sidebar-search mb-50 mt-25"},r.a.createElement("form",{className:"pro-sidebar-search-form",action:"#"},r.a.createElement("input",{type:"text",placeholder:"Search here..."}),r.a.createElement("button",null,r.a.createElement("i",{className:"pe-7s-search"})))))},o=function(e){var t=e.categories,a=e.getSortParams,n=e.cb;return r.a.createElement("div",{className:"sidebar-widget"},r.a.createElement("h4",{className:"pro-sidebar-title"},"Categories "),r.a.createElement("div",{className:"sidebar-widget-list mt-30"},t?r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("button",{onClick:function(e){a("category",""),Object(c.h)(e)}},r.a.createElement("span",{className:"checkmark"})," All Categories"))),t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("button",{onClick:function(t){console.log(e._id),n(e._id),a("category",e),Object(c.h)(t)}}," ",r.a.createElement("span",{className:"checkmark"})," ",e.name," ")))}))):"No categories found"))},i=function(e){var t=e.colors,a=e.getSortParams,n=e.getonecolor;return r.a.createElement("div",{className:"sidebar-widget mt-50"},r.a.createElement("h4",{className:"pro-sidebar-title"},"Color "),r.a.createElement("div",{className:"sidebar-widget-list mt-20"},t?r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("button",{onClick:function(e){a("color",""),Object(c.h)(e)}},r.a.createElement("span",{className:"checkmark"})," All Colors"," "))),t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("button",{onClick:function(t){n(e._id),console.log(e._id),a("color",e),Object(c.h)(t)}},r.a.createElement("span",{className:"checkmark"}),r.a.createElement("span",{style:{backgroundColor:null===e||void 0===e?void 0:e.colorName,borderRadius:"50%",height:25,width:25}})," ",null===e||void 0===e?void 0:e.colorName," ")))}))):"No colors found"))},s=function(e){var t=e.sizes,a=e.getSortParams,n=e.getonesize;return r.a.createElement("div",{className:"sidebar-widget mt-40"},r.a.createElement("h4",{className:"pro-sidebar-title"},"Size "),r.a.createElement("div",{className:"sidebar-widget-list mt-20"},t?r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("button",{onClick:function(e){a("size",""),Object(c.h)(e)}},r.a.createElement("span",{className:"checkmark"})," All Sizes"," "))),t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("button",{className:"text-uppercase",onClick:function(t){console.log(e._id),n(e._id),a("size",e),Object(c.h)(t)}}," ",r.a.createElement("span",{className:"checkmark"}),e.sizeName," ")))}))):"No sizes found"))},u=function(e){var t=e.tags,a=e.getSortParams,n=e.getonetag;return r.a.createElement("div",{className:"sidebar-widget mt-50"},r.a.createElement("h4",{className:"pro-sidebar-title"},"Tag "),r.a.createElement("div",{className:"sidebar-widget-tag mt-25"},t?r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("button",{onClick:function(t){n(e),a("tag",e),Object(c.h)(t)}},e))}))):"No tags found"))},m=function(e){var t=e.brands,a=e.getSortParams,n=e.getonebrand;return r.a.createElement("div",{className:"sidebar-widget mt-50"},r.a.createElement("h4",{className:"pro-sidebar-title"},"Brand "),r.a.createElement("div",{className:"sidebar-widget-tag mt-25"},t?r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("button",{onClick:function(t){n(e._id),a("brands",e),Object(c.h)(t)}},e.name))}))):"No brands found"))},d=a(510),f=a(649),p=a(648);function b(e){return"".concat(e,"\xb0C")}var g=function(e){e.tags,e.getSortParams;var t=e.priceobj,a=r.a.useState([1,90]),n=Object(d.a)(a,2),c=n[0],l=n[1];return r.a.createElement("div",{className:"sidebar-widget mt-50"},r.a.createElement("h4",{className:"pro-sidebar-title"},"Price Range "),r.a.createElement("div",{className:"sidebar-widget-tag mt-25"},r.a.createElement(f.a,null,r.a.createElement(p.a,{getAriaLabel:function(){return"Price range"},value:c,scale:function(e){return 25*e},onChange:function(e,a){l(a),t({min:25*a[0],max:25*a[1]})},valueLabelDisplay:"auto",getAriaValueText:b}))))};t.a=function(e){var t=e.products,a=e.getSortParams,n=e.sideSpaceClass,d=e.colors,f=e.sizes,p=e.category,b=e.tags,E=e.brand,v=e.callback,h=e.tagcallback,y=e.colorcallback,O=e.sizecallback,N=e.brandcallback,w=e.pricerange;Object(c.b)(t),Object(c.c)(t),Object(c.f)(t),Object(c.d)(t);return r.a.createElement("div",{className:"sidebar-style ".concat(n||"")},r.a.createElement(l,null),r.a.createElement(g,{tags:b,getSortParams:a,priceobj:function(e){w(e),console.log(e)}}),r.a.createElement(u,{tags:b,getSortParams:a,getonetag:function(e){h(e),console.log(e)}}),r.a.createElement(i,{colors:d,getSortParams:a,getonecolor:function(e){y(e),console.log(e)}}),r.a.createElement(s,{sizes:f,getSortParams:a,getonesize:function(e){O(e),console.log(e)}}),r.a.createElement(m,{brands:E,getSortParams:a,getonebrand:function(e){N(e),console.log(e)}}),r.a.createElement(o,{categories:p,getSortParams:a,cb:function(e){v(e),console.log(e)}}))}},597:function(e,t,a){"use strict";a(122);var n=a(0),r=60103;if(t.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var c=Symbol.for;r=c("react.element"),t.Fragment=c("react.fragment")}var l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,a){var n,c={},s=null,u=null;for(n in void 0!==a&&(s=""+a),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,n)&&!i.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:r,type:e,key:s,ref:u,props:c,_owner:l.current}}t.jsx=s,t.jsxs=s},777:function(e,t,a){"use strict";a.r(t);var n=a(519),r=a.n(n),c=a(520),l=a(510),o=a(0),i=a.n(o),s=a(527),u=a.n(s),m=a(585),d=a(163),f=a(74),p=a(120),b=a(511),g=a(522),E=a(517),v=(a(586),a(580),a(164));t.default=Object(f.connect)((function(e){return{products:e.productData.products}}))((function(e){var t=e.location,a=e.products,n=(e.product,e.currency,e.addToCart,e.addToWishlist,e.addToCompare,e.cartItem,e.wishlistItem,e.discountedPrice,e.compareItem,e.sliderClassName),s=e.spaceBottomClass,f=e.colorClass,h=e.titlePriceClass,y=(Object(v.useToasts)().addToast,Object(o.useState)("grid two-column")),O=Object(l.a)(y,2),N=O[0],w=(O[1],Object(o.useState)("")),j=Object(l.a)(w,2),C=j[0],S=(j[1],Object(o.useState)("")),k=Object(l.a)(S,2),_=k[0],P=(k[1],Object(o.useState)("")),x=Object(l.a)(P,2),T=x[0],L=(x[1],Object(o.useState)("")),D=Object(l.a)(L,2),A=D[0],F=(D[1],Object(o.useState)(0)),M=Object(l.a)(F,2),I=M[0],z=M[1],B=Object(o.useState)(1),R=Object(l.a)(B,2),q=R[0],U=R[1],H=Object(o.useState)([]),W=Object(l.a)(H,2),Y=(W[0],W[1]),J=Object(o.useState)([]),K=Object(l.a)(J,2),Q=K[0],$=K[1],G=t.pathname;Object(o.useEffect)((function(){var e=Object(b.g)(a,C,_),t=Object(b.g)(e,T,A);$(e=t),Y(e.slice(I,I+16))}),[I,a,C,_,T,A]);var V=Object(o.useState)([]),X=Object(l.a)(V,2),Z=X[0],ee=X[1];return Object(o.useEffect)((function(){function e(){return(e=Object(c.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://35.154.86.59/api/admin/getproductbytagname/Kids");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,ee(a.data),console.log(a.data);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),i.a.createElement(o.Fragment,null,i.a.createElement(u.a,null,i.a.createElement("title",null,"Flone | Shop Page"),i.a.createElement("meta",{name:"description",content:"Shop page of flone react minimalist eCommerce template."})),i.a.createElement(d.BreadcrumbsItem,{to:"/"},"Home"),i.a.createElement(d.BreadcrumbsItem,{to:""+G},"Shop"),i.a.createElement(g.a,{headerTop:"visible"},i.a.createElement(E.a,null),i.a.createElement("div",{className:"shop-area pt-95 pb-100"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"shop-bottom-area mt-35"},i.a.createElement("div",{className:"row ".concat(N||"")},i.a.createElement(o.Fragment,null,Z.map((function(e){return i.a.createElement("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6 ".concat(n||""),key:e._id},i.a.createElement("div",{className:"product-wrap-2 ".concat(s||""," ").concat(f||""," ")},i.a.createElement("div",{className:"product-img"},i.a.createElement(p.b,{to:"/product-sticky/"+e._id},i.a.createElement("img",{className:"default-img",src:e.product_img[0],alt:""}),i.a.createElement("img",{className:"hover-img",src:e.product_img[1],alt:""})),i.a.createElement("div",{className:"product-action-2"})),i.a.createElement("div",{className:"product-content-2"},i.a.createElement("div",{className:"title-price-wrap-2 ".concat(h||"")},i.a.createElement("h3",null,i.a.createElement(p.b,{to:"/product/"+e._id},e.product_name)),i.a.createElement("div",{className:"price-2"},i.a.createElement(o.Fragment,null,i.a.createElement("span",null,"\u20b9 ",e.sell_price)))))))}))))),i.a.createElement("div",{className:"pro-pagination-style text-center mt-30"},i.a.createElement(m.a,{totalRecords:Q.length,pageLimit:16,pageNeighbours:2,setOffset:z,currentPage:q,setCurrentPage:U,pageContainerClass:"mb-0 mt-0",pagePrevText:"\xab",pageNextText:"\xbb"}))))))))}))}}]);
//# sourceMappingURL=37.77501081.chunk.js.map