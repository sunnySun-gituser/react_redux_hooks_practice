(this.webpackJsonpreduxhookspractice=this.webpackJsonpreduxhookspractice||[]).push([[0],{12:function(e,n,t){e.exports=t(24)},22:function(e,n,t){},23:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var r=t(4),o=t(3),c=t(0),a=t.n(c),u=t(5),l=t.n(u),i=(t(22),t(23),{counterActions:{increment:function(){return{type:"INCREMENT"}},decrement:function(){return{type:"DECREMENT"}}},userActions:{setUser:function(e){return{type:"SET_USER",payload:e}},logOut:function(){return{type:"LOG_OUT"}}}});var s=function(){var e=Object(r.c)((function(e){return e.counter})),n=Object(r.c)((function(e){return e.currentUser})),t=Object(r.b)(),o={name:"Sunny"};return Object(c.useEffect)((function(){t(i.userActions.setUser(o))}),[]),console.log(n),n?a.a.createElement("div",{className:"App"},n.loggedIn?a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Hello, ",n.user.name),a.a.createElement("button",{className:"button",onClick:function(){return t(i.userActions.logOut())}},"Logout")):a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Login"),a.a.createElement("button",{className:"button",onClick:function(){return t(i.userActions.setUser(o))}},"Login as ",o.name)),a.a.createElement("h1",null,"Counter: ",e),a.a.createElement("button",{className:"button",onClick:function(){return t(i.counterActions.increment())}},"Increment Counter"),a.a.createElement("button",{className:"button",onClick:function(){return t(i.counterActions.decrement())}},"Decrement Counter")):a.a.createElement("div",null,a.a.createElement("h1",null,"Loading"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=t(9),m={user:{},loggedIn:!1},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_USER":return Object(E.a)({},e,{user:n.payload,loggedIn:!0});case"LOG_OUT":return Object(E.a)({},e,{user:{},loggedIn:!1});default:return e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"INCREMENT":return e+1;case"DECREMENT":return e-1;default:return e}},f=Object(o.b)({currentUser:d,counter:g}),h=Object(o.c)(f,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(a.a.createElement(r.a,{store:h},a.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[12,1,2]]]);
//# sourceMappingURL=main.5027723a.chunk.js.map