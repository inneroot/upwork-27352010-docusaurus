(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[610],{813:function(e,t,a){"use strict";a.d(t,{Z:function(){return b}});var l=a(7294),r=a(6010),n=a(3905),s=a(4973),i=a(6742),m=a(9306),c=a(3209),o=a(1007),u=a(8981),d="blogPostTitle_izSS",g="blogPostData_1FW0",E="blogPostDetailsFull_jJB8";var b=function(e){var t,a,b,h=(a=(0,m.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),p=e.children,v=e.frontMatter,f=e.metadata,_=e.truncated,N=e.isBlogPostPage,Z=void 0!==N&&N,k=f.date,T=f.formattedDate,w=f.permalink,I=f.tags,P=f.readingTime,L=f.title,x=f.editUrl,M=v.author,y=v.image,C=v.keywords,U=v.author_url||v.authorURL,F=v.author_title||v.authorTitle,z=v.author_image_url||v.authorImageURL;return l.createElement(l.Fragment,null,l.createElement(o.Z,{keywords:C,image:y}),l.createElement("article",{className:Z?void 0:"margin-bottom--xl"},(b=Z?"h1":"h2",l.createElement("header",null,l.createElement(b,{className:d},Z?L:l.createElement(i.Z,{to:w},L)),l.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},l.createElement("time",{dateTime:k},T),P&&l.createElement(l.Fragment,null," \xb7 ",h(P))),l.createElement("div",{className:"avatar margin-vert--md"},z&&l.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:U},l.createElement("img",{src:z,alt:M})),l.createElement("div",{className:"avatar__intro"},M&&l.createElement(l.Fragment,null,l.createElement("div",{className:"avatar__name"},l.createElement(i.Z,{href:U},M)),l.createElement("small",{className:"avatar__subtitle"},F)))))),l.createElement("div",{className:"markdown"},l.createElement(n.Zo,{components:c.Z},p)),(I.length>0||_)&&l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(t={},t[E]=Z,t))},I.length>0&&l.createElement("div",{className:"col"},l.createElement("b",null,l.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),I.map((function(e){var t=e.label,a=e.permalink;return l.createElement(i.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),Z&&x&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(u.Z,{editUrl:x})),!Z&&_&&l.createElement("div",{className:"col text--right"},l.createElement(i.Z,{to:f.permalink,"aria-label":"Read more about "+L},l.createElement("b",null,l.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},2433:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var l=a(7294),r=a(6010),n=a(6742),s="sidebar_2-wG",i="sidebarItemTitle_2x3I",m="sidebarItemList_GFWq",c="sidebarItem_2f4k",o="sidebarItemLink_1UTh",u="sidebarItemLinkActive_2RDx",d=a(4973);function g(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,r.Z)(s,"thin-scrollbar"),"aria-label":(0,d.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(i,"margin-bottom--md")},t.title),l.createElement("ul",{className:m},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:c},l.createElement(n.Z,{isNavLink:!0,to:e.permalink,className:o,activeClassName:u},e.title))}))))}},3908:function(e,t,a){"use strict";a.r(t);var l=a(7294),r=a(6432),n=a(813),s=a(6742),i=a(2433),m=a(4973),c=a(9306);t.default=function(e){var t,a=e.metadata,o=e.items,u=e.sidebar,d=a.allTagsPath,g=a.name,E=a.count,b=(t=(0,c.c2)().selectMessage,function(e){return t(e,(0,m.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),h=(0,m.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:b(E),tagName:g});return l.createElement(r.Z,{title:h,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("aside",{className:"col col--3"},l.createElement(i.Z,{sidebar:u})),l.createElement("main",{className:"col col--7"},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,h),l.createElement(s.Z,{href:d},l.createElement(m.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),o.map((function(e){var t=e.content;return l.createElement(n.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},l.createElement(t,null))}))))))}},8981:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var l=a(7294),r=a(4973),n=a(2122),s=a(9756),i=a(6010),m="iconEdit_3pti",c=["className"],o=function(e){var t=e.className,a=(0,s.Z)(e,c);return l.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(m,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function u(e){var t=e.editUrl;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},l.createElement(o,null),l.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},733:function(e,t,a){"use strict";a.d(t,{Z:function(){return h}});var l=a(7294),r=a(6742),n="navigation_3MWE",s="nav_links_24fx",i="logo_25mm",m="mobile_navigation_3iqm",c="hamburger_button_Gk9L",o="mobile_nav_links_box_3EJj",u="mobile_navigation_links_3ZsJ",d=a(4996),g=a(2263),E=function(e){var t=e.navLinks,a=e.isVisible,n=e.setVisible,s=(0,g.Z)().siteConfig,i=function(){n(!a)};return a?l.createElement("div",{className:o},l.createElement("div",{className:u},t.map((function(e){return l.createElement(r.Z,{to:e.docId?s.baseUrl+"docs/"+e.docId:e.to,key:e.label,onClick:i},e.label)}))),l.createElement(r.Z,{to:"#",className:"nav_btn"},"\u0417\u0430\u0434\u0430\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441")):null};function b(){var e=(0,g.Z)().siteConfig,t=e.themeConfig.navbar.items,a=(0,d.Z)("/img/logo.svg"),o=(0,d.Z)("/img/mmenux.svg"),u=(0,d.Z)("/img/mmenu.svg"),b=(0,l.useState)(!1),h=b[0],p=b[1];return l.createElement(l.Fragment,null,l.createElement("nav",{className:n},l.createElement("div",{className:i}),l.createElement("div",{className:s},t.map((function(t){return l.createElement(r.Z,{to:t.docId?e.baseUrl+"docs/"+t.docId:t.to,key:t.label},t.label)})))),l.createElement("nav",{className:m},l.createElement("div",{className:i},l.createElement(r.Z,{to:e.baseUrl},l.createElement("img",{src:a}))),l.createElement("button",{className:c,onClick:function(){p(!h)}},l.createElement("img",{src:h?o:u})),l.createElement(E,{navLinks:t,isVisible:h,setVisible:p})))}var h=function(){return l.createElement(b,null)}}}]);