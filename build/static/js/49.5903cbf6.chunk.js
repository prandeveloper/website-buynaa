(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[49],{553:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(7),r=a(179);t.a=function(){return c.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"breadcrumb-content text-center"},c.a.createElement(r.Breadcrumbs,{separator:c.a.createElement("span",null,"/"),item:l.c,finalItem:"span"}))))}},796:function(e,t,a){"use strict";a.r(t);var n=a(49),c=a.n(n),l=a(78),r=a(40),o=a(0),s=a.n(o),i=a(749),u=a.n(i),m=a(22),d=a(7),p=a(104),v=a(556),E=a.n(v),h=a(179),g=a(44),b=a(686),f=a(703),N=a(548),y=a(178),O=a(69),j=a(180),k=a(553),w=a(59),_=a.n(w);t.default=Object(g.connect)((function(e){return{cartItems:e.cartData,currency:e.currencyData}}),(function(e){return{addToCart:function(t,a,n){e(Object(O.e)(t,a,n))},decreaseQuantity:function(t,a){e(Object(O.f)(t,a))},deleteFromCart:function(t,a){e(Object(O.h)(t,a))},deleteAllFromCart:function(t){e(Object(O.g)(t))}}}))((function(e){e.props;var t,a,n=e.location,i=(e.cartItems,e.currency),v=(e.decreaseQuantity,e.addToCart,e.deleteFromCart,e.deleteAllFromCart,Object(o.useState)(1)),g=(Object(r.a)(v,1)[0],Object(p.useToasts)().addToast,Object(m.g)()),O=n.pathname,w=0,C=0,S=Object(o.useState)([]),x=Object(r.a)(S,2),I=x[0],T=x[1],F=Object(o.useState)([]),q=Object(r.a)(F,2),z=q[0],R=q[1],P=Object(o.useState)(0),A=Object(r.a)(P,2),B=A[0],D=A[1],G=Object(o.useState)({}),Q=Object(r.a)(G,2),J=(Q[0],Q[1]),U=Object(o.useState)([]),X=Object(r.a)(U,2),Y=X[0],H=X[1],K=Object(o.useState)([]),L=Object(r.a)(K,2),M=L[0],V=L[1],W=Object(o.useState)([]),Z=Object(r.a)(W,2),$=Z[0],ee=(Z[1],Object(o.useState)([])),te=Object(r.a)(ee,2),ae=te[0],ne=te[1],ce=function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n,l,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("http://35.154.86.59/api/admin/cartbycustomer",{headers:{"auth-token":localStorage.getItem("auth-token")}});case 2:for(t=e.sent,a=t.data,n=a.data,console.log(n),l=[],r=0;r<n.length;r++)l.push(n[r]._id);H(n),console.log(n),V(l),console.log(l);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),le=function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("http://35.154.86.59/api/user/viewoneuseraddress",{headers:{"auth-token":localStorage.getItem("auth-token")}});case 2:t=e.sent,a=t.data,n=a.data,console.log(n),ne(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(l.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,_.a.get("http://35.154.86.59/api/admin/remove_cart/".concat(t),{headers:{"auth-token":localStorage.getItem("auth-token")}});case 4:(a=e.sent)&&(console.log(a),ce()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("request remove all"),e.prev=1,e.next=4,_.a.get("http://35.154.86.59/api/admin/clearCart",{headers:{"auth-token":localStorage.getItem("auth-token")}});case 4:(t=e.sent)&&(window.location.reload(),console.log(t),ce()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),se=Object(o.useState)("rzp_live_dX052iXb0Is1yu"),ie=Object(r.a)(se,2),ue=ie[0],me=(ie[1],u()()),de=Object(o.useState)(""),pe=Object(r.a)(de,2),ve=(pe[0],pe[1]),Ee=Object(o.useState)(""),he=Object(r.a)(Ee,2),ge=he[0],be=he[1];Object(o.useEffect)((function(){localStorage.getItem("auth-token")&&(ce(),le()),console.log("useEffect"),_.a.get("http://35.154.86.59/api/user/getonecustomer",{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(e){console.log(e.data.data),be(e.data.data)})).catch((function(e){console.log(e.response)})),_.a.get("http://35.154.86.59/api/admin/rapay/".concat(w)).then((function(e){var t;console.log(e.data),ve(null===(t=e.data)||void 0===t?void 0:t.order.id)})).catch((function(e){console.log(e.response)}))}),[]);var fe=Object(o.useCallback)(function(){var e=Object(l.a)(c.a.mark((function e(t,a,n,l,r,o){var s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Online"!=o){e.next=4;break}return s={cart:M,payment_type:o,status:"Pending",shipping_address:ae._id},console.log(s),e.abrupt("return");case 4:(i=new me({key:ue,amount:t,currency:"INR",name:"YOUR ORDER",description:a,handler:function(e){var t={cart:M,payment_type:o,status:"Pending",shipping_address:ae._id,razorpay_payment_id:e.razorpay_payment_id};console.log(e),_.a.post("http://35.154.86.59/api/admin/addordersample",t,{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(e){console.log(e),g.push("/cart")})).catch((function(e){console.log(e.response)}))},prefill:{name:n,email:l,contact:r},notes:{address:"BuyNaa Corporate Office"},theme:{color:"#3399cc"}})).on("payment.failure",(function(e){alert("Remains on same page")})),i.open();case 8:case"end":return e.stop()}}),e)})));return function(t,a,n,c,l,r){return e.apply(this,arguments)}}(),[me]);return s.a.createElement(o.Fragment,null,s.a.createElement(E.a,null,s.a.createElement("title",null,"Flone | Cart"),s.a.createElement("meta",{name:"description",content:"Cart page of flone react minimalist eCommerce template."})),s.a.createElement(h.BreadcrumbsItem,{to:"/"},"Home"),s.a.createElement(h.BreadcrumbsItem,{to:""+O},"Cart"),s.a.createElement(j.a,{headerTop:"visible"},s.a.createElement(k.a,null),s.a.createElement("div",{className:"cart-main-area pt-90 pb-100"},s.a.createElement("div",{className:"container"},Y&&Y.length>=1?s.a.createElement(o.Fragment,null,s.a.createElement("h3",{className:"cart-page-title"},"Your cart items"),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("div",{className:"table-content table-responsive cart-table-content"},s.a.createElement("table",null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Image"),s.a.createElement("th",null,"Product Name"),s.a.createElement("th",null,"Unit Price"),s.a.createElement("th",null,"Qty"),s.a.createElement("th",null,"GST"),s.a.createElement("th",null,"Coupon"),s.a.createElement("th",null,"Subtotal(Incl Tax)"),s.a.createElement("th",null,"action"))),s.a.createElement("tbody",null,null===Y||void 0===Y?void 0:Y.map((function(e,t){var a,n,c,l,r,o,u,m,p,v;w+=parseInt(e.gsttotal);var E=Object(y.a)(e.price,e.discount);(e.price*i.currencyRate).toFixed(2),(E*i.currencyRate).toFixed(2);return C+=null!=E?(null===(a=e.product)||void 0===a||null===(n=a.gstrate)||void 0===n?void 0:n.value)*e.product_qty:(null===(c=e.product)||void 0===c||null===(l=c.gstrate)||void 0===l?void 0:l.value)*e.product_qty,s.a.createElement("tr",{key:t},s.a.createElement("td",{className:"product-thumbnail"},s.a.createElement(d.b,{to:"/product-sticky/"+(null===(r=e.product)||void 0===r?void 0:r._id)},s.a.createElement("img",{className:"img-fluid",src:""+(null===(o=e.product)||void 0===o?void 0:o.product_img[0]),alt:""}))),s.a.createElement("td",{className:"product-name"},s.a.createElement(d.b,{to:"/product-sticky/"+(null===(u=e.product)||void 0===u?void 0:u._id)},null===(m=e.product)||void 0===m?void 0:m.product_name),e.size||e.color?s.a.createElement("div",{className:"cart-item-variation"},s.a.createElement("span",null,"Color: ",null===e||void 0===e?void 0:e.color),s.a.createElement("span",null,"Size: ",null===e||void 0===e?void 0:e.size)):""),s.a.createElement("td",{className:"product-price-cart"},s.a.createElement("span",{className:"amount"},null===e||void 0===e?void 0:e.product_price)),s.a.createElement("td",{className:"product-quantity"},s.a.createElement("div",{className:"cart-plus-minus"},s.a.createElement("span",null,e.product_qty))),s.a.createElement("td",{className:"product-quantity"},s.a.createElement("div",{className:"cart-plus-minus"},s.a.createElement("span",null,null===(p=e.product)||void 0===p||null===(v=p.gstrate)||void 0===v?void 0:v.value))),s.a.createElement("td",{className:"product-quantity"},s.a.createElement("div",{className:"cart-plus-minus"},s.a.createElement(b.a,null,s.a.createElement("span",null,s.a.createElement(f.a,{type:"text",value:I[t],placeholder:"Enter Code",onChange:function(e){var a=I;a[t]=e.target.value,T(a)}}),s.a.createElement(N.a,{color:"primary",className:"",onClick:function(){_.a.post("http://35.154.86.59/api/admin/verifyvalidategetdiscount/".concat(I[t]),{offer_code:I[t]}).then((function(e){var a=e.data,n=z;n[t]=a.discount_amount,R(n);for(var c=0,l=0;l<n.length;l++)n[l]&&(c+=n[l]);D(c),J(a),console.log(a)})).catch((function(e){console.log(e)}))}},"Apply"))))),s.a.createElement("td",{className:"product-subtotal"},(null===e||void 0===e?void 0:e.gsttotal)-z[t]),s.a.createElement("td",{className:"product-remove"},s.a.createElement("button",{onClick:function(){var t;return re(null===(t=e.product)||void 0===t?void 0:t._id)(window.location.reload())}},s.a.createElement("i",{className:"fa fa-times"}))))}))))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"cart-shiping-update-wrapper"},s.a.createElement("div",{className:"cart-shiping-update"},s.a.createElement(d.b,{to:"/shop-grid-two-column"},"Continue Shopping")),s.a.createElement("div",{className:"cart-clear"},s.a.createElement("button",{onClick:function(){return oe()(window.location.reload())}},"Clear Shopping Cart"))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-8 col-md-6"},s.a.createElement("div",{className:"cart-tax"},s.a.createElement("div",{className:"title-wrap"},s.a.createElement("h4",{className:"cart-bottom-title section-bg-gray"},"Shipping Address")),s.a.createElement("div",{className:"tax-wrapper"},s.a.createElement("div",{className:"tax-select-wrapper"},s.a.createElement("h4",null,s.a.createElement("span",{style:{textTransform:"capitalize mb-2"}},null===ae||void 0===ae||null===(t=ae.customer)||void 0===t?void 0:t.firstname," ",null===ae||void 0===ae||null===(a=ae.customer)||void 0===a?void 0:a.lastname,","),s.a.createElement("br",null),null===ae||void 0===ae?void 0:ae.address,",",null===ae||void 0===ae?void 0:ae.locality,",",null===ae||void 0===ae?void 0:ae.state,",",null===ae||void 0===ae?void 0:ae.pincode),s.a.createElement("button",{className:"cart-btn-2",type:"button",onClick:function(){return g.push("/my-account")}},"Change"))))),s.a.createElement("div",{className:"col-lg-4 col-md-12"},s.a.createElement("div",{className:"grand-totall"},s.a.createElement("div",{className:"title-wrap"},s.a.createElement("h4",{className:"cart-bottom-title section-bg-gary-cart"},"Cart Total")),s.a.createElement("div",null,s.a.createElement("h5",null,"Total products ",s.a.createElement("span",null,"\u20b9",$)),s.a.createElement("h4",{className:"grand-totall-title"},"Total GST",s.a.createElement("span",null,"\u20b9",C)),s.a.createElement("h4",{className:"grand-totall-title"},"Total Discount",s.a.createElement("span",null,"\u20b9",B)),s.a.createElement("h4",{className:"grand-totall-title"},"Grand Total"," ",s.a.createElement("span",null,"\u20b9",w-B))),s.a.createElement(d.b,{onClick:function(){return fe(100*parseInt(w-B),"checkout",ge.firstname+" "+ge.lastname,ge.email,ge.mobile,"Online")}},"Proceed to Checkout"))))):s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"item-empty-area text-center"},s.a.createElement("div",{className:"item-empty-area__icon mb-30"},s.a.createElement("i",{className:"pe-7s-cart"})),s.a.createElement("div",{className:"item-empty-area__text"},"No items found in cart ",s.a.createElement("br",null)," ",s.a.createElement(d.b,{to:"/shop-grid-two-column"},"Shop Now")))))))))}))}}]);
//# sourceMappingURL=49.5903cbf6.chunk.js.map