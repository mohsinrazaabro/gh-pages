(function(t){function e(e){for(var r,a,l=e[0],s=e[1],c=e[2],p=0,d=[];p<l.length;p++)a=l[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,l=1;l<n.length;l++){var s=n[l];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/gh-pages/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"11b1":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("Navigator"),n("router-view",{attrs:{id:"routerview"}})],1),n("HelloWorld")],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"})},l=[],s={name:"HelloWorld"},c=s,u=n("2877"),p=Object(u["a"])(c,a,l,!1,null,"682ff310",null),d=p.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"backbody"},[n("div",{staticClass:"navbar"},[n("h1",{attrs:{id:"heading"}},[t._v("My App")]),n("ul",{staticClass:"navigations"},[n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),n("li",[n("router-link",{attrs:{to:"/profile"}},[t._v("Profile")])],1),n("li",[n("router-link",{attrs:{to:"/projects"}},[t._v("Projects")])],1)])])])},m=[],v={name:"Navigator",methods:{drawHome:function(){this.texthome="no"}},data:function(){return{texthome:"home"}}},h=v,b=(n("ede3"),Object(u["a"])(h,f,m,!1,null,"2ce7902a",null)),_=b.exports,y={name:"App",components:{HelloWorld:d,Navigator:_}},g=y,j=(n("034f"),Object(u["a"])(g,o,i,!1,null,null,null)),O=j.exports,x=n("dad3"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"projects"},[n("router-link",{attrs:{to:"/projects/todolist"}},[t._v("To Do List")])],1)])},C=[],k={name:"Projects"},P=k,N=Object(u["a"])(P,w,C,!1,null,"31f2e7af",null),E=N.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"profile"}})},H=[],T={name:"Profile"},I=T,M=Object(u["a"])(I,$,H,!1,null,"5f016016",null),S=M.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},W=[],D={name:"Home"},J=D,L=Object(u["a"])(J,A,W,!1,null,null,null),B=L.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"options"},[n("input",{attrs:{id:"itemName",type:"text",name:"item name"}}),n("input",{attrs:{type:"submit",value:"Add"},on:{click:t.addItem}})]),n("div",{staticClass:"items"},[n("ul",t._l(t.items,(function(e){return n("div",{key:e.id},[n("h5",[t._v(t._s(e.name)+" "),n("button",{staticClass:"cmp",on:{click:function(n){return t.tagComplete(e.id)}}},[t._v(" Tag complete ")]),n("button",{staticClass:"btn",on:{click:function(n){return t.removeItem(e.id)}}},[t._v(" Remove ")])]),1==e.complete?n("div",[n("p",[t._v("completed!")])]):t._e()])})),0)])])},q=[],z=(n("4de4"),n("d81d"),{name:"ToDoList",data:function(){return{idName:2,items:[{id:1,name:"bruno",complete:!0}]}},methods:{addItem:function(){this.idName=this.idName+1;var t=document.getElementById("itemName").value,e={id:this.idName,name:t,complete:!1};this.items.push(e)},removeItem:function(t){this.items=this.items.filter((function(e){return e.id!==t}))},tagComplete:function(t){this.items.map((function(e){e.id==t&&(e.complete=!e.complete)}))}}}),F=z,G=(n("d305"),Object(u["a"])(F,R,q,!1,null,"cba2f1a0",null)),K=G.exports;r["a"].use(x["a"]);var Q=new x["a"]({mode:"history",routes:[{path:"/",component:B},{path:"/profile",component:S},{path:"/projects",component:E},{path:"/projects/todolist",component:K}]});r["a"].config.productionTip=!1,new r["a"]({router:Q,render:function(t){return t(O)}}).$mount("#app")},"85ec":function(t,e,n){},d305:function(t,e,n){"use strict";var r=n("11b1"),o=n.n(r);o.a},e7d8:function(t,e,n){},ede3:function(t,e,n){"use strict";var r=n("e7d8"),o=n.n(r);o.a}});
//# sourceMappingURL=app.dc0b927f.js.map