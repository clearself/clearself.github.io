(function(t){function e(e){for(var r,i,u=e[0],s=e[1],c=e[2],p=0,f=[];p<u.length;p++)i=u[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},5006:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("06c4"),o=(n("b4a0"),n("3938"),n("5e87"),n("1906"),n("e30c"),n("6ded"),n("430a")),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-wrapper"},[n("a",{staticClass:"github-corner",staticStyle:{display:"inline-block",width:"80px",height:"80px",position:"absolute",top:"0",right:"0","z-index":"1"},attrs:{href:"https://github.com/fengxianqi/qiankun-example","aria-label":"View source on GitHub"}},[n("svg",{staticStyle:{fill:"#151513",color:"#fff",position:"absolute",top:"0",border:"0",right:"0"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[n("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),n("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),n("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])]),n("div",{staticClass:"layout-header"},[n("div",{staticClass:"logo"},[t._v("微前端（qiankun）架构demo")]),n("ul",{staticClass:"sub-apps"},t._l(t.microApps,(function(e){return n("li",{key:e.name,class:{active:e.activeRule===t.current},on:{click:function(n){return t.goto(e)}}},[t._v(t._s(e.cn))])})),0),n("div",{staticClass:"userinfo"},[t._v("主应用的state："+t._s(t.state.user.name))])]),n("div",{attrs:{id:"subapp-viewport"}})])},i=[],u=(n("322a"),n("38bc")),s=n.n(u),c=n("24f6"),l=o["a"].observable({user:{name:"zhangsan"}}),p=Object(c["b"])(l);p.onGlobalStateChange((function(t,e){for(var n in console.log("main change",JSON.stringify(t),JSON.stringify(e)),t)l[n]=t[n]})),p.getGlobalState=function(t){return t?l[t]:l};var f=p,b=[{name:"sub-ven",cn:"vens-ui基于vue",entry:"//clearself.github.io/subapp/sub-ven/",activeRule:"/sub-ven"},{name:"sub-vue",cn:"vue项目",entry:"//clearself.github.io/subapp/sub-vue/",activeRule:"/sub-vue"},{name:"sub-react",cn:"react项目",entry:"//clearself.github.io/subapp/sub-react/",activeRule:"/sub-react"},{name:"sub-html",cn:"原生html项目",entry:"//clearself.github.io/subapp/sub-html/",activeRule:"/sub-html"}],d=b.map((function(t){return Object(r["a"])(Object(r["a"])({},t),{},{container:"#subapp-viewport",props:{routerBase:t.activeRule,getGlobalState:f.getGlobalState}})})),h=d,v={name:"App",data:function(){return{isLoading:!0,microApps:h,current:"/sub-ven"}},computed:{state:function(){return f.getGlobalState()}},watch:{isLoading:function(t){t?s.a.start():this.$nextTick((function(){s.a.done()}))}},components:{},methods:{goto:function(t){history.pushState(null,t.activeRule,t.activeRule)},bindCurrent:function(){var t=window.location.pathname;this.microApps.findIndex((function(e){return e.activeRule===t}))>=0&&(this.current=t,console.log("this.current",this.current))},listenRouterChange:function(){var t=this,e=function(t){var e=history[t];return function(){var n=e.apply(this,arguments),r=new Event(t);return r.arguments=arguments,window.dispatchEvent(r),n}};history.pushState=e("pushState"),window.addEventListener("pushState",this.bindCurrent),window.addEventListener("popstate",this.bindCurrent),this.$once("hook:beforeDestroy",(function(){window.removeEventListener("pushState",t.bindCurrent),window.removeEventListener("popstate",t.bindCurrent)}))}},created:function(){this.bindCurrent(),s.a.start()},mounted:function(){this.listenRouterChange()}},g=v,m=(n("5c0b"),n("cba8")),C=Object(m["a"])(g,a,i,!1,null,null,null),y=C.exports,w=n("5930"),O=n("c0a9");n("70e7");o["a"].config.productionTip=!1;var S=new o["a"]({render:function(t){return t(y)}}).$mount("#app");function j(t){S&&S.$children&&(S.$children[0].isLoading=t)}var L=h.map((function(t){return Object(r["a"])(Object(r["a"])({},t),{},{loader:j})}));Object(w["b"])(L,{beforeLoad:function(t){console.log("before load app.name====>>>>>",t.name)},beforeMount:[function(t){console.log("[LifeCycle] before mount %c%s","color: green;",t.name)}],afterMount:[function(t){console.log("[LifeCycle] after mount %c%s","color: green;",t.name)}],afterUnmount:[function(t){console.log("[LifeCycle] after unmount %c%s","color: green;",t.name)}]}),Object(O["a"])("/sub-ven"),Object(w["c"])()},"5c0b":function(t,e,n){"use strict";n("5006")}});
//# sourceMappingURL=app.8f26a100.js.map