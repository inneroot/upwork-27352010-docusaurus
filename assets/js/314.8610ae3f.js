(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[314],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2570:function(e,t,n){"use strict";n.d(t,{N:function(){return p},Z:function(){return d}});var r=n(9756),o=n(2122),a=n(7294),l=n(6010),c=n(4973),i=n(9306),s="enhancedAnchor_1Ezv",u="h1Heading_2x3C",m=["id"],p=function(e){var t=Object.assign({},e);return a.createElement("header",null,a.createElement("h1",(0,o.Z)({},t,{id:void 0,className:u}),t.children))},d=function(e){return"h1"===e?p:(t=e,function(e){var n,o=e.id,u=(0,r.Z)(e,m),p=(0,i.LU)().navbar.hideOnScroll;return o?a.createElement(t,u,a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,l.Z)("anchor",(n={},n[s]=!p,n)),id:o}),u.children,a.createElement("a",{className:"hash-link",href:"#"+o,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):a.createElement(t,u)});var t}},6432:function(e,t,n){"use strict";n.d(t,{Z:function(){return W}});var r=n(7294),o=n(6010),a=n(4973),l=n(9306),c="skipToContent_1boX";function i(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var s=function(){var e=(0,r.useRef)(null);return(0,l.SL)((function(t){var n=t.location;e.current&&!n.hash&&i(e.current)})),r.createElement("div",{ref:e},r.createElement("a",{href:"#main",className:c,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&i(t)}},r.createElement(a.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},u="announcementBar_2YLT",m="announcementBarClose_SYnl",p="announcementBarContent_1ov9",d="announcementBarCloseable_2O3X";var f=function(){var e,t=(0,l.nT)(),n=t.isClosed,c=t.close,i=(0,l.LU)().announcementBar;if(!i)return null;var s=i.content,f=i.backgroundColor,h=i.textColor,y=i.isCloseable;return!s||y&&n?null:r.createElement("div",{className:u,style:{backgroundColor:f,color:h},role:"banner"},r.createElement("div",{className:(0,o.Z)(p,(e={},e[d]=y,e)),dangerouslySetInnerHTML:{__html:s}}),y?r.createElement("button",{type:"button",className:(0,o.Z)(m,"clean-btn"),onClick:c,"aria-label":(0,a.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},h=n(733),y=n(4597),g=n(412),v=(0,l.WA)("theme"),b="light",k="dark",E=function(e){return e===k?k:b},C=function(e){(0,l.WA)("theme").set(E(e))},T=function(){var e=(0,l.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,o=e.respectPrefersColorScheme,a=(0,r.useState)(function(e){return g.Z.canUseDOM?E(document.documentElement.getAttribute("data-theme")):E(e)}(t)),c=a[0],i=a[1],s=(0,r.useCallback)((function(){i(b),C(b)}),[]),u=(0,r.useCallback)((function(){i(k),C(k)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",E(c))}),[c]),(0,r.useEffect)((function(){if(!n)try{var e=v.get();null!==e&&i(E(e))}catch(t){console.error(t)}}),[i]),(0,r.useEffect)((function(){n&&!o||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;i(t?k:b)}))}),[]),{isDarkTheme:c===k,setLightTheme:s,setDarkTheme:u}},Z=n(7826);var j=function(e){var t=T(),n=t.isDarkTheme,o=t.setLightTheme,a=t.setDarkTheme;return r.createElement(Z.Z.Provider,{value:{isDarkTheme:n,setLightTheme:o,setDarkTheme:a}},e.children)},w="docusaurus.tab.",O=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],o=(0,r.useCallback)((function(e,t){(0,l.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{var e={};(0,l._f)().forEach((function(t){if(t.startsWith(w)){var n=t.substring(w.length);e[n]=(0,l.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),o(e,t)}}},L=(0,r.createContext)(void 0);var x=function(e){var t=O(),n=t.tabGroupChoices,o=t.setTabGroupChoices;return r.createElement(L.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:o}},e.children)};function N(e){var t=e.children;return r.createElement(j,null,r.createElement(l.pl,null,r.createElement(x,null,r.createElement(l.L5,null,t))))}var P=n(2122),S=n(9105),_=n(2263),B=n(4996);function D(e){var t=e.locale,n=e.version,o=e.tag;return r.createElement(S.Z,null,t&&r.createElement("meta",{name:"docusaurus_locale",content:t}),n&&r.createElement("meta",{name:"docusaurus_version",content:n}),o&&r.createElement("meta",{name:"docusaurus_tag",content:o}))}var A=n(1007),I=n(5977);function M(){var e=(0,_.Z)().i18n,t=e.defaultLocale,n=e.locales,o=(0,l.l5)();return r.createElement(S.Z,null,n.map((function(e){return r.createElement("link",{key:e,rel:"alternate",href:o.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.createElement("link",{rel:"alternate",href:o.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function R(e){var t=e.permalink,n=(0,_.Z)().siteConfig.url,o=function(){var e=(0,_.Z)().siteConfig.url,t=(0,I.TH)().pathname;return e+(0,B.Z)(t)}(),a=t?""+n+t:o;return r.createElement(S.Z,null,r.createElement("meta",{property:"og:url",content:a}),r.createElement("link",{rel:"canonical",href:a}))}function U(e){var t=(0,_.Z)(),n=t.siteConfig,o=n.favicon,a=n.themeConfig,c=a.metadatas,i=a.image,s=t.i18n,u=s.currentLocale,m=s.localeConfigs,p=e.title,d=e.description,f=e.image,h=e.keywords,y=e.searchMetadatas,g=(0,B.Z)(o),v=(0,l.pe)(p),b=u,k=m[u].direction;return r.createElement(r.Fragment,null,r.createElement(S.Z,null,r.createElement("html",{lang:b,dir:k}),o&&r.createElement("link",{rel:"shortcut icon",href:g}),r.createElement("title",null,v),r.createElement("meta",{property:"og:title",content:v}),f||i&&r.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.createElement(A.Z,{description:d,keywords:h,image:f}),r.createElement(R,null),r.createElement(M,null),r.createElement(D,(0,P.Z)({tag:l.HX,locale:u},y)),r.createElement(S.Z,null,c.map((function(e,t){return r.createElement("meta",(0,P.Z)({key:"metadata_"+t},e))}))))}var z=function(){(0,r.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var W=function(e){var t=e.children,n=e.noFooter,a=e.wrapperClassName,c=e.pageClassName;return z(),r.createElement(N,null,r.createElement(U,e),r.createElement(s,null),r.createElement(f,null),r.createElement(h.Z,null),r.createElement("div",{className:(0,o.Z)(l.kM.wrapper.main,a,c)},t),!n&&r.createElement(y.Z,null))}},3209:function(e,t,n){"use strict";n.d(t,{Z:function(){return D}});var r=n(7294),o=n(6742),a=n(2122),l=n(6010),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:n(7410).Z,theme:c};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},f=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=u({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=u({},n,{backgroundColor:null}),o};function h(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var y=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?f(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=u({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==o&&(a.style=void 0!==a.style?u({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),s(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(c))}})),s(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,l=u({},h(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?u({},l.style,o):o),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),s(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,l=0,c=[],i=[c];l>-1;){for(;(a=r[l]++)<o[l];){var s=void 0,u=t[l],f=n[l][a];if("string"==typeof f?(u=l>0?u:["plain"],s=f):(u=d(u,f.type),f.alias&&(u=d(u,f.alias)),s=f.content),"string"==typeof s){var h=s.split(m),y=h.length;c.push({types:u,content:h[0]});for(var g=1;g<y;g++)p(c),i.push(c=[]),c.push({types:u,content:h[g]})}else l++,t.push(u),n.push(s),r.push(0),o.push(s.length)}l--,t.pop(),n.pop(),r.pop(),o.pop()}return p(c),i}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var g=n(7594),v=n.n(g),b={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},k=n(7356),E=n(9306),C=function(){var e=(0,E.LU)().prism,t=(0,k.Z)().isDarkTheme,n=e.theme||b,r=e.darkTheme||n;return t?r:n},T=n(4973),Z="codeBlockContainer_21wf",j="codeBlockContent_1izB",w="codeBlockTitle_3oXa",O="codeBlock_1uaJ",L="codeBlockWithTitle_mnNm",x="copyButton_3XUZ",N="codeBlockLines_3_dS",P=/{([\d,-]+)}/,S=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")};function _(e){var t=e.children,n=e.className,o=e.metastring,c=e.title,s=(0,E.LU)().prism,u=(0,r.useState)(!1),m=u[0],p=u[1],d=(0,r.useState)(!1),f=d[0],h=d[1];(0,r.useEffect)((function(){h(!0)}),[]);var g=(0,E.bc)(o)||c,b=(0,r.useRef)(null),k=[],_=C(),B=Array.isArray(t)?t.join(""):t;if(o&&P.test(o)){var D=o.match(P)[1];k=v()(D).filter((function(e){return e>0}))}var A=n&&n.replace(/language-/,"");!A&&s.defaultLanguage&&(A=s.defaultLanguage);var I=B.replace(/\n$/,"");if(0===k.length&&void 0!==A){for(var M,R="",U=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return S(["js","jsBlock"]);case"jsx":case"tsx":return S(["js","jsBlock","jsx"]);case"html":return S(["js","jsBlock","html"]);case"python":case"py":return S(["python"]);default:return S()}}(A),z=B.replace(/\n$/,"").split("\n"),W=0;W<z.length;){var F=W+1,G=z[W].match(U);if(null!==G){switch(G.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":R+=F+",";break;case"highlight-start":M=F;break;case"highlight-end":R+=M+"-"+(F-1)+","}z.splice(W,1)}else W+=1}k=v()(R),I=z.join("\n")}var X=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,o=document.createElement("textarea"),a=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var l=document.getSelection(),c=!1;l.rangeCount>0&&(c=l.getRangeAt(0)),r.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}o.remove(),c&&(l.removeAllRanges(),l.addRange(c)),a&&a.focus()}(I),p(!0),setTimeout((function(){return p(!1)}),2e3)};return r.createElement(y,(0,a.Z)({},i,{key:String(f),theme:_,code:I,language:A}),(function(e){var t,n=e.className,o=e.style,c=e.tokens,i=e.getLineProps,s=e.getTokenProps;return r.createElement("div",{className:Z},g&&r.createElement("div",{style:o,className:w},g),r.createElement("div",{className:(0,l.Z)(j,A)},r.createElement("pre",{tabIndex:0,className:(0,l.Z)(n,O,"thin-scrollbar",(t={},t[L]=g,t)),style:o},r.createElement("code",{className:N},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=i({line:e,key:t});return k.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,a.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,a.Z)({key:t},s({token:e,key:t})))})))})))),r.createElement("button",{ref:b,type:"button","aria-label":(0,T.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,l.Z)(x,"clean-btn"),onClick:X},m?r.createElement(T.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(T.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var B=n(2570),D={code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(_,e):r.createElement("code",e)},a:function(e){return r.createElement(o.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:r.createElement(_,(0,r.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:(0,B.Z)("h1"),h2:(0,B.Z)("h2"),h3:(0,B.Z)("h3"),h4:(0,B.Z)("h4"),h5:(0,B.Z)("h5"),h6:(0,B.Z)("h6")}},7826:function(e,t,n){"use strict";var r=n(7294).createContext(void 0);t.Z=r},7356:function(e,t,n){"use strict";var r=n(7294),o=n(7826);t.Z=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);