(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[46],{553:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(7),u=n(178);t.a=function(){return r.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"breadcrumb-content text-center"},r.a.createElement(u.Breadcrumbs,{separator:r.a.createElement("span",null,"/"),item:o.c,finalItem:"span"}))))}},686:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==b(e)&&"function"!==typeof e)return{default:e};var n=o(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=r?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(a,u,l):a[u]=e[u]}a.default=e,n&&n.set(e,a);return a}(n(0)),r=["placeholder","separator","isLastChild","inputStyle","focus","isDisabled","hasErrored","errorStyle","focusStyle","disabledStyle","shouldAutoFocus","isInputNum","index","value","className","isInputSecure"];function o(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=y(e);if(t){var r=y(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==b(t)&&"function"!==typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){return(b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var g=function(e){return"object"===b(e)},O=function(e){p(n,e);var t=d(n);function n(e){var r;return c(this,n),v(m(r=t.call(this,e)),"getClasses",(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return!g(e)&&!1!==e})).join(" ")})),v(m(r),"getType",(function(){var e=r.props,t=e.isInputSecure,n=e.isInputNum;return t?"password":n?"tel":"text"})),r.input=a.default.createRef(),r}return s(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.focus,n=e.shouldAutoFocus,a=this.input.current;a&&t&&n&&a.focus()}},{key:"componentDidUpdate",value:function(e){var t=this.props.focus,n=this.input.current;e.focus!==t&&n&&t&&(n.focus(),n.select())}},{key:"render",value:function(){var e=this.props,t=e.placeholder,n=e.separator,o=e.isLastChild,c=e.inputStyle,i=e.focus,s=e.isDisabled,p=e.hasErrored,f=e.errorStyle,d=e.focusStyle,h=e.disabledStyle,m=(e.shouldAutoFocus,e.isInputNum),y=e.index,v=e.value,b=e.className,O=(e.isInputSecure,l(e,r));return a.default.createElement("div",{className:b,style:{display:"flex",alignItems:"center"}},a.default.createElement("input",u({"aria-label":"".concat(0===y?"Please enter verification code. ":"").concat(m?"Digit":"Character"," ").concat(y+1),autoComplete:"off",style:Object.assign({width:"1em",textAlign:"center"},g(c)&&c,i&&g(d)&&d,s&&g(h)&&h,p&&g(f)&&f),placeholder:t,className:this.getClasses(c,i&&d,s&&h,p&&f),type:this.getType(),maxLength:"1",ref:this.input,disabled:s,value:v||""},O)),!o&&n)}}]),n}(a.PureComponent),I=function(e){p(n,e);var t=d(n);function n(){var e;c(this,n);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return v(m(e=t.call.apply(t,[this].concat(o))),"state",{activeInput:0}),v(m(e),"getOtpValue",(function(){return e.props.value?e.props.value.toString().split(""):[]})),v(m(e),"getPlaceholderValue",(function(){var t=e.props,n=t.placeholder,a=t.numInputs;if("string"===typeof n){if(n.length===a)return n;n.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}})),v(m(e),"handleOtpChange",(function(t){(0,e.props.onChange)(t.join(""))})),v(m(e),"isInputValueValid",(function(t){return(e.props.isInputNum?!isNaN(parseInt(t,10)):"string"===typeof t)&&1===t.trim().length})),v(m(e),"focusInput",(function(t){var n=e.props.numInputs,a=Math.max(Math.min(n-1,t),0);e.setState({activeInput:a})})),v(m(e),"focusNextInput",(function(){var t=e.state.activeInput;e.focusInput(t+1)})),v(m(e),"focusPrevInput",(function(){var t=e.state.activeInput;e.focusInput(t-1)})),v(m(e),"changeCodeAtFocus",(function(t){var n=e.state.activeInput,a=e.getOtpValue();a[n]=t[0],e.handleOtpChange(a)})),v(m(e),"handleOnPaste",(function(t){t.preventDefault();var n=e.state.activeInput,a=e.props,r=a.numInputs;if(!a.isDisabled){for(var o=e.getOtpValue(),u=n,l=t.clipboardData.getData("text/plain").slice(0,r-n).split(""),c=0;c<r;++c)c>=n&&l.length>0&&(o[c]=l.shift(),u++);e.setState({activeInput:u},(function(){e.focusInput(u),e.handleOtpChange(o)}))}})),v(m(e),"handleOnChange",(function(t){var n=t.target.value;e.isInputValueValid(n)&&e.changeCodeAtFocus(n)})),v(m(e),"handleOnKeyDown",(function(t){8===t.keyCode||"Backspace"===t.key?(t.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput()):46===t.keyCode||"Delete"===t.key?(t.preventDefault(),e.changeCodeAtFocus("")):37===t.keyCode||"ArrowLeft"===t.key?(t.preventDefault(),e.focusPrevInput()):39===t.keyCode||"ArrowRight"===t.key?(t.preventDefault(),e.focusNextInput()):32!==t.keyCode&&" "!==t.key&&"Spacebar"!==t.key&&"Space"!==t.key||t.preventDefault()})),v(m(e),"handleOnInput",(function(t){if(e.isInputValueValid(t.target.value))e.focusNextInput();else if(!e.props.isInputNum){var n=t.nativeEvent;null===n.data&&"deleteContentBackward"===n.inputType&&(t.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput())}})),v(m(e),"renderInputs",(function(){for(var t=e.state.activeInput,n=e.props,r=n.numInputs,o=n.inputStyle,u=n.focusStyle,l=n.separator,c=n.isDisabled,i=n.disabledStyle,s=n.hasErrored,p=n.errorStyle,f=n.shouldAutoFocus,d=n.isInputNum,h=n.isInputSecure,m=n.className,y=[],v=e.getOtpValue(),b=e.getPlaceholderValue(),g=e.props["data-cy"],I=e.props["data-testid"],S=function(n){y.push(a.default.createElement(O,{placeholder:b&&b[n],key:n,index:n,focus:t===n,value:v&&v[n],onChange:e.handleOnChange,onKeyDown:e.handleOnKeyDown,onInput:e.handleOnInput,onPaste:e.handleOnPaste,onFocus:function(t){e.setState({activeInput:n}),t.target.select()},onBlur:function(){return e.setState({activeInput:-1})},separator:l,inputStyle:o,focusStyle:u,isLastChild:n===r-1,isDisabled:c,disabledStyle:i,hasErrored:s,errorStyle:p,shouldAutoFocus:f,isInputNum:d,isInputSecure:h,className:m,"data-cy":g&&"".concat(g,"-").concat(n),"data-testid":I&&"".concat(I,"-").concat(n)}))},E=0;E<r;E++)S(E);return y})),e}return s(n,[{key:"render",value:function(){var e=this.props.containerStyle;return a.default.createElement("div",{style:Object.assign({display:"flex"},g(e)&&e),className:g(e)?"":e},this.renderInputs())}}]),n}(a.Component);v(I,"defaultProps",{numInputs:4,onChange:function(e){return console.log(e)},isDisabled:!1,shouldAutoFocus:!1,value:"",isInputSecure:!1});var S=I;t.default=S},694:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var a=n(180),r=n(181),o=n(182),u=n(191),l=n(183),c=n(184),i=n(0),s=n.n(i),p=n(555),f=n.n(p),d=n(686),h=n.n(d),m=n(58),y=n.n(m),v=n(583),b=n(179),g=n(553),O=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={otp:""},e.resenddd=function(){e.setState({otp:""}),e.interval(),e.sendOtp()},e.state={customer_email:"",mobile:"12345678",otp:"1234",msg:"",input:{},errors:{}},e.handleChange=function(t){return e.setState({otp:t})},e.handleSubmit=e.handleSubmit.bind(Object(u.a)(e)),e}return Object(o.a)(n,[{key:"interval",value:function(){this.setState({seconds:26})}},{key:"handleChange",value:function(e){this.setState(Object(a.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),y.a.post("http://35.154.86.59/api/user/verifyotp",this.state).then((function(e){console.log(e),alert("anjali")})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return s.a.createElement(i.Fragment,null,s.a.createElement(f.a,null,s.a.createElement("title",null,"Buynaa | Login"),s.a.createElement("meta",{name:"description",content:"Compare page of flone react minimalist eCommerce template."})),s.a.createElement(b.a,{headerTop:"visible"},s.a.createElement(g.a,null),s.a.createElement("div",{className:"login-register-area pt-100 pb-100"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-7 col-md-12 ml-auto mr-auto"},s.a.createElement("div",{className:"login-register-wrapper"},s.a.createElement(v.a.Container,{defaultActiveKey:"login"},s.a.createElement(v.a.Content,null,s.a.createElement(v.a.Pane,{eventKey:"login"},s.a.createElement("div",{className:"login-form-container"},s.a.createElement("div",{className:"login-register-form"},s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",null,s.a.createElement(h.a,{value:this.state.otp,onChange:this.handleChange,numInputs:4,type:"number",name:"otp",separator:s.a.createElement("span",null)}),this.state.OTPError?this.state.OTPError:null),s.a.createElement("div",{className:"button-box"},s.a.createElement("button",{type:"back"},"Back"),s.a.createElement("button",{type:"submit"},"SendOTP")))))))))))))))}}]),n}(s.a.Component)}}]);
//# sourceMappingURL=46.2a419c96.chunk.js.map