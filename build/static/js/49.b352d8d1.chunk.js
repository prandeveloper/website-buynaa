(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[49,1],{511:function(e,t,a){"use strict";a.d(t,"e",(function(){return r})),a.d(t,"a",(function(){return c})),a.d(t,"g",(function(){return l})),a.d(t,"b",(function(){return s})),a.d(t,"d",(function(){return i})),a.d(t,"c",(function(){return u})),a.d(t,"f",(function(){return m})),a.d(t,"h",(function(){return d})),a.d(t,"i",(function(){return f}));var n=a(51),r=function(e,t,a,n){var r=t?e.filter((function(e){return e.category.filter((function(e){return e===t}))[0]})):e;if(a&&"new"===a){var c=r.filter((function(e){return e.new}));return c.slice(0,n||c.length)}if(a&&"bestSeller"===a)return r.sort((function(e,t){return t.saleCount-e.saleCount})).slice(0,n||r.length);if(a&&"saleItems"===a){var l=r.filter((function(e){return e.discount&&e.discount>0}));return l.slice(0,n||l.length)}return r.slice(0,n||r.length)},c=function(e,t){return t&&t>0?e-e*(t/100):null},l=function(e,t,a){if(e&&t&&a){if("productCategories"===t)return e.filter((function(e){return e.productCategories.filter((function(e){return e===a}))[0]}));if("tag"===t)return e.filter((function(e){return e.tag.filter((function(e){return e===a}))[0]}));if("color"===t)return e.filter((function(e){return e.data&&e.data.filter((function(e){return e.color===a}))[0]}));if("size"===t)return e.filter((function(e){return e.data&&e.data.filter((function(e){return e.size.filter((function(e){return e.name===a}))[0]}))[0]}));if("filterSort"===t){var r=Object(n.a)(e);if("default"===a)return r;if("priceHighToLow"===a)return r.sort((function(e,t){return t.price-e.price}));if("priceLowToHigh"===a)return r.sort((function(e,t){return e.price-t.price}))}}return e},o=function(e){return e.filter((function(e,t,a){return t===a.indexOf(e)}))},s=function(e){var t=[];return e&&e.map((function(e){return e.productCategories&&e.productCategories.map((function(e){return t.push(e)}))})),o(t)},i=function(e){var t=[];return e&&e.map((function(e){return e.tag&&e.tag.map((function(e){return t.push(e)}))})),o(t)},u=function(e){var t=[];return e&&e.map((function(e){return e.data&&e.data.map((function(e){return t.push(e.color)}))})),o(t)},m=function(e){var t=[];return e&&e.map((function(e){return e.data&&e.data.map((function(e){return e.size.map((function(e){return t.push(e.name)}))}))})),o(t)},d=function(e){document.querySelectorAll(".sidebar-widget-list-left button, .sidebar-widget-tag button, .product-filter button").forEach((function(e){e.classList.remove("active")})),e.currentTarget.classList.add("active")},f=function(e){var t=document.querySelector("#product-filter-wrapper");t.classList.toggle("active"),t.style.height?t.style.height=null:t.style.height=t.scrollHeight+"px",e.currentTarget.classList.toggle("active")}},521:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(120),l=a(163);t.a=function(){return r.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"breadcrumb-content text-center"},r.a.createElement(l.Breadcrumbs,{separator:r.a.createElement("span",null,"/"),item:c.c,finalItem:"span"}))))}},522:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(510),l=a(120),o=function(e){var t=e.imageUrl,a=e.logoClass;return r.a.createElement("div",{className:"".concat(a||"")},r.a.createElement(l.b,{to:"/"},r.a.createElement("img",{alt:"",src:""+t,style:{width:150}})))},s=a(75),i=Object(s.multilanguage)((function(e){var t=e.strings,a=e.menuWhiteClass,n=e.sidebarMenu;return r.a.createElement("div",{className:" ".concat(n?"sidebar-menu":"main-menu ".concat(a||"")," ")},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},t.home)),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/shop-grid-two-column"},t.products)),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/about"},t.about_us)),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/contact"},t.contact_us)),r.a.createElement("li",null,r.a.createElement("a",{href:"http://seller.buynaa.com",style:{color:"blue",fontSize:18,fontWeight:700,textDecoration:"underline"}},"Seller Console")))))})),u=a(518),m=a.n(u),d=a(519),f=a(20),g=a(74),E=a(164),p=a(511),b=a(161),v=a.n(b),h=function(e){e.cartData;var t=e.currency,a=(e.deleteFromCart,0),o=(Object(E.useToasts)().addToast,Object(n.useState)([])),s=Object(c.a)(o,2),i=s[0],u=s[1],g=Object(n.useState)([]),b=Object(c.a)(g,2),h=(b[0],b[1],Object(f.h)().id,function(){var e=Object(d.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,v.a.get("http://35.154.86.59/api/admin/remove_cart/".concat(t),{headers:{"auth-token":localStorage.getItem("auth-token")}});case 4:(a=e.sent)&&(console.log(a),y()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()),y=function(){var e=Object(d.a)(m.a.mark((function e(t){var a,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("http://35.154.86.59/api/admin/cartbycustomer",{headers:{"auth-token":localStorage.getItem("auth-token")}});case 2:a=e.sent,n=a.data,r=n.data,console.log(r),u(r),console.log(r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){localStorage.getItem("auth-token")&&y()}),[]),r.a.createElement("div",{className:"shopping-cart-content"},i&&(null===i||void 0===i?void 0:i.length)>0?r.a.createElement(n.Fragment,null,r.a.createElement("ul",{style:{height:150}},i.map((function(e,n){var c,o,s,i,u=Object(p.a)(e.price,e.discount);(e.price*t.currencyRate).toFixed(2),(u*t.currencyRate).toFixed(2);return a+=parseInt(e.gsttotal),r.a.createElement("li",{className:"single-shopping-cart",key:n},r.a.createElement("div",{className:"shopping-cart-img"},r.a.createElement(l.b,{to:"".concat("","/product-sticky/").concat(null===(c=e.product)||void 0===c?void 0:c._id)},r.a.createElement("img",{alt:"",src:""+(null===(o=e.product)||void 0===o?void 0:o.product_img[0]),className:"img-fluid"}))),r.a.createElement("div",{className:"shopping-cart-title"},r.a.createElement("h4",null,r.a.createElement(l.b,{to:"/product-sticky/"+(null===(s=e.product)||void 0===s?void 0:s._id)}," ",null===(i=e.product)||void 0===i?void 0:i.product_name)),r.a.createElement("h6",null,"Qty: ",e.product_qty),r.a.createElement("h6",null,"Color: ",e.color),r.a.createElement("h6",null,"Size: ",e.size),r.a.createElement("h6",null,"Price: ",e.gsttotal),r.a.createElement("span",null)),r.a.createElement("div",{className:"shopping-cart-delete"},r.a.createElement("button",{onClick:function(){var t;return h(null===(t=e.product)||void 0===t?void 0:t._id)}},r.a.createElement("i",{className:"fa fa-times-circle"}))))}))),r.a.createElement("div",{className:"shopping-cart-total"},r.a.createElement("h4",null,"Total :",r.a.createElement("span",{className:"shop-total"},"\u20b9 ",a))),r.a.createElement("div",{className:"shopping-cart-btn btn-hover text-center"},r.a.createElement(l.b,{className:"default-btn",to:"/cart"},"view cart"))):r.a.createElement("p",{className:"text-center"},"No items added to cart"))},y=a(76),N=Object(g.connect)((function(e){return{currency:e.currencyData,cartData:e.cartData,wishlistData:e.wishlistData,compareData:e.compareData}}),(function(e){return{deleteFromCart:function(t,a){e(Object(y.h)(t,a))}}}))((function(e){var t=e.currency,a=(e.cartData,e.wishlistData,e.compareData,e.deleteFromCart),o=e.iconWhiteClass,s=function(e){e.currentTarget.nextSibling.classList.toggle("active")},i=Object(n.useState)([]),u=Object(c.a)(i,2),g=u[0],E=u[1],p=function(){var e=Object(d.a)(m.a.mark((function e(t){var a,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("http://35.154.86.59/api/admin/cartbycustomer",{headers:{"auth-token":localStorage.getItem("auth-token")}});case 2:a=e.sent,n=a.data,r=n.data,E(r),console.log(r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){localStorage.getItem("auth-token")&&p()}),[]);Object(f.g)();var b=Object(n.useState)([]),y=Object(c.a)(b,2),N=y[0],C=y[1],w=function(){var e=Object(d.a)(m.a.mark((function e(){var t,a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("http://35.154.86.59/api/admin/getallwishlist",{headers:{"auth-token":localStorage.getItem("auth-token")}});case 2:t=e.sent,a=t.data,n=a.data,C(n),console.log(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){localStorage.getItem("auth-token")&&w()}),[]),r.a.createElement("div",{className:"header-right-wrap ".concat(o||"")},r.a.createElement("div",{className:"same-style account-setting  d-lg-block"},r.a.createElement("button",{className:"account-setting-active",onClick:function(e){return s(e)}},r.a.createElement("i",{className:"pe-7s-user"})),r.a.createElement("div",{className:"account-dropdown"},r.a.createElement("ul",null,localStorage.getItem("auth-token")?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/myOrder"},"My Order")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/my-account"},"My Account")),r.a.createElement("li",null,r.a.createElement(l.b,{onClick:function(e){return window.localStorage.removeItem("auth-token")(window.location.reload())}},"Logout"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/login-register"},"Login")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/login-register"},"Register")))))),r.a.createElement("div",{className:"same-style header-wishlist"},r.a.createElement(l.b,{to:"/wishlist"},r.a.createElement("i",{className:"pe-7s-like"}),r.a.createElement("span",{className:"count-style"},N&&N.length?N.length:0))),r.a.createElement("div",{className:"same-style cart-wrap d-none d-lg-block"},r.a.createElement("button",{className:"icon-cart",onClick:function(e){return s(e)}},r.a.createElement("i",{className:"pe-7s-shopbag"}),r.a.createElement("span",{className:"count-style"},g&&g.length?g.length:0)),r.a.createElement(h,{carts:g,currency:t,deleteFromCart:a})),r.a.createElement("div",{className:"same-style cart-wrap d-block d-lg-none"},r.a.createElement(l.b,{className:"icon-cart",to:"/cart"},r.a.createElement("i",{className:"pe-7s-shopbag"}),r.a.createElement("span",{className:"count-style"},g&&g.length?g.length:0))),r.a.createElement("div",{className:"same-style mobile-off-canvas d-block d-lg-none"},r.a.createElement("button",{className:"mobile-aside-button",onClick:function(){document.querySelector("#offcanvas-mobile-menu").classList.add("active")}},r.a.createElement("i",{className:"pe-7s-menu"}))))})),C=function(){return r.a.createElement("div",{className:"offcanvas-mobile-search-area"})},w=Object(s.multilanguage)((function(e){var t=e.strings;return r.a.createElement("nav",{className:"offcanvas-navigation",id:"offcanvas-navigation"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},t.home)),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/shop-grid-two-column"},t.products)),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/about"},t.about_us)),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/contact"},t.contact_us)),r.a.createElement("li",null,r.a.createElement("a",{href:"http://seller.buynaa.com",style:{color:"blue",fontSize:18,fontWeight:700,textDecoration:"underline"}},"Seller Console"))))})),O=a(165),j=Object(g.connect)((function(e){return{currency:e.currencyData}}),(function(e){return{setCurrency:function(t){e(Object(O.b)(t))}}}))(Object(s.multilanguage)((function(e){e.currency,e.setCurrency,e.currentLanguageCode,e.dispatch;return r.a.createElement("div",{className:"mobile-menu-middle"})}))),S=function(){return r.a.createElement("div",{className:"offcanvas-widget-area"})},k=function(){Object(n.useEffect)((function(){for(var a=document.querySelector("#offcanvas-navigation"),n=a.querySelectorAll(".sub-menu"),r=a.querySelectorAll("a"),c=0;c<n.length;c++)n[c].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var l=a.querySelectorAll(".menu-expand"),o=l.length,s=0;s<o;s++)l[s].addEventListener("click",(function(t){e(t)}));for(var i=0;i<r.length;i++)r[i].addEventListener("click",(function(){t()}))}));var e=function(e){e.currentTarget.parentElement.classList.toggle("active")},t=function(){document.querySelector("#offcanvas-mobile-menu").classList.remove("active")};return r.a.createElement("div",{className:"offcanvas-mobile-menu",id:"offcanvas-mobile-menu"},r.a.createElement("button",{className:"offcanvas-menu-close",id:"mobile-menu-close-trigger",onClick:function(){return t()}},r.a.createElement("i",{className:"pe-7s-close"})),r.a.createElement("div",{className:"offcanvas-wrapper"},r.a.createElement("div",{className:"offcanvas-inner-content"},r.a.createElement(C,null),r.a.createElement(w,null),r.a.createElement(j,null),r.a.createElement(S,null))))},x=Object(g.connect)((function(e){return{currency:e.currencyData}}),(function(e){return{setCurrency:function(t){e(Object(O.b)(t))}}}))(Object(s.multilanguage)((function(e){e.currency,e.setCurrency,e.currentLanguageCode,e.dispatch;var t=e.borderStyle;return r.a.createElement("div",{className:"header-top-wap ".concat("fluid-border"===t?"border-bottom":"")})}))),L=function(e){var t=e.layout,a=e.top,l=e.borderStyle,s=e.headerPaddingClass,u=e.headerPositionClass,m=e.headerBgClass,d=Object(n.useState)(0),f=Object(c.a)(d,2),g=f[0],E=f[1],p=Object(n.useState)(0),b=Object(c.a)(p,2),v=b[0],h=b[1];Object(n.useEffect)((function(){var e=document.querySelector(".sticky-bar");return h(e.offsetTop),window.addEventListener("scroll",y),function(){window.removeEventListener("scroll",y)}}),[]);var y=function(){E(window.scrollY)};return r.a.createElement("header",{className:"header-area clearfix ".concat(m||""," ").concat(u||"")},r.a.createElement("div",{className:"".concat(s||""," ").concat("visible"===a?"d-none d-lg-block":"d-none"," header-top-area ").concat("fluid-border"===l?"border-none":"")},r.a.createElement("div",{className:"container-fluid"===t?t:"container"},r.a.createElement(x,{borderStyle:l}))),r.a.createElement("div",{className:" ".concat(s||""," sticky-bar header-res-padding clearfix ").concat(g>v?"stick":"")},r.a.createElement("div",{className:"container-fluid"===t?t:"container"},r.a.createElement("div",{className:"row",style:{marginBottom:"-8px"}},r.a.createElement("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4"},r.a.createElement("div",{style:{padding:15}},r.a.createElement(o,{imageUrl:"/assets/img/logo/BuyNaa.png"}))),r.a.createElement("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block"},r.a.createElement(i,null)),r.a.createElement("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8"},r.a.createElement(N,null)))),r.a.createElement(k,null)))},T=a(575),_=function(e){var t=e.footerLogo,a=e.spaceBottomClass,n=e.colorClass;return r.a.createElement("div",{className:"copyright ".concat(a||""," ").concat(n||"")},r.a.createElement("div",{className:"footer-logo"},r.a.createElement(l.b,{to:"/"},r.a.createElement("img",{alt:"",src:""+t,style:{width:150}}))),r.a.createElement("p",null,"\xa9 ",(new Date).getFullYear()," ",r.a.createElement("a",{href:"/",rel:"noopener noreferrer",target:""},"Buynaa"),".",r.a.createElement("br",null)," All Rights Reserved"))},F=(a(576),function(e){var t=e.spaceBottomClass,a=e.spaceLeftClass,n=e.sideMenu,c=e.colorClass,l=e.widgetColorClass;return r.a.createElement("div",{className:"footer-widget ".concat(t||""," ").concat(n?"ml-ntv5":a||""," ").concat(l||"")},r.a.createElement("div",{className:"subscribe-style ".concat(c||"")},r.a.createElement("p",null,"Get E-mail updates about our latest shop and special offers.")))}),D=function(e){var t=e.backgroundColorClass,a=e.spaceTopClass,o=e.spaceBottomClass,s=e.spaceLeftClass,i=e.spaceRightClass,u=e.containerClass,m=e.extraFooterClass,d=e.sideMenu,f=Object(n.useState)(0),g=Object(c.a)(f,2),E=g[0],p=g[1],b=Object(n.useState)(0),v=Object(c.a)(b,2),h=v[0],y=v[1];Object(n.useEffect)((function(){return y(100),window.addEventListener("scroll",N),function(){window.removeEventListener("scroll",N)}}),[]);var N=function(){p(window.scrollY)};return r.a.createElement("footer",{className:"footer-area ".concat(t||""," ").concat(a||""," ").concat(o||""," ").concat(m||""," ").concat(s||""," ").concat(i||"")},r.a.createElement("div",{className:"".concat(u||"container")},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"".concat(d?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},r.a.createElement(_,{footerLogo:"/assets/img/logo/BuyNaa.png",spaceBottomClass:"mb-30"})),r.a.createElement("div",{className:"".concat(d?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},r.a.createElement("div",{className:"footer-widget mb-30 ml-30"},r.a.createElement("div",{className:"footer-title"},r.a.createElement("h3",null,"ABOUT US")),r.a.createElement("div",{className:"footer-list"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/about"},"About us")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/contact"},"Contact")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"#/"},"Orders tracking")))))),r.a.createElement("div",{className:"".concat(d?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},r.a.createElement("div",{className:"".concat(d?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50")},r.a.createElement("div",{className:"footer-title"},r.a.createElement("h3",null,"USEFUL LINKS")),r.a.createElement("div",{className:"footer-list"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/TermsOfUse"},"Terms of Use")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/privacyPolicy"},"privacyPolicy")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/faqPage"},"FAQs")))))),r.a.createElement("div",{className:"".concat(d?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6")},r.a.createElement("div",{className:"".concat(d?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75")},r.a.createElement("div",{className:"footer-title"},r.a.createElement("h3",null,"FOLLOW US")),r.a.createElement("div",{className:"footer-list"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer"},"Facebook")),r.a.createElement("li",null,r.a.createElement("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer"},"Twitter")),r.a.createElement("li",null,r.a.createElement("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer"},"Instagram")),r.a.createElement("li",null,r.a.createElement("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer"},"Youtube")))))),r.a.createElement("div",{className:"".concat(d?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6")},r.a.createElement(F,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:d})))),r.a.createElement("button",{className:"scroll-top ".concat(E>h?"show":""),onClick:function(){T.animateScroll.scrollToTop()}},r.a.createElement("i",{className:"fa fa-angle-double-up"})))};t.a=function(e){var t=e.children,a=e.headerContainerClass,c=e.headerTop,l=e.headerPaddingClass,o=e.headerPositionClass;return r.a.createElement(n.Fragment,null,r.a.createElement(L,{layout:a,top:c,headerPaddingClass:l,headerPositionClass:o}),t,r.a.createElement(D,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}))}},683:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return v}));var n=a(162),r=a(523),c=a(525),l=a(539),o=a(540),s=a(0),i=a.n(s),u=a(527),m=a.n(u),d=a(586),f=a(522),g=a(521),E=a(161),p=a.n(E),b=a(670),v=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).onChangeHandler=function(e){c.setState({selectedFile:e.target.files[0]}),c.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},c.changeHandler=function(e){c.setState(Object(n.a)({},e.target.name,e.target.value))},c.submitHandler=function(e){e.preventDefault(),p.a.post("http://35.154.86.59/api/user/sendotp",c.state).then((function(e){console.log(e)})).catch((function(e){console.log(e.response)}))},c.state={mobile_no:"12345678",customer_email:"guptapratima98710@gmail.com",selectedFile:null},c}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement(s.Fragment,null,i.a.createElement(m.a,null,i.a.createElement("title",null,"Buynaa | Login"),i.a.createElement("meta",{content:"Compare page of flone react minimalist eCommerce template."})),i.a.createElement(f.a,{headerTop:"visible"},i.a.createElement(g.a,null),i.a.createElement("div",{className:"login-register-area pt-100 pb-100"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-7 col-md-12 ml-auto mr-auto"},i.a.createElement("div",{className:"login-register-wrapper"},i.a.createElement(d.a.Container,{defaultActiveKey:"login"},i.a.createElement(d.a.Content,null,i.a.createElement(d.a.Pane,{eventKey:"login"},i.a.createElement("div",{className:"login-form-container"},i.a.createElement("div",{className:"login-register-form"},i.a.createElement(b.a,{onSubmit:this.submitHandler},i.a.createElement("input",{onChange:this.changeHandler,type:"number",value:this.state.mobile_no,name:"mobile_no ",placeholder:"Enter your mobile number"}),i.a.createElement("input",{value:this.state.customer_email,type:"email",name:"customer_email",placeholder:"Enter Email"}),i.a.createElement("div",{className:"button-box"},i.a.createElement("button",{type:"submit",color:"primary"},"SendOTP")))))))))))))))}}]),a}(s.Component)},684:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var n=a(162),r=a(523),c=a(525),l=a(577),o=a(539),s=a(540),i=a(0),u=a.n(i),m=a(527),d=a.n(m),f=a(671),g=a.n(f),E=a(161),p=a.n(E),b=a(586),v=a(522),h=a(521),y=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={otp:""},e.resenddd=function(){e.setState({otp:""}),e.interval(),e.sendOtp()},e.state={customer_email:"",mobile:"12345678",otp:"1234",msg:"",input:{},errors:{}},e.handleChange=function(t){return e.setState({otp:t})},e.handleSubmit=e.handleSubmit.bind(Object(l.a)(e)),e}return Object(c.a)(a,[{key:"interval",value:function(){this.setState({seconds:26})}},{key:"handleChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),p.a.post("http://35.154.86.59/api/user/verifyotp",this.state).then((function(e){console.log(e),alert("anjali")})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return u.a.createElement(i.Fragment,null,u.a.createElement(d.a,null,u.a.createElement("title",null,"Buynaa | Login"),u.a.createElement("meta",{name:"description",content:"Compare page of flone react minimalist eCommerce template."})),u.a.createElement(v.a,{headerTop:"visible"},u.a.createElement(h.a,null),u.a.createElement("div",{className:"login-register-area pt-100 pb-100"},u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-7 col-md-12 ml-auto mr-auto"},u.a.createElement("div",{className:"login-register-wrapper"},u.a.createElement(b.a.Container,{defaultActiveKey:"login"},u.a.createElement(b.a.Content,null,u.a.createElement(b.a.Pane,{eventKey:"login"},u.a.createElement("div",{className:"login-form-container"},u.a.createElement("div",{className:"login-register-form"},u.a.createElement("form",{onSubmit:this.handleSubmit},u.a.createElement("div",null,u.a.createElement(g.a,{value:this.state.otp,onChange:this.handleChange,numInputs:4,type:"number",name:"otp",separator:u.a.createElement("span",null)}),this.state.OTPError?this.state.OTPError:null),u.a.createElement("div",{className:"button-box"},u.a.createElement("button",{type:"back"},"Back"),u.a.createElement("button",{type:"submit"},"SendOTP")))))))))))))))}}]),a}(u.a.Component)},793:function(e,t,a){"use strict";a.r(t);var n=a(162),r=a(12),c=a(510),l=a(0),o=a.n(l),s=a(683),i=a(684);t.default=function(){var e=Object(l.useState)({status:"",msg:"",mobile:"",otp:""}),t=Object(c.a)(e,2),a=t[0],u=t[1],m=Object(l.useState)(1),d=Object(c.a)(m,2),f=d[0],g=d[1],E=function(e){return function(t){u(Object(r.a)(Object(r.a)({},a),{},Object(n.a)({},e,t.target.value)))}},p=function(e){u(Object(r.a)(Object(r.a)({},a),{},{msg:e}))},b=function(){u((function(e){return g+1}))},v={status:a.status,msg:a.msg,mobile:a.mobile,otp:a.otp};switch(f){case 1:return o.a.createElement(s.default,{nextStep:b,msgHandleChange:p,handleChange:E,value:v});case 2:return o.a.createElement(i.default,{nextStep:b,prevStep:function(){u((function(e){return e-1}))},handleChange:E,value:v});default:return o.a.createElement(s.default,{nextStep:b,msgHandleChange:p,handleChange:E,value:v})}}}}]);
//# sourceMappingURL=49.b352d8d1.chunk.js.map