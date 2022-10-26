"use strict";(self.webpackChunkdoc_server=self.webpackChunkdoc_server||[]).push([[8876],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=l(n),p=a,m=g["".concat(c,".").concat(p)]||g[p]||d[p]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2362:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"messenger",title:"Messenger",slug:"/guide/messenger"},c=void 0,l={unversionedId:"guide/chat/messenger",id:"guide/chat/messenger",title:"Messenger",description:"Messenger is the main tool for interaction between users. Here, users can exchange various types of information. Currently, among the types of information available:",source:"@site/docs/guide/chat/chat.md",sourceDirName:"guide/chat",slug:"/guide/messenger",permalink:"/WM_doc/docs/guide/messenger",editUrl:"https://github.com/EcoTrain/newmed_docs/tree/master/docs/docs/guide/chat/chat.md",tags:[],version:"current",frontMatter:{id:"messenger",title:"Messenger",slug:"/guide/messenger"},sidebar:"guide",previous:{title:"Planning",permalink:"/WM_doc/docs/guide/schedule"},next:{title:"Medicines",permalink:"/WM_doc/docs/guide/medicines"}},u={},d=[{value:"Messenger interface",id:"messenger-interface",level:3},{value:"Attachments",id:"attachments",level:3},{value:"Chat settings",id:"chat-settings",level:2},{value:"Create a group chat",id:"create-a-group-chat",level:2}],g={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Messenger is the main tool for interaction between users. Here, users can exchange various types of information. Currently, among the ",(0,i.kt)("inlineCode",{parentName:"p"},"types of information")," available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Text")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Image")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Document"))),(0,i.kt)("h3",{id:"messenger-interface"},"Messenger interface"),(0,i.kt)("p",null,"At the heart of the messenger, the selection window is the ",(0,i.kt)("inlineCode",{parentName:"p"},"SearchPanel")," component, as in the Diaries. This allows both local searches for chats by users and global searches for all users."),(0,i.kt)("p",null,"Depending on the width of the screen, the messenger window appears as a separate window or is displayed to the right of the chat list."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{type:"imgscreen",src:"/WM_doc/img/guide/chat/chatViewOpen.png"})),(0,i.kt)("h3",{id:"attachments"},"Attachments"),(0,i.kt)("p",null,"To send non-text data, a menu for selecting attachments is implemented under the text input field. To activate it, you need to click on the button ",(0,i.kt)("i",{class:"fa fa-puzzle-piece d"})),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{type:"imgscreen",src:"/WM_doc/img/guide/chat/chatAssetsMenu.png"})),(0,i.kt)("p",null,"In this menu, you can select attachments to send to your interlocutor."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{type:"imgscreen",src:"/WM_doc/img/guide/chat/chatAssetsReady.png"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Images")," are limited to 2MB.\nSending methods: selecting a file from the storage, using the camera\nFormats: .png, .jpg, .jpeg"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Documents"),"\nSending methods: selecting a file from storage\nFormats: .doc, .docx, .pdf"),(0,i.kt)("h2",{id:"chat-settings"},"Chat settings"),(0,i.kt)("p",null,"In the chat header there is a button to go to the settings window.\nIn the settings you can do:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hide chat (all messages are available when you return to the chat)"),(0,i.kt)("li",{parentName:"ul"},"Clear chat (deletes all old messages)"),(0,i.kt)("li",{parentName:"ul"},"Delete chat (the chat is hidden and all old messages are deleted)")),(0,i.kt)("p",null,"Various actions are available to you depending on your role (rights) in the chat."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{type:"imgscreen",src:"/WM_doc/img/guide/chat/chatSettings.png"})),(0,i.kt)("h2",{id:"create-a-group-chat"},"Create a group chat"),(0,i.kt)("p",null,"Also in the user search window there is a button for creating a group chat. To create a group chat, you only need to add users and specify a name for the chat."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Group chats are not unique and can be created with the same settings.")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{type:"imgscreen",src:"/WM_doc/img/guide/chat/chatCreate.png"})))}p.isMDXComponent=!0}}]);