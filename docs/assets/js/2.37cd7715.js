(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{304:function(t,e,n){"use strict";var i=n(1),s=n(42).some,a=n(43),r=n(19),o=a("some"),l=r("some");i({target:"Array",proto:!0,forced:!o||!l},{some:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},306:function(t,e,n){"use strict";var i=n(166),s=n(6),a=n(14),r=n(23),o=n(167),l=n(168);i("match",1,(function(t,e,n){return[function(e){var n=r(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](String(n))},function(t){var i=n(e,t,this);if(i.done)return i.value;var r=s(t),c=String(this);if(!r.global)return l(r,c);var u=r.unicode;r.lastIndex=0;for(var h,p=[],d=0;null!==(h=l(r,c));){var f=String(h[0]);p[d]=f,""===f&&(r.lastIndex=o(c,a(r.lastIndex),u)),d++}return 0===d?null:p}]}))},307:function(t,e,n){},310:function(t,e,n){"use strict";var i=n(166),s=n(165),a=n(6),r=n(23),o=n(97),l=n(167),c=n(14),u=n(168),h=n(66),p=n(2),d=[].push,f=Math.min,v=!p((function(){return!RegExp(4294967295,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(r(this)),a=void 0===n?4294967295:n>>>0;if(0===a)return[];if(void 0===t)return[i];if(!s(t))return e.call(i,t,a);for(var o,l,c,u=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,v=new RegExp(t.source,p+"g");(o=h.call(v,i))&&!((l=v.lastIndex)>f&&(u.push(i.slice(f,o.index)),o.length>1&&o.index<i.length&&d.apply(u,o.slice(1)),c=o[0].length,f=l,u.length>=a));)v.lastIndex===o.index&&v.lastIndex++;return f===i.length?!c&&v.test("")||u.push(""):u.push(i.slice(f)),u.length>a?u.slice(0,a):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var s=r(this),a=null==e?void 0:e[t];return void 0!==a?a.call(e,s,n):i.call(String(s),e,n)},function(t,s){var r=n(i,t,this,s,i!==e);if(r.done)return r.value;var h=a(t),p=String(this),d=o(h,RegExp),g=h.unicode,b=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(v?"y":"g"),m=new d(v?h:"^(?:"+h.source+")",b),_=void 0===s?4294967295:s>>>0;if(0===_)return[];if(0===p.length)return null===u(m,p)?[p]:[];for(var k=0,C=0,x=[];C<p.length;){m.lastIndex=v?C:0;var $,y=u(m,v?p:p.slice(C));if(null===y||($=f(c(m.lastIndex+(v?0:C)),p.length))===k)C=l(p,C,g);else{if(x.push(p.slice(k,C)),x.length===_)return x;for(var L=1;L<=y.length-1;L++)if(x.push(y[L]),x.length===_)return x;C=k=$}}return x.push(p.slice(k)),x}]}),!v)},311:function(t,e,n){var i=n(7),s=n(4),a=n(95),r=n(312),o=n(9).f,l=n(65).f,c=n(165),u=n(98),h=n(171),p=n(11),d=n(2),f=n(28).set,v=n(169),g=n(3)("match"),b=s.RegExp,m=b.prototype,_=/a/g,k=/a/g,C=new b(_)!==_,x=h.UNSUPPORTED_Y;if(i&&a("RegExp",!C||x||d((function(){return k[g]=!1,b(_)!=_||b(k)==k||"/a/i"!=b(_,"i")})))){for(var $=function(t,e){var n,i=this instanceof $,s=c(t),a=void 0===e;if(!i&&s&&t.constructor===$&&a)return t;C?s&&!a&&(t=t.source):t instanceof $&&(a&&(e=u.call(t)),t=t.source),x&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var o=r(C?new b(t,e):b(t,e),i?this:m,$);return x&&n&&f(o,{sticky:n}),o},y=function(t){t in $||o($,t,{configurable:!0,get:function(){return b[t]},set:function(e){b[t]=e}})},L=l(b),w=0;L.length>w;)y(L[w++]);m.constructor=$,$.prototype=m,p(s,"RegExp",$)}v("RegExp")},312:function(t,e,n){var i=n(5),s=n(96);t.exports=function(t,e,n){var a,r;return s&&"function"==typeof(a=e.constructor)&&a!==n&&i(r=a.prototype)&&r!==n.prototype&&s(t,r),t}},313:function(t,e,n){"use strict";var i=n(1),s=n(314);i({target:"String",proto:!0,forced:n(315)("link")},{link:function(t){return s(this,"a","href",t)}})},314:function(t,e,n){var i=n(23),s=/"/g;t.exports=function(t,e,n,a){var r=String(i(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(a).replace(s,"&quot;")+'"'),o+">"+r+"</"+e+">"}},315:function(t,e,n){var i=n(2);t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},316:function(t,e,n){"use strict";n(307)},325:function(t,e,n){"use strict";n.r(e);n(100);var i=n(0),s=(n(304),n(63),n(29),n(92),n(174),n(99),n(173),n(170),n(64),n(306),n(91),n(310),n(94),/#.*$/),a=/\.(md|html)$/,r=/\/$/,o=/^(https?:|mailto:|tel:)/;function l(t){return decodeURI(t).replace(s,"").replace(a,"")}function c(t){return o.test(t)}function u(t){if(c(t))return t;var e=t.match(s),n=e?e[0]:"",i=l(t);return r.test(i)?t:i+".html"+n}function h(t,e){var n=t.hash,i=function(t){var e=t.match(s);if(e)return e[0]}(e);return(!i||n===i)&&l(t.path)===l(e)}function p(t,e,n){n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var s=e.split("/");n&&s[s.length-1]||s.pop();for(var a=t.replace(/^\//,"").split("/"),r=0;r<a.length;r++){var o=a[r];".."===o?s.pop():"."!==o&&s.push(o)}""!==s[0]&&s.unshift("");return s.join("/")}(e,n));var i=l(e);return i in t?Object.assign({},t[i],{type:"page",path:u(t[i].path)}):(console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{})}function d(t,e,n,i){var s=n.pages,a=n.themeConfig,r=i&&a.locales&&a.locales[i]||a;if("auto"===(t.frontmatter.sidebar||r.sidebar||a.sidebar))return function(t){var e=f(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var o=r.sidebar||a.sidebar,c=s.reduce((function(t,e){return t[l(e.regularPath)]=e,t}),{});if(o){var u=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(n))return{base:n,config:e[n]};var i;return{}}(e,o),h=u.base,d=u.config;return d?d.map((function(t){return function t(e,n,i,s){if("string"==typeof e)return p(n,e,i);if(Array.isArray(e))return Object.assign(p(n,e[0],i),{title:e[1]});s&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");var a=e.children||[];return{type:"group",title:e.title,children:a.map((function(e){return t(e,n,i,!0)})),collapsable:!1!==e.collapsable}}(t,c,h)})):[]}return[]}function f(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}function g(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function b(t,e,n,i,s){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||a>s?null:t("ul",{class:"sidebar-sub-headers list-sans"},e.map((function(e){var r=h(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[g(t,n+"#"+e.slug,e.title,r),b(t,e.children,n,i,s,a+1)])})))}var m={functional:!0,props:["item"],render:function(t,e){var n=e.parent,i=n.$page,a=n.$site,r=n.$route,o=e.props.item,l=h(r,o.path),c="auto"===o.type?l||o.children.some((function(t){return h(r,o.basePath+"#"+t.slug)})):l,u=g(t,o.path,o.title||o.path,c),p=null!=i.frontmatter.sidebarDepth?i.frontmatter.sidebarDepth:a.themeConfig.sidebarDepth,d=null==p?1:p,v=!!a.themeConfig.displayAllHeaders;return"auto"===o.type?[u,b(t,o.children,o.basePath,r,d)]:(c||v)&&o.headers&&!s.test(o.path)?[u,b(t,f(o.headers),o.path,r,d)]:u}},_=n(41),k=Object(_.a)(m,void 0,void 0,!1,null,null,null).exports,C={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},x=Object(_.a)(C,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null).exports,$={name:"SidebarGroup",components:{SidebarLink:k,DropdownTransition:x},props:["item","first","open","collapsable"]},y=Object(_.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-group",class:{first:t.first,collapsable:t.collapsable}},[n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("ul",{ref:"items",staticClass:"sidebar-group-items list-sans"},t._l(t.item.children,(function(t){return n("li",[n("SidebarLink",{attrs:{item:t}})],1)})),0):t._e()])],1)}),[],!1,null,null,null).exports,L=(n(172),n(93),n(311),n(101),n(39)),w=(n(313),{props:{item:{required:!0}},computed:{link:function(){return u(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link}},methods:{isExternal:c,isMailto:function(t){return/^mailto:/.test(t)},isTel:function(t){return/^tel:/.test(t)}}}),E=Object(_.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("router-link",{staticClass:"nav-link",attrs:{exact:t.exact,to:t.link}},[t._v("\n  "+t._s(t.item.text)+"\n")])}),[],!1,null,null,null).exports,S={components:{NavLink:E,DropdownTransition:x},props:{item:{required:!0}},data:function(){return{open:!1}},methods:{toggle:function(){this.open=!this.open}}},T={components:{NavLink:E,DropdownLink:Object(_.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v("\n      "+t._s(t.item.text)+"\n    ")]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v("\n          "+t._s(e.text)+"\n        ")]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)})),0):n("NavLink",{attrs:{item:e}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,s=this.$site.themeConfig.locales||{},a={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map((function(a){var r,o=e[a],l=s[a]&&s[a].label||o.lang;return o.lang===t.$lang?r=n:(r=n.replace(t.$localeConfig.path,a),i.some((function(t){return t.path===r}))||(r=a)),{text:l,link:r}}))};return[].concat(Object(L.a)(this.userNav),[a])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(v(t),{items:(t.items||[]).map(v)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}},I=Object(_.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"py-m"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports;var O={components:{SidebarGroup:y,SidebarLink:k,NavLinks:I},props:["items"],data:function(){return{groupIndex:0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if("group"===i.type&&i.children.some((function(e){return h(t,e.path)})))return n}return-1}(this.$route,this.items);t>-1&&(this.groupIndex=t)},toggleGroup:function(t){this.groupIndex=t===this.groupIndex?-1:t}}},j=Object(_.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"sidebar-content"},[t.items.length?n("ul",{staticClass:"sidebar-links list-sans"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,first:0===i,open:i===t.groupIndex,collapsable:e.collapsable||e.collapsible},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{item:e}})],1)})),0):t._e(),t._v(" "),n("NavLinks",{staticClass:"desktop-hide"})],1)])}),[],!1,null,null,null).exports,N={components:{NavLink:E,Sidebar:j},props:["sidebarItems","sidebarVisible"],computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},U=Object(_.a)(N,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("Sidebar",{staticClass:"sidebar",class:{hide:!t.sidebarVisible},attrs:{items:t.sidebarItems}}),t._v(" "),n("div",{staticClass:"hero mb-xl"},[n("picture",{staticClass:"hero-img",attrs:{alt:"hero"}},[n("source",{attrs:{media:"(min-width: 764px)",srcset:t.$withBase(t.data.image)}}),t._v(" "),n("source",{attrs:{media:"(min-width: 352px)",srcset:t.$withBase(t.data.imageTablet)}}),t._v(" "),t.data.image?n("img",{attrs:{src:t.$withBase(t.data.imageMobile)}}):t._e()]),t._v(" "),n("div",{staticClass:"overlay-color absolute full"}),t._v(" "),n("div",{staticClass:"hero-content"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"mb-s"},[t._v("\n          "+t._s(t.data.heroText||t.$title||"Hello")+"\n        ")]),t._v(" "),n("h4",{staticClass:"description"},[t._v("\n          "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n        ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action text-center"},[n("NavLink",{staticClass:"btn p",attrs:{item:t.actionLink}})],1):t._e()])])]),t._v(" "),n("div",{staticClass:"container mb-l"},[n("div",{staticClass:"desktop-blobs"},[t._l(t.data.features,(function(e,i){return t.data.features&&t.data.features.length?n("div",{key:i,staticClass:"desktop-blob-1-3"},[n("router-link",{attrs:{to:e.link}},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])],1):t._e()})),t._v(" "),t._l(t.data.specials,(function(e,i){return t.data.specials&&t.data.specials.length?n("div",{key:i,staticClass:"desktop-blob-2-3"},[n("router-link",{staticClass:"p border bg-neutral block",attrs:{to:e.link}},[n("h2",{staticClass:"flex"},[t._v("\n            "+t._s(e.title)+"\n            "),n("i",{staticClass:"icon-32 icon-business flex-right"})]),t._v(" "),n("p",{staticClass:"mb-0"},[t._v("\n            "+t._s(e.details)+"\n          ")])])],1):t._e()}))],2)]),t._v(" "),n("Content",{staticClass:"custom"})],1)}),[],!1,null,null,null).exports,D={components:{SidebarButton:Object(_.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"btn-menu py-s px-m",on:{click:function(e){return t.$emit("sidebar-toggle")}}},[n("i",{staticClass:"icon-24 icon-menu"})])}),[],!1,null,null,null).exports,NavLinks:I}},R=Object(_.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("div",{staticClass:"container"},[n("div",{staticClass:"blobs"},[n("div",{staticClass:"blob-1 desktop-blob-1-2 flex"},[n("SidebarButton",{staticClass:"desktop-hide",on:{"sidebar-toggle":function(e){return t.$emit("sidebar-toggle")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):n("div",{ref:"siteName",staticClass:"py-m sitename mr--"},[t._v("\n            "+t._s(t.$siteTitle)+"\n          ")])])],1),t._v(" "),n("div",{staticClass:"blob-1-2 text-right"},[n("NavLinks",{staticClass:"hide desktop-show"})],1)])])])}),[],!1,null,null,null).exports;function P(t,e,n){var i=[];e.forEach((function(t){"group"===t.type?i.push.apply(i,Object(L.a)(t.children||[])):i.push(t)}));for(var s=0;s<i.length;s++){var a=i[s];if("page"===a.type&&a.path===decodeURIComponent(t.path))return i[s+n]}}var V={components:{Sidebar:j},props:["sidebarItems","sidebarVisible"],computed:{contentMounted:function(){return this.$vuepress.$get("contentMounted")},lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;if(!1!==n)return n?p(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,P(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;if(!1!==n)return n?p(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,P(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,s=void 0===i?"":i,a=t.docsBranch,o=void 0===a?"master":a,c=t.docsRepo,u=void 0===c?e:c,h=l(this.$page.path);return r.test(h)?h+="README.md":h+=".md",u&&n?this.createEditLink(e,u,s,o,h):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,s){return/bitbucket.org/.test(t)?(o.test(e)?e:t).replace(r,"")+"/".concat(i)+(n?"/"+n.replace(r,""):"")+s+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(o.test(e)?e:"https://github.com/".concat(e)).replace(r,"")+"/edit/".concat(i)+(n?"/"+n.replace(r,""):"")+s}}},H={},M={components:{Home:U,Page:Object(_.a)(V,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"desktop-blobs"},[n("Sidebar",{staticClass:"sidebar desktop-blob-1-3 large-blob-1-4",class:{hide:!t.sidebarVisible},attrs:{items:t.sidebarItems}}),t._v(" "),n("div",{staticClass:"desktop-blob-2-3 large-blob-3-4"},[n("Content",{attrs:{"slot-key":"header"}}),t._v(" "),n("Content"),t._v(" "),t.contentMounted?n("div",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n            "+t._s(t.editLinkText)+"\n          ")]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v("\n            "+t._s(t.lastUpdatedText)+":\n          ")]),t._v(" "),n("span",{staticClass:"time"},[t._v("\n            "+t._s(t.lastUpdated)+"\n          ")])]):t._e()]):t._e(),t._v(" "),t.contentMounted&&(t.prev||t.next)?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n            ←\n            "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n              "+t._s(t.prev.title||t.prev.path)+"\n            ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n              "+t._s(t.next.title||t.next.path)+"\n            ")]):t._e(),t._v("→\n          ")],1):t._e()])]):t._e()],1)],1)])}),[],!1,null,null,null).exports,Navbar:R,Footer:Object(_.a)(H,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("div",{staticClass:"container py"},[e("ul",{staticClass:"list-sans"},[e("li",[this._v("\n        email : "),e("a",{attrs:{href:"mailto:hello@annegabrielle.com"}},[this._v("hello@annegabrielle.com")])]),this._v(" "),e("li",[this._v("\n        tél. : "),e("a",{attrs:{href:"tel:+330767820991"}},[this._v("07.67.82.09.91")])])]),this._v(" "),e("p",{staticClass:"h5 mb-0"},[this._v("\n      © Anne Gabrielle Dumont - 2019\n    ")])])])}],!1,null,null,null).exports},data:function(){return{sidebarVisible:!1}},computed:{navbarShow:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},sidebarShow:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return d(this.$page,this.$page.regularPath,this.$site,this.$localePath)},layoutClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.navbarShow,"sidebar-open":this.sidebarVisible,"no-sidebar":!this.sidebarShow||!!this.$page.frontmatter.home},t]}},mounted:function(){var t=this;this.$router.beforeEach((function(t,e,n){t.path!==e.path&&i.a.component(t.name),n()})),this.$router.afterEach((function(){t.sidebarVisible=!1}))},methods:{sidebarToggle:function(t){this.sidebarVisible="boolean"==typeof t?t:!this.sidebarVisible},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.sidebarToggle(!0):this.sidebarToggle(!1))}}},A=(n(316),Object(_.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout",class:t.layoutClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.navbarShow?n("Navbar",{on:{"sidebar-toggle":t.sidebarToggle}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.sidebarToggle(!1)}}}),t._v(" "),n("main",{staticClass:"main"},[t.$page.frontmatter.home?n("Home",{attrs:{"sidebar-items":t.sidebarItems,"sidebar-visible":t.sidebarVisible}}):n("Page",{attrs:{"sidebar-items":t.sidebarItems,"sidebar-visible":t.sidebarVisible},on:{"sidebar-toggle":t.sidebarToggle}})],1),t._v(" "),n("Footer")],1)}),[],!1,null,null,null));e.default=A.exports}}]);