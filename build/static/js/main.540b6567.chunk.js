(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(16),s=n.n(a),o=(n(21),n(2)),u=n.n(o),i=n(4),l=n(5),p=n(6),f=n.n(p),j=n(0),b="/api";var d=function(e){var t=e.pokemon,n=e.setType,r=e.inCollection,a=Object(c.useState)(!1),s=Object(l.a)(a,2),o=s[0],p=s[1];return Object(c.useEffect)(Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(t.id);case 2:if(!e.sent){e.next=6;break}p(!0),e.next=7;break;case 6:p(!1);case 7:case"end":return e.stop()}}),e)}))),[t]),Object(c.useEffect)(Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=!o,e.t0){e.next=5;break}return e.next=4,r(t.id);case 4:e.t0=e.sent;case 5:if(!e.t0){e.next=7;break}return e.abrupt("return");case 7:!function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post("".concat(b,"/collection/catch"),t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}()();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()();case 1:case"end":return e.stop()}}),e)}))),[o]),Object(c.useEffect)((function(){o||function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.delete("".concat(b,"/collection/release/").concat(t.id));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}()()}),[o]),t.sprites.front_default,Object(j.jsxs)("div",{className:"details-div",children:[Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:["Name: ",t.name]}),Object(j.jsxs)("li",{children:["Height: ",t.height]}),Object(j.jsxs)("li",{children:["Weight: ",t.weight]}),Object(j.jsxs)("li",{children:["Types:"," ",t.types.map((function(e,t){return Object(j.jsxs)("span",{onClick:function(){n(e)},children:[e," "]},"type key: ".concat(t))}))]})]}),Object(j.jsx)("img",{onMouseOut:function(e){return e.currentTarget.src="".concat(t.sprites.front_default)},onMouseOver:function(e){return e.currentTarget.src="".concat(t.sprites.back_default)},src:t.sprites.front_default}),t.name?Object(j.jsx)("button",{onClick:function(){return p(!o)},children:o?"release":"catch"}):null]})};var h=function(e){var t=e.pokemonList,n=e.onPokemonClick;return Object(j.jsx)("div",{className:"list-div",children:Object(j.jsx)("ul",{children:t.map((function(e,t){return Object(j.jsx)("li",{onClick:function(){return n(e.name)},children:e.name},"pokemon list item:".concat(t))}))})})},O="/api";var x=function(e){var t=Object(c.useState)({name:"",height:"",weight:"",types:[""],sprites:{back_default:"",front_default:""}}),n=Object(l.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),o=Object(l.a)(s,2),p=o[0],b=o[1],x=Object(c.useState)(""),v=Object(l.a)(x,2),k=v[0],m=v[1],g=Object(c.useState)(""),w=Object(l.a)(g,2),y=w[0],C=w[1],S=Object(c.useState)([]),T=Object(l.a)(S,2),E=T[0],P=T[1],_=Object(c.useState)(!1),F=Object(l.a)(_,2),L=F[0],N=F[1],M=Object(c.useRef)(!0);function B(e){return I.apply(this,arguments)}function I(){return(I=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat(O,"/collection/status/").concat(t));case 3:if(n=e.sent,console.log(n.data.status),"caught"!==n.data.status){e.next=9;break}return e.abrupt("return",!0);case 9:return e.abrupt("return",!1);case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}Object(c.useEffect)((function(){!function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(O,"/type/").concat(y));case 2:t=e.sent,console.log(t.data.pokemons),P(t.data.pokemons);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[y]),Object(c.useEffect)((function(){M.current?M.current=!1:function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat(O,"/pokemon/").concat(k));case 3:t=e.sent,a(t.data),N(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),N(!0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()()}),[k]);var J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;m(e||p),P([]),C("")};return Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{value:p,onChange:function(e){return b(e.target.value)},type:"text"}),Object(j.jsx)("button",{type:"button",onClick:function(){J()},children:"search pokemon"}),L?Object(j.jsx)("div",{children:"Pokemon not found"}):null,Object(j.jsx)(d,{pokemon:r,setType:C,inCollection:B}),Object(j.jsx)(h,{pokemonList:E,onPokemonClick:J,inCollection:B})]})};var v=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Pokedex"}),Object(j.jsx)(x,{})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),k()}},[[42,1,2]]]);
//# sourceMappingURL=main.540b6567.chunk.js.map