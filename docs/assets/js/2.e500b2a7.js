(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{121:function(t,e,n){},122:function(t,e,n){},124:function(t,e,n){"use strict";var i=n(3),s=n(79)(!1),a=[].indexOf,r=!!a&&1/[1].indexOf(1,-0)<0;i(i.P+i.F*(r||!n(17)(a)),"Array",{indexOf:function(t){return r?a.apply(this,arguments)||0:s(this,t,arguments[1])}})},125:function(t,e,n){n(78)("match",1,function(t,e,n){return[function(n){"use strict";var i=t(this),s=null==n?void 0:n[e];return void 0!==s?s.call(n,i):new RegExp(n)[e](String(i))},n]})},127:function(t,e,n){var i=n(3);i(i.S,"Array",{isArray:n(80)})},128:function(t,e,n){n(78)("split",2,function(t,e,i){"use strict";var s=n(77),a=i,r=[].push;if("c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length){var o=void 0===/()??/.exec("")[1];i=function(t,e){var n=String(this);if(void 0===t&&0===e)return[];if(!s(t))return a.call(n,t,e);var i,l,u,c,h,p=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,v=void 0===e?4294967295:e>>>0,g=new RegExp(t.source,f+"g");for(o||(i=new RegExp("^"+g.source+"$(?!\\s)",f));(l=g.exec(n))&&!((u=l.index+l[0].length)>d&&(p.push(n.slice(d,l.index)),!o&&l.length>1&&l[0].replace(i,function(){for(h=1;h<arguments.length-2;h++)void 0===arguments[h]&&(l[h]=void 0)}),l.length>1&&l.index<n.length&&r.apply(p,l.slice(1)),c=l[0].length,d=u,p.length>=v));)g.lastIndex===l.index&&g.lastIndex++;return d===n.length?!c&&g.test("")||p.push(""):p.push(n.slice(d)),p.length>v?p.slice(0,v):p}}else"0".split(void 0,0).length&&(i=function(t,e){return void 0===t&&0===e?[]:a.call(this,t,e)});return[function(n,s){var a=t(this),r=null==n?void 0:n[e];return void 0!==r?r.call(n,a,s):i.call(String(a),n,s)},i]})},129:function(t,e,n){var i=n(2),s=n(84),a=n(8).f,r=n(82).f,o=n(77),l=n(130),u=i.RegExp,c=u,h=u.prototype,p=/a/g,f=/a/g,d=new u(p)!==p;if(n(9)&&(!d||n(7)(function(){return f[n(1)("match")]=!1,u(p)!=p||u(f)==f||"/a/i"!=u(p,"i")}))){u=function(t,e){var n=this instanceof u,i=o(t),a=void 0===e;return!n&&i&&t.constructor===u&&a?t:s(d?new c(i&&!a?t.source:t,e):c((i=t instanceof u)?t.source:t,i&&a?l.call(t):e),n?this:h,u)};for(var v=function(t){t in u||a(u,t,{configurable:!0,get:function(){return c[t]},set:function(e){c[t]=e}})},g=r(c),b=0;g.length>b;)v(g[b++]);h.constructor=u,u.prototype=h,n(13)(i,"RegExp",u)}n(52)("RegExp")},130:function(t,e,n){"use strict";var i=n(5);t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},131:function(t,e,n){"use strict";n(132)("link",function(t){return function(e){return t(this,"a","href",e)}})},132:function(t,e,n){var i=n(3),s=n(7),a=n(16),r=/"/g,o=function(t,e,n,i){var s=String(a(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(i).replace(r,"&quot;")+'"'),o+">"+s+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(o),i(i.P+i.F*s(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},133:function(t,e,n){"use strict";n(134)("trim",function(t){return function(){return t(this,3)}})},134:function(t,e,n){var i=n(3),s=n(16),a=n(7),r=n(135),o="["+r+"]",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),c=function(t,e,n){var s={},o=a(function(){return!!r[t]()||"​"!="​"[t]()}),l=s[t]=o?e(h):r[t];n&&(s[n]=l),i(i.P+i.F*o,"String",s)},h=c.trim=function(t,e){return t=String(s(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=c},135:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},136:function(t,e,n){"use strict";var i=n(121);n.n(i).a},137:function(t,e,n){"use strict";var i=n(122);n.n(i).a},139:function(t,e,n){"use strict";n.r(e);n(83);var i=n(0),s=(n(34),n(49),n(50),n(75),n(47),n(124),n(127),n(53),n(23),n(35),n(81),n(128),n(48),n(125),n(76),/#.*$/),a=/\.(md|html)$/,r=/\/$/,o=/^(https?:|mailto:|tel:)/;function l(t){return decodeURI(t).replace(s,"").replace(a,"")}function u(t){return o.test(t)}function c(t){if(u(t))return t;var e=t.match(s),n=e?e[0]:"",i=l(t);return r.test(i)?t:i+".html"+n}function h(t,e){var n=t.hash,i=function(t){var e=t.match(s);if(e)return e[0]}(e);return(!i||n===i)&&l(t.path)===l(e)}function p(t,e,n){n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var s=e.split("/");n&&s[s.length-1]||s.pop();for(var a=t.replace(/^\//,"").split("/"),r=0;r<a.length;r++){var o=a[r];".."===o?s.pop():"."!==o&&s.push(o)}""!==s[0]&&s.unshift("");return s.join("/")}(e,n));var i=l(e);return i in t?Object.assign({},t[i],{type:"page",path:c(t[i].path)}):(console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{})}function f(t,e,n,i){var s=n.pages,a=n.themeConfig,r=i&&a.locales&&a.locales[i]||a;if("auto"===(t.frontmatter.sidebar||r.sidebar||a.sidebar))return function(t){var e=d(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map(function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}})}]}(t);var o=r.sidebar||a.sidebar,u=s.reduce(function(t,e){return t[l(e.regularPath)]=e,t},{});if(o){var c=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(n))return{base:n,config:e[n]};var i;return{}}(e,o),h=c.base,f=c.config;return f?f.map(function(t){return function t(e,n,i,s){if("string"==typeof e)return p(n,e,i);if(Array.isArray(e))return Object.assign(p(n,e[0],i),{title:e[1]});s&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");var a=e.children||[];return{type:"group",title:e.title,children:a.map(function(e){return t(e,n,i,!0)}),collapsable:!1!==e.collapsable}}(t,u,h)}):[]}return[]}function d(t){var e;return(t=t.map(function(t){return Object.assign({},t)})).forEach(function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(function(t){return 2===t.level})}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}function g(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function b(t,e,n,i,s){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||a>s?null:t("ul",{class:"sidebar-sub-headers list-sans"},e.map(function(e){var r=h(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[g(t,n+"#"+e.slug,e.title,r),b(t,e.children,n,i,s,a+1)])}))}var m={functional:!0,props:["item"],render:function(t,e){var n=e.parent,i=n.$page,a=n.$site,r=n.$route,o=e.props.item,l=h(r,o.path),u="auto"===o.type?l||o.children.some(function(t){return h(r,o.basePath+"#"+t.slug)}):l,c=g(t,o.path,o.title||o.path,u),p=null!=i.frontmatter.sidebarDepth?i.frontmatter.sidebarDepth:a.themeConfig.sidebarDepth,f=null==p?1:p,v=!!a.themeConfig.displayAllHeaders;return"auto"===o.type?[c,b(t,o.children,o.basePath,r,f)]:(u||v)&&o.headers&&!s.test(o.path)?[c,b(t,d(o.headers),o.path,r,f)]:c}},_=n(6),k=Object(_.a)(m,void 0,void 0,!1,null,null,null);k.options.__file="SidebarLink.vue";var C=k.exports,x={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},$=Object(_.a)(x,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null);$.options.__file="DropdownTransition.vue";var y=$.exports,L={name:"SidebarGroup",components:{SidebarLink:C,DropdownTransition:y},props:["item","first","open","collapsable"]},w=Object(_.a)(L,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-group",class:{first:t.first,collapsable:t.collapsable}},[n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("ul",{ref:"items",staticClass:"sidebar-group-items list-sans"},t._l(t.item.children,function(t){return n("li",[n("SidebarLink",{attrs:{item:t}})],1)})):t._e()])],1)},[],!1,null,null,null);w.options.__file="SidebarGroup.vue";var S=w.exports,E=(n(129),n(30)),I=(n(51),n(131),{props:{item:{required:!0}},computed:{link:function(){return c(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some(function(e){return e===t.link}):"/"===this.link}},methods:{isExternal:u,isMailto:function(t){return/^mailto:/.test(t)},isTel:function(t){return/^tel:/.test(t)}}}),O=Object(_.a)(I,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("router-link",{staticClass:"nav-link",attrs:{exact:t.exact,to:t.link}},[t._v("\n  "+t._s(t.item.text)+"\n")])},[],!1,null,null,null);O.options.__file="NavLink.vue";var T=O.exports,j={components:{NavLink:T,DropdownTransition:y},props:{item:{required:!0}},data:function(){return{open:!1}},methods:{toggle:function(){this.open=!this.open}}},N=Object(_.a)(j,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v("\n      "+t._s(t.item.text)+"\n    ")]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v("\n          "+t._s(e.text)+"\n        ")]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)})):n("NavLink",{attrs:{item:e}})],1)}))])],1)},[],!1,null,null,null);N.options.__file="DropdownLink.vue";var P={components:{NavLink:T,DropdownLink:N.exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,s=this.$site.themeConfig.locales||{},a={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map(function(a){var r,o=e[a],l=s[a]&&s[a].label||o.lang;return o.lang===t.$lang?r=n:(r=n.replace(t.$localeConfig.path,a),i.some(function(t){return t.path===r})||(r=a)),{text:l,link:r}})};return Object(E.a)(this.userNav).concat([a])}return this.userNav},userLinks:function(){return(this.nav||[]).map(function(t){return Object.assign(v(t),{items:(t.items||[]).map(v)})})},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^\/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}},D=Object(_.a)(P,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"py-m"},[t._l(t.userLinks,function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()},[],!1,null,null,null);D.options.__file="NavLinks.vue";var U=D.exports;var R={components:{SidebarGroup:S,SidebarLink:C,NavLinks:U},props:["items"],data:function(){return{groupIndex:0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if("group"===i.type&&i.children.some(function(e){return h(t,e.path)}))return n}return-1}(this.$route,this.items);t>-1&&(this.groupIndex=t)},toggleGroup:function(t){this.groupIndex=t===this.groupIndex?-1:t}}},A=Object(_.a)(R,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"sidebar-content"},[t.items.length?n("ul",{staticClass:"sidebar-links list-sans"},t._l(t.items,function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,first:0===i,open:i===t.groupIndex,collapsable:e.collapsable||e.collapsible},on:{toggle:function(e){t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{item:e}})],1)})):t._e(),t._v(" "),n("NavLinks",{staticClass:"desktop-hide"})],1)])},[],!1,null,null,null);A.options.__file="Sidebar.vue";var H=A.exports,V={components:{NavLink:T,Sidebar:H},props:["sidebarItems","sidebarVisible"],computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},B=Object(_.a)(V,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("Sidebar",{staticClass:"sidebar",class:{hide:!t.sidebarVisible},attrs:{items:t.sidebarItems}}),t._v(" "),n("div",{staticClass:"hero mb"},[t.data.heroImage?n("img",{staticClass:"hero-img",attrs:{src:t.$withBase(t.data.heroImage),alt:"hero"}}):t._e(),t._v(" "),n("div",{staticClass:"overlay-color absolute full"}),t._v(" "),n("div",{staticClass:"hero-content"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"mb-s"},[t._v("\n          "+t._s(t.data.heroText||t.$title||"Hello")+"\n        ")]),t._v(" "),n("h4",{staticClass:"description"},[t._v("\n          "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n        ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action text-center"},[n("NavLink",{staticClass:"btn p",attrs:{item:t.actionLink}})],1):t._e()])])]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features container"},[n("div",{staticClass:"desktop-blobs flex-stretch"},t._l(t.data.features,function(e,i){return n("div",{key:i,staticClass:"feature desktop-blob-1-3 flex flex-direction-column"},[n("router-link",{staticClass:"full-x",attrs:{to:e.link}},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])],1)})),t._v(" "),n("Content",{staticClass:"custom"})],1):t._e()],1)},[],!1,null,null,null);B.options.__file="Home.vue";var M=B.exports,q=Object(_.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"btn-menu p-s",on:{click:function(e){t.$emit("sidebar-toggle")}}},[n("i",{staticClass:"icon-24 icon-24-menu"})])},[],!1,null,null,null);q.options.__file="SidebarButton.vue";var G=q.exports,F=(n(133),{data:function(){return{query:"",focused:!1,focusIndex:0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$localePath,i=function(e){return e.title&&e.title.toLowerCase().indexOf(t)>-1},s=[],a=0;a<e.length&&!(s.length>=5);a++){var r=e[a];if(this.getPageLocalePath(r)===n)if(i(r))s.push(r);else if(r.headers)for(var o=0;o<r.headers.length&&!(s.length>=5);o++){var l=r.headers[o];i(l)&&s.push(Object.assign({},r,{path:r.path+"#"+l.slug,header:l}))}}return s}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}}),J=(n(136),Object(_.a)(F,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.go(t.focusIndex)},function(e){return"button"in e||!t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?t.onUp(e):null},function(e){return"button"in e||!t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?t.onDown(e):null}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,function(e,i){return n("li",{staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){t.go(i)},mouseenter:function(e){t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})):t._e()])},[],!1,null,null,null));J.options.__file="SearchBox.vue";var X={components:{SidebarButton:G,NavLinks:U,SearchBox:J.exports}},Y=Object(_.a)(X,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("div",{staticClass:"container"},[n("div",{staticClass:"blobs"},[n("div",{staticClass:"blob-1 desktop-blob-1-2 flex"},[n("SidebarButton",{staticClass:"desktop-hide mr",on:{"sidebar-toggle":function(e){t.$emit("sidebar-toggle")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):n("div",{ref:"siteName",staticClass:"py-m sitename"},[t._v("\n            "+t._s(t.$siteTitle)+"\n          ")])])],1),t._v(" "),n("div",{staticClass:"blob-1-2 text-right"},[!1!==t.$site.themeConfig.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"hide desktop-show"})],1)])])])},[],!1,null,null,null);Y.options.__file="Navbar.vue";var W=Y.exports;function z(t,e,n){var i=[];e.forEach(function(t){"group"===t.type?i.push.apply(i,Object(E.a)(t.children||[])):i.push(t)});for(var s=0;s<i.length;s++){var a=i[s];if("page"===a.type&&a.path===decodeURIComponent(t.path))return i[s+n]}}var K={components:{Sidebar:H},props:["sidebarItems","sidebarVisible"],computed:{contentMounted:function(){return this.$vuepress.$get("contentMounted")},lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;if(!1!==n)return n?p(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,z(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;if(!1!==n)return n?p(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,z(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,s=void 0===i?"":i,a=t.docsBranch,o=void 0===a?"master":a,u=t.docsRepo,c=void 0===u?e:u,h=l(this.$page.path);return r.test(h)?h+="README.md":h+=".md",c&&n?this.createEditLink(e,c,s,o,h):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,s){return/bitbucket.org/.test(t)?(o.test(e)?e:t).replace(r,"")+"/".concat(i)+(n?"/"+n.replace(r,""):"")+s+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(o.test(e)?e:"https://github.com/".concat(e)).replace(r,"")+"/edit/".concat(i)+(n?"/"+n.replace(r,""):"")+s}}},Q=Object(_.a)(K,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"desktop-blobs"},[n("Sidebar",{staticClass:"sidebar desktop-blob-1-4",class:{hide:!t.sidebarVisible},attrs:{items:t.sidebarItems}}),t._v(" "),n("div",{staticClass:"page blob-1 desktop-blob-3-4"},[n("Content"),t._v(" "),t.contentMounted?n("div",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n            "+t._s(t.editLinkText)+"\n          ")]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v("\n            "+t._s(t.lastUpdatedText)+":\n          ")]),t._v(" "),n("span",{staticClass:"time"},[t._v("\n            "+t._s(t.lastUpdated)+"\n          ")])]):t._e()]):t._e(),t._v(" "),t.contentMounted&&(t.prev||t.next)?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n            ←\n            "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n              "+t._s(t.prev.title||t.prev.path)+"\n            ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n              "+t._s(t.next.title||t.next.path)+"\n            ")]):t._e(),t._v("→\n          ")],1):t._e()])]):t._e()],1)],1)])},[],!1,null,null,null);Q.options.__file="Page.vue";var Z=Q.exports,tt={},et=Object(_.a)(tt,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("div",{staticClass:"container"},[this._v("\n    Footer\n  ")])])}],!1,null,null,null);et.options.__file="Footer.vue";var nt={components:{Home:M,Page:Z,Navbar:W,Footer:et.exports},data:function(){return{sidebarVisible:!1}},computed:{navbarShow:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},sidebarShow:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return f(this.$page,this.$page.regularPath,this.$site,this.$localePath)},layoutClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.navbarShow,"sidebar-open":this.sidebarVisible,"no-sidebar":!this.sidebarShow||!!this.$page.frontmatter.home},t]}},mounted:function(){var t=this;this.$router.beforeEach(function(t,e,n){t.path!==e.path&&i.a.component(t.name),n()}),this.$router.afterEach(function(){t.sidebarVisible=!1})},methods:{sidebarToggle:function(t){this.sidebarVisible="boolean"==typeof t?t:!this.sidebarVisible},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.sidebarToggle(!0):this.sidebarToggle(!1))}}},it=(n(137),Object(_.a)(nt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout",class:t.layoutClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.navbarShow?n("Navbar",{on:{"sidebar-toggle":t.sidebarToggle}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){t.sidebarToggle(!1)}}}),t._v(" "),n("main",{staticClass:"main"},[t.$page.frontmatter.home?n("Home",{attrs:{"sidebar-items":t.sidebarItems,"sidebar-visible":t.sidebarVisible}}):n("Page",{attrs:{"sidebar-items":t.sidebarItems,"sidebar-visible":t.sidebarVisible},on:{"sidebar-toggle":t.sidebarToggle}})],1),t._v(" "),n("Footer")],1)},[],!1,null,null,null));it.options.__file="Layout.vue";e.default=it.exports}}]);