(function(){"use strict";var t={8577:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var a=n(8935),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"menu_section"},[n("link",{attrs:{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",integrity:"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO",crossorigin:"anonymous"}}),n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-custom"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Overview")]),t._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[n("ul",{staticClass:"navbar-nav"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/vote"}},[t._v("Vote"),n("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/building"}},[t._v("Building a PC"),n("span",{staticClass:"sr-only"},[t._v("(current)")])])],1)])])],1)]),n("router-view"),t._m(1)],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer nav-item bg-custom"},[n("a",{attrs:{href:"https://github.com/wbf22/pc_specs"}},[t._v("Github Link")])])}],s=n(1001),i={},c=(0,s.Z)(i,o,r,!1,null,null,null),u=c.exports,l=n(2809),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v("Finding a PC for you")]),n("p",[t._v(" There's a lot of confusing names and numbers when it comes to buying a PC. Below we've put together a list of what we and other Gamers think you'll need to play the lastest games. The first table shows recommended specs for a new PC, and below that is a table showing the minimum specs if you need to stay cheap. ")]),n("SpecsTable")],1)},d=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table_section"},[n("table",{staticClass:"table"},[t._m(0),n("tbody",[n("tr",[n("td",[t._v("Graphics Card")]),n("td",[t._v(t._s(t.topGPUs))])]),n("tr",[n("td",[t._v("CPU")]),n("td",[t._v(t._s(t.topProcessors))])]),n("tr",[n("td",[t._v("Ram")]),n("td",[t._v(t._s(t.ram))])]),n("tr",[n("td",[t._v("Storage")]),n("td",[t._v(t._s(t.storage))])]),t._m(1)])])])},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{colspan:"2"}},[n("b",[t._v("Gaming Pc Recommended Specs ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v("OS")]),n("td",[t._v("Windows")])])}],p=n(7965),h=(n(7327),n(1539),n(4916),n(4765),n(8309),{storage:"",OS:"",computed:{topGPUs:function(){var t,e=this.$root.$data.recommendedSpecs[0].recommendations.filter((function(t){return t.name.toLowerCase().search("amd")>=0})),n=this.$root.$data.recommendedSpecs[0].recommendations.filter((function(t){return t.name.toLowerCase().search("nvidia")>=0})),a=e[0],o=(0,p.Z)(e);try{for(o.s();!(t=o.n()).done;){var r=t.value;r.count>a.count&&(a=r)}}catch(l){o.e(l)}finally{o.f()}var s,i=n[0],c=(0,p.Z)(n);try{for(c.s();!(s=c.n()).done;){var u=s.value;u.count>i.count&&(i=u)}}catch(l){c.e(l)}finally{c.f()}return i.name+", "+a.name},topProcessors:function(){var t,e=this.$root.$data.recommendedSpecs[1].recommendations.filter((function(t){return t.name.toLowerCase().search("intel")>=0})),n=this.$root.$data.recommendedSpecs[1].recommendations.filter((function(t){return t.name.toLowerCase().search("amd")>=0})),a=e[0],o=(0,p.Z)(e);try{for(o.s();!(t=o.n()).done;){var r=t.value;r.count>a.count&&(a=r)}}catch(l){o.e(l)}finally{o.f()}var s,i=n[0],c=(0,p.Z)(n);try{for(c.s();!(s=c.n()).done;){var u=s.value;u.count>i.count&&(i=u)}}catch(l){c.e(l)}finally{c.f()}return a.name+", "+i.name},ram:function(){var t,e=this.$root.$data.recommendedSpecs[2].recommendations,n=e[0],a=(0,p.Z)(e);try{for(a.s();!(t=a.n()).done;){var o=t.value;o.count>n.count&&(n=o)}}catch(r){a.e(r)}finally{a.f()}return n.name},storage:function(){var t,e=this.$root.$data.recommendedSpecs[3].recommendations,n=e[0],a=(0,p.Z)(e);try{for(a.s();!(t=a.n()).done;){var o=t.value;o.count>n.count&&(n=o)}}catch(r){a.e(r)}finally{a.f()}return n.name}}}),b=h,_=(0,s.Z)(b,f,v,!1,null,"3e3e8b3c",null),g=_.exports,y={name:"HomeView",components:{SpecsTable:g}},w=y,C=(0,s.Z)(w,m,d,!1,null,"104ba130",null),$=C.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vote"},[n("h1",[t._v("Voting")]),n("p",[t._v(" We want to make sure people can hear from fellow gamers what kind of PC's they would really want for gaming. In the future we'll let you make recommendations for PCs. ")]),n("SpecsTable")],1)},P=[],G={name:"VoteView",components:{}},S=G,T=(0,s.Z)(S,k,P,!1,null,"67d7b95c",null),O=T.exports,Z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"building"},[n("h1",[t._v("Buidling Your Own Pc")]),n("div",{staticClass:"description"},[n("p",[t._v(" Building your own PC mostly boils down to two considerations: price and difficulty ")]),n("p",[t._v(" Building your own PC requires a lot of time and research, and many novices may find it too difficult. There is also some risk as integrating different parts can lead to compatibility issues. Sometimes this can cause crashes or other problems. However, building a PC allows you to have whatever specs you want as well as giving you more options for asthetic. It is also generally cheaper to build your own PC than to buy one. ")]),n("p",[t._v(" So if you have time and confidence, build a PC. If not buying is probably your best option. ")])])])}],R={name:"BuildingView",components:{}},X=R,x=(0,s.Z)(X,Z,E,!1,null,"a004d538",null),I=x.exports;a.Z.use(l.Z);var F=[{path:"/",name:"home",component:$},{path:"/vote",name:"vote",component:O},{path:"/building",name:"building",component:I}],M=new l.Z({routes:F}),N=M,V=[{part:"graphics_card",recommendations:[{name:"Nvidia GeForce RTX 3080",count:100},{name:"AMD Radeon RX 6800 XT",count:200},{name:"Nvidia GeForce RTX 3060 Ti",count:70},{name:"AMD Radeon RX 6900 XT",count:50}]},{part:"processor",recommendations:[{name:"Intel I7-10700k",count:200},{name:"Intel I5-10600k",count:150},{name:"AMD Ryzen 9 3950X",count:450},{name:"AMD Ryzen 7 3700X",count:100}]},{part:"ram",recommendations:[{name:"16Gb",count:200},{name:"12Gb",count:100},{name:"8Gb",count:20},{name:"14Gb",count:70}]},{part:"storage",recommendations:[{name:"500Gb",count:200},{name:"200Gb",count:100},{name:"1Tb",count:20},{name:"500Gb SSD",count:400}]}],j=V,A=[{part:"graphics_card",recommendations:[{name:"Nvidia GeForce RTX 3080",count:100},{name:"AMD Radeon RX 6800 XT",count:200}]},{part:"processor",recommendations:[{name:"Intel I7",count:200},{name:"Intel I5",count:100}]},{part:"ram",recommendations:[{name:"16Gb",count:200},{name:"12Gb",count:100}]}],B=A;a.Z.config.productionTip=!1;var D={recommendedSpecs:j,recommendedSpecsCheap:B};new a.Z({router:N,data:D,render:function(t){return t(u)}}).$mount("#app")}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var r=e[a]={exports:{}};return t[a](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,a,o,r){if(!a){var s=1/0;for(l=0;l<t.length;l++){a=t[l][0],o=t[l][1],r=t[l][2];for(var i=!0,c=0;c<a.length;c++)(!1&r||s>=r)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(i=!1,r<s&&(s=r));if(i){t.splice(l--,1);var u=o();void 0!==u&&(e=u)}}return e}r=r||0;for(var l=t.length;l>0&&t[l-1][2]>r;l--)t[l]=t[l-1];t[l]=[a,o,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,r,s=a[0],i=a[1],c=a[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(c)var l=c(n)}for(e&&e(a);u<s.length;u++)r=s[u],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(l)},a=self["webpackChunkpc_specs"]=self["webpackChunkpc_specs"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(8577)}));a=n.O(a)})();
//# sourceMappingURL=app-legacy.3159f059.js.map