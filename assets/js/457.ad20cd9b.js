(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[457],{6432:function(e,t,n){"use strict";n.d(t,{Z:function(){return H}});var a=n(7294),r=n(6010),l=n(4973),o=n(9306),c="skipToContent_1boX";function i(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var s=function(){var e=(0,a.useRef)(null);return(0,o.SL)((function(t){var n=t.location;e.current&&!n.hash&&i(e.current)})),a.createElement("div",{ref:e},a.createElement("a",{href:"#main",className:c,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&i(t)}},a.createElement(l.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},u="announcementBar_2YLT",m="announcementBarClose_SYnl",d="announcementBarContent_1ov9",f="announcementBarCloseable_2O3X";var v=function(){var e,t=(0,o.nT)(),n=t.isClosed,c=t.close,i=(0,o.LU)().announcementBar;if(!i)return null;var s=i.content,v=i.backgroundColor,E=i.textColor,h=i.isCloseable;return!s||h&&n?null:a.createElement("div",{className:u,style:{backgroundColor:v,color:E},role:"banner"},a.createElement("div",{className:(0,r.Z)(d,(e={},e[f]=h,e)),dangerouslySetInnerHTML:{__html:s}}),h?a.createElement("button",{type:"button",className:(0,r.Z)(m,"clean-btn"),onClick:c,"aria-label":(0,l.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},E=n(733),h=n(4597),b=n(412),g=(0,o.WA)("theme"),p="light",k="dark",_=function(e){return e===k?k:p},Z=function(e){(0,o.WA)("theme").set(_(e))},C=function(){var e=(0,o.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,r=e.respectPrefersColorScheme,l=(0,a.useState)(function(e){return b.Z.canUseDOM?_(document.documentElement.getAttribute("data-theme")):_(e)}(t)),c=l[0],i=l[1],s=(0,a.useCallback)((function(){i(p),Z(p)}),[]),u=(0,a.useCallback)((function(){i(k),Z(k)}),[]);return(0,a.useEffect)((function(){document.documentElement.setAttribute("data-theme",_(c))}),[c]),(0,a.useEffect)((function(){if(!n)try{var e=g.get();null!==e&&i(_(e))}catch(t){console.error(t)}}),[i]),(0,a.useEffect)((function(){n&&!r||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;i(t?k:p)}))}),[]),{isDarkTheme:c===k,setLightTheme:s,setDarkTheme:u}},y=n(7826);var N=function(e){var t=C(),n=t.isDarkTheme,r=t.setLightTheme,l=t.setDarkTheme;return a.createElement(y.Z.Provider,{value:{isDarkTheme:n,setLightTheme:r,setDarkTheme:l}},e.children)},w="docusaurus.tab.",L=function(){var e=(0,a.useState)({}),t=e[0],n=e[1],r=(0,a.useCallback)((function(e,t){(0,o.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,a.useEffect)((function(){try{var e={};(0,o._f)().forEach((function(t){if(t.startsWith(w)){var n=t.substring(w.length);e[n]=(0,o.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),r(e,t)}}},T=(0,a.createContext)(void 0);var S=function(e){var t=L(),n=t.tabGroupChoices,r=t.setTabGroupChoices;return a.createElement(T.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:r}},e.children)};function x(e){var t=e.children;return a.createElement(N,null,a.createElement(o.pl,null,a.createElement(S,null,a.createElement(o.L5,null,t))))}var A=n(2122),U=n(9105),F=n(2263),M=n(4996);function B(e){var t=e.locale,n=e.version,r=e.tag;return a.createElement(U.Z,null,t&&a.createElement("meta",{name:"docusaurus_locale",content:t}),n&&a.createElement("meta",{name:"docusaurus_version",content:n}),r&&a.createElement("meta",{name:"docusaurus_tag",content:r}))}var D=n(1007),I=n(5977);function P(){var e=(0,F.Z)().i18n,t=e.defaultLocale,n=e.locales,r=(0,o.l5)();return a.createElement(U.Z,null,n.map((function(e){return a.createElement("link",{key:e,rel:"alternate",href:r.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),a.createElement("link",{rel:"alternate",href:r.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function V(e){var t=e.permalink,n=(0,F.Z)().siteConfig.url,r=function(){var e=(0,F.Z)().siteConfig.url,t=(0,I.TH)().pathname;return e+(0,M.Z)(t)}(),l=t?""+n+t:r;return a.createElement(U.Z,null,a.createElement("meta",{property:"og:url",content:l}),a.createElement("link",{rel:"canonical",href:l}))}function G(e){var t=(0,F.Z)(),n=t.siteConfig,r=n.favicon,l=n.themeConfig,c=l.metadatas,i=l.image,s=t.i18n,u=s.currentLocale,m=s.localeConfigs,d=e.title,f=e.description,v=e.image,E=e.keywords,h=e.searchMetadatas,b=(0,M.Z)(r),g=(0,o.pe)(d),p=u,k=m[u].direction;return a.createElement(a.Fragment,null,a.createElement(U.Z,null,a.createElement("html",{lang:p,dir:k}),r&&a.createElement("link",{rel:"shortcut icon",href:b}),a.createElement("title",null,g),a.createElement("meta",{property:"og:title",content:g}),v||i&&a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),a.createElement(D.Z,{description:f,keywords:E,image:v}),a.createElement(V,null),a.createElement(P,null),a.createElement(B,(0,A.Z)({tag:o.HX,locale:u},h)),a.createElement(U.Z,null,c.map((function(e,t){return a.createElement("meta",(0,A.Z)({key:"metadata_"+t},e))}))))}var W=function(){(0,a.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var H=function(e){var t=e.children,n=e.noFooter,l=e.wrapperClassName,c=e.pageClassName;return W(),a.createElement(x,null,a.createElement(G,e),a.createElement(s,null),a.createElement(v,null),a.createElement(E.Z,null),a.createElement("div",{className:(0,r.Z)(o.kM.wrapper.main,l,c)},t),!n&&a.createElement(h.Z,null))}},9457:function(e,t,n){"use strict";n.r(t);var a=n(7294),r=n(6432),l=n(4973);t.default=function(){return a.createElement(r.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},7826:function(e,t,n){"use strict";var a=n(7294).createContext(void 0);t.Z=a},4597:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(7294),r=n(6742),l="main_footer_1nSI";var o=function(){return a.createElement("footer",{id:l},a.createElement("span",null,"\xa9 2021 \u0413\u0435\u043b\u0435\u043e\u0440 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"),a.createElement("span",null,a.createElement(r.Z,{to:"/politics"},"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438")),a.createElement("span",null,"\u0418\u043b\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0438\u0438 ",a.createElement("a",{href:"https://stories.freepik.com"},"Freepik Stories")),a.createElement("span",null,"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0434\u0438\u0437\u0430\u0439\u043d\u0430 \u0441\u0430\u0439\u0442\u0430 ",a.createElement("a",{href:"https://www.behance.net/gromova1_10792"},"\u0410\u043d\u0430\u0441\u0442\u0430\u0441\u0438\u044f \u0413\u0440\u043e\u043c\u043e\u0432\u0430")))}},733:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var a=n(7294),r=n(5977),l=n(6742),o="navigation_3MWE",c="nav_links_24fx",i="logo_25mm",s="mobile_navigation_3iqm",u="hamburger_button_Gk9L",m="mobile_nav_links_box_3EJj",d="mobile_doc_navivcation_2pLM",f="doc_menu_button_13o1",v="mobile_doc_nav_links_box_2wQx",E="mobile_doc_nav_links_category_2h-c",h="mobile_doc_nav_links_category_links_2BDB",b="mobile_doc_link_active_2UYx",g="mobile_doc_nav_link_soon_1S-Z",p="mobile_navigation_links_3ZsJ",k=n(4996),_=n(2263),Z=n(6010),C=function(e){var t=e.navLinks,n=e.isVisible,r=e.setVisible,o=(0,_.Z)().siteConfig,c=function(){r(!n)};return n?a.createElement("div",{className:m},a.createElement("div",{className:p},t.map((function(e){return a.createElement(l.Z,{to:e.docId?o.baseUrl+"docs/"+e.docId:e.to,key:e.label,onClick:c},e.label)})))):null},y=function(e){var t=e.docLinks,n=e.isVisible,r=e.setVisible,o=e.currentPath,c=(0,_.Z)().siteConfig.baseUrl+"docs/",i=o.split("/").slice(-2).join("/"),s=function(){r(!n)};return n?a.createElement("div",{className:v},t.map((function(e){return a.createElement("div",{key:e.label},a.createElement("div",{className:(0,Z.Z)(e.pending&&g,!e.pending&&E)},e.label),a.createElement("div",{className:h},e.links.map((function(e){return a.createElement(l.Z,{to:c+e.path,key:e.path,onClick:s,className:(0,Z.Z)(i===e.path&&b)},e.label)}))))}))):null};function N(){var e=(0,r.TH)().pathname,t=(0,_.Z)().siteConfig,n=t.themeConfig.navbar.items,m=t.themeConfig.docNavbar.collections,v=(0,k.Z)("/img/logo.svg"),E=(0,k.Z)("/img/mmenux.svg"),h=(0,k.Z)("/img/mmenu.svg"),b=(0,k.Z)("/img/docmenux.svg"),g=(0,k.Z)("/img/docmenu.svg"),p=(0,a.useState)(!1),Z=p[0],N=p[1],w=(0,a.useState)(!1),L=w[0],T=w[1];return a.createElement(a.Fragment,null,a.createElement("nav",{className:o},a.createElement("div",{className:i}),a.createElement("div",{className:c},n.map((function(e){return a.createElement(l.Z,{to:e.docId?t.baseUrl+"docs/"+e.docId:e.to,key:e.label},e.label)})))),a.createElement("nav",{className:s},a.createElement("div",{className:i},a.createElement(l.Z,{to:t.baseUrl},a.createElement("img",{src:v}))),a.createElement("button",{className:u,onClick:function(){N(!Z)}},a.createElement("img",{src:Z?E:h})),a.createElement(C,{navLinks:n,isVisible:Z,setVisible:N})),a.createElement("nav",{className:d},a.createElement("button",{className:f,onClick:function(){T(!L)}},a.createElement("img",{src:L?b:g}),a.createElement("span",null,"\u041c\u0435\u043d\u044e")),a.createElement(y,{docLinks:m,isVisible:L,setVisible:T,currentPath:e})))}var w=function(){return a.createElement(N,null)}}}]);