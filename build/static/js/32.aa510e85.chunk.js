(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[32,46],{512:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var u=o.apply(null,r);u&&e.push(u)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},523:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},525:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))},527:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return i.default}}),t.default=void 0;var r=u(n(550)),o=u(n(530)),i=u(n(552));function u(e){return e&&e.__esModule?e:{default:e}}var c=o.default;t.default=c},530:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),o=c(n(21)),i=c(n(39)),u=n(551);function c(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y,b,h,v=function(e){function t(){return l(this,t),p(this,s(t).apply(this,arguments))}var n,o,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&i.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var n=r.default.createElement("div",{className:"react-head-temp"},t);i.default.render(n,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var n=e.temporaryElement.querySelector(".react-head-temp");if(null!==n){var r=Array.prototype.slice.call(n.children),o=document.head,i=o.innerHTML;(r=(r=r.filter((function(e){return-1===i.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var n=(0,u.getDuplicateTitle)();n&&(0,u.removeChild)(o,n)}else if("meta"===t){var r=(0,u.getDuplicateMeta)(e);r&&(0,u.removeChild)(o,r)}else if("link"===t&&"canonical"===e.rel){var i=(0,u.getDuplicateCanonical)(e);i&&(0,u.removeChild)(o,i)}})),(0,u.appendChild)(document.head,r)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&f(n.prototype,o),c&&f(n,c),t}(r.Component);y=v,b="contextTypes",h={extract:o.default.func},b in y?Object.defineProperty(y,b,{value:h,enumerable:!0,configurable:!0,writable:!0}):y[b]=h;var m=v;t.default=m,e.exports=t.default},537:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},538:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return f})),n.d(t,"a",(function(){return p}));var r,o=n(21),i=n.n(o);function u(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}var c={};function a(e){c[e]||("undefined"!==typeof console&&console.error(e),c[e]=!0)}var l="object"===typeof window&&window.Element||function(){};i.a.oneOfType([i.a.string,i.a.func,function(e,t,n){if(!(e[t]instanceof l))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},i.a.shape({current:i.a.any})]);var f=i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func}),i.a.arrayOf(i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func})]))]);"undefined"===typeof window||!window.document||window.document.createElement;function p(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}},539:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return o}))},540:function(e,t,n){"use strict";var r=n(537);function o(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var i=n(583);function u(e){return function(){var t,n=Object(r.a)(e);if(o()){var u=Object(r.a)(this).constructor;t=Reflect.construct(n,arguments,u)}else t=n.apply(this,arguments);return Object(i.a)(this,t)}}n.d(t,"a",(function(){return u}))},550:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=n(0),i=(r=n(21))&&r.__esModule?r:{default:r};function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){function t(){return c(this,t),l(this,f(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(r=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return o.Children.only(this.props.children)}}])&&a(n.prototype,r),i&&a(n,i),t}(o.Component);!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(s,"childContextTypes",{extract:i.default.func});var d=s;t.default=d,e.exports=t.default},551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,n=null,r=[],u=[];return e.forEach((function(e){var o=e.type,i=e.props;"title"===o?t=e:"link"===o&&"canonical"===i.rel?n=e:"meta"===o?r.push(e):u.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};i.forEach((function(e){t[e]=[]}));for(var n=[],r=function(r){var u=e[r],c=u.props.id;(c?!t.id[c]:0===o.filter((function(e){var n=u.props[e],r=t[e][n];return r&&!r.props.id})).length)&&(n.unshift(u),i.forEach((function(e){var n=u.props[e];n&&(t[e][n]=u)})))},u=e.length-1;u>=0;u--)r(u);return n}(r)),[n],u)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,n=e.id;if(n)return n&&t.querySelector("#".concat(n));return r.reduce((function(n,r){var o,i=e.getAttribute(r);return i?n.concat((o=t.querySelectorAll("[".concat(r,' = "').concat(i,'"]')),(o=Array.prototype.slice.call(o||[])).filter((function(e){return!e.id})))):n}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=document.createDocumentFragment(),r=0,o=t.length;r<o;r++)n.appendChild(t[r]);e.appendChild(n)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=0,r=t.length;n<r;n++)e.removeChild(t[n])};var r=["property","name","itemprop"],o=r.concat(["itemProp"]),i=o.concat(["id"])},552:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),o=u(n(21)),i=u(n(530));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,y,b,h=function(e){function t(){return a(this,t),f(this,p(t).apply(this,arguments))}var n,o,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){return r.default.createElement(i.default,null,r.default.createElement("title",null,this.props.title))}}])&&l(n.prototype,o),u&&l(n,u),t}(r.Component);d=h,y="propTypes",b={title:o.default.string},y in d?Object.defineProperty(d,y,{value:b,enumerable:!0,configurable:!0,writable:!0}):d[y]=b;var v=h;t.default=v,e.exports=t.default},577:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},583:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=n(577);function i(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(o.a)(e):t}n.d(t,"a",(function(){return i}))},646:function(e,t,n){"use strict";var r=n(6),o=n(19),i=n(168),u=n(13),c=n(0),a=n.n(c),l=n(21),f=n.n(l),p=n(512),s=n.n(p),d=n(538),y=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],b={active:f.a.bool,"aria-label":f.a.string,block:f.a.bool,color:f.a.string,disabled:f.a.bool,outline:f.a.bool,tag:d.c,innerRef:f.a.oneOfType([f.a.object,f.a.func,f.a.string]),onClick:f.a.func,size:f.a.string,children:f.a.node,className:f.a.string,cssModule:f.a.object,close:f.a.bool},h=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(i.a)(n)),n}Object(u.a)(t,e);var n=t.prototype;return n.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},n.render=function(){var e=this.props,t=e.active,n=e["aria-label"],i=e.block,u=e.className,c=e.close,l=e.cssModule,f=e.color,p=e.outline,b=e.size,h=e.tag,v=e.innerRef,m=Object(o.a)(e,y);c&&"undefined"===typeof m.children&&(m.children=a.a.createElement("span",{"aria-hidden":!0},"\xd7"));var O="btn"+(p?"-outline":"")+"-"+f,g=Object(d.b)(s()(u,{close:c},c||"btn",c||O,!!b&&"btn-"+b,!!i&&"btn-block",{active:t,disabled:this.props.disabled}),l);m.href&&"button"===h&&(h="a");var j=c?"Close":null;return a.a.createElement(h,Object(r.a)({type:"button"===h&&m.onClick?"button":void 0},m,{className:g,ref:v,onClick:this.onClick,"aria-label":n||j}))},t}(a.a.Component);h.propTypes=b,h.defaultProps={color:"secondary",tag:"button"},t.a=h}}]);
//# sourceMappingURL=32.aa510e85.chunk.js.map