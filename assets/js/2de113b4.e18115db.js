(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[621],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return p}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=s(r),p=a,d=m["".concat(u,".").concat(p)]||m[p]||f[p]||o;return r?n.createElement(d,c(c({ref:t},l),{},{components:r})):n.createElement(d,c({ref:t},l))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3919:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},4996:function(e,t,r){"use strict";r.d(t,{C:function(){return o},Z:function(){return c}});var n=r(2263),a=r(3919);function o(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,c=o.forcePrependBaseUrl,i=void 0!==c&&c,u=o.absolute,s=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(i)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+l:l}(o,r,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},6591:function(e,t,r){"use strict";r.d(t,{Z:function(){return _}});var n=r(7294),a="business_card_1cry",o="business_card_slogan_imNE",c="business_card_logo_1wUf",i="business_card_contacts_2wQg",u="card_email_qoMX card_contact_3qxE",s="card_telegram_3cDv card_contact_3qxE",l="card_phone_2zto card_contact_3qxE",f="card_whatsapp_3uv9 card_contact_3qxE",m="business_card__mobile_3gfN",p="business_card_logo__mobile_2jG6",d="business_card_contacts__mobile_3TvQ",v=r(4996),b=r(2263);function _(){var e=(0,v.Z)("/img/logo.svg"),t=(0,b.Z)().siteConfig.customFields.contacts;return n.createElement(n.Fragment,null,n.createElement("div",{id:a},n.createElement("div",{id:o},n.createElement("img",{id:c,src:e}),n.createElement("p",null,"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438 DevOps")),n.createElement("div",{id:i},n.createElement("a",{className:u,href:"mailto:"+t.email},t.email),n.createElement("a",{className:s,href:t.telegram},"Telegram"),n.createElement("a",{className:l,href:t.phone_href},t.phone_label),n.createElement("a",{className:f,href:t.whatsapp},"WhatsApp"))),n.createElement("div",{id:m},n.createElement("img",{id:p,src:e}),n.createElement("p",null,"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435",n.createElement("br",null)," \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438 DevOps"),n.createElement("div",{id:d},n.createElement("a",{className:u,href:"mailto:it-company@info.ru"},"it-company@info.ru"),n.createElement("a",{className:l,href:"phone:+79992223344"},"+7 (999) 222-33-44"),n.createElement("a",{className:s,href:"#"},"Telegram"),n.createElement("a",{className:f,href:"#"},"WhatsApp"))))}},5173:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return f},default:function(){return p}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),c=r(6591),i=["components"],u={sidebar_position:2,custom_edit_url:null},s="\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",l={unversionedId:"info/contacts",id:"info/contacts",isDocsHomePage:!1,title:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",description:"",source:"@site/docs/info/contacts.md",sourceDirName:"info",slug:"/info/contacts",permalink:"/upwork-27352010-docusaurus/docs/info/contacts",editUrl:null,version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"\u041e \u043d\u0430\u0441",permalink:"/upwork-27352010-docusaurus/docs/info/about"}},f=[],m={toc:f};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"),(0,o.kt)(c.Z,{mdxType:"Contacts"}))}p.isMDXComponent=!0}}]);