(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[7],{553:function(e,t,a){"use strict";var l=a(0),n=a.n(l),r=a(7),c=a(178);t.a=function(){return n.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"breadcrumb-content text-center"},n.a.createElement(c.Breadcrumbs,{separator:n.a.createElement("span",null,"/"),item:r.c,finalItem:"span"}))))}},555:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return r.default}}),t.default=void 0;var l=c(a(564)),n=c(a(558)),r=c(a(566));function c(e){return e&&e.__esModule?e:{default:e}}var o=n.default;t.default=o},558:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var l=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};l.get||l.set?Object.defineProperty(t,a,l):t[a]=e[a]}return t.default=e,t}(a(0)),n=o(a(3)),r=o(a(34)),c=a(565);function o(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function u(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f,E,p,g=function(e){function t(){return i(this,t),u(this,d(t).apply(this,arguments))}var a,n,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),a=t,(n=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&r.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var a=l.default.createElement("div",{className:"react-head-temp"},t);r.default.render(a,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var a=e.temporaryElement.querySelector(".react-head-temp");if(null!==a){var l=Array.prototype.slice.call(a.children),n=document.head,r=n.innerHTML;(l=(l=l.filter((function(e){return-1===r.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var a=(0,c.getDuplicateTitle)();a&&(0,c.removeChild)(n,a)}else if("meta"===t){var l=(0,c.getDuplicateMeta)(e);l&&(0,c.removeChild)(n,l)}else if("link"===t&&"canonical"===e.rel){var r=(0,c.getDuplicateCanonical)(e);r&&(0,c.removeChild)(n,r)}})),(0,c.appendChild)(document.head,l)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&m(a.prototype,n),o&&m(a,o),t}(l.Component);f=g,E="contextTypes",p={extract:n.default.func},E in f?Object.defineProperty(f,E,{value:p,enumerable:!0,configurable:!0,writable:!0}):f[E]=p;var h=g;t.default=h,e.exports=t.default},564:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,n=a(0),r=(l=a(3))&&l.__esModule?l:{default:l};function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function i(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return o(this,t),i(this,m(t).apply(this,arguments))}var a,l,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),a=t,(l=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return n.Children.only(this.props.children)}}])&&s(a.prototype,l),r&&s(a,r),t}(n.Component);!function(e,t,a){t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a}(d,"childContextTypes",{extract:r.default.func});var b=d;t.default=b,e.exports=t.default},565:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,a=null,l=[],c=[];return e.forEach((function(e){var n=e.type,r=e.props;"title"===n?t=e:"link"===n&&"canonical"===r.rel?a=e:"meta"===n?l.push(e):c.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};r.forEach((function(e){t[e]=[]}));for(var a=[],l=function(l){var c=e[l],o=c.props.id;(o?!t.id[o]:0===n.filter((function(e){var a=c.props[e],l=t[e][a];return l&&!l.props.id})).length)&&(a.unshift(c),r.forEach((function(e){var a=c.props[e];a&&(t[e][a]=c)})))},c=e.length-1;c>=0;c--)l(c);return a}(l)),[a],c)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,a=e.id;if(a)return a&&t.querySelector("#".concat(a));return l.reduce((function(a,l){var n,r=e.getAttribute(l);return r?a.concat((n=t.querySelectorAll("[".concat(l,' = "').concat(r,'"]')),(n=Array.prototype.slice.call(n||[])).filter((function(e){return!e.id})))):a}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=document.createDocumentFragment(),l=0,n=t.length;l<n;l++)a.appendChild(t[l]);e.appendChild(a)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=0,l=t.length;a<l;a++)e.removeChild(t[a])};var l=["property","name","itemprop"],n=l.concat(["itemProp"]),r=n.concat(["id"])},566:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var l=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};l.get||l.set?Object.defineProperty(t,a,l):t[a]=e[a]}return t.default=e,t}(a(0)),n=c(a(3)),r=c(a(558));function c(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function m(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b,f,E,p=function(e){function t(){return s(this,t),m(this,u(t).apply(this,arguments))}var a,n,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),a=t,(n=[{key:"render",value:function(){return l.default.createElement(r.default,null,l.default.createElement("title",null,this.props.title))}}])&&i(a.prototype,n),c&&i(a,c),t}(l.Component);b=p,f="propTypes",E={title:n.default.string},f in b?Object.defineProperty(b,f,{value:E,enumerable:!0,configurable:!0,writable:!0}):b[f]=E;var g=p;t.default=g,e.exports=t.default},675:function(e,t,a){"use strict";var l=a(0),n=a.n(l),r=a(7);t.a=function(){return n.a.createElement("div",{className:"sidebar-style"},n.a.createElement("div",{className:"sidebar-widget"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Search "),n.a.createElement("div",{className:"pro-sidebar-search mb-55 mt-25"},n.a.createElement("form",{className:"pro-sidebar-search-form",action:"#"},n.a.createElement("input",{type:"text",placeholder:"Search here..."}),n.a.createElement("button",null,n.a.createElement("i",{className:"pe-7s-search"}))))),n.a.createElement("div",{className:"sidebar-widget"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Recent Projects "),n.a.createElement("div",{className:"sidebar-project-wrap mt-30"},n.a.createElement("div",{className:"single-sidebar-blog"},n.a.createElement("div",{className:"sidebar-blog-img"},n.a.createElement(r.b,{to:"/blog-details-standard"},n.a.createElement("img",{src:"/assets/img/blog/sidebar-1.jpg",alt:""}))),n.a.createElement("div",{className:"sidebar-blog-content"},n.a.createElement("span",null,"Photography"),n.a.createElement("h4",null,n.a.createElement(r.b,{to:"/blog-details-standard"},"T- Shart And Jeans")))),n.a.createElement("div",{className:"single-sidebar-blog"},n.a.createElement("div",{className:"sidebar-blog-img"},n.a.createElement(r.b,{to:"/blog-details-standard"},n.a.createElement("img",{src:"/assets/img/blog/sidebar-2.jpg",alt:""}))),n.a.createElement("div",{className:"sidebar-blog-content"},n.a.createElement("span",null,"Branding"),n.a.createElement("h4",null,n.a.createElement(r.b,{to:"/blog-details-standard"},"T- Shart And Jeans")))),n.a.createElement("div",{className:"single-sidebar-blog"},n.a.createElement("div",{className:"sidebar-blog-img"},n.a.createElement(r.b,{to:"/blog-details-standard"},n.a.createElement("img",{src:"/assets/img/blog/sidebar-3.jpg",alt:""}))),n.a.createElement("div",{className:"sidebar-blog-content"},n.a.createElement("span",null,"Design"),n.a.createElement("h4",null,n.a.createElement(r.b,{to:"/blog-details-standard"},"T- Shart And Jeans")))),n.a.createElement("div",{className:"single-sidebar-blog"},n.a.createElement("div",{className:"sidebar-blog-img"},n.a.createElement(r.b,{to:"/blog-details-standard"},n.a.createElement("img",{src:"/assets/img/blog/sidebar-2.jpg",alt:""}))),n.a.createElement("div",{className:"sidebar-blog-content"},n.a.createElement("span",null,"Photography"),n.a.createElement("h4",null,n.a.createElement(r.b,{to:"/blog-details-standard"},"T- Shart And Jeans")))))),n.a.createElement("div",{className:"sidebar-widget mt-35"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Categories"),n.a.createElement("div",{className:"sidebar-widget-list sidebar-widget-list--blog mt-20"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("input",{type:"checkbox",defaultValue:!0})," ",n.a.createElement(r.b,{to:"/blog-standard"},"Women ",n.a.createElement("span",null,"4")," "),n.a.createElement("span",{className:"checkmark"}))),n.a.createElement("li",null,n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("input",{type:"checkbox",defaultValue:!0})," ",n.a.createElement(r.b,{to:"/blog-standard"},"Men ",n.a.createElement("span",null,"4")," "),n.a.createElement("span",{className:"checkmark"}))),n.a.createElement("li",null,n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("input",{type:"checkbox",defaultValue:!0})," ",n.a.createElement(r.b,{to:"/blog-standard"},"Bags ",n.a.createElement("span",null,"4")," "),n.a.createElement("span",{className:"checkmark"}))),n.a.createElement("li",null,n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("input",{type:"checkbox",defaultValue:!0})," ",n.a.createElement(r.b,{to:"/blog-standard"},"Accessories ",n.a.createElement("span",null,"4")," "),n.a.createElement("span",{className:"checkmark"})))))),n.a.createElement("div",{className:"sidebar-widget mt-50"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Tag "),n.a.createElement("div",{className:"sidebar-widget-tag mt-25"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(r.b,{to:"/blog-standard"},"Clothing")),n.a.createElement("li",null,n.a.createElement(r.b,{to:"/blog-standard"},"Accessories")),n.a.createElement("li",null,n.a.createElement(r.b,{to:"/blog-standard"},"For Men")),n.a.createElement("li",null,n.a.createElement(r.b,{to:"/blog-standard"},"Women")),n.a.createElement("li",null,n.a.createElement(r.b,{to:"/blog-standard"},"Fashion"))))))}},676:function(e,t,a){"use strict";var l=a(0),n=a.n(l);t.a=function(){return n.a.createElement("div",{className:"pro-pagination-style text-center mt-20"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("button",{className:"prev"},n.a.createElement("i",{className:"fa fa-angle-double-left"}))),n.a.createElement("li",null,n.a.createElement("button",{className:"active"},"1")),n.a.createElement("li",null,n.a.createElement("button",null,"2")),n.a.createElement("li",null,n.a.createElement("button",{className:"next"},n.a.createElement("i",{className:"fa fa-angle-double-right"})))))}},691:function(e,t,a){"use strict";var l=a(0),n=a.n(l),r=a(7);t.a=function(){return n.a.createElement(l.Fragment,null,n.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12"},n.a.createElement("div",{className:"blog-wrap-2 mb-30"},n.a.createElement("div",{className:"blog-img-2"},n.a.createElement(r.b,{to:"/blog-details-standard"},n.a.createElement("img",{src:"/assets/img/blog/blog-9.jpg",alt:""}))),n.a.createElement("div",{className:"blog-content-2"},n.a.createElement("div",{className:"blog-meta-2"},n.a.createElement("ul",null,n.a.createElement("li",null,"22 April, 2020"),n.a.createElement("li",null,n.a.createElement(r.b,{to:"/blog-details-standard"},"4 ",n.a.createElement("i",{className:"fa fa-comments-o"}))))),n.a.createElement("h4",null,n.a.createElement(r.b,{to:"/blog-details-standard"},"Lorem ipsum blog post")),n.a.createElement("p",null,"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus"),n.a.createElement("div",{className:"blog-share-comment"},n.a.createElement("div",{className:"blog-btn-2"},n.a.createElement(r.b,{to:"/blog-details-standard"},"read more")),n.a.createElement("div",{className:"blog-share"},n.a.createElement("span",null,"share :"),n.a.createElement("div",{className:"share-social"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{className:"facebook",href:"//facebook.com"},n.a.createElement("i",{className:"fa fa-facebook"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"twitter",href:"//twitter.com"},n.a.createElement("i",{className:"fa fa-twitter"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"instagram",href:"//instagram.com"},n.a.createElement("i",{className:"fa fa-instagram"})))))))))),n.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12"},n.a.createElement("div",{className:"blog-wrap-2 mb-30"},n.a.createElement("div",{className:"blog-img-2"},n.a.createElement(r.b,{to:"/blog-details-standard"},n.a.createElement("img",{src:"/assets/img/blog/blog-8.jpg",alt:""}))),n.a.createElement("div",{className:"blog-content-2"},n.a.createElement("div",{className:"blog-meta-2"},n.a.createElement("ul",null,n.a.createElement("li",null,"22 April, 2020"),n.a.createElement("li",null,n.a.createElement(r.b,{to:"/blog-details-standard"},"4 ",n.a.createElement("i",{className:"fa fa-comments-o"}))))),n.a.createElement("h4",null,n.a.createElement(r.b,{to:"/blog-details-standard"},"New collection of our shop")),n.a.createElement("p",null,"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus"),n.a.createElement("div",{className:"blog-share-comment"},n.a.createElement("div",{className:"blog-btn-2"},n.a.createElement(r.b,{to:"/blog-details-standard"},"read more")),n.a.createElement("div",{className:"blog-share"},n.a.createElement("span",null,"share :"),n.a.createElement("div",{className:"share-social"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{className:"facebook",href:"//facebook.com"},n.a.createElement("i",{className:"fa fa-facebook"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"twitter",href:"//twitter.com"},n.a.createElement("i",{className:"fa fa-twitter"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"instagram",href:"//instagram.com"},n.a.createElement("i",{className:"fa fa-instagram"})))))))))),n.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12"},n.a.createElement("div",{className:"blog-wrap-2 mb-30"},n.a.createElement("div",{className:"blog-img-2"},n.a.createElement(r.b,{to:"/blog-details-standard"},n.a.createElement("img",{src:"/assets/img/blog/blog-7.jpg",alt:""}))),n.a.createElement("div",{className:"blog-content-2"},n.a.createElement("div",{className:"blog-meta-2"},n.a.createElement("ul",null,n.a.createElement("li",null,"22 April, 2020"),n.a.createElement("li",null,n.a.createElement(r.b,{to:"/blog-details-standard"},"4 ",n.a.createElement("i",{className:"fa fa-comments-o"}))))),n.a.createElement("h4",null,n.a.createElement(r.b,{to:"/blog-details-standard"},"Ipsum blog post two")),n.a.createElement("p",null,"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus"),n.a.createElement("div",{className:"blog-share-comment"},n.a.createElement("div",{className:"blog-btn-2"},n.a.createElement(r.b,{to:"/blog-details-standard"},"read more")),n.a.createElement("div",{className:"blog-share"},n.a.createElement("span",null,"share :"),n.a.createElement("div",{className:"share-social"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{className:"facebook",href:"//facebook.com"},n.a.createElement("i",{className:"fa fa-facebook"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"twitter",href:"//twitter.com"},n.a.createElement("i",{className:"fa fa-twitter"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"instagram",href:"//instagram.com"},n.a.createElement("i",{className:"fa fa-instagram"})))))))))),n.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12"},n.a.createElement("div",{className:"blog-wrap-2 mb-30"},n.a.createElement("div",{className:"blog-img-2"},n.a.createElement(r.b,{to:"/blog-details-standard"},n.a.createElement("img",{src:"/assets/img/blog/blog-6.jpg",alt:""}))),n.a.createElement("div",{className:"blog-content-2"},n.a.createElement("div",{className:"blog-meta-2"},n.a.createElement("ul",null,n.a.createElement("li",null,"22 April, 2020"),n.a.createElement("li",null,n.a.createElement(r.b,{to:"/blog-details-standard"},"4 ",n.a.createElement("i",{className:"fa fa-comments-o"}))))),n.a.createElement("h4",null,n.a.createElement(r.b,{to:"/blog-details-standard"},"New shop collection")),n.a.createElement("p",null,"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus"),n.a.createElement("div",{className:"blog-share-comment"},n.a.createElement("div",{className:"blog-btn-2"},n.a.createElement(r.b,{to:"/blog-details-standard"},"read more")),n.a.createElement("div",{className:"blog-share"},n.a.createElement("span",null,"share :"),n.a.createElement("div",{className:"share-social"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{className:"facebook",href:"//facebook.com"},n.a.createElement("i",{className:"fa fa-facebook"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"twitter",href:"//twitter.com"},n.a.createElement("i",{className:"fa fa-twitter"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"instagram",href:"//instagram.com"},n.a.createElement("i",{className:"fa fa-instagram"})))))))))),n.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12"},n.a.createElement("div",{className:"blog-wrap-2 mb-30"},n.a.createElement("div",{className:"blog-img-2"},n.a.createElement(r.b,{to:"/blog-details-standard"},n.a.createElement("img",{src:"/assets/img/blog/blog-5.jpg",alt:""}))),n.a.createElement("div",{className:"blog-content-2"},n.a.createElement("div",{className:"blog-meta-2"},n.a.createElement("ul",null,n.a.createElement("li",null,"22 April, 2020"),n.a.createElement("li",null,n.a.createElement(r.b,{to:"/blog-details-standard"},"4 ",n.a.createElement("i",{className:"fa fa-comments-o"}))))),n.a.createElement("h4",null,n.a.createElement(r.b,{to:"/blog-details-standard"},"Lorem blog post four")),n.a.createElement("p",null,"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus"),n.a.createElement("div",{className:"blog-share-comment"},n.a.createElement("div",{className:"blog-btn-2"},n.a.createElement(r.b,{to:"/blog-details-standard"},"read more")),n.a.createElement("div",{className:"blog-share"},n.a.createElement("span",null,"share :"),n.a.createElement("div",{className:"share-social"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{className:"facebook",href:"//facebook.com"},n.a.createElement("i",{className:"fa fa-facebook"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"twitter",href:"//twitter.com"},n.a.createElement("i",{className:"fa fa-twitter"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"instagram",href:"//instagram.com"},n.a.createElement("i",{className:"fa fa-instagram"})))))))))),n.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12"},n.a.createElement("div",{className:"blog-wrap-2 mb-30"},n.a.createElement("div",{className:"blog-img-2"},n.a.createElement(r.b,{to:"/blog-details-standard"},n.a.createElement("img",{src:"/assets/img/blog/blog-4.jpg",alt:""}))),n.a.createElement("div",{className:"blog-content-2"},n.a.createElement("div",{className:"blog-meta-2"},n.a.createElement("ul",null,n.a.createElement("li",null,"22 April, 2020"),n.a.createElement("li",null,n.a.createElement(r.b,{to:"/blog-details-standard"},"4 ",n.a.createElement("i",{className:"fa fa-comments-o"}))))),n.a.createElement("h4",null,n.a.createElement(r.b,{to:"/blog-details-standard"},"Ipsum blog post five")),n.a.createElement("p",null,"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus"),n.a.createElement("div",{className:"blog-share-comment"},n.a.createElement("div",{className:"blog-btn-2"},n.a.createElement(r.b,{to:"/blog-details-standard"},"read more")),n.a.createElement("div",{className:"blog-share"},n.a.createElement("span",null,"share :"),n.a.createElement("div",{className:"share-social"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{className:"facebook",href:"//facebook.com"},n.a.createElement("i",{className:"fa fa-facebook"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"twitter",href:"//twitter.com"},n.a.createElement("i",{className:"fa fa-twitter"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"instagram",href:"//instagram.com"},n.a.createElement("i",{className:"fa fa-instagram"})))))))))))}}}]);
//# sourceMappingURL=7.b8859e21.chunk.js.map