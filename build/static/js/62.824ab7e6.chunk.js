(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[62],{791:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var n=a(162),o=a(523),l=a(525),r=a(539),c=a(540),s=a(0),i=a.n(s),m=a(527),u=a.n(m),p=a(161),b=a.n(p),g=a(522),d=a(646),f=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(o.a)(this,a),(l=t.call(this,e)).otpHandler=function(e){e.preventDefault(),console.log(l.state),b.a.post("http://35.154.86.59/api/user/verifyotp",{mobile:l.state.mobile,otp:l.state.otpnumber}).then((function(e){console.log(e),console.log(e.data.token),localStorage.setItem("auth-token",e.data.token),window.location.href="./newPassword"})).catch((function(e){console.log(e.response)}))},l.handlechange=function(e){e.preventDefault(),l.setState(Object(n.a)({},e.target.name,e.target.value))},l.changeHandler=function(e){e.preventDefault(),l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault(),l.setState({otp:!1}),b.a.post("http://35.154.86.59/api/user/sendotp",{mobile:l.state.mobile}).then((function(e){console.log(e)})).catch((function(e){console.log(e.response)}))},l.state={mobile:"",otp:!0,otpnumber:"",token:""},l}return Object(l.a)(a,[{key:"render",value:function(){return console.log(this.state.otp),i.a.createElement(s.Fragment,null,i.a.createElement(u.a,null,i.a.createElement("title",null,"Buynaa | Login"),i.a.createElement("meta",{name:"description",content:"Compare page of flone react minimalist eCommerce template."})),i.a.createElement(g.a,{headerTop:"visible"},i.a.createElement("div",{className:"login-register-area pt-100 pb-100"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row d-flex align-items-center justify-content-center"},i.a.createElement("div",{className:"col-lg-7 col-md-12 p-4 ml-auto mr-auto"},this.state.otp?i.a.createElement("div",{className:"login-register-wrapper"},i.a.createElement("div",{className:"login-form-container"},i.a.createElement("div",{className:"login-register-form"},i.a.createElement("form",{className:"text-center",onSubmit:this.submitHandler,method:"post"},i.a.createElement("input",{type:"number",name:"mobile",placeholder:"Enter Your Mobile No.",value:this.state.mobile,onChange:this.changeHandler}),i.a.createElement("div",{className:"button-box"},i.a.createElement("button",{type:"submit"},i.a.createElement("span",null,"Submit"))))))):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"login-form-container"},i.a.createElement("div",{className:"login-register-form"},i.a.createElement("form",{onSubmit:this.otpHandler},i.a.createElement("input",{type:"number",name:"otpnumber",placeholder:"OTP No",value:this.state.otpnumber,onChange:this.handlechange}),i.a.createElement("div",{className:"button-box"},i.a.createElement("div",{className:"login-toggle-btn"}),i.a.createElement(d.a,{type:"submit"},i.a.createElement("span",null,"Verify")))))))))))))}}]),a}(s.Component)}}]);
//# sourceMappingURL=62.824ab7e6.chunk.js.map