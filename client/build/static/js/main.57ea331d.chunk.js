(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{22:function(e,t,n){"use strict";t.a={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",CHECK_USER_SESSION:"CHECK_USER_SESSION",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE"}},33:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"e",(function(){return d})),n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return p})),n.d(t,"f",(function(){return f}));var r=n(0),c=n.n(r),a=n(16),i=n(2),o=n(63),u=(n(93),n(98),o.a.initializeApp({apiKey:"AIzaSyCRJyTtQWLJtliwks8xnRpGjCZ5K3AivRU",authDomain:"crown-db-62654.firebaseapp.com",projectId:"crown-db-62654",storageBucket:"crown-db-62654.appspot.com",messagingSenderId:"981561321482",appId:"1:981561321482:web:db7a7b6f7a9de1ad6d17f3",measurementId:"G-WM192G384F"})),s=function(){var e=Object(i.a)(c.a.mark((function e(t,n){var r,i,o,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=p.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return i=t.displayName,o=t.email,u=new Date,e.prev=9,e.next=12,r.set(Object(a.a)({displayName:i,email:o,createdAt:u},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),l=function(e){return e.docs.map((function(e){var t=e.data(),n=t.title,r=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:r}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})},d=function(){return new Promise((function(e,t){var n=b.onAuthStateChanged((function(t){n(),e(t)}),t)}))},b=o.a.auth(),p=u.firestore(),f=new o.a.auth.GoogleAuthProvider;f.setCustomParameters({prompt:"select_account"})},34:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"j",(function(){return b})),n.d(t,"k",(function(){return p})),n.d(t,"i",(function(){return f}));var r=n(22),c=function(){return{type:r.a.GOOGLE_SIGN_IN_START}},a=function(e){return{type:r.a.SIGN_IN_SUCCESS,payload:e}},i=function(e){return{type:r.a.SIGN_IN_FAILURE,payload:e}},o=function(e){return{type:r.a.EMAIL_SIGN_IN_START,payload:e}},u=function(){return{type:r.a.CHECK_USER_SESSION}},s=function(){return{type:r.a.SIGN_OUT_START}},l=function(){return{type:r.a.SIGN_OUT_SUCCESS}},d=function(e){return{type:r.a.SIGN_OUT_FAILURE,payload:e}},b=function(e){return{type:r.a.SIGN_UP_START,payload:e}},p=function(e){var t=e.user,n=e.additionalData;return{type:r.a.SIGN_UP_SUCCESS,payload:{user:t,additionalData:n}}},f=function(e){return{type:r.a.SIGN_UP_FAILURE,payload:e}}},37:function(e,t,n){"use strict";t.a={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",CLEAR_CART:"CLEAR_CART"}},42:function(e,t,n){"use strict";t.a={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"}},48:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return u}));var r=n(32),c=function(e){return e.cart},a=Object(r.a)([c],(function(e){return e.cartItems})),i=Object(r.a)([c],(function(e){return e.hidden})),o=Object(r.a)([a],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),u=Object(r.a)([a],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)}))},49:function(e,t,n){"use strict";n.d(t,"e",(function(){return c})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return u}));var r=n(37),c=function(){return{type:r.a.TOGGLE_CART_HIDDEN}},a=function(e){return{type:r.a.ADD_ITEM,payload:e}},i=function(e){return{type:r.a.REMOVE_ITEM,payload:e}},o=function(e){return{type:r.a.CLEAR_ITEM_FROM_CART,payload:e}},u=function(){return{type:r.a.CLEAR_CART}}},66:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(42),c=(n(33),function(){return{type:r.a.FETCH_COLLECTIONS_START}}),a=function(e){return{type:r.a.FETCH_COLLECTIONS_SUCCESS,payload:e}},i=function(e){return{type:r.a.FETCH_COLLECTIONS_FAILURE,payload:e}}},70:function(e,t,n){"use strict";var r,c,a,i,o=n(16),u=n(71),s=(n(5),n(20)),l=n(21),d=Object(l.a)(r||(r=Object(s.a)(["\n    background-color: black;\n    color: white;\n    border: none;\n    &:hover {\n        background-color: white;\n        color: black;\n        border: 1px solid black;\n    }\n"]))),b=Object(l.a)(c||(c=Object(s.a)(["\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n    &:hover {\n        background-color: black;\n        color: white;\n        border: none;\n    }\n"]))),p=Object(l.a)(a||(a=Object(s.a)(["\n    background-color: #4285f4;\n    color: white;\n    &:hover {\n        background-color: #357ae8;\n        border: none;\n    }\n"]))),f=l.b.button(i||(i=Object(s.a)(['\n    min-width: 115px;\n    width: auto;\n    height: 50px;\n    letter-spacing: 0.5px;\n    line-height: 50px;\n    padding: 0 15px 0 15px;\n    font-size: 15px;\n    background-color: black;\n    color: white;\n    text-transform: uppercase;\n    font-family: "Open Sans Condensed";\n    font-weight: bolder;\n    border: none;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    border-radius: 3px;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 8px,\n        rgba(0, 0, 0, 0.2) 0px 3px 8px inset;\n    ',"\n"])),(function(e){return e.isGoogleSignIn?p:e.inverted?b:d})),O=n(13),j=["children"];t.a=function(e){var t=e.children,n=Object(u.a)(e,j);return Object(O.jsx)(f,Object(o.a)(Object(o.a)({},n),{},{children:t}))}},72:function(e,t,n){"use strict";n(5);var r,c,a=n(20),i=n(21),o=i.b.div(r||(r=Object(a.a)(["\n    height: 60vh;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),u=i.b.div(c||(c=Object(a.a)(["\n    display: inline-block;\n    width: 50px;\n    height: 50px;\n    border: 3px solid rgba(195, 195, 195, 0.6);\n    border-radius: 50%;\n    border-top-color: #636767;\n    animation: spin 1s ease-in-out infinite;\n    -webkit-animation: spin 1s ease-in-out infinite;\n    @keyframes spin {\n        to {\n            -webkit-transform: rotate(360deg);\n        }\n    }\n    @-webkit-keyframes spin {\n        to {\n            -webkit-transform: rotate(360deg);\n        }\n    }\n"]))),s=n(13);t.a=function(){return Object(s.jsx)(o,{children:Object(s.jsx)(u,{})})}},85:function(e,t,n){},86:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var r,c,a,i,o,u,s=n(5),l=n.n(s),d=n(55),b=n.n(d),p=(n(85),n(86),n(25)),f=n(20),O=n(21),j=n(46),h=O.b.div(r||(r=Object(f.a)(["\n    height: 70px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    max-width: 1300px;\n    margin: auto;\n"]))),x=Object(O.b)(j.b)(c||(c=Object(f.a)(["\n    height: 100%;\n    width: 70px;\n    padding: 25px;\n"]))),m=O.b.div(a||(a=Object(f.a)(["\n    width: 40%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    margin-right: 10px;\n"]))),g=Object(O.b)(j.b)(i||(i=Object(f.a)(["\n    margin-top: 25px;\n    cursor: pointer;\n    min-width: 60px;\n    padding: 0px 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]))),S=["title","titleId"];function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function v(e,t){var n=e.title,r=e.titleId,c=_(e,S);return s.createElement("svg",E({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":r},c),void 0===n?s.createElement("title",{id:r},"Group"):n?s.createElement("title",{id:r},n):null,o||(o=s.createElement("desc",null,"Created with Sketch.")),u||(u=s.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},s.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},s.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},s.createElement("polygon",{id:"Rectangle",fill:"#ff0505",points:"5 14 25 28.5 39 39 9.08421785 39"}),s.createElement("polygon",{id:"Rectangle",fill:"gold",points:"45 14 39.955176 39 9.08421785 39"}),s.createElement("polygon",{id:"Triangle",fillOpacity:.3,fill:"blue",points:"25 8 40 39 9 39"}),s.createElement("circle",{id:"Oval",fill:"#ff0505",cx:2,cy:9,r:2}),s.createElement("circle",{id:"Oval",fill:"blue",cx:25,cy:2,r:2}),s.createElement("circle",{id:"Oval",fill:"gold ",cx:48,cy:9,r:2}))))))}var w,y,I,C,T,k,U,N,R,A,G,L,M,H,F,D=s.forwardRef(v),P=(n.p,n(40)),W=n(49),z=n(48),B=n(32),q=["title","titleId"];function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function Y(e,t){var n=e.title,r=e.titleId,c=K(e,q);return s.createElement("svg",V({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),n?s.createElement("title",{id:r},n):null,s.createElement("g",null,s.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),s.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),s.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),s.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),s.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),w||(w=s.createElement("g",null)),y||(y=s.createElement("g",null)),I||(I=s.createElement("g",null)),C||(C=s.createElement("g",null)),T||(T=s.createElement("g",null)),k||(k=s.createElement("g",null)),U||(U=s.createElement("g",null)),N||(N=s.createElement("g",null)),R||(R=s.createElement("g",null)),A||(A=s.createElement("g",null)),G||(G=s.createElement("g",null)),L||(L=s.createElement("g",null)),M||(M=s.createElement("g",null)),H||(H=s.createElement("g",null)),F||(F=s.createElement("g",null)))}var J,Z,X,$,Q,ee,te,ne,re,ce,ae,ie,oe,ue,se,le=s.forwardRef(Y),de=(n.p,O.b.div(J||(J=Object(f.a)(["\n    width: 45px;\n    height: 45px;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    margin: auto 15px;\n    margin-top: 24px;\n"])))),be=Object(O.b)(le)(Z||(Z=Object(f.a)(["\n    width: 24px;\n    height: 24px;\n"]))),pe=O.b.span(X||(X=Object(f.a)(["\n    position: absolute;\n    font-size: 12px;\n    font-weight: bold;\n    bottom: 12px;\n"]))),fe=n(13),Oe=Object(B.b)({itemCount:z.c}),je=Object(P.b)(Oe,(function(e){return{toggleCartHidden:function(){return e(Object(W.e)())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(fe.jsxs)(de,{onClick:t,children:[Object(fe.jsx)(be,{}),Object(fe.jsx)(pe,{children:n})]})})),he=O.b.div($||($=Object(f.a)(["\n    width: 100%;\n    display: flex;\n    height: 80px;\n    margin-bottom: 15px;\n"]))),xe=O.b.img(Q||(Q=Object(f.a)(["\n    width: 30%;\n"]))),me=O.b.div(ee||(ee=Object(f.a)(["\n    width: 70%;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    padding: 10px 20px;\n"]))),ge=O.b.div(te||(te=Object(f.a)(["\n    display: flex;\n    width: 100%;\n    align-items: center;\n    justify-content: space-between;\n"]))),Se=function(e){var t=e.item,n=t.imageUrl,r=t.price,c=t.name,a=t.quantity;return Object(fe.jsxs)(he,{children:[Object(fe.jsx)(xe,{src:n,alt:"item"}),Object(fe.jsxs)(me,{children:[Object(fe.jsx)("span",{children:c}),Object(fe.jsxs)(ge,{children:[Object(fe.jsxs)("span",{style:{minWidth:"60px"},children:[a," x $",r]}),Object(fe.jsxs)("span",{style:{fontWeight:"500"},children:["$",a*r]})]})]})]})},Ee=l.a.memo(Se),_e=n(70),ve=O.b.div(ne||(ne=Object(f.a)(["\n    position: absolute;\n    width: 260px;\n    height: auto;\n    max-height: 340px;\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    border: 2px solid rgb(240, 240, 240);\n    background-color: whitesmoke;\n    top: 90px;\n    right: 40px;\n    z-index: 5;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 8px,\n        rgba(0, 0, 0, 0.2) 0px 3px 8px inset;\n    border-radius: 3px;\n    overflow-y: scroll;\n    overflow-x: hidden;\n"]))),we=Object(O.b)(_e.a)(re||(re=Object(f.a)(["\n    margin-top: auto;\n    border-radius: 3px;\n    border: 1px solid white;\n    &:hover {\n        background-color: #00c700;\n        color: white;\n        border: 1px solid white;\n        opacity: 0.7;\n    }\n"]))),ye=O.b.span(ce||(ce=Object(f.a)(["\n    font-size: 18px;\n    margin: 100px auto;\n"]))),Ie=O.b.div(ae||(ae=Object(f.a)(["\n    height: auto;\n    display: flex;\n    flex-direction: column;\n"]))),Ce=O.b.div(ie||(ie=Object(f.a)(["\n    width: auto;\n    padding: 0px 10px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n"]))),Te=Object(B.b)({cartItems:z.b,total:z.d}),ke=Object(p.g)(Object(P.b)(Te)((function(e){var t=e.cartItems,n=e.history,r=e.total,c=e.dispatch;return Object(fe.jsxs)(ve,{children:[Object(fe.jsxs)(Ie,{children:[t.length?t.map((function(e){return Object(fe.jsx)(Ee,{item:e},e.id)})):Object(fe.jsx)(ye,{children:"Your cart is empty!"}),t.length?Object(fe.jsxs)("div",{children:[Object(fe.jsx)("hr",{style:{color:"green",width:"95%",marginBottom:"5px"}}),Object(fe.jsxs)(Ce,{children:[Object(fe.jsx)("span",{children:"Subtotal "}),Object(fe.jsxs)("span",{style:{fontWeight:"bold",color:"green"},children:[" ","$",r]})]}),Object(fe.jsx)("hr",{style:{color:"green",width:"95%",marginBottom:"12px"}})]}):Object(fe.jsx)("hr",{style:{color:"green",width:"95%",marginBottom:"12px"}})]}),Object(fe.jsx)(we,{onClick:function(){n.push("/checkout"),c(Object(W.e)())},children:"CHECKOUT"})]})}))),Ue=Object(B.a)([function(e){return e.user}],(function(e){return e.currentUser})),Ne=n(34),Re=n(33),Ae=Object(B.b)({currentUser:Ue,hidden:z.a}),Ge=Object(P.b)(Ae,(function(e){return{signOutStart:function(){return e(Object(Ne.g)())}}}))((function(e){var t=e.currentUser,n=e.hidden,r=e.signOutStart;return Object(fe.jsxs)(h,{children:[Object(fe.jsx)(x,{to:"/",children:Object(fe.jsx)(D,{className:"logo"})}),Object(fe.jsxs)(m,{children:[Object(fe.jsx)(g,{to:"/shop",children:"SHOP"}),t?Object(fe.jsx)(g,{as:"div",onClick:r,children:"SIGN OUT"}):Object(fe.jsx)(g,{to:"/signin",children:"SIGN IN"}),Object(fe.jsx)(g,{to:"/shop",children:"CONTACT"}),Object(fe.jsx)(je,{})]}),n?null:Object(fe.jsx)(ke,{})]})})),Le=n(72),Me=n(1),He=n(3),Fe=n(11),De=n(12),Pe=O.b.div(oe||(oe=Object(f.a)(["\n    height: 60vh;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-top: 100px;\n"]))),We=O.b.div(ue||(ue=Object(f.a)(["\n    display: inline-block;\n    background-image: ",";\n    background-size: cover;\n    background-position: center;\n    width: 40vh;\n    height: 40vh;\n"])),(function(e){var t=e.imageUrl;return"url(".concat(t,")")})),ze=O.b.h2(se||(se=Object(f.a)(["\n    font-size: 28px;\n    color: #2f8e89;\n"]))),Be=function(e){Object(Fe.a)(n,e);var t=Object(De.a)(n);function n(){var e;return Object(Me.a)(this,n),(e=t.call(this)).state={hasErrored:!1},e}return Object(He.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log(e)}},{key:"render",value:function(){return this.state.hasErrored?Object(fe.jsxs)(Pe,{children:[Object(fe.jsx)(We,{imageUrl:"https://i.imgur.com/yW2W9SC.png"}),Object(fe.jsx)(ze,{children:"Sorry this page is broken"})]}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasErrored:!0}}}]),n}(l.a.Component),qe=Object(s.lazy)((function(){return n.e(8).then(n.bind(null,137))})),Ve=Object(s.lazy)((function(){return n.e(9).then(n.bind(null,135))})),Ke=Object(s.lazy)((function(){return n.e(6).then(n.bind(null,136))})),Ye=Object(s.lazy)((function(){return Promise.all([n.e(3),n.e(7)]).then(n.bind(null,138))})),Je=Object(B.b)({currentUser:Ue}),Ze=Object(P.b)(Je,(function(e){return{checkUserSession:function(){return e(Object(Ne.a)())}}}))((function(e){var t=e.checkUserSession,n=e.currentUser;return Object(s.useEffect)((function(){t()}),[t]),console.log(n),Object(fe.jsxs)("div",{children:[Object(fe.jsx)(Ge,{}),Object(fe.jsx)(p.d,{children:Object(fe.jsx)(Be,{children:Object(fe.jsxs)(s.Suspense,{fallback:Object(fe.jsx)(Le.a,{}),children:[Object(fe.jsx)(p.b,{exact:!0,path:"/",component:qe}),Object(fe.jsx)(p.b,{path:"/shop",component:Ve}),Object(fe.jsx)(p.b,{exact:!0,path:"/checkout",component:Ye}),Object(fe.jsx)(p.b,{exact:!0,path:"/signin",render:function(){return n?Object(fe.jsx)(p.a,{to:"/"}):Object(fe.jsx)(Ke,{})}})]})})})]})})),Xe=n(77),$e=n(39),Qe=n(16),et=n(22),tt={currentUser:null,error:null},nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case et.a.SIGN_IN_SUCCESS:return Object(Qe.a)(Object(Qe.a)({},e),{},{currentUser:t.payload,error:null});case et.a.SIGN_OUT_SUCCESS:return Object(Qe.a)(Object(Qe.a)({},e),{},{currentUser:null,error:null});case et.a.SIGN_IN_FAILURE:case et.a.SIGN_OUT_FAILURE:case et.a.SIGN_UP_FAILURE:return Object(Qe.a)(Object(Qe.a)({},e),{},{error:t.payload});default:return e}},rt=n(37),ct=n(28),at=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(Qe.a)(Object(Qe.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(ct.a)(e),[Object(Qe.a)(Object(Qe.a)({},t),{},{quantity:1})])},it=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(Qe.a)(Object(Qe.a)({},e),{},{quantity:e.quantity-1}):e}))},ot={hidden:!0,cartItems:[]},ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case rt.a.TOGGLE_CART_HIDDEN:return Object(Qe.a)(Object(Qe.a)({},e),{},{hidden:!e.hidden});case rt.a.ADD_ITEM:return Object(Qe.a)(Object(Qe.a)({},e),{},{cartItems:at(e.cartItems,t.payload)});case rt.a.REMOVE_ITEM:return Object(Qe.a)(Object(Qe.a)({},e),{},{cartItems:it(e.cartItems,t.payload)});case rt.a.CLEAR_ITEM_FROM_CART:return Object(Qe.a)(Object(Qe.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case rt.a.CLEAR_CART:return Object(Qe.a)(Object(Qe.a)({},e),{},{cartItems:[]});default:return e}},st={sections:[{title:"womens",imageUrl:"https://images.unsplash.com/photo-1526265218618-bdbe4fdb5360?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fHdvbWFuJTIwc3R5bGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",id:1,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://images.unsplash.com/photo-1513269890889-8e4e362e5593?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",id:2,linkUrl:"shop/mens"},{title:"jackets",imageUrl:"https://images.unsplash.com/photo-1600706721165-7cf5c05fcdeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",id:3,linkUrl:"shop/jackets"},{title:"shoes",imageUrl:"https://images.unsplash.com/photo-1520639888713-7851133b1ed0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym9vdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",id:4,linkUrl:"shop/shoes"},{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:5,linkUrl:"shop/hats"}]},lt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,t=arguments.length>1?arguments[1]:void 0;return t.type,e},dt=n(42),bt={collections:null,ifFetching:!1,errorMessage:void 0},pt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case dt.a.FETCH_COLLECTIONS_START:return Object(Qe.a)(Object(Qe.a)({},e),{},{isFetching:!0});case dt.a.FETCH_COLLECTIONS_SUCCESS:return Object(Qe.a)(Object(Qe.a)({},e),{},{isFetching:!1,collections:t.payload});case dt.a.FETCH_COLLECTIONS_FAILURE:return Object(Qe.a)(Object(Qe.a)({},e),{},{isFetching:!1,errorMessage:t.payload});default:return e}},ft=n(61),Ot=n(78),jt={key:"root",storage:n.n(Ot).a,whitelist:["cart"]},ht=Object($e.b)({user:nt,cart:ut,directory:lt,shop:pt}),xt=Object(ft.a)(jt,ht),mt=n(80),gt=n(0),St=n.n(gt),Et=n(15),_t=n(66),vt=St.a.mark(It),wt=St.a.mark(Ct),yt=St.a.mark(Tt);function It(){var e,t,n;return St.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e=Re.d.collection("collections"),r.next=4,e.get();case 4:return t=r.sent,console.log(t),r.next=8,Object(Et.b)(Re.b,t);case 8:return n=r.sent,r.next=11,Object(Et.c)(Object(_t.c)(n));case 11:r.next=17;break;case 13:return r.prev=13,r.t0=r.catch(0),r.next=17,Object(Et.c)(Object(_t.a)(r.t0.message));case 17:case"end":return r.stop()}}),vt,null,[[0,13]])}function Ct(){return St.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Et.d)(dt.a.FETCH_COLLECTIONS_START,It);case 2:case"end":return e.stop()}}),wt)}function Tt(){return St.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Et.a)([Object(Et.b)(Ct)]);case 2:case"end":return e.stop()}}),yt)}var kt=St.a.mark(Bt),Ut=St.a.mark(qt),Nt=St.a.mark(Vt),Rt=St.a.mark(Kt),At=St.a.mark(Yt),Gt=St.a.mark(Jt),Lt=St.a.mark(Zt),Mt=St.a.mark(Xt),Ht=St.a.mark($t),Ft=St.a.mark(Qt),Dt=St.a.mark(en),Pt=St.a.mark(tn),Wt=St.a.mark(nn),zt=St.a.mark(rn);function Bt(e,t){var n,r;return St.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(Et.b)(Re.c,e,t);case 3:return n=c.sent,c.next=6,n.get();case 6:return r=c.sent,c.next=9,Object(Et.c)(Object(Ne.e)(Object(Qe.a)({id:r.id},r.data())));case 9:c.next=15;break;case 11:return c.prev=11,c.t0=c.catch(0),c.next=15,Object(Et.c)(Object(Ne.d)(c.t0));case 15:case"end":return c.stop()}}),kt,null,[[0,11]])}function qt(){var e,t;return St.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Re.a.signInWithPopup(Re.f);case 3:return e=n.sent,t=e.user,n.next=7,Bt(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(Et.c)(Object(Ne.d)(n.t0));case 13:case"end":return n.stop()}}),Ut,null,[[0,9]])}function Vt(e){var t,n,r,c,a;return St.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.email,r=t.password,i.prev=1,i.next=4,Re.a.signInWithEmailAndPassword(n,r);case 4:return c=i.sent,a=c.user,i.next=8,Bt(a);case 8:i.next=14;break;case 10:return i.prev=10,i.t0=i.catch(1),i.next=14,Object(Et.c)(Object(Ne.d)(i.t0));case 14:case"end":return i.stop()}}),Nt,null,[[1,10]])}function Kt(){var e;return St.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Re.e)();case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,Bt(e);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(Et.c)(Object(Ne.d)(t.t0));case 14:case"end":return t.stop()}}),Rt,null,[[0,10]])}function Yt(){return St.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Re.a.signOut();case 3:return e.next=5,Object(Et.c)(Object(Ne.h)());case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(Et.c)(Object(Ne.f)(e.t0));case 11:case"end":return e.stop()}}),At,null,[[0,7]])}function Jt(e){var t,n,r,c,a,i;return St.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,n=t.email,r=t.password,c=t.displayName,o.prev=1,o.next=4,Re.a.createUserWithEmailAndPassword(n,r);case 4:return a=o.sent,i=a.user,o.next=8,Object(Et.c)(Object(Ne.k)({user:i,additionalData:{displayName:c}}));case 8:o.next=14;break;case 10:return o.prev=10,o.t0=o.catch(1),o.next=14,Object(Et.c)(Object(Ne.i)(o.t0));case 14:case"end":return o.stop()}}),Gt,null,[[1,10]])}function Zt(e){var t,n,r;return St.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,n=t.user,r=t.additionalData,c.next=3,Bt(n,r);case 3:case"end":return c.stop()}}),Lt)}function Xt(){return St.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Et.d)(et.a.GOOGLE_SIGN_IN_START,qt);case 2:case"end":return e.stop()}}),Mt)}function $t(){return St.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Et.d)(et.a.EMAIL_SIGN_IN_START,Vt);case 2:case"end":return e.stop()}}),Ht)}function Qt(){return St.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Et.d)(et.a.CHECK_USER_SESSION,Kt);case 2:case"end":return e.stop()}}),Ft)}function en(){return St.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Et.d)(et.a.SIGN_OUT_START,Yt);case 2:case"end":return e.stop()}}),Dt)}function tn(){return St.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Et.d)(et.a.SIGN_UP_START,Jt);case 2:case"end":return e.stop()}}),Pt)}function nn(){return St.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Et.d)(et.a.SIGN_UP_SUCCESS,Zt);case 2:case"end":return e.stop()}}),Wt)}function rn(){return St.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Et.a)([Object(Et.b)(Xt),Object(Et.b)($t),Object(Et.b)(Qt),Object(Et.b)(en),Object(Et.b)(tn),Object(Et.b)(nn)]);case 2:case"end":return e.stop()}}),zt)}var cn=St.a.mark(un),an=St.a.mark(sn),on=St.a.mark(ln);function un(){return St.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Et.c)(Object(W.b)());case 2:case"end":return e.stop()}}),cn)}function sn(){return St.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Et.d)(et.a.SIGN_OUT_SUCCESS,un);case 2:case"end":return e.stop()}}),an)}function ln(){return St.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Et.a)([Object(Et.b)(sn)]);case 2:case"end":return e.stop()}}),on)}var dn=St.a.mark(bn);function bn(){return St.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Et.a)([Object(Et.b)(Tt),Object(Et.b)(rn),Object(Et.b)(ln)]);case 2:case"end":return e.stop()}}),dn)}var pn=Object(mt.a)(),fn=[pn];var On=Object($e.d)(xt,$e.a.apply(void 0,fn));pn.run(bn);var jn=Object(ft.b)(On),hn=n(79),xn=Object(hn.a)();b.a.render(Object(fe.jsx)(P.a,{store:On,children:Object(fe.jsx)(j.a,{children:Object(fe.jsx)(Xe.a,{persistor:jn,children:Object(fe.jsx)(Ze,{appServiceWorker:xn})})})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.57ea331d.chunk.js.map