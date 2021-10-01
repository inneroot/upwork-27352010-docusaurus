(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[89],{8138:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return u}});var n=t(7294),l=t(2263),r=t(6432),i=t(813),s=t(6742),m=t(4973);var c=function(e){var a=e.metadata,t=a.previousPage,l=a.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,m.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(s.Z,{className:"pagination-nav__link",to:t},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(m.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l&&n.createElement(s.Z,{className:"pagination-nav__link",to:l},n.createElement("div",{className:"pagination-nav__label"},n.createElement(m.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},o=t(2433),d=t(9306);var u=function(e){var a=e.metadata,t=e.items,s=e.sidebar,m=(0,l.Z)().siteConfig.title,u=a.blogDescription,g=a.blogTitle,v="/"===a.permalink?m:g;return n.createElement(r.Z,{title:v,description:u,wrapperClassName:d.kM.wrapper.blogPages,pageClassName:d.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"}},n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("aside",{className:"col col--3"},n.createElement(o.Z,{sidebar:s})),n.createElement("main",{className:"col col--7"},t.map((function(e){var a=e.content;return n.createElement(i.Z,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},n.createElement(a,null))})),n.createElement(c,{metadata:a})))))}},813:function(e,a,t){"use strict";t.d(a,{Z:function(){return E}});var n=t(7294),l=t(6010),r=t(3905),i=t(4973),s=t(6742),m=t(9306),c=t(3209),o=t(1007),d=t(8981),u="blogPostTitle_izSS",g="blogPostData_1FW0",v="blogPostDetailsFull_jJB8";var E=function(e){var a,t,E,b=(t=(0,m.c2)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),p=e.children,h=e.frontMatter,_=e.metadata,f=e.truncated,N=e.isBlogPostPage,Z=void 0!==N&&N,k=_.date,T=_.formattedDate,w=_.permalink,I=_.tags,L=_.readingTime,x=_.title,C=_.editUrl,M=h.author,P=h.image,U=h.keywords,y=h.author_url||h.authorURL,A=h.author_title||h.authorTitle,F=h.author_image_url||h.authorImageURL;return n.createElement(n.Fragment,null,n.createElement(o.Z,{keywords:U,image:P}),n.createElement("article",{className:Z?void 0:"margin-bottom--xl"},(E=Z?"h1":"h2",n.createElement("header",null,n.createElement(E,{className:u},Z?x:n.createElement(s.Z,{to:w},x)),n.createElement("div",{className:(0,l.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:k},T),L&&n.createElement(n.Fragment,null," \xb7 ",b(L))),n.createElement("div",{className:"avatar margin-vert--md"},F&&n.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:y},n.createElement("img",{src:F,alt:M})),n.createElement("div",{className:"avatar__intro"},M&&n.createElement(n.Fragment,null,n.createElement("div",{className:"avatar__name"},n.createElement(s.Z,{href:y},M)),n.createElement("small",{className:"avatar__subtitle"},A)))))),n.createElement("div",{className:"markdown"},n.createElement(r.Zo,{components:c.Z},p)),(I.length>0||f)&&n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(a={},a[v]=Z,a))},I.length>0&&n.createElement("div",{className:"col"},n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),I.map((function(e){var a=e.label,t=e.permalink;return n.createElement(s.Z,{key:t,className:"margin-horiz--sm",to:t},a)}))),Z&&C&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.Z,{editUrl:C})),!Z&&f&&n.createElement("div",{className:"col text--right"},n.createElement(s.Z,{to:_.permalink,"aria-label":"Read more about "+x},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},2433:function(e,a,t){"use strict";t.d(a,{Z:function(){return g}});var n=t(7294),l=t(6010),r=t(6742),i="sidebar_2-wG",s="sidebarItemTitle_2x3I",m="sidebarItemList_GFWq",c="sidebarItem_2f4k",o="sidebarItemLink_1UTh",d="sidebarItemLinkActive_2RDx",u=t(4973);function g(e){var a=e.sidebar;return 0===a.items.length?null:n.createElement("nav",{className:(0,l.Z)(i,"thin-scrollbar"),"aria-label":(0,u.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},a.title),n.createElement("ul",{className:m},a.items.map((function(e){return n.createElement("li",{key:e.permalink,className:c},n.createElement(r.Z,{isNavLink:!0,to:e.permalink,className:o,activeClassName:d},e.title))}))))}},8981:function(e,a,t){"use strict";t.d(a,{Z:function(){return d}});var n=t(7294),l=t(4973),r=t(2122),i=t(9756),s=t(6010),m="iconEdit_3pti",c=["className"],o=function(e){var a=e.className,t=(0,i.Z)(e,c);return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(m,a),"aria-hidden":"true"},t),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function d(e){var a=e.editUrl;return n.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener"},n.createElement(o,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},733:function(e,a,t){"use strict";t.d(a,{Z:function(){return b}});var n=t(7294),l=t(6742),r="navigation_3MWE",i="nav_links_24fx",s="logo_25mm",m="mobile_navigation_3iqm",c="hamburger_button_Gk9L",o="mobile_nav_links_box_3EJj",d="mobile_navigation_links_3ZsJ",u=t(4996),g=t(2263),v=function(e){var a=e.navLinks,t=e.isVisible,r=e.setVisible,i=(0,g.Z)().siteConfig,s=function(){r(!t)};return t?n.createElement("div",{className:o},n.createElement("div",{className:d},a.map((function(e){return n.createElement(l.Z,{to:e.docId?i.baseUrl+"docs/"+e.docId:e.to,key:e.label,onClick:s},e.label)}))),n.createElement(l.Z,{to:"#",className:"nav_btn"},"\u0417\u0430\u0434\u0430\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441")):null};function E(){var e=(0,g.Z)().siteConfig,a=e.themeConfig.navbar.items,t=(0,u.Z)("/img/logo.svg"),o=(0,u.Z)("/img/mmenux.svg"),d=(0,u.Z)("/img/mmenu.svg"),E=(0,n.useState)(!1),b=E[0],p=E[1];return n.createElement(n.Fragment,null,n.createElement("nav",{className:r},n.createElement("div",{className:s}),n.createElement("div",{className:i},a.map((function(a){return n.createElement(l.Z,{to:a.docId?e.baseUrl+"docs/"+a.docId:a.to,key:a.label},a.label)})))),n.createElement("nav",{className:m},n.createElement("div",{className:s},n.createElement(l.Z,{to:e.baseUrl},n.createElement("img",{src:t}))),n.createElement("button",{className:c,onClick:function(){p(!b)}},n.createElement("img",{src:b?o:d})),n.createElement(v,{navLinks:a,isVisible:b,setVisible:p})))}var b=function(){return n.createElement(E,null)}}}]);