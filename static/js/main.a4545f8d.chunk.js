(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{104:function(e,t,n){e.exports={formControl:"FormComponents_formControl__30YBI",error:"FormComponents_error__2tbhC"}},110:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return g})),n.d(t,"g",(function(){return x})),n.d(t,"e",(function(){return v})),n.d(t,"f",(function(){return w}));var r=n(78),a=n(10),c=n.n(a),i=n(14),s=n(40),u=n(5),o=n(18),l=n(36),d={posts:[{message:"Hi",like:1},{message:"Whats up?",like:1},{message:"Learn Pituhon(((",like:-13},{message:"LOSEEER",like:187},{message:"\u0421\u043e\u0441\u0438 \u043f\u0438\u043d\u0447\u0435\u0440",like:100}],userProfile:null,isAuth:!1,status:""},j="ADD-POST",b="SET-USER-PROFILE",f="SET-STATUS",p="SET-PHOTO",O=function(e){return{type:f,status:e}},h=function(e){return{type:j,NewTextPost:e}},m=function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:b,userProfile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(O(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(O(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n,r){var a,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.id,t.next=3,o.b.newPhoto(e);case 3:0===(i=t.sent).data.resultCode&&n((c=i.data.data.photos,{type:p,photos:c})),a&&n(m(a));case 6:case"end":return t.stop()}var c}),t)})));return function(e,n){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n,a){var i,s,u;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=a().auth.id,t.next=3,o.b.newProfile(e);case 3:if(0!==(s=t.sent).data.resultCode){t.next=8;break}i&&n(m(i)),t.next=11;break;case 8:return u=s.data.messages[0].slice(s.data.messages[0].indexOf(">")+1,s.data.messages[0].indexOf(")")).toLocaleLowerCase(),n(Object(l.a)("profile",{contacts:Object(r.a)({},u,s.data.messages[0])})),t.abrupt("return",Promise.reject());case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:var n={message:t.NewTextPost,like:0};return Object(u.a)(Object(u.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[n])});case b:return Object(u.a)(Object(u.a)({},e),{},{userProfile:t.userProfile});case p:return Object(u.a)(Object(u.a)({},e),{},{profile:Object(u.a)(Object(u.a)({},e.userProfile),{},{photos:t.photos})});case f:return Object(u.a)(Object(u.a)({},e),{},{status:t.status});default:return e}}},120:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return o}));var r=n(40),a=n(5),c="UPDATE-MESSAGE",i="ADDMESSAGE",s={dialogs:[{name:"Kirik",id:1},{name:"Dimik",id:2},{name:"max",id:3},{name:"dima",id:4},{name:"sasha",id:5}],messages:[{id:1,message:"hello"},{id:2,message:"Whats up)"},{id:3,message:"Normal?"}],NewTextMessage:""},u=function(e){return{type:c,body:e}},o=function(){return{type:i}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=Object(a.a)(Object(a.a)({},e),{},{NewTextMessage:t.body});return n.NewTextMessage=t.body,n;case i:var u=e.NewTextMessage;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:u}]),NewTextMessage:""});default:return e}}},121:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"i",(function(){return g})),n.d(t,"h",(function(){return x})),n.d(t,"d",(function(){return v})),n.d(t,"g",(function(){return w})),n.d(t,"e",(function(){return y})),n.d(t,"f",(function(){return _})),n.d(t,"c",(function(){return k}));var r=n(10),a=n.n(r),c=n(14),i=n(40),s=n(5),u=n(35),o=n(18),l="FOLLOW",d="UNFOLLOW",j="SET_USERS",b="SET_CURRENT_PAGE",f="SET_TOTAL_USER_COUNT",p="SET_LOAD_ITEM",O="SET_TOGGLE_FRIENDS",h={users:[],pageSize:5,totalItemsCount:0,currentPage:1,loadItem:!0,followingInProgress:[]},m=function(e){return{type:l,userId:e}},g=function(e){return{type:d,userId:e}},x=function(e){return{type:j,users:e}},v=function(e){return{type:b,currentPage:e}},w=function(e){return{type:f,totalCount:e}},y=function(e){return{type:p,loadItem:e}},_=function(e,t){return{type:O,loadItem:e,userId:t}},k=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(y(!0)),r(v(e)),n.next=4,o.c.getUsers(e,t);case 4:c=n.sent,r(y(!1)),r(x(c.items)),r(w(c.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(s.a)(Object(s.a)({},e),{},{users:Object(u.b)(e.users,t.userId,"id",{followed:!0})});case d:return Object(s.a)(Object(s.a)({},e),{},{users:Object(u.b)(e.users,t.userId,"id",{followed:!1})});case j:return Object(s.a)(Object(s.a)({},e),{},{users:Object(i.a)(t.users)});case f:return Object(s.a)(Object(s.a)({},e),{},{totalItemsCount:t.totalCount});case b:return Object(s.a)(Object(s.a)({},e),{},{currentPage:t.currentPage});case p:return Object(s.a)(Object(s.a)({},e),{},{loadItem:t.loadItem});case O:return Object(s.a)(Object(s.a)({},e),{},{followingInProgress:t.loadItem?[].concat(Object(i.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},18:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));var r=n(148),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0",headers:{"API-KEY":"670e02e0-a18b-4af1-b6d8-7bc8edc695ba"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return a.get("/users?count=".concat(t,"&page=").concat(e)).then((function(e){return e.data}))},deleteUser:function(e){return a.delete("/follow/".concat(e))},postUser:function(e){return a.post("/follow/".concat(e),{})},getProfile:function(e){return console.warn("\u0423\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439 \u043c\u0435\u0442\u043e\u0434"),i.getProfile(e)}},i={getProfile:function(e){return a.get("/profile/"+e)},getStatus:function(e){return a.get("/profile/status/"+e)},updateStatus:function(e){return a.put("/profile/status",{status:e})},newPhoto:function(e){var t=new FormData;return t.append("image",e),a.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},newProfile:function(e){return a.put("/profile",e)}},s={getCaptcha:function(){return a.get("/security/get-captcha-url")},getAuth:function(){return a.get("/auth/me")},login:function(e,t,n,r){return a.post("/auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("/auth/login")}}},184:function(e,t,n){},185:function(e,t,n){},20:function(e,t,n){e.exports={nav:"Navbar_nav__bGvmN",item:"Navbar_item__2Mo-B",activeLink:"Navbar_activeLink__TGD0r",friends:"Navbar_friends__cMH8L",image:"Navbar_image__MofET"}},30:function(e,t,n){"use strict";n(0);var r=n(1);t.a=function(){return Object(r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(r.jsx)("img",{alt:"preloader",src:"https://i.stack.imgur.com/kOnzy.gif"})})}},308:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(33),i=n.n(c),s=(n(184),n(42)),u=n(43),o=n(46),l=n(45),d=(n(185),n(20)),j=n.n(d),b=n(17),f=n(321),p=n(1),O=function(){return Object(p.jsxs)("nav",{className:j.a.nav,children:[Object(p.jsx)("div",{className:j.a.item,children:Object(p.jsx)(f.a,{children:Object(p.jsx)(b.c,{to:"/profile",activeClassName:j.a.activeLink,children:"Profile"})})}),Object(p.jsx)("div",{className:j.a.item,children:Object(p.jsx)(f.a,{children:Object(p.jsx)(b.c,{to:"/dialogs",activeClassName:j.a.activeLink,children:"Messages"})})}),Object(p.jsx)("div",{className:j.a.item,children:Object(p.jsx)(f.a,{children:Object(p.jsx)("a",{href:"https://news.ru/",children:"News"})})}),Object(p.jsx)("div",{className:j.a.item,children:Object(p.jsx)(f.a,{children:Object(p.jsx)("a",{href:"https://zaycev.net",children:"Music"})})}),Object(p.jsx)("div",{className:j.a.item,children:Object(p.jsx)(f.a,{children:Object(p.jsx)(b.c,{to:"/settings",activeClassName:j.a.activeLink,children:"Settings"})})}),Object(p.jsx)("div",{className:j.a.item,children:Object(p.jsx)(f.a,{children:Object(p.jsx)(b.c,{to:"/users?",activeClassName:j.a.activeLink,className:j.a.friends,children:"Users"})})})]})},h=function(){return Object(p.jsx)("div",{style:{backgroundSize:"cover"},children:Object(p.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgg8uhS3oRZ_ZNq-doKC5Ol3Lcna5RoZr7uQ&usqp=CAU",alt:""})})},m=n(109),g=function(){var e=Object(r.useState)(!1),t=Object(m.a)(e,2),n=t[0],a=t[1];return Object(p.jsxs)("div",{children:["Music",Object(p.jsx)("input",{type:"checkbox",checked:n,onClick:function(){return a(!n)}})]})},x=n(30),v=function(){return Object(p.jsxs)("div",{children:["Settings",Object(p.jsx)(x.a,{})]})},w=n(12),y=n(5),_=n(81),k=n.n(_),S=function(e){return Object(p.jsxs)("header",{className:k.a.header,children:[Object(p.jsx)("img",{alt:"ava",className:k.a.header,src:"https://static.mk.ru/upload/entities/2018/11/06/articles/detailPicture/88/e3/19/b1/a24bfa5a27d628949cfed7c792c7b99f.jpg"}),Object(p.jsx)("div",{className:k.a.login,children:e.isAuth?Object(p.jsxs)("p",{children:["Login:",e.login,Object(p.jsx)(b.c,{to:"/dialogs",children:Object(p.jsx)(f.a,{onClick:e.logout,children:"Logout"})})]}):Object(p.jsx)(f.a,{children:Object(p.jsx)(b.c,{to:"/login",children:"Login"})})})]})},N=n(10),C=n.n(N),P=n(14),E=n(18),T=n(36),A="SET_USER_DATA",I="GET_CAPTCHA_URL",L={id:null,email:null,login:null,password:null,isAuth:!1,captcha:null},U=function(e,t,n,r){return{type:A,data:{id:e,email:t,login:n,isAuth:r}}},M=function(){return function(){var e=Object(P.a)(C.a.mark((function e(t){var n,r,a,c,i;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.getAuth();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.login,i=r.email,t(U(a,c,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},R=function(){return function(){var e=Object(P.a)(C.a.mark((function e(t){var n,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.getCaptcha();case 2:n=e.sent,r=n.data.url,t({type:I,data:{captcha:r}});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:case I:return Object(y.a)(Object(y.a)({},e),t.data);default:return e}},z=n(16),G=n(9),F=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)(S,Object(y.a)({},this.props))}}]),n}(a.a.Component),H=Object(G.d)(Object(z.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(P.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.logout();case 2:0===e.sent.data.resultCode&&t(U(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(F),W=n(110),Z=n(120),q=n(121),B=n(151),K=n(143),J="INITIALIZED_SUCCESS",X={initialized:!1},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(y.a)(Object(y.a)({},e),{},{initialized:!0});default:return e}},Q=Object(G.c)({profilePage:W.b,dialogPage:Z.b,usersPage:q.a,auth:D,form:K.a,app:Y}),V=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||G.d,$=Object(G.e)(Q,V(Object(G.a)(B.a)));window.__store__=$;var ee=$,te=n(80),ne=n(142),re=n(64),ae=n(53),ce=n(35),ie=Object(ae.b)(5),se=Object(ae.a)(30),ue=Object(ne.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return Object(p.jsxs)("form",{onSubmit:t,children:[Object(ce.a)("email","email",re.a,[ae.c,se],{},""),Object(ce.a)("password","Password",re.a,[ae.c,ie],{type:"password"},""),n&&Object(p.jsx)("div",{style:{color:"red",border:"1px red solid",maxWidth:"200px"},children:n}),Object(ce.a)("rememberMe","RememberMe",re.a,[],{type:"checkbox"},"Remember login"),r&&Object(p.jsx)("img",{src:r}),r&&Object(ce.a)("captcha","captchaUrl",re.a,[ae.c],[],""),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:"Login"})})]})})),oe=Object(z.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captcha}}),{login:function(e,t,n,r){return function(){var a=Object(P.a)(C.a.mark((function a(c){var i,s;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,E.a.login(e,t,n,r);case 2:0===(i=a.sent).data.resultCode?c(M()):(10===i.data.resultCode&&c(R()),s=i.data.messages.length>0?i.data.messages[0]:"wrong email or password",c(Object(T.a)("login",{_error:s})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){if(!0===e.isAuth)return Object(p.jsx)(w.a,{to:"/profile"});return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"LOGIN"}),Object(p.jsx)(ue,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})]})})),le=Object(r.lazy)((function(){return Promise.all([n.e(6),n.e(3)]).then(n.bind(null,329))})),de=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,332))})),je=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,331))})),be=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(p.jsx)(b.a,{children:Object(p.jsxs)("div",{className:"app-writer",children:[Object(p.jsx)(H,{}),Object(p.jsx)(O,{}),Object(p.jsxs)("div",{className:"app-writer-body",children:[Object(p.jsx)(w.a,{to:"/profile"}),Object(p.jsx)(w.b,{path:"/dialogs",render:function(){return Object(p.jsx)(r.Suspense,{fallback:Object(p.jsx)(x.a,{}),children:Object(te.a)(de)})}}),Object(p.jsx)(w.b,{path:"/profile/:userId?",render:function(){return Object(p.jsx)(r.Suspense,{fallback:Object(p.jsx)(x.a,{}),children:Object(te.a)(le)})}}),Object(p.jsx)(w.b,{path:"/users",render:function(){return Object(p.jsx)(r.Suspense,{fallback:Object(p.jsx)(x.a,{}),children:Object(te.a)(je)})}}),Object(p.jsx)(w.b,{path:"/news",render:function(){return Object(p.jsx)(h,{})}}),Object(p.jsx)(w.b,{path:"/music",render:function(){return Object(p.jsx)(g,{})}}),Object(p.jsx)(w.b,{path:"/settings",render:function(){return Object(p.jsx)(v,{})}}),Object(p.jsx)(w.b,{path:"/login",render:function(){return Object(p.jsx)(oe,{})}})]})]})}):Object(p.jsx)(x.a,{})}}]),n}(a.a.Component),fe=Object(G.d)(Object(z.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(P.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t(M()),e.next=3,Promise.all([n]);case 3:t({type:J});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(be),pe=function(){return Object(p.jsx)(b.b,{children:Object(p.jsx)(z.a,{store:ee,children:Object(p.jsx)(fe,{})})})};i.a.render(Object(p.jsx)(pe,{}),document.getElementById("root"))},35:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));var r=n(5),a=(n(0),n(99)),c=n(1),i=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(r.a)(Object(r.a)({},e),a):e}))},s=function(e,t,n,i,s,u){return Object(c.jsxs)("div",{children:[u,Object(c.jsx)(a.a,Object(r.a)({name:e,placeholder:t,component:n,validate:i},s))]})}},53:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var r=function(e){if(!e)return"Field is not filled"},a=function(e){return function(t){if(t.length>e)return"Max length ".concat(e," symbol")}},c=function(e){return function(t){if(t.length<e)return"Min length password ".concat(e," symbol")}}},64:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return l}));var r=n(5),a=n(107),c=(n(0),n(104)),i=n.n(c),s=n(1),u=function(e){var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return Object(s.jsxs)("div",{className:c?i.a.formControl+" "+(c?i.a.error:""):"",children:[Object(s.jsx)("div",{children:a}),c&&Object(s.jsx)("span",{children:r})]})},o=function(e){var t=e.input,n=(e.meta,e.children,Object(a.a)(e,["input","meta","children"]));return Object(s.jsx)("div",{children:Object(s.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(s.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))})},l=function(e){var t=e.input,n=(e.meta,e.children,Object(a.a)(e,["input","meta","children"]));return Object(s.jsx)("div",{children:Object(s.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(s.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))})}},80:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return O}));var r=n(5),a=n(42),c=n(43),i=n(46),s=n(45),u=n(0),o=n.n(u),l=n(12),d=n(16),j=n(30),b=n(1),f=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(i.a)(u,t);var n=Object(s.a)(u);function u(){return Object(a.a)(this,u),n.apply(this,arguments)}return Object(c.a)(u,[{key:"render",value:function(){return!1===this.props.isAuth?Object(b.jsx)(l.a,{to:"/login"}):Object(b.jsx)(e,Object(r.a)({},this.props))}}]),u}(o.a.Component);return Object(d.b)(f)(t)},O=function(e){return Object(b.jsx)(u.Suspense,{fallback:Object(b.jsx)(j.a,{}),children:Object(b.jsx)(e,{})})}},81:function(e,t,n){e.exports={header:"Header_header__180Wd",login:"Header_login__GHgWp"}}},[[308,1,2]]]);
//# sourceMappingURL=main.a4545f8d.chunk.js.map