(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[13],{2433:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var a=n(7294),r=n(6010),l=n(6742),c="sidebar_2-wG",i="sidebarItemTitle_2x3I",o="sidebarItemList_GFWq",s="sidebarItem_2f4k",u="sidebarItemLink_1UTh",m="sidebarItemLinkActive_2RDx",d=n(4973);function f(e){var t=e.sidebar;return 0===t.items.length?null:a.createElement("nav",{className:(0,r.Z)(c,"thin-scrollbar"),"aria-label":(0,d.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,r.Z)(i,"margin-bottom--md")},t.title),a.createElement("ul",{className:o},t.items.map((function(e){return a.createElement("li",{key:e.permalink,className:s},a.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:m},e.title))}))))}},8664:function(e,t,n){"use strict";n.r(t);var a=n(7294),r=n(6432),l=n(6742),c=n(2433),i=n(4973),o=n(9306);t.default=function(e){var t=e.tags,n=e.sidebar,s=(0,i.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"}),u={};Object.keys(t).forEach((function(e){var t=function(e){return e[0].toUpperCase()}(e);u[t]=u[t]||[],u[t].push(e)}));var m=Object.entries(u).sort((function(e,t){var n=e[0],a=t[0];return n.localeCompare(a)})).map((function(e){var n=e[0],r=e[1];return a.createElement("article",{key:n},a.createElement("h2",null,n),r.map((function(e){return a.createElement(l.Z,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")")})),a.createElement("hr",null))})).filter((function(e){return null!=e}));return a.createElement(r.Z,{title:s,wrapperClassName:o.kM.wrapper.blogPages,pageClassName:o.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"}},a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement("aside",{className:"col col--3"},a.createElement(c.Z,{sidebar:n})),a.createElement("main",{className:"col col--7"},a.createElement("h1",null,s),a.createElement("section",{className:"margin-vert--lg"},m)))))}},6432:function(e,t,n){"use strict";n.d(t,{Z:function(){return q}});var a=n(7294),r=n(6010),l=n(4973),c=n(9306),i="skipToContent_1boX";function o(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var s=function(){var e=(0,a.useRef)(null);return(0,c.SL)((function(t){var n=t.location;e.current&&!n.hash&&o(e.current)})),a.createElement("div",{ref:e},a.createElement("a",{href:"#main",className:i,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&o(t)}},a.createElement(l.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},u="announcementBar_2YLT",m="announcementBarClose_SYnl",d="announcementBarContent_1ov9",f="announcementBarCloseable_2O3X";var v=function(){var e,t=(0,c.nT)(),n=t.isClosed,i=t.close,o=(0,c.LU)().announcementBar;if(!o)return null;var s=o.content,v=o.backgroundColor,E=o.textColor,b=o.isCloseable;return!s||b&&n?null:a.createElement("div",{className:u,style:{backgroundColor:v,color:E},role:"banner"},a.createElement("div",{className:(0,r.Z)(d,(e={},e[f]=b,e)),dangerouslySetInnerHTML:{__html:s}}),b?a.createElement("button",{type:"button",className:(0,r.Z)(m,"clean-btn"),onClick:i,"aria-label":(0,l.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},E=n(733),b=n(4597),g=n(412),h=(0,c.WA)("theme"),p="light",k="dark",C=function(e){return e===k?k:p},Z=function(e){(0,c.WA)("theme").set(C(e))},_=function(){var e=(0,c.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,r=e.respectPrefersColorScheme,l=(0,a.useState)(function(e){return g.Z.canUseDOM?C(document.documentElement.getAttribute("data-theme")):C(e)}(t)),i=l[0],o=l[1],s=(0,a.useCallback)((function(){o(p),Z(p)}),[]),u=(0,a.useCallback)((function(){o(k),Z(k)}),[]);return(0,a.useEffect)((function(){document.documentElement.setAttribute("data-theme",C(i))}),[i]),(0,a.useEffect)((function(){if(!n)try{var e=h.get();null!==e&&o(C(e))}catch(t){console.error(t)}}),[o]),(0,a.useEffect)((function(){n&&!r||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;o(t?k:p)}))}),[]),{isDarkTheme:i===k,setLightTheme:s,setDarkTheme:u}},y=n(7826);var L=function(e){var t=_(),n=t.isDarkTheme,r=t.setLightTheme,l=t.setDarkTheme;return a.createElement(y.Z.Provider,{value:{isDarkTheme:n,setLightTheme:r,setDarkTheme:l}},e.children)},N="docusaurus.tab.",T=function(){var e=(0,a.useState)({}),t=e[0],n=e[1],r=(0,a.useCallback)((function(e,t){(0,c.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,a.useEffect)((function(){try{var e={};(0,c._f)().forEach((function(t){if(t.startsWith(N)){var n=t.substring(N.length);e[n]=(0,c.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),r(e,t)}}},w=(0,a.createContext)(void 0);var A=function(e){var t=T(),n=t.tabGroupChoices,r=t.setTabGroupChoices;return a.createElement(w.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:r}},e.children)};function I(e){var t=e.children;return a.createElement(L,null,a.createElement(c.pl,null,a.createElement(A,null,a.createElement(c.L5,null,t))))}var M=n(2122),x=n(9105),S=n(2263),U=n(4996);function D(e){var t=e.locale,n=e.version,r=e.tag;return a.createElement(x.Z,null,t&&a.createElement("meta",{name:"docusaurus_locale",content:t}),n&&a.createElement("meta",{name:"docusaurus_version",content:n}),r&&a.createElement("meta",{name:"docusaurus_tag",content:r}))}var G=n(1007),B=n(5977);function W(){var e=(0,S.Z)().i18n,t=e.defaultLocale,n=e.locales,r=(0,c.l5)();return a.createElement(x.Z,null,n.map((function(e){return a.createElement("link",{key:e,rel:"alternate",href:r.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),a.createElement("link",{rel:"alternate",href:r.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function P(e){var t=e.permalink,n=(0,S.Z)().siteConfig.url,r=function(){var e=(0,S.Z)().siteConfig.url,t=(0,B.TH)().pathname;return e+(0,U.Z)(t)}(),l=t?""+n+t:r;return a.createElement(x.Z,null,a.createElement("meta",{property:"og:url",content:l}),a.createElement("link",{rel:"canonical",href:l}))}function O(e){var t=(0,S.Z)(),n=t.siteConfig,r=n.favicon,l=n.themeConfig,i=l.metadatas,o=l.image,s=t.i18n,u=s.currentLocale,m=s.localeConfigs,d=e.title,f=e.description,v=e.image,E=e.keywords,b=e.searchMetadatas,g=(0,U.Z)(r),h=(0,c.pe)(d),p=u,k=m[u].direction;return a.createElement(a.Fragment,null,a.createElement(x.Z,null,a.createElement("html",{lang:p,dir:k}),r&&a.createElement("link",{rel:"shortcut icon",href:g}),a.createElement("title",null,h),a.createElement("meta",{property:"og:title",content:h}),v||o&&a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),a.createElement(G.Z,{description:f,keywords:E,image:v}),a.createElement(P,null),a.createElement(W,null),a.createElement(D,(0,M.Z)({tag:c.HX,locale:u},b)),a.createElement(x.Z,null,i.map((function(e,t){return a.createElement("meta",(0,M.Z)({key:"metadata_"+t},e))}))))}var j=function(){(0,a.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var q=function(e){var t=e.children,n=e.noFooter,l=e.wrapperClassName,i=e.pageClassName;return j(),a.createElement(I,null,a.createElement(O,e),a.createElement(s,null),a.createElement(v,null),a.createElement(E.Z,null),a.createElement("div",{className:(0,r.Z)(c.kM.wrapper.main,l,i)},t),!n&&a.createElement(b.Z,null))}},7826:function(e,t,n){"use strict";var a=n(7294).createContext(void 0);t.Z=a},733:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var a=n(7294),r=n(6742),l="navigation_3MWE",c="nav_links_24fx",i="logo_25mm",o="mobile_navigation_3iqm",s="hamburger_button_Gk9L",u="mobile_nav_links_box_3EJj",m="mobile_navigation_links_3ZsJ",d=n(4996),f=n(2263),v=function(e){var t=e.navLinks,n=e.isVisible,l=e.setVisible,c=(0,f.Z)().siteConfig,i=function(){l(!n)};return n?a.createElement("div",{className:u},a.createElement("div",{className:m},t.map((function(e){return a.createElement(r.Z,{to:e.docId?c.baseUrl+"docs/"+e.docId:e.to,key:e.label,onClick:i},e.label)}))),a.createElement(r.Z,{to:"#",className:"nav_btn"},"\u0417\u0430\u0434\u0430\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441")):null};function E(){var e=(0,f.Z)().siteConfig,t=e.themeConfig.navbar.items,n=(0,d.Z)("/img/logo.svg"),u=(0,d.Z)("/img/mmenux.svg"),m=(0,d.Z)("/img/mmenu.svg"),E=(0,a.useState)(!1),b=E[0],g=E[1];return a.createElement(a.Fragment,null,a.createElement("nav",{className:l},a.createElement("div",{className:i}),a.createElement("div",{className:c},t.map((function(t){return a.createElement(r.Z,{to:t.docId?e.baseUrl+"docs/"+t.docId:t.to,key:t.label},t.label)})))),a.createElement("nav",{className:o},a.createElement("div",{className:i},a.createElement(r.Z,{to:e.baseUrl},a.createElement("img",{src:n}))),a.createElement("button",{className:s,onClick:function(){g(!b)}},a.createElement("img",{src:b?u:m})),a.createElement(v,{navLinks:t,isVisible:b,setVisible:g})))}var b=function(){return a.createElement(E,null)}}}]);