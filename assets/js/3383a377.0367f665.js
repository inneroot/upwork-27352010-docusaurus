(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[173],{6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var i=n(9756),r=n(7294),a=n(3727),u=n(2263),o=n(3919),l=n(412),c=(0,r.createContext)({collectLink:function(){}}),s=n(4996),m=n(8780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var f=function(e){var t,n,f=e.isNavLink,v=e.to,p=e.href,b=e.activeClassName,E=e.isActive,_=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,h=void 0===g||g,k=(0,i.Z)(e,d),Z=(0,u.Z)().siteConfig.trailingSlash,q=(0,s.C)().withBaseUrl,w=(0,r.useContext)(c),C=v||p,N=(0,o.Z)(C),x=null==C?void 0:C.replace("pathname://",""),L=void 0!==x?(n=x,h&&function(e){return e.startsWith("/")}(n)?q(n):n):void 0;L&&N&&(L=(0,m.applyTrailingSlash)(L,Z));var U,y=(0,r.useRef)(!1),O=f?a.OL:a.rU,B=l.Z.canUseIntersectionObserver;(0,r.useEffect)((function(){return!B&&N&&null!=L&&window.docusaurus.prefetch(L),function(){B&&U&&U.disconnect()}}),[L,B,N]);var I=null!==(t=null==L?void 0:L.startsWith("#"))&&void 0!==t&&t,S=!L||!N||I;return L&&N&&!I&&!_&&w.collectLink(L),S?r.createElement("a",Object.assign({href:L},C&&!N&&{target:"_blank",rel:"noopener noreferrer"},k)):r.createElement(O,Object.assign({},k,{onMouseEnter:function(){y.current||null==L||(window.docusaurus.preload(L),y.current=!0)},innerRef:function(e){var t,n;B&&e&&N&&(t=e,n=function(){null!=L&&window.docusaurus.prefetch(L)},(U=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(U.unobserve(t),U.disconnect(),n())}))}))).observe(t))},to:L||""},f&&{isActive:E,activeClassName:b}))}},3919:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,{b:function(){return i},Z:function(){return r}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return u}});var i=n(2263),r=n(3919);function a(){var e=(0,i.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var a=void 0===i?{}:i,u=a.forcePrependBaseUrl,o=void 0!==u&&u,l=a.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(o)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+s:s}(a,n,e,t)}}}function u(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;var n,i=e.split(/[#?]/)[0],r="/"===i?"/":(n=i,t?function(e){return e.endsWith("/")?e:e+"/"}(n):function(e){return e.endsWith("/")?e.slice(0,-1):e}(n));return e.replace(i,r)}},8780:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return i(r).default}});var a=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return i(a).default}})},9964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},3794:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var i=n(7294),r=n(6742),a="navigation_2l7T",u="nav_links_2A0B",o="logo_3zzs",l="mobile_navigation_6brD",c="hamburger_button_2R8Z",s="mobile_nav_links_box_3r7n",m="mobile_navigation_links_1ZD2",d=n(4996),f=n(2263),v=function(e){var t=e.navLinks;return e.isVisible?i.createElement("div",{className:s},i.createElement("div",{className:m},t.map((function(e){return i.createElement(r.Z,{to:e.docId?"docs/"+e.docId:e.to,key:e.label},e.label)})))):null};function p(){var e=(0,f.Z)().siteConfig.themeConfig.navbar.items,t=(0,d.Z)("/img/logo.svg"),n=(0,d.Z)("/img/mmenux.svg"),s=(0,d.Z)("/img/mmenu.svg"),m=(0,i.useState)(!1),p=m[0],b=m[1];return i.createElement(i.Fragment,null,i.createElement("nav",{className:a},i.createElement("div",{className:o},i.createElement("a",{href:(0,d.Z)("/")},i.createElement("img",{src:t}))),i.createElement("div",{className:u},e.map((function(e){return i.createElement(r.Z,{to:e.docId?"docs/"+e.docId:e.to,key:e.label},e.label)})))),i.createElement("nav",{className:l},i.createElement("div",{className:o},i.createElement("img",{src:t})),i.createElement("button",{className:c,onClick:function(){b(!p)}},i.createElement("img",{src:p?n:s})),i.createElement(v,{navLinks:e,isVisible:p})))}},5603:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var i=n(7294),r=n(3794),a=n(4597),u={main__content:"main__content_K1sd"};function o(){return i.createElement("main",{className:"main__box"},i.createElement(r.Z,null),i.createElement("section",{className:u.main__content__container},i.createElement("div",{className:u.main__content},i.createElement("h1",null,"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438"),i.createElement("h2",null,"\u0420\u0430\u0437\u0434\u0435\u043b 1"),i.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),i.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),i.createElement("h2",null,"\u0420\u0430\u0437\u0434\u0435\u043b 2"),i.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))),i.createElement(a.Z,null))}},4597:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var i=n(7294),r=n(6742),a="main_footer_1nSI";var u=function(){return i.createElement("footer",{id:a},i.createElement("span",null,"\xa9 2021 \u0413\u0435\u043b\u0435\u043e\u0440 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"),i.createElement("span",null,i.createElement(r.Z,{to:"/politics"},"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438")),i.createElement("span",null,"\u0418\u043b\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0438\u0438 ",i.createElement("a",{href:"#"},"Freepik Stories")),i.createElement("span",null,"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0434\u0438\u0437\u0430\u0439\u043d\u0430 \u0441\u0430\u0439\u0442\u0430 ",i.createElement("a",{href:"#"},"\u0410\u043d\u0430\u0441\u0442\u0430\u0441\u0438\u044f \u0413\u0440\u043e\u043c\u043e\u0432\u0430")))}}}]);